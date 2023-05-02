$(document).ready(function(){
    var currentProject = ""; // variable to store the ID of the currently shown project
    
    // Button 1
    $("#p1-button").click(function(){
      if (currentProject !== ".p1-content") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".p1-content";
        $(currentProject).show("fast"); // show the new project
      }
    });
    
    // Button 2
    $("#p2-button").click(function(){
      if (currentProject !== ".p2-content") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".p2-content";
        $(currentProject).show("fast"); // show the new project
      }
    });
    
    // Button 3
    $("#p3-button").click(function(){
      if (currentProject !== ".p3-content") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".p3-content";
        $(currentProject).show("fast"); // show the new project
      }
    });
    
    // Button 4
    $("#p4-button").click(function(){
      if (currentProject !== ".p4-content") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".p4-content";
        $(currentProject).show("fast"); // show the new project
      }
    });
    
    // Hide all content sections
    $(".p1-content, .p2-content, .p3-content, .p4-content").hide();
    
}); 