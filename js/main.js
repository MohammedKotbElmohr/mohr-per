//  window.onload = function(){
//     document.querySelector("h1").style.color="blue";
//      this.document.querySelector("h1").style.fontSize="100px";
//  }

    // window.alert("welcome to js frame");
// console.log("log");
// console.error("error");
// console.log("hello to %cJS %cfiles","color:red;font-size:40px","color:blue;font-size:40px");
// console.table(["osama","ahmed","omar"]);

//  var user ="ahmed",
//  age = 30;
 
// var one = document.getElementById("subb");
//  function hello(){
   
//    if(one.value=="submit"){
//     one.value = "click";
//     one.style.transition="all 1s";
//     one.style.rotate="360deg";
//     one.style.background="black";
//     one.style.color="white";
//     helloo.innerHTML ="mohammed";
//  }else{
//     one.value = "submit"; 
//     one.style.transition="all 1s";
//     one.style.rotate="-360deg";
//     one.style.background="blue";
//     one.style.color="red";
//     one.style.border="1px dashed black";
//     helloo.innerHTML ="hello";
//  }
 
//  }
 
// console.log( typeof NaN );
// console.log(100 % 3);
// console.log(5 ** 3);

// let a =100;
// a=200;
// a= a+200;
// a+=400
// a/=2;
// a-=200;
// a%=7;
// console.log(a)
// let a = 10;
// let b = "20";
// let c = 80;

//  console.log(++a + +b++ + +c++ - +a++);
//  console.log(++a + -b + +c++ - -a++ + +a);
//  console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

//  let d ="-100";
//  let e ="20";
//  let f =30;
//  let g =true;

// console.log(-d*+e);
// //  console.log(-d +2*+e + f +3*g);
// //  console.log(--d*-1 + ++e + ++f + g*20);
// console.log(-d + ++f + ++g*++e)
// var textinput =document.getElementById(task);


// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.random());
// console.log(Math.round(100.6));
// console.log(Math.round(100.2));
// console.log(Math.ceil(100.6));
// console.log(Math.ceil(100.2));
// console.log(Math.floor(100.2));
// console.log(Math.floor(100.6));
// console.log(Math.pow(5,5));
// console.log((5*5*5*5*5));
// console.log(Math.min(5,-100,150,-150,15,200));
// console.log(Math.max(5,-100,150,-150,15,200));
// console.log(Math.trunc(100.2));
// console.log(Math.trunc(100.6));

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(parseInt(Math.min(a,b,c,d)));
// console.log(Math.pow(a,1.5)*Math.trunc(d));

// console.log(parseInt(d));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));

// console.log(((Math.trunc(b)/Math.ceil(d)).toFixed(2)).toString());
// console.log(((Math.trunc(b)/Math.ceil(d)).toFixed(2)));
// console.log(+(((Math.trunc(b)/Math.ceil(d)).toFixed())));
// console.log(Number(((Math.trunc(b)/Math.ceil(d)).toFixed())));
// let names="ahmed"
// let gender = "male";
// let age = 30;

// // gender === "male" ? console.log("Mr"):console.log("Mrs");

// // let result = gender === "male"?"mr":"mrs";
// // document.write(result);

// // console.log(gender==="male"?"mr":"mrs")

// // console.log(`hello ${gender==="male"?"mr":"mrs"} ${names}`);


// console.log(age<20?"age>20":age>20&&age<60?"20<age<60":age>60?"age>60":"unknown");

// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(false));
// console.log(Boolean(100));
// console.log(Boolean(null));


// // let price=100;
// // let price=0;
// // let price="";
// // let price=null;
// //let price;
// // let price = false;
// // let price = true;


// // console.log("price is " + (price||200));

//  console.log(`price is ${price||200}`);
//  console.log(`price is ${price??200}`);

// let a = 10 ;

// if(a<10){
//     console.log(10);
// } else if(a>=10 && a<= 40){
//     console.log("10 To 40")
// } else if(a >40){
//     console.log(" > 40")
// } else{
//     console .log("unknown");
// }

// a < 10 ? console.log(10): a >= 10 && a <= 40 ? console.log("10 To 40"): a > 40 ? console.log(" > 40"):console.log("unknown");
 

//Write With Ternary If Syntax

