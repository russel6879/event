// plugins/timeFormatter.js
export default defineNuxtPlugin(() => {
    return {
      provide: {
        formatTime: (timeString) => {
          if (!timeString) return '';
          return new Date('1970-01-01T' + timeString).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          });
        },
      },
    };
  });
  