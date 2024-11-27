<template>
  <!-- ================================
     START BREADCRUMB AREA
 ================================= -->
 <section class="breadcrumb-area bread-bg">
       <div class="overlay"></div>
       <!-- end overlay -->
       <div class="container">
         <div class="breadcrumb-content text-center">
          <li><NuxtLink to="/">Home</NuxtLink></li>
           <ul class="bread-list">
             <li><a href="index.html">home</a></li>
             <li>listing</li>
             <li>Add Listing</li>
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
     START ADD-LISTING AREA
 ================================= -->
     <section class="add-listing-area padding-top-60px padding-bottom-90px">
       <div class="container">
         <div class="alert alert-info fade show mb-4" role="alert">
           <p>
             <strong class="font-weight-semi-bold"
               >Returning User? Please</strong
             >
             <a href="login.html" class="alert-link font-weight-semi-bold"
               >log in</a
             >
             and if you are a New User, Continue Below and register along with
             this submission.
           </p>
         </div>
         <form @submit.prevent="addEvent">
           <div class="card">
             <div class="card-body">
               <h4 class="card-title mb-3">Basic Information</h4>
               <hr class="border-top-gray my-0" />
               <div class="row mt-4">
           <div class="col-lg-6">
             <div class="form-group">
               <label class="label-text">Title <span class="required">*</span></label>
               <input
                 class="form-control form--control ps-3"
                 type="text"
                 v-model="formData.title"
                 placeholder="Title"
                 required
               />
             </div>
           </div>
           <div class="col-lg-6">
                <div class="form-group">
                  <label class="label-text">Event Type <span class="required">*</span></label>
                  <select
                    class="form-control form--control ps-3"
                    v-model="formData.event_type"
                    @change="checkEventType"
                    required
                  >
                    <option value="online">Online</option>
                    <option value="physical">Physical</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <!-- Country and Venue Fields -->
              <div v-if="showLocationFields" class="col-lg-6">
                <div class="form-group">
                  <label class="label-text">Country <span class="required">*</span></label>
                  <select
                    class="form-control form--control ps-3"
                    v-model="formData.country"
                    @change="fetchVenues"
                    required
                  >
                    <option v-for="country in countries" :key="country.code" :value="country.id">
                      {{ country.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div v-if="showLocationFields" class="col-lg-6">
                <div class="form-group">
                  <label class="label-text">Venue <span class="required">*</span></label>
                  <select
                    class="form-control form--control ps-3"
                    v-model="formData.venue"
                    required
                  >
                    <option v-for="venue in venues" :key="venue.id" :value="venue.id">
                      {{ venue.venue_name }}
                    </option>
                  </select>
                </div>
              </div>
              <!-- Event Date From -->
              <div class="col-lg-6">
            <div class="form-group">
              <label class="label-text">Event Date From <span class="required">*</span></label>
              <input
                class="form-control form--control ps-3"
                type="date"
                v-model="formData.event_date_from"
                required
              />
            </div>
          </div>

          <!-- Event Date To -->
          <div class="col-lg-6">
            <div class="form-group">
              <label class="label-text">Event Date To <span class="required">*</span></label>
              <input
                class="form-control form--control ps-3"
                type="date"
                v-model="formData.event_date_to"
                required
              />
            </div>
          </div>

          <!-- Event Time From -->
          <div class="col-lg-6">
            <div class="form-group">
              <label class="label-text">Event Time From <span class="required">*</span></label>
              <input
                class="form-control form--control ps-3"
                type="time"
                v-model="formData.event_time_from"
                required
              />
            </div>
          </div>

          <!-- Event Time To -->
          <div class="col-lg-6">
            <div class="form-group">
              <label class="label-text">Event Time To <span class="required">*</span></label>
              <input
                class="form-control form--control ps-3"
                type="time"
                v-model="formData.event_time_to"
                required
              />
            </div>
          </div>
           <div class="col-lg-12">
             <div class="form-control ">
               <label class="label-text">Category <span class="required">*</span></label>
               <multiselect
    v-model="selectedCategories"
        :options="categories"
        :multiple="true"
        :close-on-select="false"
        placeholder="Select categories"
        label="name"
        track-by="id"
     
      >
      </multiselect>
             </div>
           </div>
           <div class="col-lg-12">
             <div class="form-group">
               <label class="label-text">Website Link <span class="required">*</span></label>
               <input
                 class="form-control form--control ps-3"
                 type="url"
                 v-model="formData.website_link"
                 required
               />
             </div>
           </div>
           <div class="col-lg-12">
             <div class="form-group">
               <label class="label-text">Description <span class="required">*</span></label>
               <Editor :key="editorKey" v-model:content="description" />
               <!-- <div v-html="description"></div> -->
             </div>
           </div>
           <div class="col-lg-12">
             <div class="form-group">
               <label class="label-text">Video Link</label>
               <input
                 class="form-control form--control ps-3"
                 type="url"
                 v-model="formData.video_link"
               />
             </div>
           </div>
           
           <div class="col-lg-12">
               <div class="form-group">
                 <label class="label-text">Featured Photo <span class="required">*</span></label>
                 <input
                   class="form-control form--control ps-3"
                   type="file"
                   @change="handleFileUpload"
                   required
                 />
                 <cropper
                  :src="imagePreview"
                  :stencil-props="{
                    handlers: {},
                    movable: false,
                    resizable: false,
                    aspectRatio: 2,
                  }"
                  :resize-image="{
                    adjustStencil: false
                  }"
                  image-restriction="stencil"
                  
                  @change="onCropChange"
                     :fixed="true"
                  />  
                  
                  <span class="btn btn-secondary mt-2" v-if="imagePreview" @click="cropImage">Crop Image</span><br>

                 <img v-if="croppedImage" :src="croppedImage" class="img-thumbnail mt-2 w-50" />
               </div>
             </div>
          
         </div>
               <!-- end row -->
             </div>
             <!-- end card-body -->
           </div>
           <!-- end card -->
  
           <button 
    class="theme-btn border-0 mt-3" 
    type="submit" 
    :disabled="loading"
  >
    <span v-if="loading">Submitting...</span>
    <span v-else>Submit Listing</span>
  </button>
         </form>
       </div>
       <!-- end container -->
     </section>
     <!-- end add-listing-area -->
     <!-- ================================
     END ADD-LISTING AREA
 ================================= -->
 
 
 </template>
 
 <script setup>
   definePageMeta({
  middleware: 'auth'
})
 import { ref, onMounted, defineAsyncComponent,nextTick } from 'vue';
 import Multiselect from 'vue-multiselect';
 import 'vue-multiselect/dist/vue-multiselect.css';
 import { Cropper } from 'vue-advanced-cropper';
 import 'vue-advanced-cropper/dist/style.css';
 import eventService from '~/services/eventService';
 import { useNuxtApp } from '#app';
 const selectedCategories = ref([]); // Define selectedCategories here
 const loading = ref(false); // Loading state for the button

 const countries = ref([]);
 const venues = ref([]);
 const categories = ref([]);
 const formData = ref({
   title: '',
   user_id: '',
   event_type: '',
   country: '',
   venue: '',
   event_date_from: '', // New field
   event_date_to: '',   // New field
   event_time_from: '', // New field
   event_time_to: '',   // New field
   category: [],
   website_link: '',
   video_link: '',
   featured_photo: ''
 });
 const imagePreview = ref(null);
 const croppedImage = ref(null); // Store cropped image
 const description = ref('');
 const editorKey = ref(0);
 const cropperData = ref(null);

 const fetchCountries = async () => {
   try {
     countries.value = await eventService.getCountries();
   } catch (error) {
     console.error('Error fetching countries:', error);
   }
 };
 
 const fetchVenues = async () => {
   try {
     const response = await eventService.getVenuesByCountry(formData.value.country);
     venues.value = response;
   } catch (error) {
     console.error('Error fetching venues:', error);
   }
 };
 
 const fetchCategories = async () => {
   try {
     categories.value = await eventService.getCategories();
   } catch (error) {
     console.error('Error fetching categories:', error);
   }
 };
 const showLocationFields = computed(() => formData.value.event_type !== 'online');

 const resetForm = () => {
   formData.value = {
     title: '',
     user_id: '',
     event_type: '',
     country: '',
     venue: '',
     event_date_from: '', // Reset new fields
     event_date_to: '',
     event_time_from: '',
     event_time_to: '',
     category: [],
     website_link: '',
     video_link: '',
     featured_photo: ''
   };
   selectedCategories.value = [];
   description.value = '';
   editorKey.value += 1;
   imagePreview.value = null;
   venues.value = [];
 };
 
