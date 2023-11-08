if (window['location'].href.startsWith('https://emn178.pixnet.net/blog/post/')) {
  var element = document.getElementById('move-to');
  var url = element.getAttribute('href');
  var meta = document.createElement('meta');
  meta.httpEquiv = 'refresh';
  meta.content = `0; url=${url}`;
  document.head.appendChild(meta);
  document.querySelector('link[rel=canonical]').setAttribute('href', url);
  document.body.innerHTML = '<div style="text-align:center;font-size:48px;line-height:1.5">' + element.outerHTML + '</div>';
  // window['localhost'].href = url;
  document.querySelectorAll('head script').forEach(function(e) {
    e.remove()
  });
}
