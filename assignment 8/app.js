// chapter 38-42

// Q1
// function power(a,b){
//     var a=a;
//     var b=b;
//     document.write(Math.pow(a,b));
// }

// power(5,3)

// Q2
// function isLeap(){
//     year=prompt("Enter Year");
//     if(year % 4 == 0){
//         document.write(" It's leap year");
//     }else{
//         document.write(" It's not a leap year");
//     }
// }
// isLeap()

//Q3
// var s;
// function s(a,b,c){
//     s = (a+b+c)/2
// }
// function areaOfTriangle(a,b,c){
//     s(a,b,c)
//     area=s*(s-a)*(s-b)*(s-c);
//     document.write(area);
// }

// areaOfTriangle(2,3,4)

//Q4
// function average(a,b,c){
//     return (a+b+c)/3
// }
// function perc(){

// }

//Q5
// function customIndexOf(char,word){
//     for(var i=0; i < word.length;  i++){
//         if( word[i] === char){
//             document.write(char + " is found at "+ i);
//             break;
//         }
//     }
// }

// customIndexOf("e","lahore");

//Q6
// var word="a quick brown fox jumps over a lazy dog";
// function dltvowel(dlt){
//     for(var i=0; i < dlt.length; i++){
//         if(dlt[i]==="a" || dlt[i]==="e" || dlt[i]==="i" || dlt[i]==="o" || dlt[i]==="u"){
//             dlt=dlt.slice(0,i) + dlt.slice(i+1,dlt.length);
//         }
//     }
//     document.write(dlt)
// }
// dltvowel(word)


//Q7
// function occur(chck){
//     var occurance=new Array();
//     for(var i=0; i < chck.length; i++ ){
//         var val=chck.slice(i,i+2);
//         switch(val){
//             case "ae":
//                 occurance.unshift("ae");
//                 break;
//             case "ai":
//                 occurance.unshift("ai");
//                 break;
//             case "ao":
//                 occurance.unshift("ao");
//                 break;
//             case "au":
//                 occurance.unshift("au");
//                 break;
//             case "aa":
//                 occurance.unshift("aa");
//                 break;
//             case "ea":
//                 occurance.unshift("ea");
//                 break;
//             case "ee":
//                 occurance.unshift("ee");
//                 break;
//             case "ei":
//                 occurance.unshift("ei");
//                 break;
//             case "eo":
//                 occurance.unshift("eo");
//                 break;
//             case "eu":
//                 occurance.unshift("eu");
//                 break;
//             case "ia":
//                 occurance.unshift("ia");
//                 break;
//             case "ie":
//                 occurance.unshift("ie");
//                 break;
//             case "ii":
//                 occurance.unshift("ii");
//                 break;
//             case "io":
//                 occurance.unshift("io");
//                 break;
//             case "iu":
//                 occurance.unshift("iu");
//                 break;
//             case "oa":
//                 occurance.unshift("oa");
//                 break;
//             case "oe":
//                 occurance.unshift("oe");
//                 break;
//             case "oi":
//                 occurance.unshift("oi");
//                 break;
//             case "oo":
//                 occurance.unshift("oo");
//                 break;
//             case "ou":
//                 occurance.unshift("ou");
//                 break;
//             case "ua":
//                 occurance.unshift("ua");
//                 break;
//             case "ue":
//                 occurance.unshift("ue");
//                 break;
//             case "ui":
//                 occurance.unshift("ui");
//                 break;
//             case "uo":
//                 occurance.unshift("uo");
//                 break;
//             case "uu":
//                 occurance.unshift("uu");
//                 break;
//             }
//     }
//     document.write("such occurance are " + occurance);
// }

// var para="Pleases read this application and give me gratuity";
// occur(para)

//Q8
// function km2mtrs(){
//     km=+prompt("Enter in KM");
//     var mtr=km*1000;
//     document.write(mtr + " meters");
// }

// km2mtrs()

// function km2feets(){
//     km=+prompt("Enter in KM");
//     var ft=km*3281;
//     document.write(ft + " feets");
// }

// km2feets()

// function km2inches(){
//     km=+prompt("Enter in KM");
//     var inch=km*39370;
//     document.write(inch + " inches");
// }

