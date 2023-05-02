// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}

// Start dark mode
const startDarkMode = () => {
  if (!darkMode) {
    enableDarkMode();
    changeIcon();
  }
}

// Use Windows theme by default
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  enableDarkMode();
  changeIcon();
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
  changeIcon();
}

// If the user already visited and not enabled darkMode
// start things off with it off
if (darkMode != 'enabled') {
  disableDarkMode();
  changeIcon();
}

// Call startDarkMode function
startDarkMode();
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// If the user already visited and not enabled darkMode
// start things off with it off
if (darkMode != 'enabled') {
    disableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

// Change Icon
function changeIcon() {
  var icon = document.getElementById("dark-mode-icon");
  if (icon.classList.contains("fa-sun")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}