// let st = "Elzero Web School";
//     console.log(st.length)
//     if((((st.length)*2).toString())==="34"){
//     console.log("Good");
// }
// if(((st.length)*2) === +"34"){
//     console.log("Good");
// }

// // W Position May change 

// if(st.includes("W")){
//    console.log("Good"); 
// }

// // to string

// console.log(typeof (st.length-1));

// if(st.length-1!=="Elzero Web School"){
//     console.log("Good");
// }
// if(typeof st!=="Elzero Web School"){
//     console.log("Good");
// }

// // to number

// if(st.length===17){
//     console.log("Good")
// }

    
// //last chalenge

// if(st.slice(0,6).repeat(2)==="ElzeroElzero"){
//    console.log("Good") 
// }




// // switch challenge

// let job = "manager";
// let salary = 0;

// if(job === "manager"){
//     salary = 8000;
// }else if(job==="IT" || job==="support"){
//     salary=6000;
// }else if(job==="developer"||job==="designer"){
//     salary=7000;
// }else{
//     salary=4000;
// }

// switch(job){
//     case "manager":
//         console.log(`salary is ${salary=8000}`);
//         break;
//     case "It":
//     case "support":
//         salary = 6000;
//         console.log("salary is " +salary)
//         break;
//     case "developer":
//     case "designer":
//         salary = 7000;
//         console.log(`salary is ${salary} `)
//         break;
//     default : salary=4000;
//     console.log("salary is "+ salary)
// }

// // if challenge

// let holidays = 0;
// let money = 0;

// switch(holidays){
//     case 0 :
//         money=5000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 1:
//     case 2:
//         money=3000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 3:
//         money=2000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 4:
//         money=1000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 5:
//         money=0;
//         console.log(`My Money is ${money}`);
//         break;
//     default : money=0;
//     console.log(`My Money is ${money}`);

// }

// if(holidays===0){
//     money=5000;
//     console.log(`My Money is ${money}`);
// }else if(holidays===1||holidays===2){
//     money=3000;
//     console.log(`My Money is ${money}`);
// }else if(holidays===3){
//     money=2000;
//     console.log(`My Money is ${money}`);
// }else if(holidays===4){
//     money=1000;
//     console.log(`My Money is ${money}`);
// }else if(holidays===5){
//     money=0;
//     console.log(`My Money is ${money}`);
// }else{
//     money=0;
//     console.log(`My Money is ${money}`);
// }


// let myFriends = ["mohammed","omar","hashem","khaled","mohammed"];
//     console.log(myFriends);
//    console.log(myFriends.indexOf("mohammed"));
//    console.log(myFriends.indexOf("mohammed",2));
//    console.log(myFriends.indexOf('omar'));
//    console.log(myFriends.indexOf("yasser"));

//    console.log(myFriends.lastIndexOf("mohammed"));
//    console.log(myFriends.lastIndexOf("mohammed",3));
//    console.log(myFriends.lastIndexOf("mohammed",4));
//    console.log(myFriends.lastIndexOf("mohammed",-2));
//    console.log(myFriends.lastIndexOf("mohammed",-1));
//    console.log(myFriends.lastIndexOf("mohammed"));
//    console.log(myFriends.lastIndexOf("khaled",3));
//    console.log(myFriends.lastIndexOf("khaled",2));

//    console.log(myFriends.includes("mohammed"));
//    console.log(myFriends.includes("omar"));
//    console.log(myFriends.includes("omar",3));

//    if(myFriends.indexOf("sami")===-1){
//         console.log("not found");
//    }else{
//     console.log("found");
//     };
//    if(myFriends.indexOf("mohammed")===-1){
//         console.log("not found");
//    }else{
//     console.log("found");
//     };

//     if(myFriends.lastIndexOf("mohammed",2)===-1){
//         console.log("not found")
//     }else{
//         console.log("found")
//     }
//     if(myFriends.lastIndexOf("sami")===-1){
//         console.log("not found")
//     }else{
//         console.log("found")
//     }

//     if(myFriends.includes("omar")){
//         console.log("found")
//     }else{
//         console.log("notfound");
//     }

//     if(myFriends.includes("sami")){
//         console.log("found")
//     }else{
//         console.log("not found");
//     }

