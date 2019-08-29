//scroll
function slowScroll (id) {
  var offset = 0; //header height
  $('html,body').animate({
    scrollTop: $(id).offset ().top - offset
  }, 1000);
  return false;
}

function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src,"Image","width=" + width + ",height=" + height);
  }