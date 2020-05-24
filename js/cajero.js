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
    var costa = document.getElementById("costa");
    if(entro=="123"){
       
        document.getElementById("p1").style.display="none";
        costa.disabled = false;
        document.getElementById("p2").style.display="block";
        

        
    }else{
        document.getElementById("mensaje").innerHTML="Contraseña incorrecta";
    }
      
}
 function retiro(){
    document.getElementById("p2").style.display="none"
     document.getElementById("p3").style.display="block"
     }
     
