<template>
 <section class="breadcrumb-area bread-bg py-5">
      <div class="overlay"></div>
      <!-- end overlay -->
      <div class="container">
        <div class="breadcrumb-content text-center">
        
          <h2 class="sec__title text-white mb-3">Dashboard</h2>
          <h2 class="sec__title text-white mb-3">Dashboard</h2>
          <ul class="bread-list">
            <li><NuxtLink to="/">home</NuxtLink></li>
            <li>pages</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <!-- end breadcrumb-content -->
      </div>
      <!-- end container -->
    </section>
    <!-- end breadcrumb-area -->
    <!-- ================================
    END BREADCRUMB AREA
================================= -->

    <!-- ================================
    START DASHBOARD AREA
================================= -->
    <section class="dashboard-area padding-bottom-70px">
      <div class="bg-white shadow-sm py-4">
        <div class="container">
          <div
            class="dashboard-nav d-flex flex-wrap align-items-center justify-content-between"
          >
            <ul
              class="nav nav-tabs my-tabs my-tabs-2 justify-content-center my-1"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="listings-tab"
                  data-bs-toggle="tab"
                  href="#listings"
                  role="tab"
                  aria-controls="listings"
                  aria-selected="true"
                >
                  <i class="fal fa-list me-1 font-size-14"></i> Listings
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="settings-tab"
                  data-bs-toggle="tab"
                  href="#settings"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  <i class="fal fa-cog me-1 font-size-14"></i> Settings
                </a>
              </li>
              <!-- <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="bookmarks-tab"
                  data-bs-toggle="tab"
                  href="#bookmarks"
                  role="tab"
                  aria-controls="bookmarks"
                  aria-selected="false"
                >
                  <i class="fas fa-bookmark me-1 font-size-14"></i> Bookmarks
                </a>
              </li> -->
            </ul>
            <div class="my-1">
              <NuxtLink to="/add-listing" 
                class="theme-btn theme-btn-sm bg-white shadow-sm border border-gray text-black font-weight-medium me-1"
                ><i class="fal fa-plus me-1"></i> Add listing</NuxtLink>
              <button
               @click="logoutUser"
                class="theme-btn theme-btn-sm bg-white shadow-sm border border-gray text-black font-weight-medium"
                ><i class="fal fa-sign-out me-1"></i> Log out</button >
            </div>
          </div>
        </div>
        <!-- end container -->
      </div>
      <div class="container">
        <div class="tab-content mt-4" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="listings"
            role="tabpanel"
            aria-labelledby="listings-tab"
          >
            <div class="row">
              <div class="col-lg-4 col-md-6" v-for="event in events" :key="event.id">
             
                  <div class="card mb-0 hover-y">
            <a class="card-image">
              <img
                :src="`${$config.public.baseURL}/`+event.featured_photo"
                class="card-img-top"
                alt="Event Image"
              />
              <span class="badge  badge-pill"    :class="{
                      'text-bg-danger': event.event_type === 'online',
                      'text-bg-success': event.event_type === 'physical',
                      'text-bg-primary': event.event_type === 'hybrid'
      }">{{ event.event_type }}</span>
            </a>
            <div class="card-body position-relative">
              <a class="author-img">
                <img :src="`${$config.public.baseURL}/`+event.user.profile_image" alt="Author Image" />
              </a>
              <div class="category-container">
                   
            <div  v-for="([id, category]) in Object.entries(event?.category_names).slice(0, 2)":key="id" class="category-item">
              <NuxtLink  :to="`/category/${id}`"  class="card-cat">
                <span class="fal fa-tag icon-element icon-element-sm"></span>
                {{ category }}
              </NuxtLink>
            </div>
          </div>
              <div class="d-flex align-items-center mb-1">
                <h4 class="card-title mb-0">
                  <a>{{ event.title }}</a>
                </h4>
                <i
                  class="fa fa-check-circle ms-1 text-success"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Claimed"
                ></i>
              </div>
              <p class="card-text">{{ event?.venue?.venue_name }}, {{ event?.country?.name }}</p>
              <ul class="info-list mt-3">
                <!-- <li><span class="fal fa-phone icon"></span> {{ event.phone }}</li> -->
                <!-- <li>
                  <span class="fal fa-link icon"></span>
                  <a target="_blank" :href="event.website_link">{{ event.website_link }}</a>
                </li> -->
                <li>
                  <span class="fal fa-calendar icon"></span> {{ $formatDate(event.event_date_from) }} ~ {{ $formatDate(event.event_date_to) }}
                </li>
                <li><span class="fal fa-watch icon"></span> {{ $formatTime(event.event_time_from) }} ~  {{ $formatTime(event.event_time_to) }}</li>
              </ul>
            </div>
            <div class="card-footer bg-transparent border-top-gray">
                    <NuxtLink :to="`/edit-listing/${event.id}`" class="btn btn-sm edit-btn bg-success text-white me-1">
                      Edit
                    </NuxtLink>
                    <a  @click="deleteEvent(event.id)" class="btn btn-sm delete-btn bg-danger text-white" >
                      Delete
                    </a>
                  </div>
                  <!-- end card-footer -->

          </div>
               
                <!-- end card -->
              </div>
            
            </div>
            <!-- end row -->
          </div>
          <!-- end tab-pane -->
          <div
            class="tab-pane fade"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
          <div class="row">
    <div class="col-lg-12">
      <h4 class="font-size-20 font-weight-semi-bold mb-3">
        Edit Profile
      </h4>
    </div>
    <!-- end col-lg-12 -->
    <div class="edit-profile-photo media mb-4 col-lg-12">
      <img :src="profile.profile_image_url || `${$config.public.baseURL}/`+profile.profile_image" alt="avatar image" class="profile-img me-4 flex-shrink-0" />
      <div class="file-upload-wrap file-upload-wrap-layout-2 media-body align-self-center">
        <input type="file" @change="onFileChange" class="multi file-upload-input with-preview" multiple />
        <span class="file-upload-text"><i class="fal fa-upload me-2"></i>Upload Photo</span>
      </div>
    </div>
    <!-- end edit-profile-photo -->
    <div class="col-lg-6 col-md-6">
      <label class="label-text">Your Name</label>
      <div class="form-group">
        <span class="fal fa-user form-icon"></span>
        <input class="form-control form--control" type="text" v-model="profile.name" />
      </div>
      <!-- end form-group -->
    </div>
    <!-- end col-lg-6 -->
    <div class="col-lg-6 col-md-6">
      <label class="label-text">Your Email</label>
      <div class="form-group">
        <span class="fal fa-envelope form-icon"></span>
        <input class="form-control form--control" type="text" v-model="profile.email" />
      </div>
      <!-- end form-group -->
    </div>
    <div class="col-lg-6 col-md-6">
      <label class="label-text">Phone Number</label>
      <div class="form-group">
        <span class="fal fa-phone form-icon"></span>
        <input class="form-control form--control" type="text" v-model="profile.phone" />
      </div>
      <!-- end form-group -->
    </div>
    <div class="col-lg-6 col-md-6">
      <label class="label-text">Address</label>
      <div class="form-group">
        <span class="fal fa-map-marker-alt form-icon"></span>
        <input class="form-control form--control" type="text" v-model="profile.address" />
      </div>
      <!-- end form-group -->
    </div>
    <div class="col-lg-12">
      <label class="label-text">Notes</label>
      <div class="form-group">
        <textarea class="form-control form--control ps-3" rows="6" v-model="profile.description"></textarea>
      </div>
      <!-- end form-group -->
    </div>
    <div class="col-lg-12 col-md-6">
      <label class="label-text">Website</label>
      <div class="form-group">
        <span class="fal fa-globe form-icon"></span>
        <input class="form-control form--control" type="text" v-model="profile.website" />
      </div>
      <!-- end form-group -->
    </div>
    <!-- <div class="col-lg-6 col-md-6">
      <label class="label-text">Facebook</label>
      <div class="form-group">
        <span class="fab fa-facebook-f form-icon"></span>
        <input class="form-control form--control" type="text" v-model="profile.facebook" />
      </div>
 
    </div>
    <div class="col-lg-6 col-md-6">
      <label class="label-text">Twitter</label>
      <div class="form-group">
        <span class="fab fa-twitter form-icon"></span>
        <input class="form-control form--control" type="text" v-model="profile.twitter" />
      </div>
     
    </div>
    <div class="col-lg-6 col-md-6">
      <label class="label-text">Instagram</label>
      <div class="form-group">
        <span class="fab fa-instagram form-icon"></span>
        <input class="form-control form--control" type="text" v-model="profile.instagram" />
      </div>
    
    </div> -->
    <div class="col-lg-12">
      <button class="theme-btn mt-3 border-0" type="button" @click="saveChanges">
        Save Changes
      </button>
    </div>
  </div>
            <!-- end row -->
            <hr class="border-top-gray my-5" />
            <div class="row d-none">
              <div class="col-lg-12">
                <h4 class="font-size-20 font-weight-semi-bold mb-3">
                  Change Password
                </h4>
              </div>
              <!-- end col-lg-12 -->
              <div class="col-lg-6 col-md-6">
                <label class="label-text">Current Password</label>
                <div class="form-group">
                  <span class="fal fa-lock form-icon"></span>
                  <input
                    class="form-control form--control password-field"
                    type="password"
                    name="password"
                    placeholder="Current password"
                  />
                </div>
                <!-- end form-group -->
              </div>
              <!-- end col-lg-6 -->
              <div class="col-lg-6 col-md-6">
                <label class="label-text">New Password</label>
                <div class="form-group">
                  <span class="fal fa-lock form-icon"></span>
                  <input
                    class="form-control form--control password-field"
                    type="password"
                    name="password"
                    placeholder="New password"
                  />
                </div>
                <!-- end form-group -->
              </div>
              <!-- end col-lg-6 -->
              <div class="col-lg-6 col-md-6">
                <label class="label-text">New Password (again)</label>
                <div class="form-group">
                  <span class="fal fa-lock form-icon"></span>
                  <input
                    class="form-control form--control password-field"
                    type="password"
                    name="password"
                    placeholder="New password again"
                  />
                </div>
                <!-- end form-group -->
              </div>
              <!-- end col-lg-6 -->
              <div class="col-lg-12">
                <a
                  href="javascript:void(0)"
                  class="btn btn-light toggle-password"
                  data-bs-toggle="tooltip"
                  data-placement="right"
                  title="toggle show/hide password"
                >
                  <i class="far fa-eye eye-on"></i>
                  <i class="far fa-eye-slash eye-off"></i>
                </a>
              </div>
              <!-- end col-lg-12 -->
              <div class="col-lg-12">
                <button class="theme-btn mt-3 border-0" type="button">
                  Change Password
                </button>
              </div>
              <!-- end col-lg-12 -->
            </div>
            <!-- end row -->
            <div class="border border-danger p-4 mt-5 rounded d-none">
              <h4 class="font-size-20 font-weight-semi-bold mb-1 text-danger">
                Delete Account
              </h4>
              <p class="mb-3">
                <span class="text-warning">Warning:</span> Once you delete your
                account, there is no going back. Please be certain.
              </p>
              <a
                href="#"
                class="theme-btn bg-danger"
                data-bs-toggle="modal"
                data-bs-target="#deleteAccountModal"
                >Delete Account</a
              >
            </div>
          </div>
          <!-- end tab-pane -->
        
          <!-- end tab-pane -->
        </div>
        <!-- end tab-content -->
      </div>
    </section>


