$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    scrollBar: false,
    keyboardScrolling: true,
  });

  //methods
  $.fn.fullpage.setAllowScrolling(false);
});
