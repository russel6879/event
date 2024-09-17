<template>
    <section class="breadcrumb-area bread-bg">
      <div class="overlay"></div>
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2 class="sec__title text-white mb-3">Login</h2>
          <ul class="bread-list">
            <li><a href="/">home</a></li>
            <li>login</li>
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
  
    <section class="contact-area padding-top-60px padding-bottom-90px">
      <div class="container">
        <div class="col-lg-7 mx-auto">
          <form @submit.prevent="loginUser" class="card">
            <div class="card-body">
              <div class="text-center">
                <h4 class="font-size-28 font-weight-semi-bold mb-1">
                  Login to your account
                </h4>
              </div>
              <div class="d-flex align-items-center">
                <hr class="border-top-gray flex-grow-1" />
                <hr class="border-top-gray flex-grow-1" />
              </div>
              <div class="form-group">
                <label class="label-text">Username or email</label>
                <input
                  v-model="credentials.email"
                  class="form-control form--control ps-3"
                  type="text"
                  placeholder="Username, or email"
                  required
                />
              </div>
              <div class="form-group">
                <label class="label-text">Password</label>
                <div class="position-relative">
                  <input
                    v-model="credentials.password"
                    class="form-control form--control ps-3 password-field"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <a
                    href="javascript:void(0)"
                    class="position-absolute top-0 right-0 h-100 toggle-password"
                    title="toggle show/hide password"
                  >
                    <i class="far fa-eye eye-on"></i>
                    <i class="far fa-eye-slash eye-off"></i>
                  </a>
                </div>
              </div>
              <div
                class="form-group d-flex align-items-center justify-content-between"
              >
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="RememberMe"
                  />
                  <label class="custom-control-label" for="RememberMe"
                    >Remember Me</label
                  >
                </div>
                <a href="/recover" class="btn-link">Forgot password?</a>
              </div>
              <button class="theme-btn border-0" type="submit">
                Login Now
              </button>
              <p class="mt-3">
                Not a member?
                <nuxt-link to="/signup" class="btn-link">Register</nuxt-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import authService from '~/services/authService';
  
  const credentials = ref({
    email: '',
    password: '',
  });
  
  const router = useRouter();
  
  const loginUser = async () => {
    try {
      const data = await authService.login(credentials.value);
  
      // Store the token in local storage
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user_id', data.user.id);
      // Redirect to the add-listing page
      router.push('/user-dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      useNuxtApp().$toast.error('Failed to login. Please try again.', {
       autoClose: 5000,
       theme: "colored",
       dangerouslyHTMLString: true,
     })
     ;
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  