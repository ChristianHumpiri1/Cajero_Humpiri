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
    document.getElementById("num").style.display="none";
    document.getElementById("num2").style.display="block";
        }
function retiro6(){
    document.getElementById("p6").style.display="none";
    document.getElementById("p5").style.display="block";
}
function retiro5(){
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="block";
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
 document.getElementById("t0").addEventListener("click",t0);
function t0(){ 
    let result=document.getElementById("t0").innerHTML;
    var nume=document.getElementById("per");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s1").addEventListener("click",s1);
function s1(){ 
    let result=document.getElementById("s1").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s2").addEventListener("click",s2);
function s2(){ 
    let result=document.getElementById("s2").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s3").addEventListener("click",s3);
function s3(){ 
    let result=document.getElementById("s3").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s4").addEventListener("click",s4);
function s4(){ 
    let result=document.getElementById("s4").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s5").addEventListener("click",s5);
function s5(){ 
    let result=document.getElementById("s5").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s6").addEventListener("click",s6);
function s6(){ 
    let result=document.getElementById("s6").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s7").addEventListener("click",s7);
function s7(){ 
    let result=document.getElementById("s7").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s8").addEventListener("click",s8);
function s8(){ 
    let result=document.getElementById("s8").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s9").addEventListener("click",s9);
function s9(){ 
    let result=document.getElementById("s9").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 document.getElementById("s0").addEventListener("click",s0);
function s0(){ 
    let result=document.getElementById("s0").innerHTML;
    var nume=document.getElementById("total");
    var value=nume.value;
    nume.value=value + result;
 }
 function dinero() {
    var montoactual;
    var retiro=document.getElementById("total").value,montoactual = 5000;

    if (retiro=="") {
        document.getElementById("error").innerHTML="Ingresar Monto";
    } else {
        if (retiro%10==0) {
            if (montoactual>retiro) {
                document.getElementById("total").value=""
                document.getElementById("p5").style.display="none";
                document.getElementById("p6").style.display="block";
            } else {
                document.getElementById("error").innerHTML="Sin saldo";
            }
        } else {
            document.getElementById("error").innerHTML="Solo billetes";
        }
    }
}



 
     
