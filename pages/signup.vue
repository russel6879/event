<template>
  <!-- ================================
    START BREADCRUMB AREA
================================= -->
<section class="breadcrumb-area bread-bg">
      <div class="overlay"></div>
      <!-- end overlay -->
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2 class="sec__title text-white mb-3">Sign Up</h2>
          <ul class="bread-list">
            <li><NuxtLink to="/">home</NuxtLink></li>
            <li>Sign Up</li>
          </ul>
        </div>
        <!-- end breadcrumb-content -->
      </div>
      <!-- end container -->
      <div class="bread-svg">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"
          ></path>
        </svg>
      </div>
      <!-- end bread-svg -->
    </section>
    <!-- end breadcrumb-area -->
    <!-- ================================
    END BREADCRUMB AREA
================================= -->

    <!-- ================================
    START CONTACT AREA
================================= -->
<section class="contact-area padding-top-60px padding-bottom-90px">
    <div class="container">
      <div class="col-lg-7 mx-auto">
        <form @submit.prevent="signUp" class="card">
          <div class="card-body">
            <div class="text-center">
              <h4 class="font-size-28 font-weight-semi-bold mb-1">
                Create an account!
              </h4>

         
              <!-- <p class="card-text">with your social network</p> -->
              <div
                class="d-flex flex-wrap align-items-center justify-content-between my-4 d-none"
              >
                <a href="#" class="theme-btn flex-grow-1 mx-1 my-1"
                  ><i class="fab fa-google me-2"></i>Google</a
                >
                <a href="#" class="theme-btn flex-grow-1 mx-1 my-1 bg-5"
                  ><i class="fab fa-facebook-f me-2"></i>Facebook</a
                >
                <a href="#" class="theme-btn flex-grow-1 mx-1 my-1 bg-6"
                  ><i class="fab fa-twitter me-2"></i>Twitter</a
                >
              </div>
            </div>
            <div class="d-flex align-items-center">
              <hr class="border-top-gray flex-grow-1" />
              <!-- <span class="mx-1 text-uppercase">or</span> -->
              <hr class="border-top-gray flex-grow-1" />
            </div>

            <!-- Form fields -->
            <div class="form-group">
              <label class="label-text">Company Name *</label>
              <input
                v-model="formData.name"
                class="form-control form--control ps-3"
                type="text"
                name="name"
                placeholder="e.g. Alex"
                required
              />
            </div>
          
            <div class="form-group">
              <label class="label-text">Email Address *</label>
              <input
                v-model="formData.email"
                class="form-control form--control ps-3"
                type="email"
                name="email"
                placeholder="e.g. you@example.com"
                required
              />
            </div>
            <div class="form-group">
              <label class="label-text">Password *</label>
              <div class="position-relative">
                <input
                  v-model="formData.password"
                  class="form-control form--control ps-3 password-field"
                  type="password"
                  name="password"
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
              <p class="font-size-14 mt-1 line-height-20 font-weight-regular">
                Your password must be at least 6 characters long and must
                contain letters, numbers, and special characters. Cannot
                contain whitespace.
              </p>
            </div>
            <div class="form-group">
              <label class="label-text">Address</label>
              <input
                v-model="formData.address"
                class="form-control form--control ps-3"
                type="text"
                name="address"
                placeholder="Address"
              />
            </div>
            <div class="form-group">
              <label class="label-text">Phone</label>
              <input
                v-model="formData.phone"
                class="form-control form--control ps-3"
                type="tel"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div class="form-group">
              <label class="label-text">Description</label>
              <textarea
                v-model="formData.description"
                class="form-control form--control ps-3"
                name="description"
                rows="3"
                placeholder="Description"
              ></textarea>
            </div>
            <div class="form-group">
              <label class="label-text">Website</label>
              <input
                v-model="formData.website"
                class="form-control form--control ps-3"
                type="text"
                name="website"
                placeholder="Website"
              />
            </div>
            <div class="form-group">
              <!-- <div class="custom-control custom-checkbox mb-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="privacyCheckbox"
                />
                <label class="custom-control-label" for="privacyCheckbox"
                  >I Agree to Dirto's
                  <a href="#" class="btn-link">Privacy Policy</a></label
                >
              </div> -->
              <!-- <div class="custom-control custom-checkbox mb-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="termsCheckbox"
                />
                <label class="custom-control-label" for="termsCheckbox"
                  >I Agree to Dirto's
                  <a href="#" class="btn-link">Terms of Services</a></label
                >
              </div> -->
            </div>
            <div v-if="errorMessage" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>
            <button class="theme-btn border-0" type="submit" :disabled="isLoading">
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
              {{ isLoading ? 'Registering...' : 'Register Account' }}
            </button>
            <p class="mt-3">
              Already have an account?
              <nuxt-link to="/login" class="btn-link">Login</nuxt-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
    <!-- end contact-area -->
    <!-- ================================
    END CONTACT AREA
================================= -->

</template>
<script setup>
import { ref } from 'vue'
import authService from '~/services/authService'
import { useRouter } from 'vue-router';
const router = useRouter();
const isLoading = ref(false);
const errorMessage = ref(''); // To display dynamic error messages

const formData = ref({
  name: '',

  email: '',
  password: '',
  address: '',
  phone: '',
  description: '',
  website: ''
})
const resetForm = () => {
   formData.value = {    
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    description: '',
    website: '',
    
   }
 
 }
const signUp = async () => {

  isLoading.value = true;
  errorMessage.value = ''; // Reset error message before the API call

  try {
    const userData = {
      name: formData.value.name,
      address: formData.value.address,
      description: formData.value.description,
      phone: formData.value.phone,
      email: formData.value.email,
      password: formData.value.password,
      website: formData.value.website,
    };

    const data =  await authService.registerUser(userData);
    localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user_id', data.user.id);
      // Redirect to the add-listing page
      router.push('/user-dashboard');
    useNuxtApp().$toast.success('User registered successfully!', {
      autoClose: 5000,
      theme: "colored",
      dangerouslyHTMLString: true,
    });

    resetForm(); // Assuming this function resets the form fields after successful registration
  }  catch (error) {
    // Handle dynamic errors
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage.value = error.response.data.message; // Display API error message
    } else {
      errorMessage.value = 'Failed to register user. Please try again.'; // Fallback error message
    }
  } finally {
    isLoading.value = false;
  }
};
</script>