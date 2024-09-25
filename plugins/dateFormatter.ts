// plugins/dateFormatter.js
export default defineNuxtPlugin(() => {
    return {
      provide: {
        formatDate: (dateString) => {
          if (!dateString) return '';
          const date = new Date(dateString);
          return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          });
        },
      },
    };
  });
  