</template>
<script setup>
  definePageMeta({
  middleware: 'auth'
})
import { ref,onMounted  } from 'vue';
import { useRouter } from 'vue-router';
import authService from '~/services/authService';
import eventService from '@/services/eventService'; // Adjust the path based on your project structure
const events = ref([]);

const router = useRouter();
// Fetch events using eventService

const profile = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  description: '',
  profile_image: '',
  profile_image_url: '',
  website: '',
  facebook: '',
  twitter: '',
  instagram: '',
});

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    profile.value.profile_image = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      profile.value.profile_image_url = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const saveChanges = async () => {
  try {
    const updatedProfile = await authService.updateUserProfile(profile.value);
    // console.log('Profile updated successfully:', updatedProfile);
    useNuxtApp().$toast.success('Profile updated successfully!', {
       autoClose: 5000,
       theme: "colored",
       dangerouslyHTMLString: true,
     })
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};

const getEvents = async () => {
  try {
    const data = await eventService.getUserListings();
    events.value = data;
   
  } catch (error) {
    console.error('Error fetching events:', error);
    // Handle error as needed
  }
};
const getProfile = async () => {
  try {
    const data = await authService.getUserProfile();
    profile.value = data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    // Handle error as needed
  }
};
// Fetch events when component is mounted
onMounted(() => {
  getEvents();
  getProfile();
});
const logoutUser = async () => {
  try {
    // Optionally, you can call a logout endpoint in your Laravel API to invalidate the token
    await authService.logout();

    // Clear the token from local storage
    localStorage.removeItem('access_token');

    // Redirect to the login page
    router.push('/login');
    
    // Show a success message
    useNuxtApp().$toast.success('Successfully logged out.', {
      autoClose: 5000,
      theme: "colored",
      dangerouslyHTMLString: true,
    });
  } catch (error) {
    console.error('Error logging out:', error);
    useNuxtApp().$toast.error('Failed to logout. Please try again.', {
      autoClose: 5000,
      theme: "colored",
      dangerouslyHTMLString: true,
    });
  }
};
const deleteEvent = async (id) => {
    try {
        const result = await useNuxtApp().$swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            // User confirmed deletion, proceed with deleting event
         await eventService.deleteEvent(id);
       useNuxtApp().$toast.success('Your event has been deleted.', {
      autoClose: 5000,
      theme: "colored",
      dangerouslyHTMLString: true,
    });
    getEvents();
        }
    } catch (error) {
        useNuxtApp().$swal.fire(
            'Error!',
            'Failed to delete event.',
            'error'
        );
        console.error('Error deleting event:', error);
    }
};

</script>
<style scoped>
.category-container {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping to the next line if necessary */
  gap: 8px; /* Adds space between items */
}

.category-item {
  display: flex;
  align-items: center;
}

.card-cat {
  display: flex;
  align-items: center;
  padding: 8px;
  text-decoration: none;
  color: #333;
}

.icon-element {
  margin-right: 8px;
}
/* Add your custom styles here */
</style>