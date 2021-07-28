"use strict";
var arr = new Array;
var yellow = '#FFFF3C',
	   red = '#FF533C',
	white = '#F9F9F9';
var innerI = 0,//for pseudoloop
	outerI = 0;

function openArrBox(){
	arr = setArray();
	var arrBox = document.getElementById('arr-box');
	if(arrBox.style.visibility == 'visible')
		eraseArrBox(arr,arrBox);
	innerI = 0;
	outerI = 0;
	drawArray(arr,arrBox);
}

function setArray(){
 	var form = document.forms[0].elements;
 	var arr = new Array();
 	for (var i = 0; i < form.length-1; i++) {
 		arr[i] = parseFloat(form[i].value);
 	}
 	for (var i = 0; i < form.length-1; i++) {
 		if(isNaN(arr[i]))
 			arr[i]=0;
 	}
	
 	return arr;
 }

function drawArray(arr, arrBox) {
 	for (var i = 0; i < arr.length; i++) {
 		addElem(i,arr[i],arrBox);
 	}
 	arrBox.style.visibility = 'visible';

}

function eraseArrBox(arr,arrBox){
 	for (var i = 0; i < arr.length; i++) {
 		document.getElementById('elem'+i).remove();
 	}
}

function addElem(index,val,parent) {
	var elemWidth = 50;//.arr-elem width css property

	var elem = document.createElement('div');
	elem.id = 'elem'+index;
	elem.className = 'arr-elem';
	elem.style.left= index*elemWidth +'px';
	elem.innerHTML = val;
	parent.appendChild(elem);
}

function nextClicked(){
	var elem1,elem2;
	if(outerI<arr.length-1){
		if(innerI<arr.length-outerI){
			undyeElems();
			elem1 = document.getElementById('elem'+innerI);
			elem2 = document.getElementById('elem'+(1+innerI));			
			dyeElems(elem1,elem2,yellow);

			if (arr[innerI]>arr[innerI+1]){
				var temp = arr[innerI];
				arr[innerI] = arr[innerI+1];
				arr[innerI+1] = temp;
				dyeElems(elem1,elem2,red);
				swapValElems(elem1,elem2,arr[innerI],arr[innerI+1]);
			}
			innerI++;
			if(innerI == arr.length-outerI){
				innerI =0;
				outerI++;
				undyeElems();
			}
		}
	}else{
		alert('Array is sorted!');
	}
}

function undyeElems(){
	for (var i = 0; i < arr.length; i++) {
		document.getElementById('elem'+i).style.backgroundColor=white;
	}
}

function dyeElems(elem1,elem2,color){
	elem1.style.backgroundColor = color;
	if(elem2)
		elem2.style.backgroundColor = color;
}

function swapValElems(elem1,elem2,val1,val2){
	elem1.innerHTML = val1;
	elem2.innerHTML = val2; 
}

function clearArrBox(){
	var arrBox = document.getElementById('arr-box');
	eraseArrBox(arr,arrBox);
	var form = document.forms[0].elements;
	for (var i = 0; i < form.length-1; i++) {
		form[i].value = '';
	}
	arrBox.style.visibility = 'hidden';
}
