<template>
    <section class="breadcrumb-area bread-bg">
      <div class="overlay"></div>
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2 class="sec__title text-white mb-3">News & Articles</h2>
          <ul class="bread-list">
            <li><NuxtLink to="/">home</NuxtLink></li>
            <li>News & Articles</li>
            <li>{{blog?.title}} </li>
          </ul>
        </div>
      </div>
      <div class="bread-svg">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
    </section>
  
    <section class="blog-area padding-top-60px padding-bottom-70px">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-5">
            <div class="card">
           
                <img :src="`${$config.public.baseURL}`+blog?.featured_photo" alt="blog image" class="card-img-top lazy" style="">
             
              <div class="card-body">
                <h2 class="card-title">
                    {{blog?.title}}
                </h2>
                <div v-html="blog?.description" class="text-justify"></div>
              
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
          
          
            <!-- end row -->
        
            <!-- end reviews -->
         
            <!-- end add-comment-wrapper -->
          </div>
          <!-- end col-lg-8 -->
          <div class="col-lg-4">
            <div class="sidebar">
              
          
              <!-- end card -->
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-3">Latests Posts</h4>
                  <ul class="media-list" >
                    <li class="media media-card" v-for="(latest,index) in latestBlogs" :key="index">
                        <NuxtLink  :to="`/blog-details/${latest.slug}`" class="flex-shrink-0 me-3 d-block">
                        <img :src="`${$config.public.baseURL}`+latest?.featured_photo" alt="Blog image">
                      </NuxtLink>
                      <div class="media-body align-self-center">
                        <h5 class="media-title mb-1">
                            <NuxtLink  :to="`/blog-details/${latest.slug}`">{{ latest.title }}</NuxtLink>
                        </h5>
                        <p class="font-size-15">  {{ $formatDate(latest.created_at) }}</p>
                      </div>
                    </li>
                   
                  </ul>
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card -->
          
              <!-- end card -->
            </div>
            <!-- end sidebar -->
          </div>
          <!-- end col-lg-4 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
   import eventService from '~/services/eventService';
  
  const route = useRoute();
  const blog = ref(null);
  const error = ref(null);
  const latestBlogs = ref([]);
  
  const fetchBlogDetails = async () => {
    try {
      const id = route.params.id; // Get the event ID from the route parameters
      const data = await eventService.getBlogDetails(id);
  
      blog.value = data.details; // Assign fetched data to the reactive event object
      latestBlogs.value = data.latest_blogs; // Assign fetched data to the reactive event object
      
    
   
    } catch (err) {
      error.value = err.message; // Handle any errors
      console.error('Error fetching blog details:', err);
    }
  };
  
  onMounted(fetchBlogDetails);
  </script>
  <style scoped>
  .text-justify{
    text-align: justify;
  }
 .text-justify > ul {
  padding-left: 20px !important;  /* Reset global padding and add indentation */
  list-style-type: disc !important;  /* Set bullet points */
  margin: 0 !important;  /* Remove any margin from ul */
}

/* Target the li elements inside .text-justify */
.text-justify > ul > li {
  padding-left: 20px !important; /* Indentation for list items */
  margin-bottom: 10px !important; /* Spacing between list items */
}

/* Optional: Align the text inside li to justify */
.text-justify li.ql-align-justify {
  text-align: justify;
}
  </style>