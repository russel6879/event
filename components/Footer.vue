<template>
    <div>
         <!-- ================================
       START FOOTER AREA
================================= -->
    <section class="footer-area bg-gray padding-top-80px pattern-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-item">
              <NuxtLink to="/" class="footer-logo mb-4 d-inline-block"> <img :src="`${$config.public.baseURL}`+footerLogoUrl" alt="logo" /></NuxtLink>
              <p class="mb-4">
                {{footerSetting.footerDescription}}
              </p>
              <div class="social-icons">
                
               <!-- Facebook Link -->
                <a v-if="socialLinks.facebook" :href="socialLinks.facebook" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-facebook-f"></i>
                </a>

                <!-- Twitter Link -->
                <a v-if="socialLinks.twitter" :href="socialLinks.twitter" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-twitter"></i>
                </a>

                <!-- Instagram Link -->
                <a v-if="socialLinks.instagram" :href="socialLinks.instagram" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>

                <!-- YouTube Link -->
                <a v-if="socialLinks.youtube" :href="socialLinks.youtube" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <!-- end footer-item -->
          </div>
          <!-- end col-lg-3 -->
          <div class="col-lg-3 col-md-6">
            <div class="footer-item">
              <h4 class="footer__title mb-3">Quick Links</h4>
              <div class="stroke-shape mb-4"></div>
              <ul class="list-items list-items-underline">
                 <li v-for="(link, index) in footerSetting.quickLinks" :key="index">
                    <a :href="link.url">{{ link.title }}</a>
                 </li>
              </ul>
            </div>
            <!-- end footer-item -->
          </div>
          <!-- end col-lg-3 -->
          <div class="col-lg-3 col-md-6">
            <div class="footer-item">
              <h4 class="footer__title mb-3">Categories</h4>
                           <div class="stroke-shape mb-4"></div>
              <ul class="list-items list-items-underline">
                <li><NuxtLink to="/category/healthcare-medical">Healthcare & Medical</NuxtLink></li>
        <li><NuxtLink to="/category/textile-apparel">Textile & Apparel</NuxtLink></li>
        <li><NuxtLink to="/category/automotive">Automotive</NuxtLink></li>
        <li><NuxtLink to="/category/food-beverage">Food & Beverage</NuxtLink></li>
              </ul>
            </div>
            <!-- end footer-item -->
          </div>
          <!-- end col-lg-3 -->
          <div class="col-lg-3 col-md-6">
            <div class="footer-item">
              <h4 class="footer__title mb-3">Contact with Us</h4>
              <div class="stroke-shape mb-4"></div>
              <ul class="info-list">
                <li v-if="footerSetting.contactInfo?.address">
                  <span class="fal fa-home icon me-2"></span>  {{footerSetting.contactInfo?.address}}
                </li>
                <li v-if="footerSetting.contactInfo?.phone">
                  <span class="fal fa-headphones icon me-2"></span>
                  <a href="#"> {{footerSetting.contactInfo?.phone}}</a>
                </li>
                <li v-if="footerSetting.contactInfo?.email">
                  <span class="fal fa-envelope icon me-2"></span>
                  <a :href="'mailto:' + footerSetting.contactInfo?.email">
                   {{ footerSetting.contactInfo?.email }}
                  </a>
                </li>
              </ul>
            </div>
            <!-- end footer-item -->
          </div>
          <!-- end col-lg-3 -->
        </div>
        <!-- end row -->
        <hr class="border-top-gray" />
        <div
          class="copy-right d-flex flex-wrap align-items-center justify-content-between pb-4"
        >
          <p class="copy__desc py-2">
            &copy; {{footerSetting.copyrightText}} <span id="copyright-year"></span>. Developed
            <span class="fas fa-heart bounce-anim"></span> by
            <a href="https://www.fiverr.com/alamin152351260">Al Amin</a>
          </p>
          <!-- <select
            class="select-picker select-picker-sm"
            data-width="130"
            data-size="5"
          >
            <option value="1" selected>English</option>
            <option value="2">French</option>
            <option value="3">Czech</option>
            <option value="4">German</option>
            <option value="5">Italian</option>
            <option value="6">Turkish</option>
          </select> -->
        </div>
        <!-- end copy-right -->
      </div>
      <!-- end container -->
    </section>
    <!-- end footer-area -->
    <!-- ================================
       START FOOTER AREA
================================= -->

    <!-- start back-to-top -->
    <div id="back-to-top">
      <i class="fal fa-angle-up" title="Go top"></i>
    </div>
    <!-- end back-to-top -->
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import settingsService from '@/services/settingsService'; // Adjust the path if needed  
    // Define a ref to hold the logo URL
    const footerLogoUrl = ref(''); // Default logo URL in case the API fails
    const footerSetting = ref(''); 
    const socialLinks = ref(''); 
    
    // Fetch settings data when the component is mounted
    const fetchSettings = async () => {
    try {
      const settings = await settingsService.getSiteSetting('footer_settings'); // Fetch settings data
      const socialSettings = await settingsService.getSiteSetting('social_links'); // Fetch settings data
     
      if (settings && settings.value.footerLogo) {
        footerLogoUrl.value = settings.value.footerLogo; // Update the logo URL with the fetched data
        footerSetting.value = settings.value; // Update the logo URL with the fetched data
      }
      socialLinks.value=socialSettings.value
    } catch (error) {
      console.error('Failed to fetch settings:', error);
    }
  };
  
  // Call fetchSettings when the component is mounted
  onMounted(fetchSettings);
    </script>
  
  <style scoped>
  /* Scoped styles for AppFooter.vue */
  footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  </style>
  