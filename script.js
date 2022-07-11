// Opacity sticky menu Scroll bg
document.addEventListener('scroll', function(){
    if (window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    }
    else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 42.361145, lng: -71.057083 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }