/**
 * Eduardo Duran — Lenis Smooth Scrolling Engine & GSAP Sync
 * Powers buttery smooth inertia scroll and scroll-driven parallax calculations
 */

export function initLenisScroll() {
  if (typeof window.Lenis === 'undefined') {
    console.warn('Lenis library not detected, using browser native scroll.');
    return null;
  }

  // Respect user preference for reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    return null;
  }

  const lenis = new window.Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 0.9,
    smoothTouch: false,
    touchMultiplier: 1.8,
  });

  // Wire Lenis with GSAP ScrollTrigger if GSAP is loaded
  if (window.gsap && window.ScrollTrigger) {
    lenis.on('scroll', window.ScrollTrigger.update);

    window.gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    window.gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Parallax Image Reactivity loop
  lenis.on('scroll', updateParallaxOnScroll);

  // Initial calculation
  setTimeout(updateParallaxOnScroll, 100);

  window.lenisInstance = lenis;
  return lenis;
}

/**
 * Computes Parallax Transformations for Gallery Images & Avatar
 */
export function updateParallaxOnScroll() {
  const windowHeight = window.innerHeight;

  // 1. Parallax Images in Exhibition Windows
  const parallaxImages = document.querySelectorAll('.parallax-img');
  parallaxImages.forEach(img => {
    const parent = img.closest('.parallax-window') || img.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    if (rect.top < windowHeight + 150 && rect.bottom > -150) {
      const centerOffset = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
      const intensity = parseFloat(img.getAttribute('data-parallax') || '0.22');
      const translateY = -centerOffset * 32 * intensity;
      const scale = 1.08 + Math.abs(centerOffset) * 0.03;
      img.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
    }
  });

  // 2. Marquee Ribbon Scroll Reactivity
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (marqueeTrack) {
    const scrollY = window.scrollY;
    marqueeTrack.style.setProperty('--scroll-offset', `${-scrollY * 0.45}px`);
  }
}
