window.addEventListener("scroll", function(){
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
 });

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

const mediaQuery = window.matchMedia('(min-width: 1061px)')


menuBtn.addEventListener("click", () =>{
        menu.classList.add('active');
        document.getElementById('btn').style.display = "none";
        document.getElementById('btn').style.transition = "2s";
    
});

closeBtn.addEventListener("click", () =>{
        menu.classList.remove('active');
        document.getElementById('btn').style.display = "block";
        if (mediaQuery.matches) {
            ocument.getElementById('btn').style.display = "none";
          }
        document.getElementById('btn').style.transition = "2s";

});
