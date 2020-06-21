//chapter 21-25
//Q1
// var a=prompt("First Name");
// var b=prompt("Second Name");
// var fullName=a+" "+b
// alert("Welcome "+fullName);

//Q2
// var mobile=prompt("Enter Your Favourite Mobile Name with length","Samsung S10");
// document.write("My Favorite phone is : "+ mobile + "<br>Length of string is : "+mobile.length);

//Q3
// var Q3="Pakistani";
// document.write("String : "+ Q3 + "<br>Index of 'n' : "+Q3.indexOf("n"));

//Q4
// var Q4="Hello World";
// document.write("String : "+ Q4 + "<br>Index of 'n' : "+Q4.lastIndexOf("l"));

//Q5
// var Q5="Pakistani";
// document.write("String : "+ Q5 + "<br>Index of 'n' : "+Q5[3]);

//Q6
// var firstName=prompt("First Name");
// var lastName=prompt("last Name");
// fullName=firstName.concat(" ",lastName)
// alert("Welcome "+fullName);

//Q7
// var city="Hyderabad";
// document.write("City : "+ city + "<br>After replacement : "+city.replace("Hyder","Islam"));

//Q8
// var msg="Ali and Sami are Best Friends. They play Cricket and Football together";
// document.write(msg.replace(/and/g,"&"));

//Q9
// var Q9="472";
// document.write("Value : "+Q9+ "<br>Type : "+typeof(Q9)+"<br>Value : "+Number(Q9)+ "<br>Type : "+typeof(Number(Q9)));

//Q10
// var word=prompt("Enter word");
// document.write("user input : "+ word + "<br>Upper case : "+word.toUpperCase());

//Q11
// var word=prompt("Enter word");
// word1=word[0].toUpperCase();
// words=word.slice(1,word.length).toLowerCase();
// document.write("user input : "+ word + "<br>Title case : "+word1+words);

//Q12
// var num=35.36;
// var str=num.toString()
// document.write("Number : "+ num + "<br>Result : "+str.replace(".","") );


//Q13
// var regex = /^[A-Za-z0-9 ]+$/;
//Validate TextBox value against the Regex.
// var isValid = regex.test(prompt("Enter Username"));
// if (!isValid) {
//     alert("Please enter a valid username");
// } else {
//     alert("Username is corrected");
// }

//Q14
// var user=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'ma::")
// var coo = ["cake", "apple pie", "cookie", "chips", "patties"]   
// var ava = "available"
// var res=ava.bold();
// var matchFound = "no";
// for(var i=0;i<coo.length;i++){
//     if(user.toLocaleLowerCase()==coo[i]){
//         matchFound = "yes";
     
//      document.write(user + " is "+res + " at index "+i+" in our bakery")
  
//     }
// }
// if (matchFound === "no") {
//         document.write("We are sorry. "+user + " is not " +res+" in our bakery")
//     }



//Q15
// var passw=  /^[A-Za-z]\w{7,14}$/;
// var user=prompt("Enter Password")
// var us=passw.test(user)

// if(!us) 
// { 
//     document.write("Enter Password : "+user+"<br>")
//    document.write("Password can not begin with a number Please enter a valid password")

// }
// else
// { 
//     document.write("Enter Password : "+user+"<br>")
//     document.write("Password is corrected")
// }


//Q16
// var name="University Of Karachi";
// var str=name.split("");
// for(var i=0; i < str.length;i++ ){
//     document.write(str[i]+"<br>");
// }

//Q17
// var userInput=prompt("Enter input");
// document.write(userInput[userInput.length-1]);

//Q18
// var str="The quick brown fox jumps over the lazy dog";
// str=str.toLowerCase();
// var count=0;
// for(var i=0; i < str.length; i++){
// if(str.slice(i,i+3)==="the"){
//     count++;
// }
// }
// document.write("Text : "+str+"<br>There are "+count+" occurance(s) of word 'the'");

//chapter 26-30
//Q1
// var num=+prompt("Enter Number");
// if(num<0){
//     alert("Please Enter Positive Integar");
//     var num=prompt("Enter Number");    
// }
// document.write("Number : "+num+"<br>Round off value : "+Math.round(num)+"<br>Floor value : "+Math.floor(num)+"<br>Ceil value : "+Math.ceil(num));

//Q2
// var num=+prompt("Enter Number");
// if(num>0){
//     alert("Please Enter Negative Integar");
//     var num=prompt("Enter Number");    
// }
// document.write("Number : "+num+"<br>Round off value : "+Math.round(num)+"<br>Floor value : "+Math.floor(num)+"<br>Ceil value : "+Math.ceil(num));

