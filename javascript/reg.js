function check(){
	//read form elements
	var x=document.getElementById('reg');
	//clear prev error message
	var y=document.getElementsByTagName('span');
	for (var i = 0; i < y.length; i++) {
		y[i].style.visibility='hidden';
	}

	
	for (var i = 0; i < x.length-2; i++) {
		x[i].style.outline='none';
	}

	//validation
	//patterns
	var patt1=new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
	var patt2=new RegExp("^[0-9a-zA-Z]*$");
	var patt3=new RegExp("^[a-zA-Z]*$");
	var patt4=new RegExp("^[0-9][ 0-9]*$");
	var patt5=new RegExp("^[0-9][0-9a-zA-Z/]*$");
	var patt6=new RegExp("^[a-zA-Z][ a-zA-Z]*$");
	var patt7=new RegExp("^[0-9]{4}$");
	var patt8=new RegExp("^[a-zA-Z]{3}$");
	
	
	//logic
	if(!patt1.test(x[0].value)){//email
		document.getElementById('email').style.visibility='visible';
		x[0].style.outline='1px solid red';
		return false;
	}
	if(!patt2.test(x[1].value)){//password
		document.getElementById('password1').style.visibility='visible';
		x[1].style.outline='1px solid red';
		return false;
	}
	if(x[1].value!=x[2].value){//re-type password
		document.getElementById('password2').style.visibility='visible';
		x[2].style.outline='1px solid red';
		return false;
	}
	if(!patt3.test(x[3].value)){
		document.getElementById('firstName').style.visibility='visible';
		x[3].style.outline='1px solid red';
		return false;
	}
	if(!patt3.test(x[4].value)){
		document.getElementById('lastName').style.visibility='visible';
		x[4].style.outline='1px solid red';
		return false;
	}
	if(!patt4.test(x[5].value)){
		document.getElementById('mobile').style.visibility='visible';
		x[5].style.outline='1px solid red';
		return false;
	}
	if(!patt4.test(x[6].value)){
		document.getElementById('homeNumber').style.visibility='visible';
		x[6].style.outline='1px solid red';
		return false;
	}
	if(!patt5.test(x[7].value)){
		document.getElementById('unitNo').style.visibility='visible';
		x[7].style.outline='1px solid red';
		return false;
	}
	if(!patt6.test(x[8].value)){
		document.getElementById('streetAdd').style.visibility='visible';
		x[8].style.outline='1px solid red';
		return false;
	}
	if(!patt7.test(x[9].value)){
		document.getElementById('postCode').style.visibility='visible';
		x[9].style.outline='1px solid red';
		return false;
	}
	if(!patt3.test(x[10].value)){
		document.getElementById('city').style.visibility='visible';
		x[10].style.outline='1px solid red';
		return false;
	}
	if(!patt8.test(x[11].value)){
		document.getElementById('state').style.visibility='visible';
		x[11].style.outline='1px solid red';
		return false;
	}
	window.open('confirmReg.html','_self');		
}