// let group = ["mohammed","ahmed",-10,20,-30,"khaled",1000,"saif",2000,20,-50,"kamal","10","-15","amjad",90,9];
//         console.log(group);
//         console.log(group.sort());
//         console.log(group.reverse());
//         console.log(group.sort().reverse());

    // let friends = ["mohammed","kamal","kotb","abbas","ali","elmohr"];
    //     console.log(friends);
        // console.log(friends.slice(0));
        // console.log(friends.slice(0,3));
        // console.log(friends.slice(2,4));
        // console.log(friends.slice(-2));
        // console.log(friends.slice(-3,3));
        // console.log(friends.slice(-4,-2));
        // console.log(friends.slice(-4,5));
        // console.log(friends.slice(-4,6));
        // console.log(friends.slice(2,-2));
        // console.log(friends.slice(0,-3));
        // console.log(friends.slice(-3,1));

        // friends.splice(0);
        // friends.splice(0,1);
        // friends.splice(1,3);
        // friends.splice(0,1,"ahmed","omar");
        // friends.splice(0,0,"ahmed","omar");
        // friends.splice(-1,1);
        // friends.splice(-1,1,"khaled");
        // friends.splice(-2,0,"khaled");
        // friends.splice(friends.length,0,"khaled");
        // friends.splice(5,0,"khaled");
        // friends.splice(4,1,"khaled");
        // console.log(friends);
        // console.log(friends.splice(3,2));


        // let friends = ["mohammed","ahmed","khaled"];
        // let newFriends = ["omar","saif"];
        // let schoolFriends = ["kamal","ramy"];

        // let allFriends = friends.concat(newFriends,schoolFriends,10,"20","ameer",[12,"25","shady"]);
        // console.log(allFriends);
        // console.log(allFriends.join());
        // console.log(allFriends.join(""));
        // console.log(allFriends.join(" "));
        // console.log(allFriends.join("@"));
        // console.log(allFriends.join(" | "));

        // let zero = 0 ;

        // let counter = 3;
           
        // let my =["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

        // //write code here

        // //  console.log(my); // ["Osama", "Elham","Mazero","Ahmed"]

        //     // let count=Math.pow(counter,zero);
        //     // count+=counter;
        //     // console.log(count);
        //     // console.log(my.slice(zero,count).reverse());
        //     // console.log(my.slice(zero,Math.pow(counter,zero)+counter).reverse());
        //     // ++counter;
        //     //   console.log(my.slice(zero,++counter).reverse());


            //["Elham","Mazero"]
            
            //  let bb=(my.splice(++zero,--counter).sort());
            //  console.log(bb);

        //      //Elzero

        //     let elzero =(`${bb[--zero].slice(zero,counter)}${bb[++zero].slice(counter)}`);
        //         console.log(elzero);
        //         // rO
        //         // console.log(elzero.substr((counter+=counter),zero)+elzero.charAt(++counter).toLocaleUpperCase());
        //         // console.log(elzero.charAt((counter+=counter))+elzero.charAt(++counter).toLocaleUpperCase());
        //         console.log(`${elzero.charAt((counter+=counter))}${elzero.charAt(++counter).toLocaleUpperCase()}`);
                
        // for(let i=0;i<10;i++){
        //     console.log(i)
        // }
   
        // cars =["bmw","mercedes","ford"];
        // models=["2000","2010","2020","2023"];
        // colors=["blue","black","red","white","yellow"];
       
        // for(let i = 0;i<cars.length;i++){
        //     console.log(`car is : ${cars[i]}`)
        //     for(let x=0;x<models.length;x++){
        //         console.log(models[x]);
        //     }
        //     for(let j =0;j<colors.length;j++){
        //         console.log(colors[j])
                
        //     }
        //     console.log("____________________")
        // }

        // cars =["bmw","mercedes","ford"];
        // models=["2000","2010","2020","2023"];
        // colors=["blue","black","red","white","yellow"];
       
        // for(let i = 0;i<cars.length;i++){
        //     console.log(`car is : ${cars[i]}`)
        //     for(let x=0;x<models.length;x++){
        //         console.log(models[x]);
        //         for(let j =0;j<colors.length;j++){
        //             console.log(colors[j])
                    
        //         }
        //     }
            
        //     console.log("____________________")
        // }

    // let products = ["keyboard","mouse","monetor","cpu"];
    // let colors =["red","blue","black"];
    // let models=["2020","2023"];

    // for(let i = 0;i<products.length;i++){
    //     console.log("#".repeat(15));
    //     console.log("# products : ");
    //     console.log("-".repeat(15));
    //     console.log(`"#"${products[i]}`);
    //     console.log("-".repeat(15));
    //     console.log("# colors : ")
    //     console.log("-".repeat(15));
    //     for(let j=0;j<colors.length;j++){
           
    //         console.log(`- ${colors[j]}`)
            
    //     }
    //     console.log("-".repeat(15));
    //     console.log("# models : " )
    //     console.log("-".repeat(15));
    //     for(let k = 0;k<models.length;k++){
            
    //         console.log(`- ${models[k]}`);
    //     }
    // }


    //break continue lable loop

    // let products = ["keyboard","mouse","pen","pad","monitor"];
    // let colors = ["red","green","black"];
    // for(let i = 0;i<products.length;i++){
    //     console.log(products[i]);
    //     for(let j= 0;j<colors.length;j++){
    //         console.log(colors[j])
    //     } 
    // }

    // for(let i = 0;i<products.length;i++){
    //     if(products[i]==="pen"){
    //         break;
    //     }
    //     console.log(products[i]);
    // }
    // for(let i = 0;i<products.length;i++){
    //     if(products[i]==="pen"){
    //         break;
    //         console.log(products[i]);
    //     }
        
    // }
    // for(let i = 0;i<products.length;i++){
    //     console.log(products[i]);
    //     if(products[i]==="pen"){
    //         break;
    //     }
    // }
    
    // for(let i = 0;i<products.length;i++){
    //     console.log(products[i])
    //     if(products[i]==="pen"){
    //         break;
    //     }
    //     for(let j =0 ;j<colors.length;j++){
    //         console.log(colors[j]);
    //         if(colors[j]==="green"){
    //             break;
    //         }
    //     }
    // }
    
    // for(let i = 0;i<products.length;i++){
    //     console.log(products[i])
        
    //     for(let j =0 ;j<colors.length;j++){
    //         console.log(colors[j]);
    //         if(colors[j]==="green"){
    //             break;
    //         }
    //     }
    // }

    // let products = ["keyboard","mouse",10,20,30,"pen","pad",50,70,13,19,"monitor"];
    // let colors = ["red",1,2,3,4,"green","black",7,8,15,19];

    //         for(let i =0;i<products.length;i++){
    //             if(typeof products[i]==="number"){
    //                 continue;
    //             }
    //             console.log(products[i]);
    //             for(let j = 0;j<colors.length;j++){
    //                 if(typeof colors[j]==="string"){
    //                     continue;
                     
    //                 }
    //                 console.log(colors[j])
    //                 if(colors[j]===15){
    //                     break;
    //                 }
    //             }
    //         }

        //     let products = ["keyboard","mouse","pen","pad","monitor"];
        //     let colors = ["red","green","black"];
        // mainLoop:
        
        //     for(let i = 0;i<products.length;i++){
        //         console.log( "\n")
        //         console.log(`# ${products[i]}`);
        //         console.log( "-".repeat(15))
        // nestedLoop:        
        //         for(let j =0;j<colors.length;j++){
        //             console.log(colors[j])
        //             if(colors[j]==="green"){
        //                break;
        //             }
                   
                    
        //         }
        //     }
        //     let products = ["keyboard","mouse","pen","pad","monitor"];
        //     let colors = ["red","green","black"];
        // mainLoop:
        
        //     for(let i = 0;i<products.length;i++){
        //         console.log( "\n")
        //         console.log(`# ${products[i]}`);
        //         console.log( "-".repeat(15))
        // nestedLoop:        
        //         for(let j =0;j<colors.length;j++){
        //             console.log(colors[j])
        //             if(colors[j]==="green"){
                       
        //                break nestedLoop;

        //             }
                    
        //         }
        //     }
        //     let products = ["keyboard","mouse","pen","pad","monitor"];
        //     let colors = ["red","green","black"];
        // mainLoop:
        
        //     for(let i = 0;i<products.length;i++){
        //         console.log( "\n")
        //         console.log(`# ${products[i]}`);
        //         console.log( "-".repeat(15))
        // nestedLoop:        
        //         for(let j =0;j<colors.length;j++){
        //             console.log(colors[j])
        //             if(colors[j]==="green"){
                       
        //                break mainLoop;

        //             }
                    
        //         }
        //     }

        // let products = ["keyboard","mouse","pen","pad","monitor","iPhone"];
        // let colors = ["red","black","green"];
        // let showCount = 5;

        // document.write(`<h1>show ${showCount} products</h1>`);

        // for(let i = 0;i<showCount;i++){
        //     document.write(`<div>`);
        //     document.write(`<h3>${products[i]}</h3>`);
        //     for(let j = 0; j<colors.length;j++){
        //         document.write(`<p>[${j+1}] ${colors[j]}</p>`)
        //     }
        //     document.write(`<p>${colors.join(" | ")}</p>`)
        //     document.write(`</div>`)
        // }        
    

        // let products = ["keyboard","mouse","pen","pad","monitor","iPhone"];
        // let colors = ["red","blue","black"];
        // let showCount = 5;

        // document.write(`<h1>show ${showCount} products</h1>`);
        
        // for(let i = 0;i<showCount;i++){
        //     document.write(`<div>`)
        //     document.write(`<h3>${products[i]}</h3>`)
        //     for(let j =0;j<colors.length;j++){
        //         document.write(`<p>[${j+1}] ${colors[j]}</p>`)
        //     }
        //     document.write(`<p>${colors.join(" | ")}</p>`)
        //     document.write(`</div>`)
        // }
        

        // let products = ["keybord","mouse","pen","pad","monitor","iPhone"];
        // let colors = ["red","black","green"];
        // let showCount= 5;
        // document.write(`<h1>show ${showCount} products<h1>`)
        // for(let i = 0 ; i<showCount;i++){
        //     document.write(`<ol>`)
        //     document.write(`<ol>${products[i]}</ol>`)
        //     for(let j = 0;j<colors.length;j++){
        //         document.write(`<h6><li>${colors[j]}</li></h6>`)
               
        //     }
        //     document.write(`<h6>${"#"} ${i+ 1 + " - "} ${colors.join(" | ")}</h6>`)
        //     document.write(`</ol>`)
        // }
        
      //  let products=["keyboard","mouse","pen","pad","monitor","iPhone"]

        // let index=0;
        // while(index<10){
        //     console.log(index)
        //     index+=1;
        // }
        
        // let index = 0;
        // while(index<products.length){
        //     console.log(products[index]);
        //     index++;
        // }
        // let index = 0;
        // while(index<products.length){
        //     console.log(products[index]);
        //     index++;
        //     if(index===3)break;
        // }

        // let i =0;
        // do{
        //     console.log(products[i])
        //     i++;
        // }
        // while(i<products.length);

        // let i =0;
        // do{
        //     document.write(`<h1>${products[i]}</h1>`);
        //     i++;
        // }
        // while(i<products[i]);

    //     let i = 0;

    // do{
    //     console.log(products[i]);
    //     i++;
    // }
    // while(false);


    // let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"];
    // let myEmplyees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
    // let admins=[];
    // let a=1;
    // for(let i=0;i<myAdmins.length;i++){
    //     if(myAdmins[i]==="Stop")break;
    //     admins.push(myAdmins[i]) 
    // }
    // console.log(admins);
    // let showCount=admins.length;
    // document.write(`<div>We Have ${showCount} Admins</div><hr>`);
    // for(let j = 0;j<myAdmins.length;j++ ){
    //     if(myAdmins[j]==="Stop")break;
    //     admins.push(myAdmins[j]) 
    //     document.write(`<div>`)
    //     document.write(`<div>The Admin For Team ${j+1} Is ${admins[j]} <hr> <h3>Team Members: <br></h3></div>`)
    //     for(let k = 0;k<myEmplyees.length;k++){
    //         if(myEmplyees[k][0]===admins[j][0]){
    //         document.write(`<h4>- ${a++} ${myEmplyees[k]} </h4>`)
    //     }
        
    // }
    //     a=1;
    //     document.write(`<hr></div>`)
    // }