//Q3
// var num=+prompt("Enter Number");
// document.write("The absolute value of "+num+" is "+Math.abs(num));

//Q4
// var dice=Math.random()*6;
// document.write("Random Dice value : "+Math.ceil(dice));

//Q5
// var coin=Math.random()*2;
// if (coin > 1) {
//     document.write(Math.ceil(coin)+"<br> Random coin value : Tails");
//   }else{
//     document.write(Math.ceil(coin)+"<br>Random coin value : Heads");
// }

//Q6
// var rand=Math.random()*100;
// document.write("Random number between 1 to 100 : "+Math.ceil(rand));



//Q7
// var weight=prompt("Enter Your weight");
// var w8="";
// for(var i=0; i < weight.length; i++){
//     if(weight[i]==="k" || weight[i]==="K"){
//         w8=weight.slice(0,i);
//         break;
//     }
//     else{
//         w8=weight;
//     }
// }
// document.write("The weight of user is "+w8+" Kilograms");


//Q8
// var secret=Math.random()*10;
// secret=Math.ceil(secret);
// var guess=+prompt("Enter Number between 1 to 10");
// alert(secret);
// if(guess===secret){
//     alert("Congratulations! You guess rights number");
// }
// else {
//     alert("Try Again");
// }


//Chapter 31-34
//Q1
// var date=new Date();
// document.write(date);

//Q2
// var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date=new Date();
// var month=date.getMonth();
// document.write("Current Month : "+months[month]);

//Q3
// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var date=new Date();
// var day=date.getDay();
// document.write("Today is "+days[day]);

//Q4
// var days=["Fun Day","Mon","Tue","Wed","Thu","Fri","Fun Day"];
// var date=new Date();
// var day=date.getDay();
// document.write("Today is "+days[day]);

//Q5
// var date=new Date();
// date=date.getDate();
// if(date<16){
// 	document.write("First fifteen days of months");
// }
// else{
// 	document.write("Last fifteen days");
// }


//Q6
// var date=new Date();
// var old= date.getTime();
// var min=old/(10000*60);
// // document.write(date+"<br>"+old);
// document.write("Current Date : "+date+"<br><br>Elapsed miliseconds since January 1,1970 : "+old+"<br><br>Elapsed minutes since January 1,1970 : "+min);

//Q7
// var date=new Date();
// var hour=date.getHours();
// if(hour < 12){
//     document.write("It's AM");
// }
// else{
// 	document.write("It's PM");
// }

//Q8
// var date=new Date("Dec 31,2020");
// document.write("Later Date : "+date);

//Q9
// var ramzan=new Date("Jun 18,2015");
// var date=new Date();
// var dateFrom1970=date.getTime();
// var ramzanFrom1970=ramzan.getTime();
// daysFrom1970=dateFrom1970/(1000*60*60*24);
// daysRamzanFrom1970=ramzanFrom1970/(1000*60*60*24);
// var daysPassed=Math.round(daysFrom1970-daysRamzanFrom1970);
// document.write(daysPassed+" days have passed since 1st Ramadan, 2015");

//Q10
// var beginning=new Date("Jan 01,2015");
// var refDay=new Date("Dec 05,2015 22:50:16");
// var beginning_from_1970=beginning.getTime();
// var refDay_from_1970=refDay.getTime();
// beginning_from_1970=beginning_from_1970/1000;
// refDay_from_1970=refDay_from_1970/1000;
// var from_beginning_to_ref=refDay_from_1970-beginning_from_1970;
// document.write("On reference date "+refDay+","+from_beginning_to_ref+" seconds had passed since beginning of 2015");

//Q11
// var currentDate=new Date("Dec 05,2015 23:08:16");
// var previousDate=new Date("Dec 05,2015 22:08:16");
// var diff=(currentDate-previousDate)/(1000*60*60);
// document.write("Current Date : "+currentDate+"<br>"+diff+"hours ago, it was "+previousDate);

//Q12
// var currentDate=new Date();
// var currentYear=currentDate.getFullYear();
// var yearsback=(currentYear-100);
// var yearsbackDate=new Date();
// yearsbackDate.setFullYear(yearsback);
// alert("Current Date : "+currentDate+"\n100 years back, it was "+yearsbackDate);

//Q13
// var age=prompt("Enter your age ");
// var date=new Date();
// var currentYear=date.getFullYear();
// var birthYear=currentYear-age;
// date.setFullYear(birthYear);
// document.write("Your Age is : "+age+"<br>Your birth year is : "+date.getFullYear());