//  const handleFileUpload = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       imagePreview.value = e.target.result; // Set preview to crop
//       croppedImage.value = null; // Reset cropped image on new upload
//     };
//     reader.readAsDataURL(file);
//   }
// };
 // Reactive references for the cropper

  
  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imagePreview.value = event.target.result; // Load the image into cropper
      };
      reader.readAsDataURL(file); // Convert file to base64 data URL
    }
  };
  
  // Track cropper changes
  const onCropChange = (data) => {
    cropperData.value = data;

  };
  
  // Crop the image and get the cropped version
  const cropImage = () => {
    croppedImage.value = cropperData.value.canvas.toDataURL('image/png');
    imagePreview.value = croppedImage.value ;
  };


 const addEvent = async () => {
   try {
    loading.value = true; // Start loading when the form is submitted

     const eventData = new FormData();
     eventData.append('title', formData.value.title);
     eventData.append('user_id', localStorage.getItem('user_id'));
     eventData.append('event_type', formData.value.event_type);
     eventData.append('country', formData.value.country);
     eventData.append('venue', formData.value.venue);
     eventData.append('event_date_from', formData.value.event_date_from); // Append new fields
     eventData.append('event_date_to', formData.value.event_date_to);
     eventData.append('event_time_from', formData.value.event_time_from);
     eventData.append('event_time_to', formData.value.event_time_to);
   const categoryIds = Array.isArray(selectedCategories.value) 
      ? selectedCategories.value.map(category => category.id)
      : [];
    eventData.append('category', JSON.stringify(categoryIds));
     eventData.append('website_link', formData.value.website_link);
     eventData.append('description', description.value);
     eventData.append('video_link', formData.value.video_link);
     eventData.append('featured_photo',  imagePreview.value);
 
     await eventService.createEvent(eventData);
 
     useNuxtApp().$toast.success('Event submitted successfully!', {
       autoClose: 5000,
       theme: "colored",
       dangerouslyHTMLString: true,
     });
 
     resetForm();
     loading.value = false; // Disable loading once the submission is successful

   } catch (error) {
    loading.value = false; // Disable loading once the submission is successful

     console.error('Error adding event:', error);
     alert('Failed to add event. Please try again.');
   }
 };
 
 onMounted(() => {
   fetchCountries();
   fetchCategories();
 });
 </script>

<style scoped>

/* (existing styles) */
</style>