// function sayHello(userName){
//     console.log(`Hello ${userName}`)
// }
// sayHello("Mohammed");

// function sayHello(userName){
//     return (`Hello ${userName}`);
// }
// console.log(sayHello("Mohammed"));

// function calc(num1,num2){
//     return num1+num2;
// }
// let result = calc(10,20);
// console.log(result+100);

// function calc(num1,num2){
//     return 
//     num1+num2;
// }
// let result = calc(10,20);
// console.log(result+100);

// function generate(start,end){
//     for(let i = start;i<=end;i++){
        
//         if(i===15){
//             return `interruption`;
//         }
//         console.log(i)
//     }
// }
// generate(10,20)

// function calc(...numbers){
// let result = 0;
// for(let i = 0;i<numbers.length;i++){
//     result+=numbers[i]
// }
// return `Final Result Is ${result}`
// }
// console.log(calc(10,20,30))



// // function showDetails(a,b,c){
// //     if(a===true && typeof b==="string"){
// //         console.log(`hello ${b} 
// //         Your Age Is ${c}
// //          You Are Available For Hire`)
// //     }else if(a===false && typeof b==="string"){
// //         console.log(`hello ${b} Your Age Is ${c} You Are Not Available For Hire`)
// //     }
// //     else if(b===true && typeof a==="string"){
// //         console.log(`hello ${a}
// //          Your Age Is ${c} 
// //          You Are Available For Hire`)
// //     }else if(b===false && typeof a==="string"){
// //         console.log(`hello ${a} Your Age Is ${c} You Are Not Available For Hire`)
// //     }
// //     else if(a===true && typeof c==="string"){
// //         console.log(`hello ${c}
// //          Your Age Is ${b} 
// //          You Are Available For Hire`)
// //     }else if(a===false && typeof c==="string"){
// //         console.log(`hello ${c} Your Age Is ${b} You Are Not Available For Hire`)
// //     }
// //     else if(c===true && typeof a==="string"){
// //         console.log(`hello ${a}
// //          Your Age Is ${b} 
// //          You Are Available For Hire`)
// //     }else if(c===false && typeof a==="string"){
// //         console.log(`hello ${a} Your Age Is ${b} You Are Not Available For Hire`)
// //     }
// //     else if(b===true && typeof c==="string"){
// //         console.log(`hello ${c}
// //          Your Age Is ${a}
// //           You Are Available For Hire`)
// //     }else if(b===false && typeof c==="string"){
// //         console.log(`hello ${c}Your Age Is ${a}You Are Not Available For Hire`)
// //     }
// //     else if(c===true && typeof b==="string"){
// //         console.log(`hello ${b}
// //          Your Age Is ${a} 
// //          You Are Available For Hire`)
// //     }else if(c===false && typeof b==="string"){
// //         console.log(`hello ${b} Your Age Is ${a} You Are Not Available For Hire`)
// //     }else{
// //         console.log(`UNKNOWN RESULT`)
// //     }
// // }
// // showDetails(true,"mohammed",33);
// // showDetails(false,"mohammed",33);
// // showDetails(true,33,"mohammed");
// // showDetails(false,33,"mohammed");

