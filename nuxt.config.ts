// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: true,
  
  modules: ['nuxt-swiper', "@nuxthub/core"],

  runtimeConfig: {
    public: {
      baseURL: 'https://event.findthexpo.com/',
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  
 
  vite: {
    optimizeDeps: {
      include: ['axios'], // Ensure axios is included in optimizeDeps
    },
  },


  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'author', content: 'TechyDevs' },
        { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
        { name: 'description', content: 'Dirto - Directory & Listing HTML Template' },
      ],
      title: 'Dirto - Directory & Listing HTML Template',
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Mukta:200,300,400,500,600,700&display=swap' },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/select2.min.css' },
        { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
        { rel: 'stylesheet', href: '/css/jquery.fancybox.css' },
        { rel: 'stylesheet', href: '/css/daterangepicker.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/bootstrap-tagsinput.css' },
      
      ],
      script: [
        { src: '/js/jquery-3.7.1.min.js', defer: true },
        { src: '/js/bootstrap.bundle.min.js', defer: true },
        { src: '/js/select2.min.js', defer: true },
        { src: '/js/owl.carousel.min.js', defer: true },
        { src: '/js/waypoints.min.js', defer: true },
        { src: '/js/jquery.counterup.min.js', defer: true },
        { src: '/js/jquery.fancybox.min.js', defer: true },      
        { src: '/js/moment.min.js', defer: true },
        { src: '/js/daterangepicker.min.js', defer: true },
        { src: '/js/jquery.lazy.min.js', defer: true },
        { src: '/js/rating-script.js', defer: true },        
        { src: '/js/bootstrap-tagsinput.min.js', defer: true },
        { src: '/js/main.js', defer: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.6/umd/popper.min.js' },

       
      ]

    }
  }
})