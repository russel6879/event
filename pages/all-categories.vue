<template>
    <section class="breadcrumb-area bread-bg">
  <div class="overlay"></div>
  <div class="container">
    <div class="breadcrumb-content text-center">
      <h2 class="sec__title text-white mb-3">Categories</h2>
      <ul class="bread-list">
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li>listings</li>
        <li>All Categories</li> <!-- Dynamically displays the current category name -->
      </ul>
    </div>
  </div>
  <div class="bread-svg">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"
          ></path>
        </svg>
      </div>
</section>
  
    <!-- Category Section -->
    <section class="category-area  section--padding">
      <div class="container">
        <h2 class="sec__title text-center">What do you need to find?</h2>
        <div class="row mt-5">
          <div v-for="(category, index) in categories" :key="category.id" class="col-lg-2 col-md-4 mb-4">
            <NuxtLink :to="`/category/${category.id}`" class="highlight-category highlight-category-3">
              <span :class="`fal ${category.icon} icon-element icon-element-bg-slim-${(index % 10) + 1} d-block mx-auto mb-2`"></span>
              <span class="highlight-cat-title">{{ category.name }}</span>
              <span class="badge badge-pill">{{ category.event_count }} Listings</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import eventService from '@/services/eventService'; // Adjust the path based on your project structure
  
  // Ref for storing categories data
  const categories = ref([]);
  
  // Fetch all categories
  const fetchCategories = async () => {
    try {
      categories.value = await eventService.getCategories(); // Fetch categories from the API
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  
  // Fetch categories on component mount
  onMounted(() => {
    fetchCategories();
  });
  </script>
  <style scoped>
  
 
  </style>
  