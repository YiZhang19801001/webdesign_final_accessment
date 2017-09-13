var flag=1;

function change(obj) {
	// body...
// window.alert(obj.src);//test what obj.src return
	var x=document.getElementById('display');
//add outline and change the opicity
	//reset opicity
	for (var i = 1; i < 5; i++) {
		document.getElementById('btn'+i).style.opicity=0.6;
		document.getElementById('btn'+i).style.outline='none';
	}
	//assign style on active button(img)
	obj.style.opicity=1;
	obj.style.outline='1px solid green';
//change image for display window
	switch(obj.id){
		case 'btn1':
		x.src='../img/mouse'+flag+'_1.png';
		break;

		case 'btn2':
		x.src='../img/mouse'+flag+'_2.png';
		break;

		case 'btn3':
		x.src='../img/mouse'+flag+'_3.png';
		break;

		case 'btn4':
		x.src='../img/mouse'+flag+'_4.png';
		break;
	}
	
}

function change2(obj){
	flag = obj.id.substring(3);
	//change displayed pic
	document.getElementById('display').src='../img/mouse'+flag+'_1.png';
	//change small icon pic
	for (var i = 1; i < 5; i++) {
		document.getElementById('btn'+i).src='../img/small'+flag+'_'+i+'.png';
		document.getElementById('btn'+i).style.outline='none';//reset outline
	}
	document.getElementById('btn1').style.outline='1px solid green';
	//change title of product
	switch(obj.id){
		case 'tag1':
		document.getElementById('model').innerHTML='MERCURY WHITE';
		break;

		case 'tag2':
		document.getElementById('model').innerHTML='BLACK';
		break;

		case 'tag3':
		document.getElementById('model').innerHTML='GUNMETAL GREY';
		break;
	}
}
function change3(obj){
	//logic 1. set all ul display:none, then display:block only one we want
	for (var i = 1; i < 4; i++) {
		//reset the color of button(td) and ul display attribute
		document.getElementById('p'+i).style.color='WHITE';
		document.getElementById('p'+i).style.borderColor='WHITE';
		document.getElementById('p'+i+'ul').style.display='none';
	}

	//change the color for select button(td)
	obj.style.color='#00F00B';
	obj.style.borderColor='#00F00B';
	//show message(ul)
	document.getElementById(obj.id+'ul').style.display='block';
}
function jump(x){
	if(x==2){
		window.open('productdetails.html','_blank');
	}else{
		window.open('shoppingcart.html','_blank');
	}
}