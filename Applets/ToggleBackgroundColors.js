// A small JavaScript applet that uses classes to toggle certain background colors.
// This applet works best with the Togglable/light-dark-modes.css.
// This can also be reconfigured to run different CSS

function lightmodetoggle() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

function darkmodetoggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

/** Here is a template for use for another mode:
 **
 ** function <class>modetoggle() {
 **   var element = document.body;
 **   element.classList.toggle("<class>-mode");
 ** }
 **
 ** Where <class> is the name of your mode, without the brakets.
 ** No other part of the function changes to toggle a mode.
**/
