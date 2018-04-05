var preview = document.getElementById("preview");
var color = document.getElementById("color");
var number = document.getElementById("number");
var range = document.getElementById("range");
var first_r = document.getElementById("first_range");
var second_r = document.getElementById("second_range");
var third_r = document.getElementById("third_range");
var fourth_r = document.getElementById("fourth_range");
var dispDiv = document.getElementById("display");
var i = 1;
var j =1;
//change color 
color.addEventListener("change",function()
{
	preview.style.background = color.value;
});

//change range to number
number.addEventListener("click",function()
{
	first_r.type="number";
	second_r.type="number";
	third_r.type="number";
	fourth_r.type="number";
});

//change number back to range
range.addEventListener("click",function()
{
	first_r.type="range";
	second_r.type="range";
	third_r.type="range";
	fourth_r.type="range";
});

//first range/number input
first_r.addEventListener("change",function(){
	document.getElementById("hair").style.width = first_r.value + "%";
});

//second range/number input
second_r.addEventListener("change",function()
{
	document.getElementById("eyes").style.width = second_r.value + "%";	
});

//third range/number input
third_r.addEventListener("change",function()
{
	document.getElementById("nose").style.width = third_r.value + "%";	
});
// fourth range/number input
fourth_r.addEventListener("change",function()
{
	document.getElementById("mouth").style.width = fourth_r.value + "%";	
});
// change the hair 
document.getElementById("hair").addEventListener("click",function()
{	

	i++;
	document.getElementById("hair").src = "img/hair" + i + ".png";
	if (i >= 3){i = 0}
});
document.getElementById("eyes").addEventListener("click",function()
{	
	j++;
	document.getElementById("eyes").src = "img/eyes" + j + ".png";
	if (j >= 3){j=0}
});
document.getElementById("nose").addEventListener("click",function()
{	
	j++;
	//console.log(j);
	//if (j == 2){
		//document.getElementById("nose").src="img/nose2.png";
	//}else if (j ==3){
		//document.getElementById("nose").src="img/nose3.png";
	//}else
	//{
		//document.getElementById("nose").src="img/nose1.png";
	//}
	document.getElementById("nose").src = "img/nose" + j + ".png";
	if (j >= 3){j = 0}
});
document.getElementById("mouth").addEventListener("click",function()
{	
	//j++;
	//console.log(j);
	//if (j == 2){
		//document.getElementById("mouth").src="img/mouth2.png";
	//}else if (j ==3){
		//document.getElementById("mouth").src="img/mouth3.png";
	//}else
	//{
		//document.getElementById("mouth").src="img/mouth1.png";
	//}
	j ++
	document.getElementById("mouth").src = "img/mouth" + j + ".png";
	if (j >= 3){j = 0}
});
document.getElementById("plus").addEventListener("click",function()
{
	var photo= document.createElement("div");
	photo.className = "photos";
	dispDiv.append(photo);
	photo.style.background=color.value;

	
});

