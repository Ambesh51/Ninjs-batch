// normal function


// function Rishab(temp1,temp2){
//     console.log(temp1+temp2);

//     //statement1
// }

//  function srishti(){
//      console.log("srishti hii")
//      //statement2
//  }

//  Rishab(10,23) //call a function
//  Rishab(14,1233)
//  srishti()


// function temp(tem){

// let a=10;
// let temp3 = a+tem;
// console.log(temp3)

// }

// temp(11);

// console.log(temp3)


// var a=13;
// console.log(a)//11 13
// {
// let a=11;
// console.log(a)//13//
// }
// var a=19;
// console.log(a)//19



// function with return

//EX-1
// function temp(tem){

// let a=10;
// let temp3 = a+tem;
// // console.log("return")
// return temp3;
// console.log("return")
// // console.log(temp3)

// }

// var temper = temp(11);
// console.log(temper);
// console.log(temp(11))

// EX - 2

// var fun = myfun(2);
// console.log(fun);


// function myfun(temp){
//     console.log("hey")
//  return temp;
//  }



// Example-2

// function myfun(){

// console.log("Start");

// var i=80;
// if(i==0){
//     return "equal";
// }
// else{
//     return "wrong";
// }

// }

// var fun = myfun();

// console.log(fun);

// wrong undefineed

// // start wrong


///********** */ how to show all arguments

// function add(param1, param2){
//     var addition = param1 + param2;
//     console.log(addition);

//     // console.log(arguments)
// }

// add(2,3,2,3,4,5,6,7,8,9);



// var foo="foo"; //1002
// function bob(){
//     var foo="foo2"; //1001
//     console.log(foo);
// }
// var temp = bob;
// console.log(temp);
// temp()

//foo2 -2baar
//foo2 - ek baar;

// rishab problem
// const town = "skb";
//  var town="agra";
// console.log(town);

// city='Shikohabad';
// Console.log(city)

//IIFE(imigiate invoke function expression)


// var foo= "fo1";
// (function name(temp){
// var foo="foo";
// console.log(foo,temp);

// })(10)
// console.log(foo)

//anonumous function
// (function (temp){
//     var foo="foo";
//     console.log(foo,temp);

//     })(10)


// temp();
// console.log(temp);
// var temp = function (){console.log("hey");}
// console.log(temp)
// temp();

// test();
// function test(){
//     console.log("hello");
// }

//HOF  (Higher order function)
// ek function dusre function ko as a parameter dedo that ois HOF 
// function sayhello(temp){
//     console.log(temp);
//     temp();

// }

// function hi(){
//     console.log("hi");
//     return "hello "
// }
// var temp =hi()
// console.log(temp);

// sayhello(hi);


//recursion function

// function sayhello(number){//10 //9 //8
//     if(number<1){ //10 //9 //8
//         return number     //10//9 //8
//     }
//     console.log("number", number)
//     sayhello(--number);//9//8 //7
// }

// // // value  // 10//9


// var temp = sayhello(10);
// console.log(temp);

// var a =+ 1;
// a--;
// console.log(a);

// function temp(){
//     console.log("hey");
// }
// var arr =[1,3,4]

// console.log(typeof(temp));// 
// console.log(typeof arr); // 

// pure function
// always same return

// function add(temp){
//     return temp+1;
// }
// var temp = add(15);
// console.log(temp);

//impure function
//always different

// function mix(n){
//     return n+(Math.random()*10)
// }

// var temp = mix(6);
// console.log(temp);

//Settimeout

// console.log(this);

// alert("hi rishab");
// confirm("18 +")

// var temp =prompt();
// console.log(temp);

//Settimeout
//function time--->mili sec
// 1}function 2) time

// function myfun(){
//     console.log("first");
//    setTimeout(function(){
//     console.log("timeout");       
//    },1000)
//     console.log("last");
// }

// myfun();


//setInterval

