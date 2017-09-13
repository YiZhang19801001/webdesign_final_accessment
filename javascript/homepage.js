var n=0;
function secondPassed() {
var cur_date = new Date();
var tar_date = new Date("September 18, 2017 16:00:00");
var dif=Math.floor((tar_date.getTime() - cur_date.getTime())/1000);
	var hrs=Math.floor(dif/3600);
	var min=Math.floor((dif%3600)/60);
	var sec=Math.floor((dif%3600)%60);
	var msg=hrs+" Hours "+min+" Minutes " +sec+" Seconds Left" ;
var timers = document.getElementById('countdown');
	timers.innerHTML=msg;
    // timers.innerHTML = (4 - minutes % 5) + ":" + (seconds >= 50 ? "0" : "") + (59 - seconds);
}
function change(x){
	var arr=document.getElementsByClassName('mySlides')
	if(x==-1){
		if(n>0){
			arr[n].style.display='none';
			arr[n-1].style.display='block';
			n--;
		}else{
			arr[2].style.display='block';
			arr[0].style.display='none';
			n=2;
		}
	}else if(x==1){
		if(n<2)
		{
			arr[n].style.display='none';
			arr[n+1].style.display='block';
			n++;
		}else{
			arr[2].style.display='none';
			arr[0].style.display='block';
			n=0;
		}
	}else{
		arr[0].style.display='block';
	}

}