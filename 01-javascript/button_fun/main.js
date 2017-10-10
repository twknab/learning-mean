/* JS file for Button Fun Assignment */


// First, button actions using jQuery:

$(document).ready(function(){

	$('#jqueryButton').on('click', function(){
		$(this).toggleClass('buttonBackground');
	});

	$('#jqueryButton').on('mouseover mouseout', function(){
		$(this).toggleClass('buttonGreen');
	});

	document.onkeydown = function(e){
		console.log(e.keyCode);
		if (e.keyCode == 13){
			$('#jsOnlyButton').show();
		}
	}

	
	// Second, button actions using JS only, no jQuery:

	var myButton = document.getElementById('jsOnlyButton');
	myButton.addEventListener('click',changeColor);
	myButton.addEventListener('mouseover', goGreen);
	myButton.addEventListener('mouseout', goBlueAgain);

	function changeColor(){
		myButton.classList.toggle('buttonBackground');
	};

	function goGreen(){
		myButton.classList.toggle('buttonGreen');
	};

	function goBlueAgain(){
		myButton.classList.toggle('buttonGreen');
	};



})

