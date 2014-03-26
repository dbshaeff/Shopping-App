// JavaScript Document

var itemsList = [ ];

$(document).ready(function(e) {
	
	$('#input').focus();
	
	//use enter key to submit
	$("#input").keypress(function(e) {
        if(e.keyCode==13){
			$('#submit').click();
		};
    });

	
//adding items to list
	$('#submit').click(function(){
		
		var input = document.getElementById('input').value;
		var index = itemsList.indexOf(input);
		
		//verify that item is not repeated
		if(index!=-1){
			alert("You already have that on the list!")
			$('#input').val("");
			return(false);
			}
		
		
		//prevent empty inputs
		else if(input==""||input==" "||input=="   "){
			return(false);
		}
		//add item to list
		else{
			itemsList.push(input);
			var lastItem = ((itemsList.length)-1);
			$('#items').append('<li>' + "<input id='checkbox' type='checkbox' index='lastItem'>" + itemsList[lastItem]+ '</li>')			
		};
		$('#input').val("");
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
	
	
});
	


