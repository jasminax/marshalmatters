$(document).ready(function(){

	var form = '<form><fieldset><input type="text" name="paddlername" placeholder="Name"/>\
		<input type="text" name="paddlerweight" placeholder="Weight"/>\
		<label class="gender-selection radio inline">\
		<input type="radio" name="genderselection" class="malepaddler" value="male">Male</input>\
		</label>\
		<label class="gender-selection radio inline">\
		<input type="radio" name="genderselection" class="femalepaddler" value="female">Female</input>\
		</label>\
		<br/>\
		<label class="paddler-side checkbox inline">\
		<input type="checkbox" value="">Left\
		</label>\
		<label class="paddler-side checkbox inline">\
		<input type="checkbox" value="">Right\
		</label>\
		</fieldset>\
		</form>';

	// console.log(form);

	$('.row').find('li').append(form);

	var minimumGirls = $('#female-minimum').val();

	var checkMinimumGirls = function() {
		var females = $('.femalepaddler:checked').length;
		console.log(females);
		console.log(minimumGirls);
		if (females < minimumGirls) {
			$("#female-status").html("<span class='alert alert-error'>Too many dicks!</span>")
		}
		else {
			$("#female-status").html("<span class='alert alert-success'>Enough chicks.</span>")
		}
	}

	$('input[type=radio]').on("click", checkMinimumGirls);
	

});