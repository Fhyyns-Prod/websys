function initSlideshows() {
  $('.slideshow-container').each(function() {
    var slideshowId = $(this).attr('id');
    var slideshowIndex = parseInt(slideshowId.replace('slideshow', ''));
    showSlides(slideshowIndex, getSlideIndex(slideshowIndex));
    setInterval(function() {
      plusSlides(1, slideshowIndex);
    }, 3000);
  });
}

// Next/previous controls
function plusSlides(n, slideshowIndex) {
  showSlides(slideshowIndex, getSlideIndex(slideshowIndex) + n);
}

// Thumbnail image controls
function currentSlide(n, slideshowIndex) {
  showSlides(slideshowIndex, n);
}

// Function to show the slides for a given slideshow
function showSlides(slideshowIndex, n) {
  var slideshowId = 'slideshow' + slideshowIndex;
  var slides = $('#' + slideshowId + ' .mySlides');
  var dots = $('#' + slideshowId + ' .dot');

  if (n > slides.length) {
    n = 1;
  }
  if (n < 1) {
    n = slides.length;
  }

  slides.hide();
  dots.removeClass('active');
  $(slides[n - 1]).show();
  $(dots[n - 1]).addClass('active');
  setSlideIndex(slideshowIndex, n);
}

// Function to get the current slide index for a given slideshow
function getSlideIndex(slideshowIndex) {
  var slideIndex = sessionStorage.getItem('slideIndex' + slideshowIndex);
  return slideIndex ? parseInt(slideIndex) : 1;
}

// Function to set the current slide index for a given slideshow
function setSlideIndex(slideshowIndex, slideIndex) {
  sessionStorage.setItem('slideIndex' + slideshowIndex, slideIndex);
}

// Call the function to initialize the slideshows immediately
initSlideshows();
