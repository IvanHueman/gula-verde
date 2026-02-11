export const vReveal = {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('active');
          // El binding.value puede ser el delay si quieres (v-reveal="0.2")
          if (binding.value) {
            el.style.transitionDelay = `${binding.value}s`;
          }
        }
      });
    }, { threshold: 0.15 });
    
    observer.observe(el);
  }
};