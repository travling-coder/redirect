if (window['location'].href.startsWith('https://emn178.pixnet.net/blog/post/')) {
  var element = jQuery('#move-to');
  var url = element.attr('href');
  var part = `http-equiv="refresh" content="0; url=${url}"`
  jQuery('head').append(`<meta ${part}>`);
  jQuery('link[rel=canonical]').attr('href', url);
  jQuery('body').html('<div style="text-align:center;font-size:48px;line-height:1.5">' + element[0].outerHTML + '</div>');
  // window['localhost'].href = url;
}
