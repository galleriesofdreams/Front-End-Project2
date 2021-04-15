/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
const sections = document.querySelectorAll('section');
const ulList = document.getElementById('navbar__list');

/**
 * End Global Variable

 * Begin Main Functions
*/
// build the nav
function createNav(){

//build the loop and append the new elements to the parent container
for(section of sections){

  //create li items and links to sections
  const liItem = document.createElement('li');
  const liItemLink = document.createElement('a');

  //attribute class to liItem
  liItem.setAttribute('id','navigation');
  liItem.classList.add(section.id);

  //attribute link to the li element
  liItemLink.textContent = section.id;
  liItemLink.setAttribute('class', 'menu__link');

//append link to li element
  liItem.appendChild(liItemLink);

//append li items to unordered list
  ulList.appendChild(liItem);

//call scroll function to scroll to section target  
scroll(liItem, section)
    }
}

createNav();

// Scroll to anchor ID using scrollTO event
function scroll(clickTarget, scrollTarget) {
    clickTarget.addEventListener('click', function(event){
        event.preventDefault();
        scrollTarget.scrollIntoView({behavior: 'smooth'});
})
}

// Add class 'active' to section when near top of viewport

//create function to get position from top of the page
function viewport(section) {
  const position = section.getBoundingClientRect();
  return (position.top <= 150 && position.bottom >= 150)
}

//create scroll event listener function for each section
window.addEventListener('scroll', event => {
  let fromTop = window.scrollY;
  const navItem = document.getElementById('navigation');

  sections.forEach(section => { 
      if (viewport(section)) {
        //add class to navbar
        let id = section.getAttribute('id');
        document.querySelector(`.${id}`).classList.add('active-nav');
        //add class to section
        section.classList.add('active'); 
      } else {
        //remove class from navbar
        let id = section.getAttribute('id');
        document.querySelector(`.${id}`).classList.remove('active-nav');
        //remove class from section
        section.classList.remove('active');
      }
    });
  });
/**
 * End Main Functions
*/
//create a button that scrolls to top of the page
const button = document.getElementById('scrollToTopButton');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

//button onclick function to scroll to top of page
function scrollToTop() {

  window.scrollTo({
    top: 0, 
    behavior: 'smooth'});
}

