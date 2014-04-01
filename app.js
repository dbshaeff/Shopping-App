var itemsList = [ ];

$(document).ready(function(){
	$("#buttons").click(function(){
		//alert($("input").val());
		$("#items").append('<li><input id="checkbox" type="checkbox" index="lastItem">' + $("input").val() + '</li>');
	});
	
	//use enter key to submit
	$("#input").keypress(function(e) {
        if(e.keyCode==13){
			$('#submit').click();
		};
    });	

//remove item from list
	
	$(document).on('click', '#remove_button', function(){
		
		var checked = $('#items input:checked').length
		var indexRemove = $('#items input:checked').index();
		for (i=0; i<=checked-1; i++){
		itemsList.splice((indexRemove+1),1);  
		$('#items input:checked').parent().remove();
		}
		console.log(itemsList);
	});

//double click item, hide item
	$(document).on('dblclick', 'li', function(){
		$(this).hide();
	});

//click checkbox, strikethrough item
	$(document).on('click','li',function (){
   		$(this).css('text-decoration:line-through');   
});

});
	

