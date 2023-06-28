function startProgress() {
    const progressBar = document.getElementById('swiper-hero-progress');
    const duration = 3000; // 3 seconds
    const interval = 100; // Interval for updating progress bar (in milliseconds)
    const increment = interval / duration; // Amount to increment progress per interval
    let progress = 0; // Current progress
  
    const progressLoop = setInterval(() => {
      progress += increment;
      progressBar.style.width = `${progress}%`;
  
      if (progress >= 100) {
        clearInterval(progressLoop);
        setTimeout(() => {
          progressBar.style.width = '0%';
          startProgress(); // Restart the progress loop
        }, 3000); // Wait for 3 seconds before restarting
      }
    }, interval);
  }
  
  startProgress();
  