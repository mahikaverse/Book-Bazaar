

    document.querySelectorAll('.ripple').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const rect = this.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
        circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
        circle.classList.add('ripple');
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
      });
    });

    // Blink transition on page load
window.addEventListener('load', () => {
  const blinkOverlay = document.getElementById('blinkOverlay');
  setTimeout(() => {
    blinkOverlay.style.display = 'none';
  }, 400); // Hide after animation ends
});

 
  // Trigger blink transition and then redirect
  function blinkAndGo(destination) {
    const blinkOverlay = document.getElementById('blinkOverlay');
    blinkOverlay.style.display = 'block';
    blinkOverlay.classList.add('blink-animate');

    setTimeout(() => {
      window.location.href = destination;  // Redirect after blink
    }, 700); // Match with blink duration
  }

  // OPTIONAL: If using blink on page load too
  window.addEventListener('load', () => {
    const blinkOverlay = document.getElementById('blinkOverlay');
    setTimeout(() => {
      blinkOverlay.style.display = 'none';
    }, 700);
  });

 const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });