function cal(obj){
	//read input
	var qty=parseInt(obj.parentElement.children[2].value);
	var price = parseFloat(obj.parentElement.children[3].innerHTML.substring(3));
	//calculate
		if(obj.className=='plus')
		{		
			qty++;
			obj.parentElement.children[2].value=qty;
			obj.parentElement.parentElement.children[3].children[0].innerHTML='AU$'+(qty*price).toFixed(2);

		}else if(obj.className=='minus' && qty>0)
		{
			qty--;
			obj.parentElement.children[2].value=qty;
			obj.parentElement.parentElement.children[3].children[0].innerHTML='AU$'+(qty*price).toFixed(2);
		}
	//change summary
	calsum();

}
function jump(){
	//change to checkout page
	window.open('payment.html','_blank')
}
function calsum(){
	//calculate summary table
	//fomular 1. all table(id=list).rows[i].children[3].children[0] total
	//1.
	//read table rows
	var sum_price=0;
	var x= document.getElementById('list');
	for (var i = 0; i < x.rows.length; i++) {
	 	var text_num = x.rows[i].children[3].children[0].innerHTML;//read total for each group of same items
	 	var num=parseFloat(text_num.substring(3));//convert it to float.
	 	sum_price+=num;
	 } 
	 document.getElementById('cl1').innerHTML='AU$'+sum_price.toFixed(2);
	 document.getElementById('cl3').innerHTML='AU$'+(sum_price*0.1).toFixed(2);
	 document.getElementById('cl4').innerHTML='AU$'+(sum_price*1.1).toFixed(2);
}
function remove(obj){
	obj.parentElement.children[0].innerHTML='AU$0';
	obj.parentElement.parentElement.style.display='none';
	calsum();
}