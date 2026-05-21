(function () {
  var KEY = 'sfs-auth';
  try {
    var ok = sessionStorage.getItem(KEY) === '1';
    if (!ok) {
      var here = location.pathname.split('/').pop() || '';
      var redirect = here ? '?next=' + encodeURIComponent(here) : '';
      location.replace('index.html' + redirect);
    }
  } catch (e) {
    location.replace('index.html');
  }
})();

function sfsLogout() {
  try { sessionStorage.removeItem('sfs-auth'); } catch (e) {}
  location.replace('index.html');
}
