var n=5;
function countdown() {
	// body...
	if(n==0){
		window.open('homepage.html','_self');
	}else{
		document.getElementById('sec').innerHTML=n;
		n--;
	}
}