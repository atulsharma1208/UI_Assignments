var flag = 0;

$.fn.checkName = function(fname) {
	if (fname == ' ' || fname == null) {
		console.log(fname);
		return 'empty';
	}
	if (fname.indexOf(' ') > 0) {
		return 'space';
	}
	return true;
}
$.fn.reset = function() {
	$('#register-form').trigger("reset");
}

$.fn.register = function() {

	if (flag === 0) {


		var ul = $('#output-box-id');
		var fstName = $('#fname').val();
		var lastName = $('#lname').val();
		var email = $('#eid').val();
		var li = $("<li></li>", {
			class: "output-box-id-item"
		});

		var a = $("<div></div>", {
			class: "output-box-id-item-name",
			href: "#"
		}).text(fstName + " " + lastName);

		var div = $("<a></a>", {
			class: "output-box-id-item-email"
		}).text(email);

		li.append(a);
		li.append(div);
		ul.append(li);

		$.fn.reset();
	}

}

$.fn.checkEmail = function(email) {
	if (email == '' || email == null) {
		alert("Email-id cannot be empty");
	}

	if (email.indexOf(' ') > 0) {
		alert("No spaces are allowed in Emailid");
	}
	var pattern = new RegExp("[a-z0-9.+-]+@[a-z]+\.[a-z]{2,3}$");
	if (pattern.test(email)) {
		return true;
	} else {
		return false;
	}
}

$.fn.checkbox = function() {

	if ($('#check').is(':checked')) {
		//$('#confirm').attr('disabled', true);
		$('#confirm').attr('value', $('#permanent').val());
	} else {
		$("#confirm").attr("disabled", false);
		$("#confirm").attr("value", "");
	}
}

$.fn.checkPhone = function(phn) {
	var str = phn.length;
	if (str < 10 || str > 10) {
		return false;
	}
	if (isNaN(phn)) {
		return false;
	}
}

$.fn.checkPassword = function(pswd) {
	if (pswd == '' || pswd == null) {
		return 'empty';
		alert("Password cannot be empty");
	}

	if (pswd.indexOf(' ') > 0) {
		return 'space';
		alert("No spaces are allowed in Password");
	}
	if (pswd.length < 8) {
		return 'shortpswd';
	}
	var upper = 0,
		no = 0,
		special = 0;
	for (var i = 0; i < pswd.length; i++) {
		if (pswd[i] >= 'A' && pswd[i] <= 'Z') {
			upper++;
		}
		if (pswd[i] >= 0 && pswd[i] <= 9)
			no++;
		if (pswd[i] == '!' || pswd[i] == '@' || pswd[i] == '#' || pswd[i] == '$' || pswd[i] == '%' || pswd[i] == '&')
			special++;
	}

	if (upper == 0 || no == 0 || special == 0) {
		return 'incorrect';
	}
}

window.onload = function() {

	$('#reset-user').on('click', function() {
		$.fn.reset();
	});

	$('#register-user').on('click', function() {
		$.fn.register();
	});
	//NAME VALIDATION

	$('#fname').on('change', function() {
		var fname = $('#fname').val();
		console.log("bhn" + fname);
		var checkfName = $.fn.checkName(fname);
		console.log("Inside window" + fname);
		if (checkfName === 'empty') {
			flag++;
			alert("First Name cannot be empty");

		}
		if (checkfName === 'space') {
			flag++;
			alert("No spaces are allowed in First Name");

		}
	});
	//ADDRESS VALIDATION

	$('#permanent').on('blur', function() {
		var permanent = $('#permanent').val();
		console.log("PERMANENT" + permanent);
		if (permanent == null) {
			flag++;
			alert("Address cannot be empty");
		}
	});
	$('#check').on('click', function() {
		$.fn.checkbox();
	});
	//EMAIL VALIDATION

	$('#eid').on('change', function() {
		var eid = $('#eid').val();
		//console.log(eid);
		var checkEid = $.fn.checkEmail(eid);
		console.log('inside fun' + checkEid);
		if (checkEid === false) {
			flag++;
			alert("Please provide correct email id");
		}
	});

	//PHONE VALIDATION 
	$('#phn').on('change', function() {
		var phn = $('#phn').val();
		if (phn == ' ' || phn == null) {
			flag++;
			console.log(phn);
			alert("Phone Number cannot be empty");
		}
		if (phn.indexOf(' ') > 0) {
			flag++;
			alert("No spaces are allowed in Phone Number");
		}
		var checkphn = $.fn.checkPhone(phn);
		if (checkphn === false) {
			flag++;
			alert("Please provide correct phone number");
		}
	});
	//PASSWORD VALIDATION
	$('#pswd').on('change', function() {
		var pswd = $('#pswd').val();
		var checkpswd = $.fn.checkPassword(pswd);
		if (checkpswd == 'empty') {
			flag++;
			alert("Password cannot be empty");
		}
		if (checkpswd == 'space') {
			flag++;
			alert("No spaces are allowed in Password");
		}
		if (checkpswd == 'shortpswd') {
			flag++;
			alert("Password length should be minimum 8");
		}
		if (checkpswd == 'incorrect') {
			flag++;
			alert("Password should have minimum 1 special character, 1 number, 1 uppercase letter. no spaces allowed and minimum 8 characters");
		}
	});

	$('#cpswd').on('change', function() {
		var cpswd = $('#cpswd').val();
		var pswd = $('#pswd').val();
		if (cpswd != pswd) {
			flag++;
			alert(" Password and confirm password should be same");
		}
	});

}