//check off specific todos by clicking
$("ul").on("click", "li", function(){
 $(this).toggleClass("completed");
});

//click trash icon to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grab todo text from input
     var todoText = $(this).val();
     $(this).val("");
      //create new li and add to ul
      $("ul").append("<li><span><i class='fas fa-trash'></i> </span> " + todoText + "</li>")
	}
	});

$(".fa-file-medical").click(function(){
	$("input[type='text']").fadeToggle();
})