// function mytime(){
//     var date = new Date();
//     document.getElementById("time").innerHTML=date.toLocaleTimeString();

// }

// var time = setInterval(mytime,1000);

//array
// var arr = [];
// var arr=[1,2,3,4,5,"string",function(){console.log("hello")},true,{name:"sri"}]
// console.log(arr[5])
// console.log(arr[6]());

//  var arr = new Array(1,2,3,4);
//  console.log(arr);

// var fruits = ["mongo","pineaaple","orangle"];
// console.log('array',fruits);
// console.log(fruits[0]);
// fruits[1]="banana";
// console.log(fruits);
// console.log(fruits.length)

// var arr = ['apple',{name:"anuj"},true,function(){alert("happy")}];
// console.log(arr);
// console.log(arr[0])
// console.log(arr[1]["name"])

// var temp ={
//     name:"ambesh",
//     roll:1,
//     disabled:false,
//     fun:function(){console.log("sri")}
// }
// console.log(temp.fun())
// temp.add="kashish"
// console.log(temp);


// var arr1 = new Array()
// console.log(arr1);

//**************************11-06-21


//tostring

// arrya- string
// var arr= ["apple","mango","orange","banana","amisha"];
// console.log(arr);
// var temp = arr.toString()
// console.log(temp);

//join

// var temp = arr.join(" ")
// console.log(temp);

//pop

//actual array ke last ki value vo delete(pop) kardeta hai
// var arr= ["apple","mango","orange"];
// console.log("befor",arr)// 3   ---> a,m,o
// // arr.pop();
// var temp = arr.pop();
// console.log(temp);// mango ---->  apple , manog    
// console.log("after",arr) //apple ---> apple mango

// shift
// actual array usko modify(change) kar raha 1st value return kar raha hai

// var arr= ["apple","mango","orange"];
// // var temp = arr.shift();
// // console.log(temp);
// console.log(arr);// a,m,o---> 3
// console.log(arr.shift());//mango, orange--->apple
// console.log(arr)//apple,mango ,orange---->mango orange


// push
// last mai actual array mai last ki index mai value ko add karta hai

// var arr= ["apple","mango","orange"];
// arr.push("banana");
// // console.log(temp);
// console.log(arr);


//unshift

// var arr= ["apple","mango","orange"];

// arr.unshift("apple2");

// console.log(arr)

// Delete
// // empty space
// var arr= ["apple","mango","orange"];

// console.log(arr);
// delete arr[1];
// console.log(arr);

//Splice
//delete nahi splice ---> use karte hai
//delte bhi kar sakta hai, or add bhi kar sakta hai, dono karsakta hui

// syntax
// splice(Index of new element should be add, how many element should be remove,
//     new Elements to be added)
// 2nd se delete kardo
// 2nd ke baad 5 elements add kardo
// 2nd ke baad 2 delete 3 add kardo

// splice(kaha se shuru karu or add karu, kitne element delete, new element)

// var arr= ["apple","mango","orange","apple"];
// console.log(arr);
// arr.splice(2,0,"ambesh");
// arr.splice(2,2,"grapes");
// arr.splice(1,3);


// console.log(arr);

// concat 
// var fruits= ["apple","mango","orange","apple"];
// var fruit1= ["grapes","apple"];
// var fruits3=["kiwi"];
// var temp="grapes";
// var bag = fruits.concat(temp);
// console.log(bag)


//slice
// slice(starting point, not include upto)
// var fruits= ["apple","mango","orange","apple","grapes"];
// // var sliced = fruits.slice(1);
// // console.log(sliced)
// var sliced = fruits.slice(1,3)
// console.log(sliced);


//sort

// var fruits= ["apple","mango","orange","apple","grapes"];
// fruits.sort()
//     console.log(fruits)
//     fruits.reverse()
//     console.log(fruits);
// var temp =[5,10,10,3,1000,3,9];
// temp.sort(function(a,b){return b-a });

// console.log(temp);