// // showDetails("mohammed",33,true);
// // showDetails("mohammed",33,false);
// // showDetails(33,"mohammed",true,);
// // showDetails(33,"mohammed",false,);

// // showDetails("mohammed",true,33);
// // showDetails("mohammed",false,33);
// // showDetails(33,true,"mohammed");
// // showDetails(false,33,"mohammed");


// function showDetails(a,b,c){
//     a===true && typeof b==="string"?
//         console.log(` hello, [${b}] 
//         Your Age Is [${c}]
//         You Are Available For Hire`):
//     a===false && typeof b==="string"?
//         console.log(`hello [${b}] Your Age Is [${c}] You Are Not Available For Hire`):
        
//     b===true && typeof a==="string"?
//         console.log(` hello, [${a}]
//         You Are Available For Hire`):
//     b===false && typeof a==="string"?
//         console.log(`hello [${a}] Your Age Is [${c}] You Are Not Available For Hire`):
//     a===true && typeof c==="string"?
//         console.log(` hello, [${c}]
//         Your Age Is [${b}] 
//         You Are Available For Hire`):
//     a===false && typeof c==="string"?
//          console.log(`hello [${c}] Your Age Is [${b}] You Are Not Available For Hire`):
//     c===true && typeof a==="string"?
//         console.log(` hello, [${a}]
//         Your Age Is [${b}] 
//         You Are Available For Hire`):
//     c===false && typeof a==="string"?
//         console.log(`hello [${a}] Your Age Is [${b}] You Are Not Available For Hire`):
//     b===true && typeof c==="string"?
//         console.log(` hello, [${c}]
//         Your Age Is [${a}]
//         You Are Available For Hire`):
//     b===false && typeof c==="string"?
//         console.log(`hello [${c}]Your Age Is [${a}]You Are Not Available For Hire`):
        