// km2inches()

// function km2cm(){
//     km=+prompt("Enter in KM");
//     var centi=km*100000;
//     document.write(centi + " centimeters");
// }

// km2cm()


//Q9
// function overtime(hrs){
//     if(hrs > 40){
//         hrs=hrs-40;
//         document.write("Overtime Salary is Rs." + hrs*120);
//     }
// }

// overtime(42)


//Q10
// function change(){
//     var amount=prompt("Enter amount to withdraw!!");
//     var len=amount.length;
//     var ten=amount.slice(len-2,len);
//     if(ten >= 50){
//         ten = ten-50;
//         if(ten > 0){
//             var unit=ten/10;
//             document.write("You will have " + amount[0] + " hundreds notes 1 fifty note "+unit + " ten notes.");
//         }else{
//             var unit=ten/10;
//             document.write("You will have " + amount[0] + " hundreds notes 1 fifty note ");
//         }
//     }else{
//         if(ten > 0){
//             var unit=ten/10;
//             document.write("You will have " + amount[0] + " hundreds notes "+unit + " ten notes.");
//         }else{
//             document.write("You will have " + amount[0] + " hundreds notes ");
//         }

//     }
// }

// change()






//chapter 43-48


//Q3
// function dlt(i){
//     var data=document.getElementById("data");
//     var row=data.getElementsByTagName('tr');
//     console.log(row[i])

// }

//Q4
// function swap(){
//     document.getElementById('before').src="images/car2.jpg";
// }
// function swapBack(){
//     document.getElementById('before').src="images/car1.jpg";
// }

//Q5
// function inc(){
//     var val=document.getElementById('counter');
//     value=Number(val.innerHTML)
//     val.innerHTML=value+1
// }
// function dec(){
//     var val=document.getElementById('counter');
//     value=Number(val.innerHTML)
//     val.innerHTML=value-1
// }









// Chapter 49-52
//Q1

// var fname=document.getElementById('fname');
// var lname=document.getElementById('lname');
// var email=document.getElementById('email');
// var phone=document.getElementById('phone');


// function getData(){
//     document.write("First Name : "+fname.value+"<br>");
//     document.write("Last Name : "+lname.value+"<br>");
//     document.write("Email : "+email.value+"<br>");
//     document.write("Phone Number : "+phone.value+"<br>");
// }


//Q2

// var para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi quisquam laborum repellat beatae velit at porro voluptatem cum, molestiae nostrum deserunt. Velit vero veritatis maiores, debitis mollitia natus molestias!";
// function read(){
//     var exp=document.getElementById('para');
//     exp.innerHTML=para;
// }



// Chapter 58-67


// Question 1
//i
// var element=document.getElementById('main-content');

//ii
// var maincontent=document.getElementById('main-content');
// console.log(maincontent.childNodes);

//iii
// var render=document.getElementsByClassName('render');
// for(var i=0;i < render.length;i++){
//     document.write(render[i].innerHTML+"<br>");
// }

//iv
// var firstname=document.getElementById('first-name');
// firstname.value="Hello";


//v
// var lastname=document.getElementById('last-name');
// var email= document.getElementById('email');
// lastname.value="World";
// email.value="assignment@saylani.js";


//Question 2
//i
// var formContent=document.getElementById('form-content');
// console.log(formContent.nodeType);

//ii
// var lastName=document.getElementById('lastName');
// console.log("Node type of Element : "+lastName.nodeType);
// console.log(lastName.childNodes);
// console.log("Node type of child element :"+lastName.childNodes[0].nodeType);

//iii
// var lastName=document.getElementById('lastName');
// lastName.innerHTML="Last Name : Updated";

//iv
// var main=document.getElementById('main-content');
// console.log("First Child : "+main.firstChild);
// console.log("Last Child : "+main.lastChild);

//v
// var lastName=document.getElementById('lastName');
// console.log("Next Sibling : "+lastName.nextSibling);
// console.log("Previus Sibling : "+lastName.previousSibling);

//vi
// var email=document.getElementById('email');
// console.log("nodetype : "+email.nodeType);
// console.log("parent Node : "+email.parentNode);