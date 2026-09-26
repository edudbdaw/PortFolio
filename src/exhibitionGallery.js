/**
 * Eduardo Duran — Museum Exhibition Carousel & Spotlight Hover System
 * Treats projects and technologies as curated museum masterworks
 */

export function initExhibitionGallery() {
  setupSpotlightHovers();
  setupCarousel();
}

/**
 * Museum Spotlight Hover (Luz de galería que sigue al cursor en tarjetas)
 */
export function setupSpotlightHovers() {
  const cards = document.querySelectorAll('.spotlight-card, .glass-card, .museum-card, .project-card-featured, .stack-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * Museum Project Carousel & Slide Controls
 */
function setupCarousel() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const counterEl = document.getElementById('carouselCounter');
  const progressLine = document.getElementById('carouselProgressLine');

  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlide(index) {
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1));

    const targetSlide = slides[currentIndex];
    if (targetSlide) {
      const offsetLeft = targetSlide.offsetLeft;
      track.scrollTo({
        left: offsetLeft - 16,
        behavior: 'smooth'
      });
    }

    if (counterEl) {
      counterEl.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    }

    if (progressLine) {
      const pct = ((currentIndex + 1) / totalSlides) * 100;
      progressLine.style.width = `${pct}%`;
    }

    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === totalSlides - 1;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      updateSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      updateSlide(currentIndex + 1);
    });
  }

  // Keyboard navigation when carousel is visible
  window.addEventListener('keydown', (e) => {
    const rect = track.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowLeft') updateSlide(currentIndex - 1);
      if (e.key === 'ArrowRight') updateSlide(currentIndex + 1);
    }
  });

  // Track scroll listener for drag/touch support with debouncing
  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollLeft = track.scrollLeft;
      let closestIdx = 0;
      let minDiff = Infinity;

      slides.forEach((slide, i) => {
        const diff = Math.abs(slide.offsetLeft - 16 - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      });

      if (closestIdx !== currentIndex) {
        currentIndex = closestIdx;
        if (counterEl) {
          counterEl.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
        }
        if (progressLine) {
          const pct = ((currentIndex + 1) / totalSlides) * 100;
          progressLine.style.width = `${pct}%`;
        }
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex === totalSlides - 1;
      }
    }, 70);
  }, { passive: true });

  updateSlide(0);
}
