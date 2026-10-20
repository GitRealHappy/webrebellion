// Mobile menu: a side drawer. Without this script the menu simply shows as links under the header.
(function () {
  var button = document.querySelector('.menu-button');
  var drawer = document.getElementById('sidebar');
  var scrim = document.querySelector('.scrim');
  if (!button || !drawer || !scrim) return;

  function setOpen(open) {
    drawer.setAttribute('data-open', open ? 'true' : 'false');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    scrim.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) { var first = drawer.querySelector('a'); if (first) first.focus(); }
    else { button.focus(); }
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  scrim.addEventListener('click', function () { setOpen(false); });
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('a') && button.getAttribute('aria-expanded') === 'true') { setOpen(false); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { setOpen(false); }
  });
})();

// Highlight the sidebar link for the section the visitor has scrolled to.
(function () {
  var nav = document.getElementById('sidebar');
  if (!nav) return;
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var items = links.map(function (a) {
    return { link: a, target: document.getElementById(a.getAttribute('href').slice(1)) };
  }).filter(function (item) { return item.target; });
  if (!items.length) return;

  var ticking = false;

  function update() {
    ticking = false;
    var line = window.innerHeight * 0.3;
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    var current = items[0];
    items.forEach(function (item) {
      if (item.target.getBoundingClientRect().top <= line) current = item;
    });
    if (atBottom) current = items[items.length - 1];
    items.forEach(function (item) {
      if (item === current) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    });
    // keep the active link in view if the sidebar itself scrolls
    if (nav.scrollHeight > nav.clientHeight) {
      var l = current.link.getBoundingClientRect();
      var n = nav.getBoundingClientRect();
      if (l.top < n.top || l.bottom > n.bottom) {
        nav.scrollTop += (l.top - n.top) - (n.height / 2);
      }
    }
  }

  function onScroll() {
    if (!ticking) { ticking = true; window.setTimeout(update, 50); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
