// function -> dahij ashiglah boljtoi kodnii tsugluulga
// 1. define -> zarlah
// argument/parametr -> func-iin zaaval avah utga
function hello(name,age){
	console.log("Hello "+name);
	console.log("Your age is "+ age);
}
// 2. call -> duudaj ajluulna
hello("l ",20);
function nas(nas1){
	// NaN not a number
	console.log("Your birth year is:"+(2024-nas1));
}
nas(14);
function la(number,number1){
	console.log(number+"+"+number1+"="+(number+number1));
}
la(10,30);
// DOM -> Document : html deerh buh code
console.log(document);
var h1=document.getElementsByTagName('h1')[0];
console.log(h1);
// variableName.style.styleName="value";
h1.style.color="blue";
// varName.innerText="value"; ->
h1.innerText="hello";
function changeText(){
	h1.style.color="red";
	h1.innerText="HELLO";
}
console.log(document);
var h2=document.getElementsByTagName('h2')[0];
console.log(h2);
function changeText1(){
	h2.style.color="blue";
	h2.innerText="Hi";
}
var input=document.getElementsByTagName('input')[0];
var p=document.getElementsByTagName('p')[0];
var p1=document.getElementsByTagName('p')[1];
var p2=document.getElementsByTagName('p')[2];
console.log(input);
console.log(p);
function nas2(){
	console.log(2024-input.value);
	p.innerText="Your birth year:"+(2024-input.value);
	if(input.value>=18 && input.value<=130){
		p1.innerText="Ta nasand hursen bn";
		p1.style.color="black"
	}else if(input.value>130){
		p1.innerText="Hun iim naslah bolomjgui";
		p1.style.color="red"
	}else if(input.value>=0 && input.value<=17){
		p1.innerText="Ta nasand hureegui bn";
		p1.style.color="black"
	}else if(input.value<0){
		p1.innerText="Ta toroogui bn";
		p1.style.color="yellow"
	}else if(input.value==""){
		alert("Hooson baij bolohgui");
	}else{
		alert("Nasaa bichne uu!!!");
	}
	p2.innerText=parseInt(input.value)+10
}