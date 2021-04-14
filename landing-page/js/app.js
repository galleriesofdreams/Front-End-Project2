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

//build the loop and append the new elements to the parent container
for(section of sections){
  //define variables for the links elements
  const sectionId = section.id;
  const sectionDataNav = section.dataset.nav;
  //create li items and links to sections
  const liItem = document.createElement('li');
  const liItemLink = `<a href="#${sectionId}">${sectionDataNav}</a>`;
  //attribute link to the li element
  liItem.innerHTML = liItemLink;

//append li items to unordered list
ulList.appendChild(liItem);

// Scroll to anchor ID using scrollTO event
liItem.addEventListener('click', function(event){
  event.preventDefault();
  section.scrollIntoView({
    behavior: 'smooth'
  });
});

}

// Add class 'active' to section when near top of viewport


/**
 * End Main Functions
*/
