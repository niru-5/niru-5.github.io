// Theme toggle, fade-in on scroll, and lazy autoplay video. No dependencies.
(function () {
  var root = document.documentElement;

  // ---- Theme toggle (light by default, saved after click) ----
  var toggle = document.getElementById('theme-toggle');
  function currentTheme() {
    return root.dataset.theme || 'light'; // light by default
  }
  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  // ---- Fade-in on scroll ----
  var reveals = document.querySelectorAll('.reveal');
  if (hasIO && !reduce) {
    document.documentElement.classList.add('js-reveal');
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    reveals.forEach(function (el) { ro.observe(el); });
  }

  // ---- Lazy-load + autoplay-on-scroll for self-hosted video ----
  var video = document.getElementById('chess-video');
  if (video && hasIO) {
    var loaded = false;
    var vo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          if (!loaded) {
            video.src = video.dataset.src;
            loaded = true;
          }
          if (!reduce) { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
        } else if (loaded) {
          video.pause();
        }
      });
    }, { threshold: 0.4 });
    vo.observe(video);
    // Controls let people play manually if autoplay is blocked or reduced motion is on
    if (reduce) video.controls = true;
    video.addEventListener('error', function () { video.removeAttribute('src'); });
  }
})();
