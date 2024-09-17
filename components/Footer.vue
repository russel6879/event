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
              <a href="index.html" class="footer-logo mb-4 d-inline-block"
                ><img src="/images/logo2.png" alt="logo"
              /></a>
              <p class="mb-4">
                Morbi convallis bibendum urna ut viverra. Maecenas quis
                consequat libero, a feugiat eros
              </p>
              <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
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
                <li><a href="about.html">About us</a></li>
                <li><a href="sign-up.html">Sign up</a></li>
                <li><a href="login.html">Log in</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Help Center</a></li>
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
                <li><a href="#">Shops</a></li>
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Restaurants</a></li>
                <li><a href="#">Bars</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Fitness</a></li>
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
                <li>
                  <span class="fal fa-home icon me-2"></span> 12345 Little Baker
                  St, Melbourne
                </li>
                <li>
                  <span class="fal fa-headphones icon me-2"></span>
                  <a href="#">+ 61 23 8093 3400</a>
                </li>
                <li>
                  <span class="fal fa-envelope icon me-2"></span>
                  <a href="#">dirto@gmail.com</a>
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
            &copy; Copyright Dirto <span id="copyright-year"></span>. Made with
            <span class="fas fa-heart bounce-anim"></span> by
            <a href="https://techydevs.com/">TechyDevs</a>
          </p>
          <select
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
          </select>
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
  // You can add any logic here if needed
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
  