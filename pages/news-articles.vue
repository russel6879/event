<template>
  <section class="breadcrumb-area bread-bg">
    <div class="overlay"></div>
    <div class="container">
      <div class="breadcrumb-content text-center">
        <h2 class="sec__title text-white mb-3">News & Articles</h2>
        <ul class="bread-list">
          <li><NuxtLink to="/">home</NuxtLink></li>
          <li>news & articles</li>
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
        <div class="col-lg-4 col-md-6" v-for="(blog, index) in blogs.data || []" :key="blog.id || index">
          <NuxtLink :to="blog.slug ? `/blog-details/${blog.slug}` : '#'">
            <div class="card mb-0 hover-y">
              <a class="card-image">
                <img
                  :src="blog.featured_photo ? `${$config.public.baseURL}/` + blog.featured_photo : 'default-image.jpg'"
                  class="card-img-top"
                  alt="Blog Image"
                />
              </a>
              <div class="card-body position-relative">
                <h4 class="card-title mb-0">
                  <a>{{ blog.title || 'Untitled' }}</a>
                </h4>
                <p class="card-text">{{ blog.excerpt || 'No excerpt available' }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Pagination -->
      <nav v-if="blogs.data && blogs.data.length > 15" aria-label="Page navigation example" class="mt-5">
        <ul class="pagination justify-content-center pagination-list">
          <li class="page-item" :class="{ disabled: !blogs.prev_page_url }">
            <a class="page-link" @click.prevent="changePage(blogs.current_page - 1)" aria-label="Previous">
              <span aria-hidden="true" class="fal fa-angle-left"></span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: blogs.current_page === page }">
            <a class="page-link" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: !blogs.next_page_url }">
            <a class="page-link" @click.prevent="changePage(blogs.current_page + 1)" aria-label="Next">
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
import { ref, onMounted, watch, computed, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import eventService from '@/services/eventService';

const blogs = ref({
  data: [],
  prev_page_url: null,
  next_page_url: null,
  current_page: 1,
  last_page: 1
});

const route = useRoute();
const router = useRouter();

// Fetch blogs data
const getAllBlogs = async (page = 1) => {
  try {
    const data = await eventService.getAllBlogs(page);
    blogs.value = data.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};

// Watch for changes in the page query parameter
watch(() => route.query.page, (newPage) => {
  getAllBlogs(Number(newPage) || 1);
});

// Compute total pages
const totalPages = computed(() => {
  return Array.from({ length: blogs.value.last_page }, (_, i) => i + 1);
});

// Handle page change
const changePage = (page) => {
  if (page < 1 || page > blogs.value.last_page) return;
  router.push({ path: route.path, query: { ...route.query, page } });
  nextTick(() => window.scrollTo(0, 0));
};

// Fetch initial blogs on mount
onMounted(() => {
  getAllBlogs(Number(route.query.page) || 1);
});
</script>

<style scoped>
/* Add your custom styles */
</style>
