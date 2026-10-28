// Small enhancements. Without this script the page still works: links, buttons and all content stay visible.
(function () {
  var phone = window.matchMedia('(max-width: 47.999rem)');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // 1. Phone menu: a side drawer.
  var button = document.querySelector('.menu-button');
  var drawer = document.getElementById('drawer');
  var scrim = document.querySelector('.scrim');
  function setOpen(open) {
    drawer.setAttribute('data-open', open ? 'true' : 'false');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    scrim.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) { var first = drawer.querySelector('a'); if (first) first.focus(); } else { button.focus(); }
  }
  if (button && drawer && scrim) {
    button.addEventListener('click', function () { setOpen(button.getAttribute('aria-expanded') !== 'true'); });
    scrim.addEventListener('click', function () { setOpen(false); });
    drawer.addEventListener('click', function (e) { if (e.target.closest('a') && button.getAttribute('aria-expanded') === 'true') setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') setOpen(false); });
  }

  // 2. Highlight the nav link for the section being read (top bar and drawer).
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.toplinks a, .drawer a'));
  var sections = [];
  navLinks.forEach(function (a) {
    var el = document.getElementById(a.getAttribute('href').slice(1));
    if (el && sections.indexOf(el) === -1) sections.push(el);
  });
  sections.sort(function (a, b) { return a.offsetTop - b.offsetTop; });

  // 3. Phone buy bar: shows after the hero, hides at the closing call to action.
  var buybar = document.querySelector('.buybar');
  var hero = document.querySelector('.hero');
  var closing = document.getElementById('ask');

  var ticking = false;
  function update() {
    ticking = false;
    var line = window.innerHeight * 0.3;
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    var current = null;
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) current = s; });
    if (atBottom && sections.length) current = sections[sections.length - 1];
    navLinks.forEach(function (a) {
      if (current && a.getAttribute('href') === '#' + current.id) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    if (buybar && hero && closing) {
      var pastHero = hero.getBoundingClientRect().bottom < window.innerHeight * 0.35;
      var c = closing.getBoundingClientRect();
      var atClosing = c.top < window.innerHeight && c.bottom > 0;
      buybar.classList.toggle('show', pastHero && !atClosing);
    }
  }
  function onScroll() { if (!ticking) { ticking = true; window.setTimeout(update, 50); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  // 4. Gentle reveal as sections scroll in. A timer makes sure nothing stays hidden.
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function showAll() { reveals.forEach(function (el) { el.classList.add('in'); }); }
  if (reduce.matches || !('IntersectionObserver' in window)) { showAll(); }
  else {
    var fired = false;
    var io = new IntersectionObserver(function (entries) {
      fired = true;
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
    window.setTimeout(function () { if (!fired) showAll(); }, 3000);
  }

  // 5. On phones, costs start collapsed to the one-line total.
  var costs = document.querySelector('.cost-details');
  if (costs && phone.matches) costs.removeAttribute('open');

  // 6. Real example: on phones a button opens the whole screenshot; on larger screens it drifts down slowly on hover until the visitor scrolls.
  var view = document.getElementById('showcase-view');
  var toggle = document.querySelector('.browser-toggle');
  if (view && toggle) {
    function syncToggle() { toggle.hidden = !phone.matches; if (!phone.matches) view.classList.remove('open'); }
    toggle.addEventListener('click', function () {
      var open = view.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Show less' : 'Show the whole page';
      if (!open) view.scrollIntoView({ block: 'nearest' });
    });
    if (phone.addEventListener) phone.addEventListener('change', syncToggle);
    syncToggle();

    var drifting = false, touched = false;
    function drift() {
      if (!drifting || touched) return;
      view.scrollTop += 1.2;
      if (view.scrollTop + view.clientHeight < view.scrollHeight - 1) window.requestAnimationFrame(drift);
    }
    view.addEventListener('mouseenter', function () {
      if (phone.matches || reduce.matches || touched) return;
      drifting = true; window.requestAnimationFrame(drift);
    });
    view.addEventListener('mouseleave', function () { drifting = false; });
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (type) {
      view.addEventListener(type, function () { touched = true; drifting = false; }, { passive: true });
    });
  }
})();
