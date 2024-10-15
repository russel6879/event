<template>
    <div class="image-cropper">
      <!-- Image upload section -->
      <input type="file" accept="image/*" @change="onFileChange" />
      
      <div v-if="imageUrl" class="cropper-wrapper">
        <!-- Vue Advanced Cropper -->
        <cropper
          :src="imageUrl"
          :stencil-props="{ aspectRatio: 1 }"
          @change="onCropChange"
        />
      </div>
  
      <span v-if="imageUrl" @click="cropImage">Crop Image</span>
  
      <!-- Show cropped image -->
      <div v-if="croppedImage">
        <h3>Cropped Image:</h3>
        <img :src="croppedImage" alt="Cropped image" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Cropper } from 'vue-advanced-cropper';
  import 'vue-advanced-cropper/dist/style.css';
  
  // Reactive references for the cropper
  const cropperData = ref(null);
  const imageUrl = ref(null); // Holds the uploaded image URL
  const croppedImage = ref(null);
  
  // Handle file upload
  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imageUrl.value = event.target.result; // Load the image into cropper
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
  };
  </script>
  
  <style scoped>
  .cropper-wrapper {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
  
  img {
    max-width: 100%;
  }
  </style>
  