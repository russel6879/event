<template>
  <!-- Breadcrumb Area -->
  <section class="breadcrumb-area bread-bg">
    <div class="overlay"></div>
    <div class="container">
      <div class="breadcrumb-content text-center">
        <h2 class="sec__title text-white mb-3">Edit Listing</h2>
        <ul class="bread-list">
          <li><a href="/">Home</a></li>
          <li>Listing</li>
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

  <!-- Edit Listing Form -->
  <section class="add-listing-area padding-top-60px padding-bottom-90px">
    <div class="container">
      <!-- Alert for Returning Users -->
      <div class="alert alert-info fade show mb-4" role="alert">
        <p><strong class="font-weight-semi-bold">Returning User? Please</strong> <a href="/login" class="alert-link font-weight-semi-bold">log in</a> and if you are a New User, Continue Below and register along with this submission.</p>
      </div>

      <!-- Edit Listing Form -->
      <form @submit.prevent="updateEvent">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-3">Basic Information</h4>
            <hr class="border-top-gray my-0" />

            <!-- Form Inputs -->
            <div class="row mt-4">
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="label-text">Title <span class="required">*</span></label>
                  <input class="form-control form--control ps-3" type="text" v-model="formData.title" placeholder="Title" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="label-text">Event Type <span class="required">*</span></label>
                  <select class="form-control form--control ps-3" v-model="formData.event_type" required>
                    <option value="online">Online</option>
                    <option value="physical">Physical</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="label-text">Country <span class="required">*</span></label>
                  <input class="form-control form--control ps-3" type="text" v-model="formData.country" placeholder="Country" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="label-text">Venue <span class="required">*</span></label>
                  <input class="form-control form--control ps-3" type="text" v-model="formData.venue" placeholder="Venue" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="label-text">Event Date <span class="required">*</span></label>
                  <input class="form-control form--control ps-3" type="date" v-model="formData.event_date" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="label-text">Event Time <span class="required">*</span></label>
                  <input class="form-control form--control ps-3" type="time" v-model="formData.event_time" required />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="label-text">Category <span class="required">*</span></label>
                  <input class="form-control form--control ps-3" type="text" v-model="formData.category" required />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="label-text">Website Link <span class="required">*</span></label>
                  <input class="form-control form--control ps-3" type="url" v-model="formData.website_link" required />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="label-text">Description <span class="required">*</span></label>
                  <Editor :content="description" @update:content="description = $event" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="label-text">Video Link</label>
                  <input class="form-control form--control ps-3" type="url" v-model="formData.video_link" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="label-text">Featured Photo <span class="required">*</span></label>
                  <input class="form-control form--control ps-3" type="file" @change="handleFileUpload" />
                  <img v-if="imagePreview" :src="imagePreview" class="img-thumbnail mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <button class="theme-btn border-0 mt-3" type="submit">Update Listing</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, defineAsyncComponent, onMounted } from 'vue';
import eventService from '~/services/eventService'; // Adjust the path based on your project structure

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
  event_date: '',
  event_time: '',
  category: '',
  website_link: '',
  video_link: '',
  featured_photo: ''
});
const imagePreview = ref(null);

// Fetch event data on component mount
onMounted(async () => {
  const eventId = route.params.id; // Assuming 'id' is the dynamic segment in your route
  if (eventId) {
    try {
      const event = await eventService.getEvent(eventId); // Replace with your actual service method
      // Populate form data with fetched event data
      formData.value = {
        title: event.title,
        user_id: event.user_id,
        event_type: event.event_type,
        country: event.country,
        venue: event.venue,
        event_date: event.event_date,
        event_time: event.event_time,
        category: event.category,
        website_link: event.website_link,
        video_link: event.video_link,
        featured_photo: null // You may need to handle file preview separately if needed
      };
      description.value = event.description;
    } catch (error) {
      console.error('Error fetching event:', error);
      // Handle error, e.g., show error message
    }
  }
});

// Reset form function
const resetForm = () => {
  formData.value = {
    title: '',
    user_id: '',
    event_type: '',
    country: '',
    venue: '',
    event_date: '',
    event_time: '',
    category: '',
    website_link: '',
    video_link: '',
    featured_photo: ''
  };
  description.value = '';
  editorKey.value += 1;
  imagePreview.value = null;
};

// Handle file upload function
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  formData.value.featured_photo = file;
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// Update event function
const updateEvent = async () => {
  try {
    const eventData = new FormData();
    eventData.append('title', formData.value.title);
    // Append other form data fields as needed
    eventData.append('description', description.value);
    eventData.append('featured_photo', formData.value.featured_photo);

    const eventId = route.params.id; // Assuming 'id' is the dynamic segment in your route
    await eventService.updateEvent(eventId, eventData); // Replace with your actual service method

    useNuxtApp().$toast.success('Event updated successfully!', {
      autoClose: 5000,
      theme: 'colored',
      dangerouslyHTMLString: true
    });
    resetForm();
  } catch (error) {
    console.error('Error updating event:', error);
    alert('Failed to update event. Please try again.');
  }
};
</script>

<style scoped>
/* Your scoped styles */
.form-control {
  margin-bottom: 1rem;
}
.img-thumbnail {
  max-width: 30%;
  height: auto;
}
.theme-btn {
  margin-top: 1rem;
}
</style>
