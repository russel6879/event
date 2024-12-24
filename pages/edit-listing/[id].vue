<template>
  <!-- ================================
     START BREADCRUMB AREA
  ================================= -->
  <section class="breadcrumb-area bread-bg">
    <div class="overlay"></div>
    <div class="container">
      <div class="breadcrumb-content text-center">
        <h2 class="sec__title text-white mb-3">Edit Listing </h2>
        <ul class="bread-list">
          <li><NuxtLink to="/">home</NuxtLink></li>
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
                  <label class="label-text">Title {{ event }} <span class="required">*</span></label>
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
                    <option v-for="(venue,index) in venues" :key="index" :value="venue.id" >
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
                  <Editor :key="editorKey" v-model:content="formData.description" />
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
      
    />
    
    <!-- If imagePreview is set (new image uploaded) show cropper -->
    <div v-if="imagePreview">
      <!-- <cropper
        :src="imagePreview"
        :stencil-props="{
          handlers: {},
          movable: false,
          resizable: false,
          aspectRatio: 2
        }"
        :resize-image="{ adjustStencil: false }"
        image-restriction="stencil"
        @change="onCropChange"
        :fixed="true"
      />
      <span class="btn btn-secondary mt-2" v-if="imagePreview" @click="cropImage">Crop Image</span>
      <br> -->
      <img v-if="imagePreview" :src="imagePreview" class="img-thumbnail mt-2 w-50" />
    </div>

    <!-- If no new image uploaded, show the existing image (if available) -->
    <div v-else-if="formData.featured_photo">
      <img :src="formData.featured_photo" class="img-thumbnail mt-2 w-50" alt="Existing Featured Image" />
    
    </div>
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
import { ref, onMounted } from 'vue';
import Multiselect from 'vue-multiselect';
import Editor from '~/components/Editor.vue';
import { useRoute } from 'vue-router';
import eventService from '~/services/eventService';
import 'vue-multiselect/dist/vue-multiselect.css';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
const { $config } = useNuxtApp();
const baseURL= `${$config.public.baseURL}/`;
const route = useRoute();
const formData = ref({
  title: '',
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
const countries = ref([]);
const venues = ref([]);
const categories = ref([]);
const selectedCategories = ref([]);


const imagePreview = ref('');
// const croppedImage = ref('');
const cropperData = ref(null);
const router = useRouter();

const editorKey = ref(1); // To re-render the editor
const events = ref([]);
const search = ref('');
const headers = ref([
  { text: 'Event Name', value: 'name' },
  { text: 'Event Type', value: 'event_type' },
  { text: 'Status', value: 'status' },
  { text: 'Actions', value: 'actions', sortable: false }
]);
// const onCropChange = (data) => {
//     cropperData.value = data;

//   };
// const cropImage = () => {
//     croppedImage.value = cropperData.value.canvas.toDataURL('image/png');
//     imagePreview.value = croppedImage.value ;
//   };
const fetchCategories = async () => {
   try {
     categories.value = await eventService.getCategories();
   } catch (error) {
     console.error('Error fetching categories:', error);
   }
 };

 // Fetch countries
const fetchCountries = async () => {
  try {
    countries.value = await eventService.getCountries();
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};
// Fetch event details by ID
const fetchEventDetails = async () => {
  try {
    const eventId = route.params.id;
    const event = await eventService.getEvent(eventId);

    formData.value = { ...event };
    const countryId= event.country
   
    formData.value.country = parseInt(countryId); // Ensure `event.country` is the ID
   
    await fetchCategories(); 

       // Convert category IDs to category objects
       const    categoryIds = Array.isArray(event.category) ? event.category : JSON.parse(event.category);
        selectedCategories.value =categories.value.filter(category =>
  categoryIds.includes(category.id)
);
formData.value.featured_photo = baseURL + formData.value.featured_photo;
if (formData.value.country) {
      await fetchVenues(); // Call fetchVenues here to populate venues on load
    }
  } catch (error) {
    console.error('Error fetching event details:', error);
  }
};



// Fetch venues based on selected country
const fetchVenues = async () => {

  try {
    if (formData.value.country) {
     
      venues.value = await eventService.getVenuesByCountry(formData.value.country);
 
     
    }
  } catch (error) {
    console.error('Error fetching venues:', error);
  }
};

// Update event handler
const updateEvent = async () => {

  try {
    const eventId = route.params.id;
     const categoryIds = Array.isArray(selectedCategories.value) 
      ? selectedCategories.value.map(category => category.id)
      : [];
    formData.value.category=JSON.stringify(categoryIds);
    await eventService.updateEvent(eventId, formData.value);
    router.push('/user-dashboard');
    useNuxtApp().$toast.success('Event updated successfully!', {
       autoClose: 5000,
       theme: "colored",
       dangerouslyHTMLString: true,
     });
    // Handle success (e.g., redirect or show a success message)
  } catch (error) {
    console.error('Error updating event:', error);
  }
};

// Handle file upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.value.featured_photo = file;
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
          formData.value.featured_photo =reader.result

    };
    reader.readAsDataURL(file);
  }
};

// Check event type and toggle location fields
const showLocationFields = computed(() => formData.value.event_type !== 'online');


// Reset form handler
const resetForm = () => {
  formData.value = {
    title: '',
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
  };
  selectedCategories.value = [];
  imagePreview.value = '';
  // Optionally, reset other states or values as needed
};

// On mounted, fetch event details and countries
onMounted(() => {
  fetchCategories();
  fetchCountries();
  fetchEventDetails();

  
});
</script>
