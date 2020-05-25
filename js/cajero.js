var com= document.getElementById("per");
function agre(r){
    var a = com.value;
    com.value = a + r;
 
}
function incor(){
    com.value="";
    document.getElementById("mensaje").innerHTML="";

}

function login(){
    var entro = document.getElementById("per").value;
    if(entro==123){
       
        document.getElementById("p1").style.display="none";
        
        document.getElementById("p2").style.display="block";
        

        
    }else{
        document.getElementById("mensaje").innerHTML="Contraseña incorrecta";
    }
      
}
function retiro(){
    document.getElementById("p2").style.display="none";
     document.getElementById("p3").style.display="block";
     }
     
 function retiro2(){
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="block";
    }
    function retiro3(){
        document.getElementById("p4").style.display="none";
        document.getElementById("p5").style.display="block";
        }
document.getElementById("t1").addEventListener("click",t1);
function t1(){ 
    let result=document.getElementById("t1").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("t2").addEventListener("click",t2);
function t2(){ 
    let result=document.getElementById("t2").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("t3").addEventListener("click",t3);
function t3(){ 
    let result=document.getElementById("t3").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("t4").addEventListener("click",t4);
function t4(){ 
    let result=document.getElementById("t4").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("t5").addEventListener("click",t5);
function t5(){ 
    let result=document.getElementById("t5").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("t6").addEventListener("click",t6);
function t6(){ 
    let result=document.getElementById("t6").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("t7").addEventListener("click",t7);
function t7(){ 
    let result=document.getElementById("t7").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("t8").addEventListener("click",t8);
function t8(){ 
    let result=document.getElementById("t8").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("t9").addEventListener("click",t9);
function t9(){ 
    let result=document.getElementById("t9").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("t0").addEventListener("click",t5);
function t0(){ 
    let result=document.getElementById("t0").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 
       


 
     