//Q14
// var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date=new Date();
// var month=date.getMonth();
// var unit=Math.random()*500;
// unit=Math.ceil(unit);
// if(unit<50){
//     unit=unit+50;
// }
// var customerName=prompt("Enter Customer Name")
// document.write("<h2>K-Electric Bill</h2><br>Customer Name : <b>"+customerName+"</b><br>Month : <b>"+months[month]+"</b><br>Number of Units : <b>"+unit+"</b><br>Charges per unit : <b>16</b>"+"<br><br>Net Amount payable (within Due Date : <b>"+unit*16+"</b><br>Late payment surcharge : <b>350</b><br>Gross Amount payable (After Due Date : <b>"+((unit*16)+350)+"</b>");




//Chapter 35-38




//Q1
// function date(){
//     var date=new Date();
//     document.write(date);
// }
// date()


//Q2
// function greeting(){
//     var first_name=prompt("Enter first Name ");
//     var last_name=prompt("Enter Last Name ");
//     alert("Welcome!!\nDear "+first_name+" "+last_name);
// }
// greeting()

//Q3
// function add(){
//     var first_num=+prompt("Enter first Number");
//     var last_num=+prompt("Enter Last Number");
//     alert("The sum is "+(first_num+last_num));
// }
// add()

//Q4
// function cal(num1,num2,operator){
//     if(operator==="+"){
//         result=(num1+num2);
//         alert(result);
//     }
//     else if(operator==="-"){
//         result=(num1-num2);
//         alert(result);
//     }
//     else if(operator==="*"){
//         result=(num1*num2);
//         alert(result);
//     }
//     else if(operator==="/"){
//         result=(num1/num2);
//         alert(result);
//     }
//     else{
//         alert("Please enter valid operator")
//     }
// }
// cal(20,5,"-")


//Q5
// function sqr(num){
//     alert(Math.pow(num,2));
// }
// sqr(8)

//Q6
// function fact(num){
//     var fac=1;
//     for(var i=1; i<=num; i++){
//         fac=i*fac;
//     }
//     alert(fac);
// }
// fact(6)

//Q7
// function counting(){
//     var start=+prompt("Counting Start From");
//     var end=+prompt("Counting End At");
//     for(var i=start;i<=end;i++ ){
//         document.write(i,"&nbsp;");
//     }
// }
// counting()


//Q8
// function Hypotenuse(base,perp){
//     base=Number(base);
//     perp=Number(perp);
//     function sqr(num){
//         return (Math.pow(num,2));
//     }
//     base=sqr(base)
//     perp=sqr(perp)
//     var hyp=Math.pow((base+perp),1/2);
//     document.write("The Hypotenuse is "+hyp.toFixed(2));
// }
// Hypotenuse(2,1)

//Q9

// function area(width=1,height=1){
//     document.write("Area is : "+(width*height));
// }
// var width=5;
// var height=5;
// area(width,height)
// area(3,6)

//Q10
// function palin(word){
//     var pal="";
//     for(var i=word.length-1; i>=0; i--){
//         pal=pal+word[i];
//     }
//     if(word===pal){
//         document.write("This is a palindrome");
//     }
//     else{
//         document.write("This is not a palindrome");
//     }
// }
// palin("madam")


//Q11
// function title(text=""){
// 	text=text[0].toUpperCase()+text.slice(1,text.length).toLowerCase();
//     for(var i=0; i< text.length;i++){
//         if(text[i]===" "){
//             text=text.slice(0,i+1)+text[i+1].toUpperCase()+text.slice(i+2,text.length);
//         }
//     document.write(text[i]);
//     }
// }
// title("the quick brown fox")

//Q12
// function longstr(str){
//     var arr=str.split(" ");
//     var ans=arr[0];
//         for(var i=1; i < arr.length; i++){
//             var j=arr[i-1]
//             if(arr[i].length > j.length){
//                 ans=arr[i];
//             }
//         }
//     document.write(ans);
// }
// longstr("Web Development Tutorials")



//Q13
// function checkOcc(word,str){
//     word=word.toLowerCase();
//     str=str.toLowerCase();
//     var count=0;
//     for(var i=0; i < word.length;i++){
//         if(word[i]===str){
//             count++;
//         }
//     }
//         document.write(count);
// }
// checkOcc("JSResourceS.com","o")


//Q14
// function calcCircumference(r){
//     var ans=2*3.1416*r;
//     document.write("The circumference is "+ans);
// }
// function area(r){
//     var Area=3.1416*r*r;
//     document.write("The Area is "+Area);
// }
// calcCircumference(5)
// area(5)








