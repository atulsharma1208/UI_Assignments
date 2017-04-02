function reset() {
	document.getElementById("register-form").reset();
}

var flag = 0;

function register() {

	if (flag === 0) {

		var li = document.createElement("li");
		var first = document.getElementById("fname").value;
		var last = document.getElementById("lname").value;
		var name = first;
		var name = name.concat(" ");
		var name = name.concat(last);
		console.log(name);
		var finalName = document.createTextNode(name);
		li.appendChild(finalName);
		var email = document.getElementById('eid').value;
		li.setAttribute("title", email, "<br>")
		var element = document.getElementById("output-box-id");
		element.appendChild(li);

		reset();
	}

}



function checkName(fname) {
	if (fname == ' ' || fname == null) {
		return 'empty';
	}
	if (fname.indexOf(' ') > 0) {
		return 'space';
	}
	return true;

}

function checkbox() {

	if (document.getElementById("check").checked) {
		document.getElementById("confirm").value = document.getElementById("permanent").value;
	} else {
		document.getElementById("confirm").value = "";
	}
}

function checkEmail(email) {
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

function checkPhone(phn) {
	var str = phn.length;
	if (str < 10 || str > 10) {
		return false;
	}
	if (isNaN(phn)) {
		return false;
	}
}

function checkPassword(pswd) {
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
	document.getElementById("register-user").onclick = function() {
		register();
	}
	document.getElementById("reset-user").onclick = function() {
		reset();
	}

	document.getElementById("fname").onchange = function() {
		var fname = document.getElementById("fname").value;
		var checkfName = checkName(fname);
		if (checkfName === 'empty') {
			flag++;
			console.log('inside empty');
			alert("First Name cannot be empty");

		}
		if (checkfName === 'space') {
			flag++;
			alert("No spaces are allowed in First Name");

		}
	};

	document.getElementById("permanent").onblur = function() {
		var permanent = document.getElementById("permanent").value;
		if (permanent == ' ' || permanent == null) {
			flag++;
			alert("Address cannot be empty");
		}
	};

	document.getElementById("eid").onchange = function() {
		var eid = document.getElementById("eid").value;
		console.log(eid);
		var checkEid = checkEmail(eid);
		console.log('inside fun' + checkEid);
		if (checkEid === false) {
			flag++;
			alert("Please provide correct email id");
		}
	};
	document.getElementById("phn").onchange = function() {
		var phn = document.getElementById("phn").value;
		if (phn == ' ' || phn == null) {
			flag++;
			alert("Phone Number cannot be empty");
		}
		if (phn.indexOf(' ') > 0) {
			flag++;
			alert("No spaces are allowed in Phone Number");
		}
		var checkphn = checkPhone(phn);
		if (checkphn === false) {
			flag++;
			alert("Please provide correct phone number");
		}
	};
	document.getElementById("pswd").onchange = function() {
		var pswd = document.getElementById("pswd").value;
		var checkpswd = checkPassword(pswd);
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
	};

	document.getElementById("cpswd").onchange = function() {
		var cpswd = document.getElementById("cpswd").value;
		var pswd = document.getElementById("pswd").value;
		if (cpswd != pswd) {
			flag++;
			alert(" Password and confirm password should be same");
		}
	};


}