//     c===true && typeof b==="string"?
//         console.log(` hello, [${b}]
//         Your Age Is [${a}] 
//         You Are Available For Hire`):
//     c===false && typeof b==="string"?
//         console.log(`hello [${b}] Your Age Is [${a}] You Are Not Available For Hire`):
//     console.log(`UNKNOWN RESULT`)
        
// }
// showDetails(true,"mohammed",33);
// showDetails(false,"mohammed",33);
// showDetails(true,33,"mohammed");
// showDetails(false,33,"mohammed");

// showDetails("mohammed",33,true);
// showDetails("mohammed",33,false);
// showDetails(33,"mohammed",true,);
// showDetails(33,"mohammed",false,);

// showDetails("mohammed",true,33);
// showDetails("mohammed",false,33);
// showDetails(33,true,"mohammed");
// showDetails(false,33,"mohammed");


// function calc(num1,num2){
//     return num1+num2;
// }
// console.log(calc(100,200));

// console.log(calc(100,200));
// function calc(num1,num2){
//     return num1+num2;
// }

// let calculate = function(num1,num2){
//     return num1+num2;
// }
// console.log(calculate(100,200));

// console.log(calculate(100,200));
// let calculate = function(num1,num2){
//     return num1+num2;
// }

// let calculate = function clac(num1,num2){
//     return num1+num2;
// }
// console.log(calc(100,200));

