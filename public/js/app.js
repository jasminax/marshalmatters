$(document).ready(function(){

	var form = '<form><fieldset><input type="text" name="paddlername" placeholder="Name"/>\
		<input type="text" name="paddlerweight" placeholder="Weight"/>\
		<label class="gender-selection radio inline">\
		<input type="radio" name="genderselection" id="malepaddler" value="male">Male</input>\
		</label>\
		<label class="gender-selection radio inline">\
		<input type="radio" name="genderselection" id="femalepaddler" value="female">Female</input>\
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

	

});