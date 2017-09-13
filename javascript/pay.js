function jump(){
	window.open('productdetails.html','_blank');
}
// change payment method display information as selected option
function show(a){
	var x=document.getElementsByClassName('box1');
	var y=document.getElementsByClassName('box2');
	var z=document.getElementsByClassName('slash');
	if(a==1){
		f1(y,x);
		z[0].style.display='block';
	}else{
		f1(x,y);
		z[0].style.display='none';
	}
	function f1(arr1, arr2){
		for (var i = 0; i < arr1.length; i++) {
			arr1[i].style.display='none';
		}
		for (var i = 0; i < arr2.length; i++) {
			arr2[i].style.display='block';
		}
	}
}

//validate payment details
function check(){
	var x = document.getElementById('method');
	for (var i = 0; i < x.length; i++) {
		x[i].style.outline='none';
	}

	var patt1=new RegExp(/\d{12}/gi);
	var patt2=new RegExp(/\d{3}/gi);
	var patt3=new RegExp(/\d/gi);
	var patt4=new RegExp(/[\d\D]/gi);

	
	if(x[0].checked){
		if(x[4].value.length!=12 || !patt1.test(x[4].value))
		{
			x[4].value='Invalid Card Number';
			x[4].style.outline='1px solid red';
			return;
		}else if(x[5].value.length!=3||!patt2.test(x[5].value))
		{
			x[5].value='Invalid Number';
			x[5].style.outline='1px solid red';
			return;
		}else if(!patt3.test(x[6].value)){
			x[6].style.outline='1px solid red';
			return;
		}else if(!patt3.test(x[7].value)){
			x[7].style.outline='1px solid red';
			return;
		}else{
			window.open('confirm.html','_self');
		}
	}
	if(x[1].checked){
		if(!patt4.test(x[2].value))
		{
			x[2].style.outline='1px solid red';
			return;
		}else if(!patt4.test(x[3].value)){
			x[3].style.outline='1px solid red';
			return;
		}else{
			window.open('confirm.html','_self');
		}
	}
}	
