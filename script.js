document.addEventListener('DOMContentLoaded', function(){
  var header = document.getElementById('site-header');
  window.addEventListener('scroll', function(){
    header.style.background = window.scrollY > 40 ? 'rgba(20,33,25,0.97)' : 'rgba(20,33,25,0.92)';
  });
  var els = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.15});
  els.forEach(function(el){ io.observe(el); });
});