<template>
     <header class="header-area">
      <div class="gtranslate_wrapper"></div>
      <div class="main-header py-3 bg-white">
        <div class="container">
          <div class="main-header-action-wrap">
            <div class="logo">
         <NuxtLink to="/">
          
          <img v-if="logoUrl" :src="`${$config.public.baseURL}${logoUrl}`" alt="logo" />
          <img v-else :src="`/default-logo.png`" alt="default logo" />

         </NuxtLink>
            </div>
            <!-- end logo -->
            <nav class="main-menu me-4 ms-auto main-menu-black">
              <ul>
                <li>
                  <NuxtLink to="/">Home </NuxtLink>
             
                </li>
                <li>
                  <NuxtLink to="/all-categories">Categories</NuxtLink>
             
                </li>
                <li>
                  <NuxtLink to="/all-events">All Events</NuxtLink>
             
                </li>
                <!-- <li>
                  <a href="#"
                    >Categories <span class="fal fa-angle-down"></span
                  ></a>
                  <ul class="dropdown-menu-item">
                    <li><a href="all-categories.html">all categories</a></li>
                    <li><a href="all-locations.html">all locations</a></li>
                    <li><a href="top-place.html">top places </a></li>
                  </ul>
                </li> -->
                <!-- <li>
                  <a href="#"
                    >Listings <span class="fal fa-angle-down"></span
                  ></a>
                  <ul class="dropdown-menu-item">
                    <li><a href="listing-grid.html">listing grid</a></li>
                    <li><a href="list-with-map.html">list with map</a></li>
                    <li><a href="grid-with-map.html">grid with map</a></li>
                    <li><a href="listing-list.html">listing list </a></li>
                    <li><a href="list-left-sidebar.html">left sidebar </a></li>
                    <li>
                      <a href="list-right-sidebar.html">right sidebar </a>
                    </li>
                    <li><a href="listing-details.html">listing details</a></li>
                    <li><a href="add-listing.html">add listing</a></li>
                  </ul>
                </li> -->
                <!-- <li>
                  <a href="#">Categories <span class="fal fa-angle-down"></span></a>
                  <ul class="dropdown-menu-item">
                     <li><NuxtLink to="/all-categories">All Categories</NuxtLink></li>
                    </ul>
                </li> -->
                <li>
                  <NuxtLink to="/news-articles">News & Articles </NuxtLink>
      
                </li>
                <!-- <li>
                  <a href="#">Blog <span class="fal fa-angle-down"></span></a>
                  <ul class="dropdown-menu-item">
                    <li><a href="blog-full-width.html">full width</a></li>
                    <li><a href="blog-grid.html">blog grid</a></li>
                    <li><a href="blog-left-sidebar.html">left sidebar </a></li>
                    <li>
                      <a href="blog-right-sidebar.html">right sidebar </a>
                    </li>
                    <li><a href="blog-single.html">blog detail</a></li>
                  </ul>
                </li> -->
              </ul>
            </nav>
            <div class="nav-right-content d-flex align-items-center">
              <div class="author-access-list author-access-list-black me-3">
                <NuxtLink to="/user-dashboard">Dashboard</NuxtLink>
                <!-- <NuxtLink to="/login">Login</NuxtLink>
                <span class="or-text">or</span>
                <NuxtLink to="/signup">Sign Up</NuxtLink> -->
              </div>
              <NuxtLink to="/add-listing" class="theme-btn">
                <span class="fal fa-plus me-1"></span>
                Add Listing
              </NuxtLink >
              <div class="side-menu-open ms-2 side-menu-open-black">
                <i class="fal fa-bars"></i>
              </div>
              <!-- end side-menu-open -->
            </div>
            <!-- end nav-right-content -->
          </div>
          <!-- end main-header-action-wrap -->
        </div>
        <!-- end container-fluid -->
      </div>
      <!-- end main-header -->
      <div class="off-canvas">
        <div
          class="off-canvas-close icon-element icon-element-sm bg-white shadow-sm"
        >
          <i class="fal fa-times"></i>
        </div>
        <!-- end off-canvas-close -->
        <ul class="off-canvas-menu padding-top-60px">
          <li>
                  <NuxtLink to="/">Home </NuxtLink>
             
                </li>
                <li>
                  <NuxtLink to="/all-categories">Categories</NuxtLink>
             
                </li>
                <li>
                  <NuxtLink to="/all-events">All Events</NuxtLink>
             
                </li>
                <li>
                  <NuxtLink to="/news-articles">News & Articles </NuxtLink>
      
                </li>
                <li>
                  <NuxtLink to="/user-dashboard">Dashboard</NuxtLink>
      
                </li>
                <li>
                  <NuxtLink to="/add-listing" class="theme-btn text-white">
                <span class="fal fa-plus me-1 text-white"></span>
                Add Listing
              </NuxtLink >
      
                </li>
          <!-- <li>
            <a href="#"
              >Categories
              <span class="fal fa-angle-down sub-menu-toggler"></span
            ></a>
            <ul class="off-canvas-sub-menu">
              <li><a href="all-categories.html">All categories</a></li>
              <li><a href="all-locations.html">All locations</a></li>
              <li><a href="top-place.html">Top places </a></li>
            </ul>
          </li> -->
          <!-- <li>
            <a href="#"
              >Listings <span class="fal fa-angle-down sub-menu-toggler"></span
            ></a>
            <ul class="off-canvas-sub-menu">
              <li><a href="listing-grid.html">Listing grid</a></li>
              <li><a href="list-with-map.html">list with map</a></li>
              <li><a href="grid-with-map.html">grid with map</a></li>
              <li><a href="listing-list.html">Listing list </a></li>
              <li><a href="list-left-sidebar.html">Left sidebar </a></li>
              <li><a href="list-right-sidebar.html">Right sidebar </a></li>
              <li><a href="listing-details.html">Listing details</a></li>
              <li><a href="add-listing.html">Add listing</a></li>
            </ul>
          </li> -->
       
          <!-- <li>
            <a href="#"
              >blog <span class="fal fa-angle-down sub-menu-toggler"></span
            ></a>
            <ul class="off-canvas-sub-menu">
              <li><a href="blog-full-width.html">full width</a></li>
              <li><a href="blog-grid.html">blog grid</a></li>
              <li><a href="blog-left-sidebar.html">left sidebar </a></li>
              <li><a href="blog-right-sidebar.html">right sidebar </a></li>
              <li><a href="blog-single.html">blog detail</a></li>
            </ul>
          </li> -->
        </ul>
        <!-- <div class="mt-4 text-center">
                <NuxtLink to="/user-dashboard">Dashboard</NuxtLink>
          
        </div> -->
      </div>
      <!-- end off-canvas -->
    </header>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
const { $config } = useNuxtApp();
import settingsService from '@/services/settingsService'; // Adjust the path if needed  
  // Define a ref to hold the logo URL
  const logoUrl = ref(''); // Default logo URL in case the API fails
  const seoSettings = ref(''); // Default logo URL in case the API fails
  const headerScript = ref(''); // Default logo URL in case the API fails
  
  // Fetch settings data when the component is mounted
  const fetchSettings = async () => {
  try {
    const settings = await settingsService.getSiteSetting('header_settings'); // Fetch settings data

    if (settings && settings.value.logo) {
      logoUrl.value = settings.value.logo; // Update the logo URL with the fetched data
    }

    const seoData = await settingsService.getSiteSetting('seo_settings');
 
    if (seoData) {
      seoSettings.value = seoData.value;
     
    }
    const scriptsData = await settingsService.getSiteSetting('custom_scripts');
    if (scriptsData?.value) {
      headerScript.value = scriptsData.value.headerScript || ''; // Set headerScript
  
    }
    // Set page metadata using seoSettings
    useHead({
      title: seoSettings.value.metaTitle || 'Default Title',
      link: [
        // Dynamically set the favicon with the base URL
        { rel: 'icon', href: `${$config.public.baseURL}${seoSettings.value.icon || '/default-icon.png'}` }, 
      ],
      meta: [
        { name: 'description', content: seoSettings.value.metaDescription || 'Default description' },
        { property: 'og:title', content: seoSettings.value.ogTitle || seoSettings.value.metaTitle },
        { property: 'og:description', content: seoSettings.value.ogDescription || seoSettings.value.metaDescription },
        { property: 'og:image', content: `${$config.public.baseURL}${seoSettings.value.icon || '/default-icon.png'}`  },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'keywords', content: seoSettings.value.metaKeywords || 'default, keywords' }, // Add metaKeywords here

      ],
      script: [
        
      headerScript.value ? {
      // Safely inject the JavaScript with raw HTML (using dangerouslySetInnerHTML)
      innerHTML: headerScript.value,
      type: 'application/javascript',
    } : null,
  ].filter(Boolean), // Remove null values
    });

    useHead({
  script: [
    {
      type: 'application/javascript',
      innerHTML: `(function(w,d,s,l,i){
        w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KLR52NFH');`,
    },
  ],
  noscript: [
    {
      children:
        '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLR52NFH" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
        body: true, 
    },
  ],
});
  } catch (error) {
    console.error('Failed to fetch settings:', error);
  }
};

// Call fetchSettings when the component is mounted
onMounted(fetchSettings);
  </script>
  
  <style scoped>
  /* Scoped styles for AppHeader.vue */
  header {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  </style>
  <style scoped>
  /* Scoped styles for AppHeader.vue */
  header {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  </style>