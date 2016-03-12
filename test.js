
var arrBox = document.getElementById('arr-box');

describe("openArrBox", function() {
	before(function() {
		document.getElementById('goBtn').click();
	});
	after(function() {
		document.getElementById('clearBtn').click();
	});

	describe("setArray", function() {
		it("Создание массива", function() {
	    	assert.notEqual(window.arr.length,0);
	  	});

	  	it("Значения массива - числа", function() {
	  		for (var i = 0; i < arr.length; i++) {
	  			assert(!isNaN(arr[i]));
	  		}  	
	  	});
	});

	describe("drawArray", function() {
		describe("addElem", function(){
			it("Отрисовка массива", function() {
				for (var i = 0; i < arr.length; i++) {
					assert.isNotNull(document.getElementById("elem"+i));
				} 
			});		
		});
		it("Открытие панели визуализации", function() { 
			assert.equal(arrBox.style.visibility,'visible');
		});
	});
});

describe("clearArrBox", function() {
	before(function() {
		document.getElementById('goBtn').click();
		document.getElementById('clearBtn').click();
	});
	it("Обнуление значений input-ов", function() {
		var form = document.forms[0].elements;		
		for (var i = 0; i < form.length-1; i++) {
			assert.equal(form[i].value,'');
	}
	});
	it("Cокрытие панели визуализации", function() {		
		assert.equal(arrBox.style.visibility,'hidden');
	});
});

describe("eraseArrBox", function() {
	before(function() {
		document.getElementById('goBtn').click();
		document.getElementById('clearBtn').click();
	});
	it("Удаление div эл-ов визуализации", function() {
		for (var i = 0; i < arr.length; i++) {
			assert(!document.getElementById('elem'+i));
		} 		
	});
});

describe("nextClicked", function(){
	before(function() {
		document.forms[0].elements[0].value = 5;
		document.forms[0].elements[1].value = 3;
		document.forms[0].elements[2].value = 7;
		document.getElementById('goBtn').click();
		document.getElementById('nextBtn').click();
	});
	after(function(){
		document.getElementById('clearBtn').click();
	});
	describe("swapValElems", function(){
		it("Смена значения эл-ов, если эл1<эл2", function() {		
			assert.equal(document.getElementById('elem0').innerHTML,3);
			assert.equal(document.getElementById('elem1').innerHTML,5);
		});
	});
	describe("dyeElems", function(){
		it("Смена цвета(красный), если эл1<эл2", function() {		
			assert.equal(document.getElementById('elem0').style.backgroundColor,'rgb(255, 83, 60)');
			assert.equal(document.getElementById('elem1').style.backgroundColor,'rgb(255, 83, 60)');
		});
		it("Смена цвета(жёлтый), если эл1>=эл2", function() {
			document.getElementById('nextBtn').click();		
			assert.equal(document.getElementById('elem1').style.backgroundColor,'rgb(255, 255, 60)');
			assert.equal(document.getElementById('elem2').style.backgroundColor,'rgb(255, 255, 60)');
		});
	});
	describe("undyeElems", function(){
		it("Сброс цвета при полном проходе массива", function() {		
			while(innerI != 0){
				document.getElementById('nextBtn').click();	
			}
			for (var i = 0; i < arr.length; i++) {
				var color = document.getElementById('elem'+i).style.backgroundColor;
				assert.equal(color,'rgb(249, 249, 249)');
			}
		});
	});
});


