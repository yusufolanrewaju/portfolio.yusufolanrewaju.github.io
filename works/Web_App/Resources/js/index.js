const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animator');
        return;
      }
  
      entry.target.classList.remove('animator');
    });
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const progress = document.querySelectorAll('.progress-bar');
  
  // Loop over the elements and add each one to the observer
  progress.forEach((element) => observer.observe(element));