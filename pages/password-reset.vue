<template>
    <section class="breadcrumb-area bread-bg">
      <div class="overlay"></div>
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2 class="sec__title text-white mb-3">Reset Password</h2>
          <ul class="bread-list">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Reset Password</li>
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
          <form @submit.prevent="resetPassword" class="card">
            <div class="card-body">
                <div v-if="message" :class="{'text-success': messageType === 'success', 'text-danger': messageType === 'error'}" class="text-center mb-3">
              {{ message }}
            </div>

              <div class="text-center">
                <h4 class="font-size-28 font-weight-semi-bold mb-1">Reset Your Password</h4>
                <p class="font-size-16 text-gray">Enter the OTP and your new password</p>
              </div>
  
              <div class="form-group">
                <label class="label-text">OTP</label>
                <input
                  v-model="otp"
                  class="form-control form--control ps-3"
                  type="text"
                  placeholder="Enter OTP"
                  required
                />
              </div>
  
              <div class="form-group">
                <label class="label-text">New Password</label>
                <input
                  v-model="newPassword"
                  class="form-control form--control ps-3"
                  type="password"
                  placeholder="Enter new password"
                  required
                />
              </div>
  
              <div class="form-group">
                <label class="label-text">Confirm New Password</label>
                <input
                  v-model="confirmPassword"
                  class="form-control form--control ps-3"
                  type="password"
                  placeholder="Confirm new password"
                  required
                />
              </div>
  
              <button class="theme-btn border-0" type="submit" :disabled="isLoading">
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              {{ isLoading ? 'Resetting...' : 'Reset Password' }}
            </button>
  
              <p class="mt-3">
                Remembered your password? 
                <NuxtLink to="/login" class="btn-link">Login here</NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import authService from '~/services/authService';
  
  const otp = ref('');
  const newPassword = ref('');
  const confirmPassword = ref('');
  const message = ref(''); // For showing success/error messages above the form
  const messageType = ref(''); // 'success' or 'error' for message styling
  const isLoading = ref(false); // Loading state
  const router = useRouter();
  const route = useRoute();
  const email = route.query.email; // Get email from the query parameter
  
  const resetPassword = async () => {
    if (newPassword.value !== confirmPassword.value) {
    message.value = 'Passwords do not match. Please try again.';
    messageType.value = 'error';
    return;
    }
    isLoading.value = true; // Start loading

    try {
      const response = await authService.resetPassword({
        email: email,
        otp: otp.value,
        password: newPassword.value,
        password_confirmation: confirmPassword.value,  // Send password_confirmation to back-end
      });
      useNuxtApp().$toast.success(response.message, {
        autoClose: 5000,
        theme: 'colored',
        dangerouslyHTMLString: true,
      });
      router.push('/login');
    } catch (error) {
      console.error('Error resetting password:', error);
      message.value = 'Failed to reset password. Please try again.';
      messageType.value = 'error';
    } finally {
    isLoading.value = false; // Stop loading
  }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  