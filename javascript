alert(""); bu brauzerdigi uvidomleniya alert("")ichiga ubunarsa yozse uvidomleniyada ciqadi
console.log()console.log brauzerdigi posmotred kod ichidigi console bungayam ubu narsa yozse ciqarberadi 


var myNumber = 10.484;//myNumberga son yoziladi 12 bunaqa son yozsa boladi 10.543 bunaqa yozsayam  boladi 
var myString = "Привет Вася!";//myStringga soz yoziladi string digani ozi vasheta qator digani myString "" bilan yoziladi
var myBoolean = true;//myBooleanda 2 kod bor 1 true, 2 false, true- togri digani, false-notogri digani
var myNull = null;/*В JavaScript null не является «ссылкой на несуществующий объект» 
или «нулевым указателем», как в некоторых других языках.
Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».*/
var myUndefined = undefined;/*Специальное значение undefined также стоит особняком.
 Оно формирует тип из самого себя так же, как и null.
Оно означает, что «значение не было присвоено».
Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:*/
var myObject = {//object bu abyekt digani hudda biron bir narsa obyekt misol uchun mashina obyekt masinani baloni bor 
//	iwigi bor vahokazo*/
	name:"Xumoyuddin",
};

// ЧИСЛА
//console.log(myNumber);
//console.log(Math.round(5.50));// Math.roundda 5.45 yozsa 5 korsitadi agarda 5.50 dan balan bosa 6 korsitadi 
//console.log(Math.ceil(5.1));//Math.ceilda 5.1 yozsayam 6 korsitadi kop qip korsitadi 
//console.log(Math.floor(5.9))//Math.floorda 5.9 yozsayam 5 korsitadi kamaytirip korsitadi
 
//var newNumber = 2.457;
//console.log(newNumber.toFixed(1))/*newNumberga 2.437 dip yozsa lekin toFixed ichiga 1 dip yozsa 2.437 mas 2.4 korsitadi
//agar toFixed ichiga 3 dip yozsa ozide 2.437 korsitadi; newNumberga 2.457 dip yozsa endi uje 2.4 mas 2.5 korsitadi */
 
//СТРОКИ
//console.log("40"+ myNumber);// ""yozsa 50.484 mas 4010.484 boladi 
//console.log( myString + "Как дело");
//console.log(myString.toUpperCase());//toLowerCaseda kichkina yozuda boladi; toUpperCaseda kotta yozuda boladi  

//МАССИВЫ
//var names = ["Вася", "Демис", "Ольга"];
//console.log(names[1].toUpperCase());

//names[1] = "Маша";
//console.log(names[1].toUpperCase());

//console.log(names);//3ta 4ta ism yozip kegin console.log(names) yozsa tablitsa bop turadi

//УСЛОВИЯ
//if ( myNumber > 20) {/*if degani agar degani 5=5 teng bolsa console.logda togri dip yozsak togri degan yozu ciqadi 
//agar 3=5 teng desak togri degan yozu ciqmidi cunki bu notogri*/
	//console.log("topshiriq bajarildi");
//}

//if (myNumber > 20) {
	//console.log("Число меньше 20");

//} else { else digani yomasam digani
//	console.log("Число больше 20");

//}

// ЦИКЛЫ
//for (var i = 0; i < 10; i++) {/*botta i = 0ga teng  i < 10 teglawiwi uchun i++ yozilgan i++da 1 qowiladi wunda 
//i 0 gamas 1 teng boladi 1< 10 ga tengmas yana aylanip boradi i++ga kegin i 1gamas 2ga teng boladi 10 bomaguncha
// wu xoltakrorlanadi */
	//if (i == 5) {
       // break;//break kodida 0dan 5gacha bogan soni korsitadi cunki ifga 5 yozganmiz agar break optawase if iwlamidi
        //continue;//continueda 0dan 9gaca korsitadi faqat 5 qoldirip ketadi
	//}

	//console.log(i);
//}

//for (var j = 0; j < names.length; j++) {
	//console.log(names[j]);
//}

//var i = 0;
//while (i < 10) {
	//console.log(i);
	//i++;
//}

//ФУНКЦИИ
//function sum(x, y) {/*function funksiya digani  funkisya ichiga luboy narsa kirib ketadi objectam Циклы yaam, 
//	Условия yam  
	//return x + y;
//}
//console.log(sum(10, 59));

//console.log(sum(3, 167));

//ОБЪЕКТЫ
//var myObject = {
	//make: "Ford",
	//model: "mustang",
//};

//console.log(myObject.make);

+ ->qowu
- ->ayru
* ->kopaytiru
/ ->bolu
< ->kichkina
> ->kotta
= ->barobar
++ ->1 ta qowiladi
-- ->1 ta oyriladi 
&& -> va digani
|| -> yoki digani
! -> emas digani


