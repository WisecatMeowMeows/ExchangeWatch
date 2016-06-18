
var Price1 = document.getElementById("Price1");


//var GotPrice1 = GET FROM WEBSOCKET;


function refreshData(){
	i = Price1.innerHTML;
	//var i = Number(i); //not necessary, because JS automatically converts it to a number
	i++;
	//return i;
	Price1.innerHTML = i;
}