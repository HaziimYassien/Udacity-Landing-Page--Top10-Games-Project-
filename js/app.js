const sections = document.querySelector(".sections"); //selecting the main div that includes the sections
const section = document.querySelectorAll(".section"); //selecting the sections individually by classes
const active = document.querySelector(".active"); //selecting the active class from the css file
const navBar = document.querySelector(".NavBar"); //selecting the navigation Bar

/**
 * @description adding a for each to loop through the sections
 * @param {variable} sectionElm the sectionElm that we will loop thorugh
 */
section.forEach((sectionElm) => {
  //starting the forEach function to select every Section individually
  const classes = sectionElm.getAttribute("class"); //selecting the classes
  const newSection = document.createElement("div"); //creating the new section
  navBar.appendChild(newSection); //appending the new Section to the navigation bar
  newSection.setAttribute("class", "navBtn"); //setting the style of the new section to be similar to the others

  /**
   * @description adding an event listener to every new section that will be added
   *
   */
  newSection.addEventListener("click", () => {
    //starting the addEventListener that will be activated every time the navBtn is clicked
    sectionElm.scrollIntoView({
      //scrolling into the clicked element depending on the clicked navBtn
      behavior: "smooth", //the type of the scroll
      block: "end",
      inline: "center", //where to stop scrolling
    });
  });
  navBar.appendChild(newSection); //appending the newSection that we made and added the event listener to to the navigation bar
});
//defined the two below variables next to each other so we can modify them
const gameName = document.querySelectorAll(".GameName"); //getting the game name so we can change the navigation button inner text
const navBtn = document.querySelectorAll(".navBtn"); //getting teh navigation button so we can change it
for (var i = 0; i < navBtn.length; i++) {
  //starting a for loop to change every name individually
  navBtn[i].innerText = gameName[i].innerText; //changing the navigation button text
}

/**
 * @description the callback function that will be added to the observer function
 * @param {variable} entries - the entries that will be added
 */
function callback(entries) {
  //the callback function that will be added to the observer function
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //checking which section is intersecting using an if statment
      section.forEach((sec) => {
        if (sec.classList.contains("active")) {
          //removing all the active classes using an if statment
          sec.classList.remove("active");
        }
      });
      entry.target.classList.add("active"); //adding the active class to the new intersecting section
    }
  });
}

const options = {
  //starting the options so we can add it to the observer function
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options); //the intersection function

/**
 * @description starting a foreach to observe every section
 * @param {variable} sec the section that will be observed
 *
 */
section.forEach((sec) => {
  observer.observe(sec);
});

//adding the scroll to top button
const scrollToTopButton = document.querySelector("#scrollToTop"); //selecting the button
const titleSection = document.querySelector("#titleSection"); //selecting the section it will scroll to

/**
 * @description adding a listener to the scroll button
 */
scrollToTopButton.addEventListener("click", function () {
  //adding the scroll event
  //eventlistener to scroll to the top of the page
  titleSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
