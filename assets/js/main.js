/*
	CopyRight @ Alexandru Larion 2021
*/
const currentWindow =  $(window).height(); 

// HAMBURGHER MENIU
const navigation = document.querySelector('.navigation-closed');
const hamburger = document.querySelector('.hamburger');
const navigationLogo = document.querySelector('.navigation-closed .logo');
function navAnimation() {
	const navigation = document.querySelector('.navigation-closed');
	const navigationLinks = document.querySelector('.hamburger-links');
	hamburger.classList.toggle("change");
	navigation.classList.toggle("navigation-opened");
	var style = getComputedStyle(navigationLinks);
	var display = style.display;
	var styleTwo = getComputedStyle(navigation);
	var position = styleTwo.position;
	if (display === "none") {
		navigationLinks.style.display = "flex";
	} else {
		navigationLinks.style.display = "none";
	}
	if(position === "absolute"){
		navigationLogo.style.display = "none";
	}else {
		navigationLogo.style.display = "flex";
	}
}
// MAIN GALLERY
const galleryActive = document.querySelectorAll('.gallery-menu h6');
const verticalSport = document.querySelectorAll('.vertical-sport');
const horizontalSport = document.querySelectorAll('.horizontal-sport');
const verticalWedding = document.querySelectorAll('.vertical-wedding');
const horizontalWedding = document.querySelectorAll('.horizontal-wedding');
const verticalTraveling = document.querySelectorAll('.vertical-traveling');
const horizontalTraveling = document.querySelectorAll('.horizontal-traveling');
const totalRows = 2;
var x= 0,i=0,y=0; //initial
function photoGallery(x) {
	galleryActive[y].classList.remove("gallery-active");
	if(x === 0){
		galleryActive[x].classList.add("gallery-active");
		y=x;
		for(i=0;i<4;i++){
			verticalSport[i].style.display = "block";
		}
		for(i=0;i<totalRows;i++){
			horizontalSport[i].style.display = "block";
			verticalWedding[i].style.display = "block";
			horizontalWedding[i].style.display = "block";
			verticalTraveling[i].style.display = "block";
			horizontalTraveling[i].style.display = "block";
		}
		
	}
	if(x===1){
		galleryActive[x].classList.add("gallery-active");
		y=x;
		for(i=0;i<4;i++){
			verticalSport[i].style.display = "none";
		}
		for(i=0;i<totalRows;i++){
			horizontalSport[i].style.display = "none";
			verticalWedding[i].style.display = "block";
			horizontalWedding[i].style.display = "block";
			verticalTraveling[i].style.display = "none";
			horizontalTraveling[i].style.display = "none";
		}
		
	}
	if(x===2){
			galleryActive[x].classList.add("gallery-active");
			y=x;
		for(i=0;i<4;i++){
			verticalSport[i].style.display = "none";
		}
		for(i=0;i<totalRows;i++){
			horizontalSport[i].style.display = "none";
			verticalWedding[i].style.display = "none";
			horizontalWedding[i].style.display = "none";
			verticalTraveling[i].style.display = "block";
			horizontalTraveling[i].style.display = "block";
		}
	}
	if(x===3){
			galleryActive[x].classList.add("gallery-active");
			y=x;
		for(i=0;i<4;i++){
			verticalSport[i].style.display = "block";
		}
		for(i=0;i<totalRows;i++){
			horizontalSport[i].style.display = "block";
			verticalWedding[i].style.display = "none";
			horizontalWedding[i].style.display = "none";
			verticalTraveling[i].style.display = "none";
			horizontalTraveling[i].style.display = "none";
		}
	}
}
photoGallery(x);
// BLOOP GALLERY
function videoGallery() {
  const highlight = document.querySelector(".gallery-hightlight");
  highlight.autoplay = true;
}
videoGallery();



// SMOOTH SCROLL
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top},2000,'easeInOutExpo');
});

// ACTIVE MENU

const nav_sections = $('section');
var main_nav = $('.hamburger-links');
$("html, body").animate({ scrollTop: "1" });
$(window).on('scroll', function() {
	if($(window).scrollTop() >= currentWindow){
		$('.navigation-closed').addClass('navigation-sticky');
		$('.hamburger').addClass('hamburger-sticky');
	}else {
		$('.navigation-closed').removeClass('navigation-sticky');
		$('.hamburger').removeClass('hamburger-sticky');
	}
	var cur_pos = $(this).scrollTop() + 200;
    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
			main_nav.find('a').css('color','white');
			main_nav.find('a').removeClass('active-tab');
			if($('.navigation-closed').hasClass('navigation-opened'))
			{
				navAnimation();
			}
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-tab');
		main_nav.find('a[href="#' + $(this).attr('id') + '"]').css('color','#634832');
      }
    });
});