// document.getElementById("show").onclick=function(){
//     let num1=100;
//     let num2=200;
//     let result=num1+num2;
//     console.log(result);
// }

// function show(num1,num2){
//     let num1=100;
//     let num2=200;
//     let result=num1+num2;
//     console.log(result);
// }
// document.getElementById("show").onclick=show;
// setTimeout(function(){
//     console.log("good")
// },2000)
// for (let i=0;i<1;i++){
// setInterval(function(){
// console.log(i++)
// },1000)}


// //  function sayHello(fname,lname){
// //     let message = "Hello"
// //     function concateMsg(){
// //         message = `${message} ${fname} ${lname}` 
// //     }
// //     concateMsg();
// //     return message;
// //  }

// //  console.log(sayHello("Mohammed","Kotb"))


// //  function sayHello(fname,lname){
// //     let message = "Hello"
// //     function concateMsg(){
// //         return  `${message} ${fname} ${lname}` 
// //     }
    
// //     return concateMsg();
// //  }

// //  console.log(sayHello("Mohammed","Kotb"));

// function sayHello(fname,lname){
//     let message ="Hello";
//     function concateMsg(){
//         function getFullName(){
//             return `${fname} ${lname}`
//         }
//         return `${message} ${getFullName()}`
//     }
//     return concateMsg();
// }
// console.log(sayHello("Mohammed","Kotb"));



// var a = 1;
// let b = 2;

// function show(){
//     console.log(`from function-local ${a}`)
//     console.log(`from function-local ${b}`)
// }

// console.log(`from global ${a}`)
// console.log(`from global ${b}`)

// show();

// var a = 1;
// let b = 2;

// function show(){
//     console.log(`from function-local ${a}`)
//     console.log(`from function-local ${b}`)
// }

// show();

// console.log(`from global ${a}`)
// console.log(`from global ${b}`)

// var a = 1;
// var a = 2;

// function show(){
//     console.log(`from function-local ${a}`)
//     console.log(`from function-local ${a}`)
// }

// show();

// console.log(`from global ${a}`)
// console.log(`from global ${a}`)

// let a = 1;
// let a= 2;

// function show(){
//     console.log(`from function-local ${a}`)
//     console.log(`from function-local ${b}`)
// }

// show();

// console.log(`from global ${a}`)
// console.log(`from global ${b}`)

// var a = 1;
// let b = 2;

// function show(){

//     console.log(`from function-local ${a}`)
//     console.log(`from function-local ${b}`)
//     var a = 10;
//     let b = 20;
// }

