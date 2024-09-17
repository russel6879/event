<template>
  <section class="breadcrumb-area bread-bg">
    <div class="overlay"></div>
    <div class="container">
      <div class="breadcrumb-content text-center">
        <h2 class="sec__title text-white mb-3">Listings</h2>
        <ul class="bread-list">
          <li><NuxtLink to="/">home</NuxtLink></li>
          <li>listings</li>
          <li>{{ categoryName }}</li>
        </ul>
      </div>
    </div>
    <div class="bread-svg">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path>
      </svg>
    </div>
  </section>

  <section class="card-area section--padding pt-0">
    <div class="container">
      <div class="row mt-5 d-flex">
        <div class="col-lg-4 col-md-6" v-for="(event, index) in events.data" :key="index">
          <div class="card mb-0 hover-y">
            <a class="card-image">
              <img :src="`${$config.public.baseURL}/` + event.featured_photo" class="card-img-top" alt="Event Image" />
              <span class="badge badge-pill" :class="{
                'text-bg-danger': event.event_type === 'online',
                'text-bg-success': event.event_type === 'physical',
                'text-bg-primary': event.event_type === 'hybrid'
              }">{{ event.event_type }}</span>
            </a>
            <div class="card-body position-relative">
              <a class="author-img">
                <img :src="`${$config.public.baseURL}/` + event.user.profile_image" alt="Author Image" />
              </a>
              <div class="category-container">
                <div v-for="(category, index) in event.category_names.slice(0, 2)" :key="index" class="category-item">
                  <a href="#" class="card-cat">
                    <span class="fal fa-tag icon-element icon-element-sm"></span>
                    {{ category }}
                  </a>
                </div>
              </div>
              <div class="d-flex align-items-center mb-1">
                <h4 class="card-title mb-0">
                  <a>{{ event.title }}</a>
                </h4>
                <i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed"></i>
              </div>
              <p class="card-text">{{ event.venue.venue_name }}, {{ event.country.name }}</p>
              <ul class="info-list mt-3">
                <li>
                  <span class="fal fa-link icon"></span>
                  <a target="_blank" :href="event.website_link">{{ event.website_link }}</a>
                </li>
                <li>
                  <span class="fal fa-calendar icon"></span> {{ event.event_date_from }}
                </li>
                <li><span class="fal fa-watch icon"></span> {{ event.event_time_from }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example" class="mt-5">
        <ul class="pagination justify-content-center pagination-list">
          <li class="page-item" :class="{ disabled: !events.prev_page_url }">
            <a class="page-link" @click.prevent="changePage(events.current_page - 1)" aria-label="Previous">
              <span aria-hidden="true" class="fal fa-angle-left"></span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: events.current_page === page }">
            <a class="page-link" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: !events.next_page_url }">
            <a class="page-link" @click.prevent="changePage(events.current_page + 1)" aria-label="Next">
              <span aria-hidden="true" class="fal fa-angle-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import eventService from '@/services/eventService'; // Adjust the path based on your project structure

const events = ref({ data: [], prev_page_url: null, next_page_url: null, current_page: 1, last_page: 1 });
const categoryName = ref('');
const route = useRoute(); // Use to access the dynamic route parameter

const getCategoryEvents = async (page = 1) => {
  try {
    const categoryId = route.params.id; // Get the category ID from the URL
    const data = await eventService.getEventsByCategory(categoryId, page); // Fetch events by category and page
    events.value = data.data; // Update the events object with API response
    categoryName.value = data.category_name; // Assuming API returns category name
  } catch (error) {
    console.error('Error fetching category events:', error);
  }
};

// Fetch events on mount
onMounted(() => {
  getCategoryEvents();
});

// Watch for route changes (e.g., page changes)
watch(() => route.query.page, (newPage) => {
  getCategoryEvents(Number(newPage) || 1);
});

// Calculate total pages
const totalPages = computed(() => {
  return Array.from({ length: events.value.last_page }, (_, i) => i + 1);
});

const changePage = (page) => {
  if (page < 1 || page > events.value.last_page) return;
  // Update the route query parameters
  route.query.page = page;
  getCategoryEvents(page);
   nextTick(() => {
    window.scrollTo(0, 0);
  });
};
</script>

<style scoped>
.category-container {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping to the next line if necessary */
  gap: 8px; /* Adds space between items */
}

.category-item {
  display: flex;
  align-items: center;
}

.card-cat {
  display: flex;
  align-items: center;
  padding: 8px;
  text-decoration: none;
  color: #333;
}

.icon-element {
  margin-right: 8px;
}
/* Add your custom styles here */
</style>
