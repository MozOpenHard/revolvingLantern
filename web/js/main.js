$(document).ready(function(){
  $(document).on("click touch", "#left", function(){
    console.log("left");
    $.post("http://lantern.local:3001/left");
  });
  $(document).on("click touch", "#right", function(){
    console.log("right");
    $.post("http://lantern.local:3001/right");
  });
  $(document).on("click touch", "#stop", function(){
    console.log("stop");
    $.post("http://lantern.local:3001/stop");
  });
})

