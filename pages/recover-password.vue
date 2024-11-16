<template>
  <section class="breadcrumb-area bread-bg">
    <div class="overlay"></div>
    <div class="container">
      <div class="breadcrumb-content text-center">
        <h2 class="sec__title text-white mb-3">Recover Password</h2>
        <ul class="bread-list">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li>Recover Password</li>
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
        <form @submit.prevent="recoverPassword" class="card">
          <div class="card-body">
            <div v-if="message" :class="{'text-success': messageType === 'success', 'text-danger': messageType === 'error'}" class="text-center mb-3">
              {{ message }}
            </div>
            <div class="text-center">
              <h4 class="font-size-28 font-weight-semi-bold mb-1">Recover Your Password</h4>
              <p class="font-size-16 text-gray">Enter your email to receive an OTP</p>
            </div>
            <div class="form-group">
              <label class="label-text">Email</label>
              <input
                v-model="email"
                class="form-control form--control ps-3"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
              <!-- Loading Button -->
              <button class="theme-btn border-0" type="submit" :disabled="isLoading">
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              {{ isLoading ? 'Sending...' : 'Send OTP' }}
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
import { useRouter } from 'vue-router';
import authService from '~/services/authService';

const email = ref('');
const router = useRouter();
const messageType = ref(''); // Message type: 'success' or 'error'
const message = ref(''); // Message text
const isLoading = ref(false); // Loading state

const recoverPassword = async () => {
  isLoading.value = true; // Start loading

  try {
    const response = await authService.recoverPassword({ email: email.value });
    useNuxtApp().$toast.success(response.message, {
      autoClose: 5000,
      theme: 'colored',
      dangerouslyHTMLString: true,
    });
    router.push(`/password-reset?email=${email.value}`); // Redirect to password reset page
  } catch (error) {
    console.error('Error sending OTP:', error);
    message.value = 'Failed to send OTP. Please try again.'; // Set error message
    messageType.value = 'error'; // Set message type to error
  }
  finally {
    isLoading.value = false; // Stop loading
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
