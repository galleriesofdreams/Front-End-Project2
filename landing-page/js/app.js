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
const ulList = document.getElementById("navbar__list");
/**
 * End Global Variables

 * Begin Main Functions
*/
// build the nav
function createNav(){

//build the loop and append the new elements to the parent container
for(section of sections){

  //create li items and links to sections
  const liItem = document.createElement('li');
  const liItemLink = document.createElement('a');
  //attribute link to the li element
  liItemLink.textContent = section.id;
  liItemLink.setAttribute('class','menu__link');

//attribute link to li element
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

    sections.forEach(section => { 
      if (viewport(section)) {
        section.classList.add('active'); 
      } else {
        section.classList.remove('active');
      }
    });
  });
/**
 * End Main Functions
*/
