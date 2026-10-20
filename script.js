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
