<template>
  <section class="breadcrumb-area bread-bg">
    <div class="overlay"></div>
    <div class="container">
      <div class="breadcrumb-content text-center">
        <h2 class="sec__title text-white mb-3">Search Results</h2>
        <ul class="bread-list">
          <li><NuxtLink to="/">home</NuxtLink></li>
          <li>Search Results for "{{ $route.query.query }}"</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="card-area section--padding pt-0">
    <div class="container">
      <div class="row mt-5 d-flex" v-if="events.data.length">
        <div class="col-lg-4 col-md-6" v-for="(event, index) in events.data" :key="index">
                <NuxtLink  :to="`/listing-details/${event.slug}`">
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
              <h4 class="card-title mb-0">
                <a>{{ event.title }}</a>
              </h4>
              <p class="card-text">{{ event.venue.venue_name }}, {{ event.country.name }}</p>
              <ul class="info-list mt-3">
                <!-- <li>
                  <span class="fal fa-link icon"></span>
                  <a target="_blank" :href="event.website_link">{{ event.website_link }}</a>
                </li> -->
                <li>
                  <span class="fal fa-calendar icon"></span> {{ $formatDate(event.event_date_from) }} ~ {{ $formatDate(event.event_date_to) }}
                </li>
                <li><span class="fal fa-watch icon"></span> {{ $formatTime(event.event_time_from) }} ~  {{ $formatTime(event.event_time_to) }}</li>
              </ul>
            </div>
          </div>
            </NuxtLink>
        </div>
      </div>

      <!-- Pagination Links -->
      <nav v-if="events.data && events.data.length > 15" aria-label="Page navigation example" class="mt-5">
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
import { ref, onMounted, watch, nextTick, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import eventService from '@/services/eventService'; // Adjust the path based on your project structure

const route = useRoute();
const router = useRouter();

const events = ref({ data: [], prev_page_url: null, next_page_url: null, current_page: 1, last_page: 1 });

// Fetch data from the API
const getSearchResults = async (page = 1) => {
  try {
    const params = {
      query: route.query.query,
      country: route.query.country,
      category: route.query.category,
      month: route.query.month,
      year: route.query.year,
      page: page
    };
    const data = await eventService.searchEvents(params);
    events.value = data.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
};

// Fetch results on mount
onMounted(() => {
  getSearchResults();
});

// Watch for route changes (e.g., page changes)
watch(() => route.query.page, (newPage) => {
  getSearchResults(Number(newPage) || 1);
});

// Calculate total pages
const totalPages = computed(() => {
  return Array.from({ length: events.value.last_page }, (_, i) => i + 1);
});

const changePage = (page) => {
  if (page < 1 || page > events.value.last_page) return;
  // Update the route query parameters
  router.push({
    name: 'search-results',
    query: {
      ...route.query,
      page,
    },
  });
  nextTick(() => {
    window.scrollTo(0, 0);
  });
};
</script>
