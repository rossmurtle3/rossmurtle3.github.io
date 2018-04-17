$("#modalButton").click(function() {
  $(".modal").addClass("is-active");
  $("html").addClass("is-clipped");  
});

$("#modalClose").click(function() {
   $(".modal").removeClass("is-active");
});

$("#cancelButton").click(function(){
  $(".modal").removeClass("is-active");
})