// show();

// console.log(`from global ${a}`)
// console.log(`from global ${b}`)

// let a = 1;
// var b = 2;

// function show(){

//     console.log(`from function-local ${a}`)
//     console.log(`from function-local ${b}`)
//     let a = 10;
//     var b = 20;
// }

// show();

// console.log(`from global ${a}`)
// console.log(`from global ${b}`)

// var a = 1;
// let b = 2;

// function show(){
//     var a = 10;
//     let b = 20;
//     console.log(`from function-local ${a}`)
//     console.log(`from function-local ${b}`)
   
// }

// console.log(`from global ${a}`)
// console.log(`from global ${b}`)
// show();




// // var a = 1;
// // let b = 2;

// function show(){
//     var a = 10;
//     let b = 20;
//     console.log(`from function-local ${a}`)
//     console.log(`from function-local ${b}`)
   
// }

// console.log(`from global ${a}`)
// console.log(`from global ${b}`)

// show();


// // var a = 1;
// // let b = 2;

// function show(){
//     var a = 10;
//     let b = 20;
//     console.log(`from function-local ${a}`)
//     console.log(`from function-local ${b}`)
   
// }
// show();
// console.log(`from global ${a}`)
// console.log(`from global ${b}`)

// // let x=10;
// // function parent(){
// //     let x=10;
// //     console.log(x)
// //     function child(){
        
// //         console.log(x)
// //         function grandChild(){
            
// //             console.log(x)
// //         }
// //         grandChild();
// //     }
// //     child();
// // }
// // parent();

// // let x=10;
// // function parent(){
    
// //     console.log(x)
// //     function child(){
        
// //         console.log(x)
// //         function grandChild(){
// //             let x=10;
// //             console.log(x)
// //         }
// //         grandChild();
// //     }
// //     child();
// // }
// // parent();


// function parent(){
    
//     console.log(x)
//     function child(){
        
//         console.log(x)
//         function grandChild(){
//             let x=10;
//             console.log(x)
//         }
//         grandChild();
//     }
//     child();
// }
// parent();


// let myNums=[1,2,3,4,5,6];
// let newAdd=[];
// for(let i =0;i<myNums.length;i++){
//     newAdd.push(myNums[i]+myNums[i])
// }
// console.log(newAdd);


// let addSelf = myNums.map(function(element,index,arr){
//     console.log(`current element ${element}`);
//     console.log(`current index ${index}`);
//     console.log(`Array ${arr}`);
//     console.log(`this argument ${this}`);
// },10)

// let addSelf = myNums.map((element,index,arr)=>{
//     console.log(`current element ${element}`);
//     console.log(`current index ${index}`);
//     console.log(`Array ${arr}`);
//     console.log(`this argument ${this}`);
// },10)

// let addSelf = myNums.map(function(element){
//  return element+element;
// })
// console.log(addSelf);

// let addSelf = myNums.map(a=> a+a)
// console.log(addSelf);

// function addition(ele){
// return ele+ele;
// }
// let newIt=myNums.map(addition);
// console.log(newIt);

// let addition=function (ele){
// return ele+ele;
// }
// let newIt=myNums.map(addition);
// console.log(newIt);




// let swappingCases= "elZERo";
// let invertedNumbers = [1,-10,20,15,100,-30];
// let ignoreNumbers ="Elz123er4o";

// let sw =swappingCases.split("").map(function(ele){
//     return ele===ele.toLowerCase()?ele.toUpperCase():ele.toLowerCase();
// }).join("")
// console.log(sw);

// let inv =invertedNumbers.map(function(ele){
//     return ele=-ele;
// })
// console.log(inv)

// let ign =ignoreNumbers.split("").map(function(ele){
//      return isNaN(parseInt(ele))?ele:"";
// }).join("");
// console.log(ign);

// (deg/0.97815)
let y= document.getElementById("bankper");
let x= document.getElementById("banktax");
let income =document.getElementById("inf");
let out =document.getElementById("inff");
let me=document.getElementById("show")
show.onclick=function(){
    if(y.value!==""&&x.value===""){
        x.focus();
    }else if(y.value!==""&&x.value!==""){
        income.focus();
    }
    out.value= +income.value/(1-((+y.value*+x.value)+ +y.value))
    // (out.value=(income.value/0.97815))
}
