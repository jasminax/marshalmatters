$(document).ready(function(){

	var form = '<form><fieldset><input type="text" name="paddlername" placeholder="Name"/>\
		<input type="text" class="weight" name="paddlerweight" placeholder="Weight"/>\
		<label class="gender-selection radio inline">\
		<input type="radio" name="genderselection" class="malepaddler" value="male">Male</input>\
		</label>\
		<label class="gender-selection radio inline">\
		<input type="radio" name="genderselection" class="femalepaddler" value="female">Female</input>\
		</label>\
		<br/>\
		<label class="paddler-side checkbox inline">\
		<input type="checkbox" class="left" value="">Left\
		</label>\
		<label class="paddler-side checkbox inline">\
		<input type="checkbox" class="right" value="">Right\
		</label>\
		</fieldset>\
		</form>';

	// console.log(form);
	
	var boatRow = '<li class="row">\
				<ol>\
					<li class="left">L</li>\
					<li class="right">R</li>\
				</ol>\
			</li>';

	// console.log(boatRow);

	var renderBoat = function(){
		var numberOfRows = $('#number-rows').val();
		
		for (var i = 0; i < numberOfRows; i++){
			$('#boat').append(boatRow);
		}

		var numberOfRows = 0;
	};

	$('#submit').click(function(event){
		event.preventDefault();
		renderBoat();
		$('.row').find('li').append(form);
		});

	

	var checkMinimumGirls = function() {
		var females = $('.femalepaddler:checked').length;
		var minimumGirls = $('#female-minimum').val();
		console.log(females);
		console.log(minimumGirls);
		if (females < minimumGirls) {
			$("#female-status").html("<span class='alert alert-error'>Too many dudes!</span>");
		}
		else {
			$("#female-status").html("<span class='alert alert-success'>Enough chicks.</span>");
		}
	};

	$('input[type=radio]').on("click", checkMinimumGirls);
	$('#female-minimum').on("click", checkMinimumGirls);

	var checkSide = function() {

		// THIS FUNCTION IS BUGGY. I WILL COME BACK TO IT LATER.

		var checkedSide = $('.row').find('input:checked').attr('class');
		// var checkedSide = $(this).parent('li').find('input:checked').attr('class');
		// Change this to the checked ones, not the one that was just checked - done! Now to change it to the checked one in the li

		console.log(checkedSide);
		console.log($(this));
	
		if (!$(this).closest('li').hasClass(checkedSide)) {
			//turn red
			console.log('No Match');
			$(this).closest('li').animate({opacity: 0.4}, 800);
		}
		else{
			//turn border greed
			console.log('Match')
			$(this).closest('li').animate({opacity: 1}, 800);
		}
	};
	
	$('.row').find('input[type=checkbox]').on("click",
		checkSide);


	var sumLeft = 0;
	var sumRight = 0;

	function calculateSumLeft() {		
		$(".left").find(".weight").each(function(){
			if (!isNaN(this.value) && this.value.length!=0) {
				sumLeft += parseFloat(this.value);
			}
		});
		return sumLeft;
	}

	function calculateSumRight() {		
		$(".right").find(".weight").each(function(){
			if (!isNaN(this.value) && this.value.length!=0) {
				sumRight += parseFloat(this.value);
			}
		});
		return sumRight;
	}

	var checkWeights = function() {
		calculateSumLeft();
		calculateSumRight();

		console.log('Left Weight is: '+ sumLeft);
		console.log('Right Weight is: '+ sumRight);		

		if (sumRight === sumLeft) {
			console.log("Equal Balance!");
			$("#balance-status").html("<span class='alert alert-success'>Horray! It is!</span>");
		}
		else {
			console.log('Unbalanced :(');
			$("#balance-status").html("<span class='alert alert-error'>No, it's not. :(</span>");
		}
		sumLeft = 0;
		sumRight = 0;
	};

	$('#weightbtn').on('click', checkWeights);


});