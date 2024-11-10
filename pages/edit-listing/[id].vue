<template>
  <!-- ================================
     START BREADCRUMB AREA
  ================================= -->
  <section class="breadcrumb-area bread-bg">
    <div class="overlay"></div>
    <div class="container">
      <div class="breadcrumb-content text-center">
        <h2 class="sec__title text-white mb-3">Edit Listing</h2>
        <ul class="bread-list">
          <li><a href="index.html">home</a></li>
          <li>listing</li>
          <li>Edit Listing</li>
        </ul>
      </div>
    </div>
    <div class="bread-svg">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path>
      </svg>
    </div>
  </section>
  <!-- end breadcrumb-area -->

  <!-- ================================
     START EDIT-LISTING AREA
  ================================= -->
  <section class="add-listing-area padding-top-60px padding-bottom-90px">
    <div class="container">
      <form @submit.prevent="updateEvent">
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
                    @update:model-value="fetchVenues"
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
                <div class="form-control">
                  <label class="label-text">Category <span class="required">*</span></label>
                  <multiselect
                    v-model="selectedCategories"
                    :options="categories"
                    :multiple="true"
                    :close-on-select="false"
                    placeholder="Select categories"
                    label="name"
                    track-by="id"
                  ></multiselect>
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
                  <span class="btn btn-secondary mt-2" v-if="imagePreview" @click="cropImage">Crop Image</span>
                  <img v-if="croppedImage" :src="croppedImage" class="img-thumbnail mt-2 w-50" />
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <button class="theme-btn border-0 mt-3" type="submit">
          Update Listing
        </button>
      </form>
    </div>
    <!-- end container -->
  </section>
  <!-- end edit-listing-area -->
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, defineAsyncComponent, onMounted, computed } from 'vue';
import eventService from '~/services/eventService'; // Adjust the path based on your project structure
import { useNuxtApp } from '#app'; // Ensure this import is correct

const route = useRoute();
const router = useRouter();
const Editor = defineAsyncComponent(() => import('~/components/Editor.vue'));

const description = ref('');
const editorKey = ref(0);
const formData = ref({
  title: '',
  user_id: '', // You need to set this based on your authentication logic
  event_type: '',
  country: '',
  venue: '',
  event_date_from: '',
  event_date_to: '',
  event_time_from: '',
  event_time_to: '',
  category: [],
  website_link: '',
  description: '',
  video_link: '',
  featured_photo: ''
});
const imagePreview = ref(null);
const countries = ref([]);
const venues = ref([]);
const categories = ref([]);
const selectedCategories = ref([]);

// Fetch event data on component mount
onMounted(async () => {
  try {
    const eventId = route.params.id;
    const event = await eventService.getEvent(eventId); // Get the event data
    formData.value = { ...event };
    selectedCategories.value = event.data.categories || [];
  } catch (error) {
    console.error('Error fetching event data:', error);
  }

  // Fetch other necessary data (countries, categories)
  fetchCountries();
  fetchCategories();
});

// Fetch countries from API
const fetchCountries = async () => {
  try {
    const response = await eventService.getCountries();
    countries.value = response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

// Fetch categories from API
const fetchCategories = async () => {
  try {
    const response = await eventService.getCategories();
    categories.value = response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Handle file upload for featured photo
const handleFileUpload = (e) => {
  const file = e.target.files[0];
  formData.value.featured_photo = file;
  imagePreview.value = URL.createObjectURL(file);
};

// Handle event type change (for conditional fields like location)
const checkEventType = () => {
  formData.value.event_type === 'online'
    ? (showLocationFields.value = false)
    : (showLocationFields.value = true);
};

const showLocationFields = ref(true);

// Handle cropping logic (if you want to integrate an image cropper)
const onCropChange = (croppedImage) => {
  // Handle crop changes here
};

// Crop the image before upload
const cropImage = () => {
  // Crop logic here
  console.log('Cropping image...');
};

// Update event (submit form)
const updateEvent = async () => {
  try {
    const eventData = new FormData();
    eventData.append('title', formData.value.title);
    eventData.append('user_id', formData.value.user_id);
    eventData.append('event_type', formData.value.event_type);
    eventData.append('country', formData.value.country);
    eventData.append('venue', formData.value.venue);
    eventData.append('event_date_from', formData.value.event_date_from);
    eventData.append('event_date_to', formData.value.event_date_to);
    eventData.append('event_time_from', formData.value.event_time_from);
    eventData.append('event_time_to', formData.value.event_time_to);
    eventData.append('category', selectedCategories.value.join(','));
    eventData.append('website_link', formData.value.website_link);
    eventData.append('video_link', formData.value.video_link);
    eventData.append('description', description.value);

    if (formData.value.featured_photo) {
      eventData.append('featured_photo', formData.value.featured_photo);
    }

    const eventId = route.params.id;
    const response = await eventService.updateEvent(eventId, eventData);

    if (response.data.success) {
      alert('Event updated successfully!');
      router.push('/events'); 
    } else {
      alert('Failed to update event. Please try again.');
    }
  } catch (error) {
    console.error('Error updating event:', error);
    alert('An error occurred while updating the event.');
  }
};
</script>
