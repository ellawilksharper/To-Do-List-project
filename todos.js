//check off specific to dos by clicking using class completed
//when an li inside this ul is clicked run this code
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x and delete to do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){ //parent refers to the li
		$(this).remove(); //refers to parent li not the span
	});
	event.stopPropagation();
});

//check whether user has pressed enter
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//getting new to do text from input and assigning it to a variable
		var todoText = $(this).val();
		//clearing the text input using empty string
		$(this).val("");
		//create a new li and add to ul with append
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>  " + todoText + "</li>")
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
