if (window['location'].pathname.startsWith('/blog/post/')) {
  window.REDIRECT_MODE = 1;
  var element = document.getElementById('move-to');
  element.style.color = '#0b84af';
  var url = element.getAttribute('href');
  document.querySelector('link[rel=canonical]').setAttribute('href', url);
  document.body.innerHTML = '<div style="align-items:center;display:flex;font-size:30px;height:100vh;justify-content:center;line-height:1.5">' + element.outerHTML + '</div>';
  if (window.REDIRECT_MODE === 1) {
    var meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = `0; url=${url}`;
    document.head.appendChild(meta);
  }
  // window['localhost'].href = url;
  document.querySelectorAll('head script').forEach(function(e) {
    e.remove()
  });
}
