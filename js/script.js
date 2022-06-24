
function test(){
    console.log(5+5);
    alert("welcome to my page");
  var v= prompt("Enter your age");
console.log(v)
setTimeout(function(){
if(v>=21 && v!=null){
   var a=confirm("You want to open youtube");
       if(a==true){
        alert("ok") ;
        open("https://www.youtube.com/");
       }
       else{
     alert("cancel");
       }
} else if (v<21 && v!=null) {
    b=confirm("You want to open Github");
       if(b==true){
        alert("ok");
        open("https://github.com/");
       }
       else{
        alert("cancel");
       }
    } 
},2000);
}
// function test(){
//     alert("Welcome to my page");
//     setTimeout(function(){
// var v=prompt("Enter your age");
// (v>=21)?open("https://www.youtube.com/") : b=confirm("You want to open Github");
// },2000);
// }

function nav(){
    setTimeout(function(){
        alert("GoodBye")
    }, 2000);
}





