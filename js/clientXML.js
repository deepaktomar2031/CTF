function sendXml(){
 var username=document.getElementById("username").value;
 var passwd=document.getElementById("passwd").value;
 var message=document.getElementById("message");
 message.innerHTML="";
 var data="<user><login>"+username+"</login>"+"<password>"+passwd+"</password></user>";
 var xml=new XMLHttpRequest();
 xml.open("POST","login.php",false);
 xml.setRequestHeader("Content-Type","text/xml");
 xml.onreadystatechange = function() {
 if (xml.readyState===4){
    message.innerHTML=xml.responseText;
    }
 }
 xml.send(data);
 
 setTimeout(function(){
 message.innerHTML="";
}, 2000);

}

window.onload=function(){
var t=document.getElementById("login_button");
t.addEventListener('click', sendXml);
}