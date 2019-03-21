/******************************************************/
/*    This script is developed bij Peter de Vlieger   */
/*         e-mail: peter.de.vlieger@kpnmail.nl        */
/*                   20 December 2017                 */ 
/******************************************************/

  var solved  = false;
  var attempt  = 0;
  var rij = ['1234', '4321', '326', '251', '123', '67', '89', '1000', '99'];
  var date = new Date();
  var begin_tijd = date.getTime();
  var date = new Date();
  var eind_tijd  = date.getTime();
  var tijd;
  var country = "NL"; 
  var country_setting = "NL"; 
  var message = "intro";
  var width = 1;
  var n = 1;
  var m = 0; var txt = "";
  
  
  function myFunction(){
   alert("mijn functie");	     
  }

  if(true){ // hide broncode 

    document.onkeydown = function(e) {
      //alert(e.keyCode);
      if (e.keyCode === 123 ) {
        //alert("F12 or u pressed"); 
	return false;
      } 
      
      if(e.which == 17) isCtrl=true;
      if(e.which == 85 && isCtrl == true) {
        //alert('CTRL + U');
        return false;
      }
    };

    var msg="You cannot use right click on this page.";
    function clickIE() {
      if (document.all) {
       //alert(msg);
       return false;
      } 
    }
    function clickNS(e) {
      if(document.layers||(document.getElementById&&!document.all)) {
        if(e.which==2||e.which==3) {
          //alert(msg);
	  return false;
        }
      }
    }
    if(document.layers) {
      document.captureEvents(Event.MOUSEDOWN);
      document.onmousedown=clickNS;
    } else{ 
    document.onmouseup=clickNS;document.oncontextmenu=clickIE;
    }
    document.oncontextmenu=new Function("return false") 
  }
  
  function email(){
    window.open('mailto:peter.de.vlieger@kpnmail.nl?subject=Breinbreker');
  }

  function disableButtons(bool){
    document.getElementById("button_nl").disabled   = bool; 
    document.getElementById("button_uk").disabled   = bool;
    document.getElementById("button_mail").disabled = bool;
    document.getElementById("button_print").disabled = bool;
    document.getElementById("button_nl3").disabled = bool; // LOS PUZZEL OP
    if(bool){
      document.getElementById("button_nl3").style.color = "#000000";
    } else {
      document.getElementById("button_nl3").style.color = "#222222";
    }
    document.getElementById("button_nl4").disabled = bool; // BEGIN OPNIEUW 
    if(bool){
      document.getElementById("button_nl4").style.color = "#000000";
    } else {
      document.getElementById("button_nl4").style.color = "#FFFFFF";
    }
    document.getElementById("button_nl5").disabled = bool; // KRIJG PUZZEL
    if(bool){
      document.getElementById("button_nl5").style.color = "#000000";
    } else {
      document.getElementById("button_nl5").style.color = "#FFFFFF";
    }
    document.getElementById("button_uk3").disabled = bool; // SOLVE PUZZLE
    if(bool){
      document.getElementById("button_uk3").style.color = "#777777";
    } else {
      document.getElementById("button_uk3").style.color = "#222222";
    }
    document.getElementById("button_uk4").disabled = bool; // START OVER
    if(bool){
      document.getElementById("button_uk4").style.color = "#777777";
    } else {
      document.getElementById("button_uk4").style.color = "#222222";
    }
    document.getElementById("button_uk5").disabled = bool; // GET PUZZLE
    if(bool){
      document.getElementById("button_uk5").style.color = "#777777";
    } else {
      document.getElementById("button_uk5").style.color = "#222222";
    }
  }


  function NL(){
    country = "NL";
    document.getElementById("nl1").style.display = "block";
    document.getElementById("nl2").style.display = "block";
    document.getElementById("nl3").style.display = "block";
    document.getElementById("nl4").style.display = "block";
    document.getElementById("nl5").style.display = "block";
    document.getElementById("uk1").style.display = "none";
    document.getElementById("uk2").style.display = "none";    
    document.getElementById("uk3").style.display = "none";
    document.getElementById("uk4").style.display = "none";
    document.getElementById("uk5").style.display = "none";
    
    if(message == "intro"){
      document.getElementById("nl_intro").style.display   = "block"
      document.getElementById("uk_intro").style.display   = "none"
      document.getElementById("nl_improve").style.display = "none";
      document.getElementById("uk_improve").style.display = "none";
      document.getElementById("nl_wait").style.display    = "none";
      document.getElementById("uk_wait").style.display    = "none";
      document.getElementById("nl_result").style.display  = "none";
      document.getElementById("uk_result").style.display  = "none";
    }  
    if(message == "red_found"){
      document.getElementById("nl_intro").style.display   = "none"
      document.getElementById("uk_intro").style.display   = "none"
      document.getElementById("nl_improve").style.display = "block";
      document.getElementById("uk_improve").style.display = "none";
      document.getElementById("nl_wait").style.display    = "none";
      document.getElementById("uk_wait").style.display    = "none";
      document.getElementById("nl_result").style.display  = "none";
      document.getElementById("uk_result").style.display  = "none";
    }
    if(message == "wait"){
      document.getElementById("nl_intro").style.display   = "none"
      document.getElementById("uk_intro").style.display   = "none"
      document.getElementById("nl_improve").style.display = "none";
      document.getElementById("uk_improve").style.display = "none";
      document.getElementById("nl_wait").style.display    = "block";
      document.getElementById("uk_wait").style.display    = "none";
      document.getElementById("nl_result").style.display  = "none";
      document.getElementById("uk_result").style.display  = "none";
    }
    if(message == "result"){
      document.getElementById("nl_intro").style.display   = "none";
      document.getElementById("uk_intro").style.display   = "none";
      document.getElementById("nl_improve").style.display = "none";
      document.getElementById("uk_improve").style.display = "none";
      document.getElementById("nl_wait").style.display    = "none";
      document.getElementById("uk_wait").style.display    = "none";
      document.getElementById("nl_result").style.display  = "block";
      document.getElementById("uk_result").style.display  = "none";
    }
  }

  function UK(){
    country = "UK";
    document.getElementById("nl1").style.display = "none";
    document.getElementById("nl2").style.display = "none";
    document.getElementById("nl3").style.display = "none";
    document.getElementById("nl4").style.display = "none";
    document.getElementById("nl5").style.display = "none";
    document.getElementById("uk1").style.display = "block";
    document.getElementById("uk2").style.display = "block";
    document.getElementById("uk3").style.display = "block";
    document.getElementById("uk4").style.display = "block";
    document.getElementById("uk5").style.display = "block";
    
    if(message == "intro"){
      document.getElementById("nl_intro"  ).style.display = "none";
      document.getElementById("uk_intro"  ).style.display = "block";
      document.getElementById("nl_improve").style.display = "none";
      document.getElementById("uk_improve").style.display = "none";
      document.getElementById("nl_wait"   ).style.display = "none";
      document.getElementById("uk_wait"   ).style.display = "none";
      document.getElementById("nl_result" ).style.display = "none";
      document.getElementById("uk_result" ).style.display = "none";
    }
    if(message == "red_found"){
      document.getElementById("nl_intro"  ).style.display = "none";
      document.getElementById("uk_intro"  ).style.display = "none";
      document.getElementById("nl_improve").style.display = "none";
      document.getElementById("uk_improve").style.display = "block";
      document.getElementById("nl_wait"   ).style.display = "none";
      document.getElementById("uk_wait"   ).style.display = "none";
      document.getElementById("nl_result" ).style.display = "none";
      document.getElementById("uk_result" ).style.display = "none";
    }
    if(message == "wait"){
      document.getElementById("nl_intro"  ).style.display = "none";
      document.getElementById("uk_intro"  ).style.display = "none";
      document.getElementById("nl_improve").style.display = "none";
      document.getElementById("uk_improve").style.display = "none";
      document.getElementById("nl_wait"   ).style.display = "none";
      document.getElementById("uk_wait"   ).style.display = "block";
      document.getElementById("nl_result" ).style.display = "none";
      document.getElementById("uk_result" ).style.display = "none";
    }
    if(message == "result"){
      document.getElementById("nl_intro"  ).style.display = "none";
      document.getElementById("uk_intro"  ).style.display = "none"
      document.getElementById("nl_improve").style.display = "none";
      document.getElementById("uk_improve").style.display = "none";
      document.getElementById("nl_wait"   ).style.display = "none";
      document.getElementById("uk_wait"   ).style.display = "none";
      document.getElementById("nl_result" ).style.display = "none";
      document.getElementById("uk_result" ).style.display = "block";
    }
  }   

  function introNL(){
    disableButtons(false);
    introText("NL");	  
  }
  function introUK(){
    introText("UK");	  
  }

  function introText(country) {
    message="intro";
    op  = ["+", "+", "+", "+", "+", "+"]; 
    for(i=0; i<6; i++)	{ 
      str = "op" + i;
      document.getElementById(str).value = op[i];
    }
    for(i=1; i<=36; i++) {
      str = "t" + i; 
      document.getElementById(str).style.background = "#f0b194";
      document.getElementById(str).value = " ";
    }
    if(country == "NL") {
      country = "NL"; // global
      document.getElementById("button_nl").checked=true;
      document.getElementById("button_uk").checked=false;
      NL();
    }  
    if(country == "UK") {
      country = "UK"; // global
      document.getElementById("button_uk").checked=true;
      document.getElementById("button_nl").checked=false;
      UK();
    }
  }

  function messageBox(text1, nl_uk_opl) {
    country_setting = country; // rember selected country

    str = "<textarea name='text' rows='8'cols='54' STYLE='border-style:double; border-width:5px; border-color:#F0B194; background-color:#EEEEEE; color:#222222; padding-left:20px; padding-top:20px; font-size:18px; color:#222222; font-family:monospace; font-weight:bold;overflow:hidden'  >" + text1 + nl_uk_opl + "</textarea>";

    //alert(str);
    if(country_setting == "NL"){ // as last show NL
      if(country == "UK"){
        uk_result = document.getElementById("uk_result");
        uk_result.innerHTML = str;
      }
      if(country == "NL"){
        nl_result = document.getElementById("nl_result");
        nl_result.innerHTML = str;
      }
    }  

    if(country_setting == "UK"){ // as last show UK
      if(country == "NL"){
        nl_result = document.getElementById("nl_result");
        nl_result.innerHTML = str;
      }
      if(country == "UK"){
        uk_result = document.getElementById("uk_result");
        uk_result.innerHTML = str;
      }
    }
    country = country_setting;
  }
  
  function inputChange(){
    var i;
    var str;
    // alert("Element veranderd");	   
    // Zet na spatie correctie op normaal 
    for(i=1; i<=36; i++) { 
      str = "t" + i;	
      if(document.getElementById(str).value != " "){
         document.getElementById(str).style.background = "#F0B194"; 
      }
    }  
  }

  function checkInput(){
    var i;
    var j;
    var k;
    var n;
    var t;
    var str;
    var str1;
    var str2;
    var str3;
    var str4;
    var text;
    var red_found = false;
    
    //alert("Zet Alle niet spaties op normaal");  
    for(i=1; i<=36; i++) {
      str = "t" + i;
      if(document.getElementById(str).style.background.value != "red") {     
         document.getElementById(str).style.background = "#f0b194";
      }
    } 

    //alert("Zet alle spatie op rood");  
    for(i=1; i<=36; i++) { 
      str = "t" + i;
      if(document.getElementById(str).value == " "){ 
	 document.getElementById(str).style.background = "red";
      }  
    } 

    k=0;
    n=1;
    j=1;
    for(i=0; i<9; i++) {
      n = 1 + k; 	
      str1 = "t" + n; // t1  t5  t9   t13  t17  t21   t33
      n = 2 + k; 
      str2 = "t" + n; // t2  t6  t10  t14  t18  t22   t34
      n = 3 + k; 
      str3 = "t" + n; // t3  t7  t11  t15  t19  t23   t35
      n = 4 + k; 
      str4 = "t" + n; // t4  t8  t12  t16  t20  t24   t36
      k = k + 4;

      // alert("Zet alle legitieme spaties op normaal\n\r[.abc]  [..bc]  [...d]");
      if(document.getElementById(str2).value != " " && 
         document.getElementById(str3).value != " " && 
         document.getElementById(str4).value != " ") { 
         document.getElementById(str1).style.background = "#f0b194";
      } 

      if(document.getElementById(str1).value == " " &&  
         document.getElementById(str2).value == " " && 
         document.getElementById(str3).value != " " && 
         document.getElementById(str4).value != " ") { 
         document.getElementById(str1).style.background = "#f0b194";
         document.getElementById(str2).style.background = "#f0b194";
      }  

      if(document.getElementById(str1).value == " " &&  
         document.getElementById(str2).value == " " && 
         document.getElementById(str3).value == " " && 
         document.getElementById(str4).value != " ") { 
         document.getElementById(str1).style.background = "#f0b194";
         document.getElementById(str2).style.background = "#f0b194";
         document.getElementById(str3).style.background = "#f0b194";
      }          

      // alert("Zet alle legitieme spaties op normaal\n\r[.ab-]  [..b-]  [.a-c] [.a--");
      if(document.getElementById(str2).value != " " && 
         document.getElementById(str3).value != " " && 
         document.getElementById(str4).value == " ") { 
         document.getElementById(str1).style.background = "#f0b194";
      } 

      if(document.getElementById(str1).value == " " &&  
         document.getElementById(str2).value == " " && 
         document.getElementById(str3).value != " " && 
         document.getElementById(str4).value == " ") { 
         document.getElementById(str1).style.background = "#f0b194";
         document.getElementById(str2).style.background = "#f0b194";
      }  

      if(document.getElementById(str1).value == " " &&  
         document.getElementById(str2).value != " " && 
         document.getElementById(str3).value == " " && 
         document.getElementById(str4).value != " ") { 
         document.getElementById(str1).style.background = "#f0b194";
      }

      if(document.getElementById(str1).value == " " &&  
         document.getElementById(str2).value != " " && 
         document.getElementById(str3).value == " " && 
         document.getElementById(str4).value == " ") { 
         document.getElementById(str1).style.background = "#f0b194";
      }      
    }
    
    //var firefox = navigator.userAgent.indexOf('Firefox') > -1;
    //if(firefox) alert("Firefox");

    // controleer alles op rood als rood melding input corrigeren
    for(i=1; i<=36; i++) { 
      str = "t" + i;

      var x = document.getElementById(str).style.background; 
      var substring = "red"; // In connection with Firefox
      if(x.indexOf(substring) !== -1) { 
        red_found = true; break;
      }
    }  

    if(red_found){
      message = "red_found";
      if(country == "NL"){ NL(); }
      if(country == "UK"){ UK(); }
      return false;
    } else {
      //alert("Alles is in orde");
      return true;
    }
  }

  function solve(){
    var ok;
    ok = checkInput();
     if(ok){
      //alert("Nu de puzzel oplossen.");
     doPuzzle(); 
    } else {
      //alert("checkInput NOG ROOD");
    }
  }  
  
  
  function grabHim(length){
    var min=1;         // not index 0  = dummy 
    var max=length-1 ; // max index puzzles incl index 0
                       // incl min incl max 
    var x =Math.floor(Math.random() * (max-min+1) ) + min; 
    return x;          // real index
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function rand_2(){
    min=0; max=1;
    var x = getRandomInt(min, max);
    return x;
  }
  
  function rand_239(){
    min=0; max=239;
    var x = getRandomInt(min, max);
    return x;
  }

    
  function initGetPuzzle(){ 
    //alert("In de functie initGetPuzzle\n\rpatroon " + pattern);
    
      puzzles = new Array();

      op  = ["-", "-", "-", "-", "-", "-"]; 

      r =   ["CFKF","BH", "GBKB", "HDA", "DE", "HFC", "GDJC", "A", "GDKJ"];
      res = [7,9,3,8,4,0,2,1,6,5]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["CGCG", "KJCA", "EJBH", "GJBF", "FGC", "HDG", "HJCC", "EHHE", "GFGK"];
      res = [7,9,5,8,2,6,1,4,0,3];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["KJC", "FJ", "HAA", "CFB", "GG", "CEF", "JJD", "C", "JJC"];
      res = [2,7,3,6,0,9,8,4,1,5];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["CCEE", "FBG", "HFHD", "ABFK", "DAK", "ADHK", "ADJE", "CJG", "DCKD"];
      res = [3,4,6,2,9,8,7,5,1,0];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["CCAD", "AEG", "HFCK", "HGDJ", "HDF", "GKDG", "GHBE", "JCJ", "JCA"];
      res = [8,7,3,0,4,5,1,2,6,9];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["FFJC", "DABJ", "KACG", "BAK", "BB", "BKB", "FEFE", "DAHG", "KKEC"];
      res = [3,1,7,4,5,6,8,0,9,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["BBCB", "EEK", "AJBC", "DEH", "BCF", "AEC", "AGKB", "FDB", "AEJH"];
      res = [2,3,9,6,5,1,7,0,8,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BDBF", "DBDF", "GAH", "CGF", "EKH", "AEF", "BHJH", "DEKF", "KFE"];
      res = [1,5,3,4,2,8,9,0,6,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BDF", "KKK", "EJC", "EGA", "AKG", "KDA", "KDB", "HGK", "ADE"];
      res = [1,8,6,7,5,9,0,2,4,3]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EHHJ", "HDK", "EAFF", "CJB", "JA", "CAB", "EGAH", "JHK", "HCK"];
      res = [0,9,2,5,1,3,6,8,7,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["-", "-", "-", "+", "+", "+"];

      r =   ["FKEG", "EBDA", "EHH", "AAG", "KBCF", "EBDA", "EKFJ", "AAG", "FKEG"];
      res = [9,8,5,4,2,3,6,7,0,1]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["JKB", "KCA", "EHB", "FCG", "EDJ", "KCA", "HHC", "FCG", "JKB"];
      res = [0,6,4,9,1,5,2,3,8,7];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["FACC", "FBFH", "AJD", "HCEG", "KJF", "FBFH", "DBG", "HCEG", "FACC"];
      res = [4,0,8,6,7,3,9,2,5,1];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["HFDA", "JCKA", "AFE", "JBHE", "JJA", "JCKA", "GBA", "JBHE", "HFDA"];
      res = [8,5,6,7,0,4,9,2,1,3];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["CHCJ", "CJCD", "GFD", "AKBF", "HAH", "CJCD", "ACAE", "AKBF", "CHCJ"];
      res = [1,0,2,7,5,9,3,8,4,6];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["EEGD", "JBJA", "AFC", "JCKD", "EKA", "JBJA", "HBD", "JCKD", "EEGD"];
      res = [6,7,4,0,3,5,8,9,2,1];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r   = ["DKHJ", "GHJJ", "GGBA", "JCF", "GFBK", "GHJJ", "DEAK", "JCF", "DKHJ"];
      res = [0,5,7,2,6,4,1,8,3,9]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BEB", "HBE", "AAF", "GKB", "KCG", "HBE", "DDJ", "GKB", "BEB"];
      res = [1,7,3,5,9,8,2,6,0,4]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DDJE", "FGAF", "ADCC", "BJCH", "BFEC", "FGAF", "FHBK", "BJCH", "DDJE"];
      res = [2,1,4,5,7,3,0,9,6,8]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BDCB", "BFHE", "JAA", "CCAK", "EGJB", "BFHE", "CAGK", "CCAK", "BDCB"];
      res = [3,4,2,6,1,0,8,9,5,7]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["-", "-", "+", "-", "+", "-"];

      r =   ["DCC", "BC", "FJG", "FB", "HGH", "HFE", "FKJ", "HBA", "JDH"];
      res = [3,8,2,7,9,6,0,1,4,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["EAF","AJK", "ADD", "EE", "EC", "BH", "KHB", "ADD", "AGF"];
      res = [1,6,5,7,3,9,0,8,4,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["JHGE", "CFAA", "CKGK", "CCDG", "CCB", "CJAC", "CEHC", "CJCD", "JEE"];
      res = [9,8,1,7,4,0,3,6,2,5];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["EGGA", "HGD", "EEJF", "GEK", "HH", "GAC", "EJHB", "GDF", "CEE"];
      res = [9,4,2,6,1,3,8,7,0,5];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["GJKF", "BGAC", "DFHA", "FDJ", "HCEH", "DGFE", "EGAB", "EGJK", "JB"];
      res = [8,3,9,2,5,7,6,1,4,0];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["KBE", "GKE", "DKC", "FFJ", "HE", "EFA", "DGJ", "FJK", "AEH"];
      res = [1,6,0,5,4,3,2,9,7,8];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EHFH", "GJC", "HHA", "EAE", "CBE", "BFJ", "EKBB", "EDGK", "EHE"];
      res = [3,7,5,4,1,0,9,8,2,6]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BJF", "AF", "KJ", "BE", "CG", "FB", "GC", "DH", "G"];
      res = [3,1,4,8,2,6,9,5,0,7]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DBHA", "FFCK", "BHEJ", "BJBB", "GC", "BJJB", "FGDH", "FFGK", "BAG"];
      res = [1,2,0,6,8,3,5,9,7,4]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EBH", "DA", "EHB", "EFG", "KC", "EHH", "GC", "GB", "J"];
      res = [8,7,9,1,3,0,6,5,2,4]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);


    
      op  = ["-", "-", "+", "+", "+", "+"]; 

      r =   ["JKAJ","KHKE", "DBA", "KHKE", "CCAB", "HKKF", "DBA", "HKKF", "HHGA"];
      res = [9,7,4,5,3,0,8,6,2,1]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["FDG", "JHE", "GBF", "JHE", "DEEE", "KJHC", "GBF", "KJHC", "KFDA"];
      res = [2,5,8,6,9,4,3,0,1,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["GKHK", "JKB", "DCAG", "JKB", "EEDH", "BFJA", "DCAG", "BFJA", "HAJD"];
      res = [9,4,8,1,3,0,2,5,7,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["HCAD", "JCG", "FKJ", "JCG", "GDHF", "GEGH", "FKJ", "GEGH", "FGGB"];
      res = [4,8,3,2,9,6,5,1,7,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["JKBJ", "KJJ", "JDAD", "KJJ", "AGED", "AFCJ", "JDAD", "AFCJ", "BCHJ"];
      res = [4,9,8,0,3,7,1,2,5,6];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);  
      
      r =   ["AADJ", "ACK", "AJHH", "ACK", "EDBJ", "EGAK", "AJHH", "EGAK", "FGFJ"];
      res = [1,9,2,6,4,5,8,3,0,7]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
 
      r =   ["JGAK","ACC", "JDHD", "ACC", "CKFC", "KCEB", "JDHD", "KCEB", "BKHF"];
      res = [8,6,3,1,0,7,9,5,2,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["GKFD", "KJH", "AHJB", "KJH", "CAEH", "CJDB", "AHJB", "CJDB", "JJCJ"];
      res = [1,8,4,7,0,3,2,9,6,5]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["JEHB", "GBD", "JHGA", "GBD", "BAKB", "DGCG", "JHGA", "DGCG", "FGBC"];
      res = [9,6,2,7,4,8,3,0,1,5]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["HHK", "JBG", "BJE", "JBG", "BEAD", "CACF", "BJE", "CACF", "CBDH"];
      res = [0,1,2,8,4,3,5,7,6,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
    
      op  = ["-", "+", "-", "+", "+", "-"];

      r =   ["BBK", "BC", "JHF", "JGEJ", "DA", "JGHK", "JEKB", "FK", "JBCJ"];
      res = [7,5,8,2,6,3,0,9,4,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["BBDB","BCAC", "JAJ", "CB", "JGKH", "JFGA", "BEFG", "CFEJ", "JAAK"];
      res = [4,5,2,8,6,1,0,9,3,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["ACBB","GGBD", "FBEG", "FGF", "HKAG", "HDHA", "AJGF", "FHFK", "GAHH"];
      res = [7,0,5,6,9,3,4,1,8,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["CBBK", "CKGG", "JFE", "BD", "BJFJ", "BJHJ", "CBGK", "JHEA", "BFBF"];
      res = [6,4,7,0,3,5,8,9,2,1];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["FJEK", "EHJA", "DEEA", "EGEJ", "EACC", "KHGH", "AJBE", "EGC", "ACKB"];
      res = [6,3,8,4,1,5,0,7,9,2];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
 
      r =   ["BCHF", "BCA", "BFKJ", "BHEB", "BDF", "BJEG", "HAAG", "GF", "HBKB"];
      res = [2,1,8,0,9,6,7,3,4,5];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["CB", "KA", "HG", "HGF", "AC", "FJE", "FFH", "D", "FHA"];
      res = [5,9,8,7,1,3,4,2,0,6];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EKF", "AHB", "CKA", "CDH", "GBE", "ECE", "DJF", "ED", "DGJ"];
      res = [2,4,3,9,5,6,1,0,7,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BJD", "CJH", "HA", "JDCC", "JH", "JDEG", "JFBE", "CKK", "JABE"];
      res = [3,6,5,2,7,8,4,9,1,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EJEJ", "FGEF", "DHB", "FHGK", "FKEK", "EGEJ", "CDEA", "GC", "CJCF"];
      res = [4,5,3,7,2,1,9,0,6,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["-", "+", "+", "+", "-", "-"]; 
      
      r =   ["KAH","AGD", "AKH", "AAFH", "JGE", "HGCA", "AGCA", "GJE", "ADBB"];
      res = [2,3,8,0,9,6,7,1,4,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["FEAB", "DEGK", "BJH", "DDA", "BE", "DH", "FBHF", "DBGF", "BEC"];
      res = [3,9,0,1,8,2,7,5,6,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["KKCK", "DCBD", "DFAD", "DFB", "EBK", "EJA", "KGKH", "DAKG", "DKGF"];
      res = [2,8,0,3,1,5,9,4,7,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["DKBC", "DJAF", "DF", "EJB", "EK", "EDK", "DHJC", "DKDG", "EEG"];
      res = [9,0,6,1,2,3,8,7,4,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["AGCG", "FJJ", "KHCG", "AEHA", "ADGG", "KJD", "GCFD", "CHGG", "KDBA"];
      res = [2,4,3,7,8,9,5,6,0,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["GGCF", "CEDK", "BCB", "EHCC", "CDA", "AKCK", "JGGJ", "CJDC", "EFAF"];
      res = [3,7,1,9,4,5,2,0,6,8];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["GFBK", "AFK", "FBKC", "BDD", "KGE", "FAK", "ACHA", "FCJD", "GCCK"];
      res = [3,8,0,6,9,1,2,5,4,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DGF", "CDC", "FBJ", "DF", "FK", "CG", "EJD", "FAA", "HJD"];
      res = [0,9,2,6,7,3,5,4,1,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BKJ", "ED", "CFK", "DFJ", "GE", "FG", "FAB", "DJC", "BHD"];
      res = [0,6,5,1,4,8,9,7,3,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["HDCK", "GGC", "BAB", "DAF", "HE", "HFD", "HGJD", "GJD", "HAAA"];
      res = [0,8,5,2,7,9,4,1,6,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["*", "*", "+", "-", "+", "+"];

      r =   ["G", "KCJF", "JDFF", "KJ", "KCKA", "KCFB", "JH", "FGEH", "FGAJ"];
      res = [9,7,6,0,1,5,3,4,8,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["G","HGH", "FJKD", "JDE", "EEEC", "ECEF", "EDDG", "EKAE", "JKAB"];
      res = [7,6,3,0,1,4,5,8,2,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["HJ","EB", "GCD", "FK", "CE", "AF", "JBJ", "GC", "AJG"];
      res = [6,8,2,0,4,3,7,1,5,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["GG", "KCG", "CKBG", "DGD", "EGKE", "EECF", "DEED", "HBAH", "JHBJ"];
      res = [7,0,9,2,3,5,1,4,6,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["J", "CHEK", "DHKG", "BJA", "ACE", "FJDF", "FHBE", "CAGC", "EGCA"];
      res = [7,5,3,6,4,1,8,0,2,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BA", "EG", "CHCG", "JA", "DFG", "DEF", "CFGA", "DKH", "CBEG"];
      res = [1,4,2,3,6,0,9,8,5,7]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BJ", "FBD", "HCEH", "ED", "ADH", "GCK", "BGBH", "CKK", "HFBH"];
      res = [4,2,6,7,8,1,5,3,9,0]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["FH", "KGJ", "EAGG", "KKH", "GDJ", "ABE", "AFJJ", "ACD", "EBCH"];
      res = [5,0,2,8,6,4,3,7,9,1]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CG", "EF", "BEGF", "FG", "BHD", "BDA", "HEKG", "FAB", "BGKF"];
      res = [0,4,7,9,6,5,1,3,8,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["FA", "BE", "CKFA", "GJ", "HGD", "HBD", "KAJ", "AJK", "CFAK"];
      res = [5,6,1,8,9,2,3,4,0,7];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DD", "BFA", "JBEA", "BKK", "BCK", "HCK", "BBKK", "EGA", "BGGA"];
      res = [6,2,8,1,5,9,7,4,3,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EFC", "BB", "BBKK", "EB", "DGH", "AEF", "EBCK", "ABF", "EJAK"];
      res = [5,2,3,4,1,0,9,8,7,6]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BA", "ED", "GDB", "HC", "FC", "DG", "DKF", "JB", "DJA"];
      res = [3,1,4,7,6,2,8,5,9,0]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DF", "FE", "DECJ", "AK", "KEA", "JHG", "DGBA", "JEC", "DJFJ"];
      res = [8,1,5,4,7,9,0,6,3,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["KH", "HDD", "JAFD", "HGJ", "CE", "HAK", "JCGJ", "HFG", "JJBF"];
      res = [7,0,4,3,9,8,2,1,6,5]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["*", "*", "+", "+", "-", "+"];

      r =   ["AC", "FJB", "HJJF", "EJD", "EHH", "F", "GGBB", "ABHK", "JKKB"];
      res = [1,2,3,4,5,6,7,8,9,0]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
    
      r =   ["BK", "BGH", "KFCD", "BGJ", "KC", "EAH", "KDHB", "BAJ", "AEBA"];
      res = [5,2,6,8,1,9,0,7,3,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EF", "JH", "JHF", "JB", "EG", "CK", "JBF", "DK", "JAK"];
      res = [9,3,2,6,1,0,8,7,4,5]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["A", "FK", "DEA", "BH", "CJ", "KG", "CDA", "JG", "DCB"];
      res = [5,4,2,3,0,6,9,7,8,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["KK", "HD", "EBD", "GA", "CF", "CA", "HDA", "KFD", "EGJ"];
      res = [9,2,3,5,8,0,6,7,4,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["J", "HK", "AGJ", "AD", "FE", "EK", "DBD", "JD", "ABC"];
      res = [6,8,0,5,4,2,3,7,9,1]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["F", "EA", "CKA", "BH", "GH", "DA", "BJJ", "DDH", "CGA"];
      res = [0,5,6,1,7,9,4,8,2,3]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);      

      r   = ["C", "JG", "KGG", "KH", "KB", "D", "KFH", "DE", "KGA"];
      res = [7,5,6,3,9,0,4,8,2,1]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["E", "DJ", "CHA", "FJ", "CG", "BJ", "CAA", "KJ", "FGK"];
      res = [2,1,3,5,7,4,0,9,6,8]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["FG", "BA", "BAG", "BC", "FE", "KJ", "BCG", "DJ", "BHJ"];
      res = [7,4,3,6,8,1,0,9,5,2]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EJ", "KJ", "DKF", "AH", "BB", "FB", "DEJ", "EEG", "ECJA"];
      res = [7,3,0,9,1,4,5,6,2,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["D", "EE", "JKE", "AJ", "JC", "D", "JHF", "GF", "JGB"];
      res = [4,2,6,7,5,1,9,0,3,8]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["B", "AG", "GCE", "GC", "HG", "HG", "GFH", "JC", "ADK"];
      res = [5,9,8,1,6,3,4,2,7,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["K", "BJ", "JCB", "AG", "EJ", "JD", "JDD", "HB", "AJF"];
      res = [3,4,9,6,1,0,8,5,2,7]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["H", "KF", "FJD", "FJ", "GF", "GF", "FEG", "BJ", "KAC"];
      res = [1,7,0,6,3,4,2,9,8,5]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
            

     
      op  = ["*", "+", "-", "+", "-", "*"]; 
      r =   ["GG","AC", "DCEC", "FJ", "DE", "HG", "DBG", "DE", "DKJE"];
      res = [2,3,8,1,4,7,6,5,0,9]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["GD", "DJ", "HJJJ", "EK", "FE", "KB", "FDG", "FA", "HECD"];
      res = [9,8,0,3,6,1,7,2,5,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);   

      r   = ["EC", "EA", "FGHA", "BB", "GG", "DD", "FKE", "FE", "FEEH"];
      res = [5,6,7,4,3,1,2,9,8,0]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["JB", "HF", "GECC", "KHG", "GG", "KKD", "GKK", "KC", "GBAC"];
      res = [5,9,4,0,8,6,2,3,7,1]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["KE", "AD", "EJHD", "EHA", "EJ", "DF", "EKG", "EE", "EJCG"];
      res = [2,4,9,8,1,5,3,0,7,6]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["HBF", "JK", "BKAG", "FCB", "FK", "HEJ", "KBA", "FC", "BDEC"];
      res = [9,7,0,5,8,2,6,1,4,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["GHD", "EB", "EAGH", "GEE", "GJ", "GGK", "FEJ", "GD", "ECFK"];
      res = [7,5,8,6,3,2,1,0,9,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["JKB", "KA", "GCHE", "JEH", "CH", "JFH", "CDB", "JA", "GKFE"];
      res = [8,7,2,9,6,4,5,0,1,3]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 
 
      r   = ["JF", "FG", "ADBJ", "DH", "AH", "KH", "ECF", "EG", "AGHJ"];
      res = [2,4,5,8,1,3,9,0,7,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["KFK", "BA", "DHKA", "KED", "FB", "KJK", "BCG", "KJ", "DEEC"];
      res = [9,3,0,4,8,2,5,7,6,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["FF", "JF", "AHKF", "ED", "AC", "JK", "AGJ", "AH", "AHFB"];
      res = [1,7,6,8,4,5,0,9,3,2]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CC", "BC", "DGKC", "EJ", "DF", "BK", "DHB", "DG", "DGCA"];
      res = [7,3,5,1,4,6,9,0,8,2]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DF", "JE", "AGCK", "KB", "FB", "HB", "AAF", "AE", "FBAK"];
      res = [1,0,7,5,8,2,9,4,3,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["BDK", "HK", "FAJJ", "BDA", "BG", "BEG", "DCH", "BJ", "FGEK"];
      res = [6,1,5,2,0,4,8,3,9,7]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["DA", "FG", "GEFG", "KB", "HA", "AE", "HJA", "HA", "GECA"];
      res = [6,0,9,7,4,3,2,1,5,8]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
 
    
      op  = ["*", "+", "*", "-", "-", "+"]; 
      
      r =   ["BAK","C", "FCK", "ACJ", "GA", "FH", "CDJ", "BAC", "EFB"];
      res = [1,2,3,4,5,6,7,8,9,0 ]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["FEA", "CC", "GCFA", "CCBG", "HKK", "DFH", "CEFK", "HGEK", "FHJE"];
      res = [8,7,1,9,6,4,5,2,0,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["ADK", "AC", "FCFK", "BFG", "HC", "CDC", "JBG", "JDJ", "AJHE"];
      res = [1,8,7,6,3,2,4,5,9,0];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EKJ", "C", "BDFB", "FAB", "KB", "HJG", "ABJH", "EJD", "AJEB"];
      res = [1,2,7,4,3,9,0,8,6,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["KGG","G", "DECF", "FDJ", "JAC", "AGF", "BKBF", "BHDB", "CCAE"];
      res = [6,1,3,4,0,9,7,8,2,5]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["HHJ", "J", "KACG", "AEF", "DG", "AHA", "JGK", "HJD", "KBEF"];
      res = [5,0,8,3,6,4,9,2,7,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CJH", "F", "GCBD", "CBE", "JD", "FFK", "ADG", "EBG", "GBDE"];
      res = [8,0,4,7,2,3,1,9,6,5]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BHD", "C", "EKHC", "DCHH", "AKF", "DJEG", "KEHD", "KCAG", "JFAJ"];
      res = [3,8,9,1,7,6,4,0,5,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r   = ["FAG", "J", "FCED", "HHC", "KJ", "HFA", "AKB", "KHF", "FEGH"];
      res = [7,4,6,2,0,1,8,5,9,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["AJH", "A", "DDEH", "AFK", "KB", "AAC", "EGK", "BC", "BAF"];
      res = [3,8,4,1,7,6,5,0,9,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EDA", "EJ", "FFDA", "BBC", "BA", "AHA", "GJA", "GKA", "EBGC"];
      res = [5,6,0,7,1,2,8,9,3,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CHG", "D", "GFCA", "HEB", "BCF", "FAH", "BKAC", "JAF", "BJEE"];
      res = [4,1,3,7,8,5,2,6,9,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["CHG", "D", "GFCA", "HEB", "BCF", "FAH", "BKAC", "JAF", "BJEE"];
      res = [4,1,3,7,8,5,2,6,9,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CBD", "H", "BCKC", "HDF", "AC", "HCJ", "GGBH", "EEG", "GJAF"];
      res = [6,2,3,9,4,8,1,7,5,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["GKE", "C", "HDBF", "ABFB", "FEF", "AABF", "FJGF", "FHKE", "BGJJ"];
      res = [1,4,9,7,8,2,6,5,0,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["/", "-", "*", "+", "-", "-"];

      r =   ["CJJC","CC", "CKC", "BGA", "JK", "HHH", "CBEC", "DFK", "FAB"];
      res = [0,4,1,9,6,5,2,3,8,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["DJFH","AH", "HBA", "AGFE", "BK", "ACFF", "HHJA", "AEEE", "EJGB"];
      res = [1,9,6,5,2,8,7,3,0,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["DFFB","B", "BGG", "GCC", "DEB", "BHJ", "DKCK", "KEDB", "KKKA"];
      res = [6,5,4,2,0,8,7,3,9,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DCBG", "EG", "BG", "JJJD", "JJ", "JJFK", "KAKH", "AEBF", "JJBH"];
      res = [1,7,3,6,8,0,5,9,2,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
   
      r   = ["JFBG", "K", "EGH", "BGA", "GDF", "FDK", "GBKC", "KAC", "GJJD"];
      res = [5,9,6,0,4,8,1,3,2,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
   
      r   = ["FBBC", "A", "EHD", "DJB", "CAA", "EJJ", "GJDB", "CBAH", "HKAE"];
      res = [9,6,2,8,5,4,3,1,7,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
         
      r   = ["KEJJ", "G", "KJD", "CGK", "EEC", "JDH", "EFCE", "EBKF", "FEA"];
      res = [5,0,4,7,1,6,9,8,3,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
 
      r   = ["CEDB", "F", "EHK", "KGH", "AHE", "BAE", "AFBK", "HFBD", "JGGA"];
      res = [5,2,6,3,7,9,0,4,1,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BJK", "D", "GJB", "GBH", "EG", "GFK", "HAB", "DH", "CFG"];
      res = [0,8,5,3,1,7,2,6,9,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CGJ", "E", "AAC", "KHD", "EC", "KFB", "BJJ", "KDJ", "EJD"];
      res = [2,4,6,0,3,5,7,9,8,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["HJGK", "JE", "KK", "FECB", "D", "FECE", "FBHJ", "FHC", "FGAD"];
      res = [0,9,4,2,7,1,8,3,6,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["AKBE", "C", "FDG", "CCA", "JCK", "HE", "ACKC", "KAA", "DDJ"];
      res = [1,0,3,6,4,5,8,9,2,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DGDD", "CH", "CJF", "GBD", "JK", "FBG", "CJFE", "CDAC", "AKJ"];
      res = [6,8,1,2,0,4,5,3,9,7]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CCJC", "H", "CGK", "BJA", "EF", "CGA", "EAB", "DGF", "KKB"];
      res = [9,2,1,5,8,0,6,7,4,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EAE", "B", "CGE", "CKG", "AD", "FB", "JHD", "FEA", "FCA"];
      res = [8,3,1,6,5,2,9,7,4,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CJCF", "CE", "CFD", "FDA", "HD", "CGJ", "CEKF", "CABF", "FHA"];
      res = [0,9,1,4,3,2,5,8,6,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["JKAB", "BB", "JJB", "BFKC", "BKA", "BCDA", "EAHB", "FCEA", "BAEG"];
      res = [5,1,0,9,3,2,6,7,4,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["GJGD", "HH", "FBD", "CCA", "KBC", "DAH", "FJED", "JHDC", "HHBB"];
      res = [0,8,9,7,6,4,5,1,3,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["HBFD", "DD", "HKD", "DFCG", "JF", "DFFF", "JDBD", "JBF", "DCAE"];
      res = [9,7,8,1,6,5,0,3,2,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DAKJ", "FGJ", "JF", "FCD", "HC", "FAC", "DFCE", "DBBB", "FCE"];
      res = [3,0,8,6,9,1,2,4,5,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["/", "-", "*", "+", "+", "-"];

      r   = ["CEGJ", "BH", "ACG", "BBCD", "DHC", "BHGF", "AGHK", "HECF", "BFCJ"];
      res = [4,1,6,2,0,8,9,3,7,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BHBG", "J", "JKE", "GAB", "D", "GAG", "BFCD", "KF", "BFGD"];
      res = [3,1,8,5,9,0,6,7,4,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DKGB", "B", "GEA", "HF", "DDH", "GKC", "FJE", "BCG", "BAJ"];
      res = [6,4,7,1,5,9,2,8,3,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["HDGC", "E", "FBK", "HC", "EGK", "EKG", "HDAJ", "DBHC", "DABE"];
      res = [2,8,6,1,4,7,5,3,0,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["AJJ", "J", "FCC", "JB", "CKH", "CED", "HBE", "JFA", "GDH"];
      res = [8,9,1,6,5,2,3,7,4,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
   
      r   = ["CEA", "JK", "CC", "JHE", "G", "JGH", "KHD", "AF", "JBD"];
      res = [6,8,3,7,9,0,5,4,1,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);  

      r   = ["CJF", "J", "DH", "AH", "BK", "GE", "BEH", "DJ", "KDK"];
      res = [7,2,3,8,6,0,9,5,4,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BAJG", "H", "HKE", "GKD", "BAG", "JAF", "BHGC", "AHE", "DDD"];
      res = [6,1,5,7,8,9,2,4,3,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["DKJF", "E", "JHG", "JCD", "EC", "JGF", "AAC", "DAH", "BHC"];
      res = [8,7,5,1,4,6,9,0,3,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["HJG", "J", "DHG", "JC", "BF", "DAK", "CEC", "KDA", "AFK"];
      res = [2,7,5,1,9,8,0,6,4,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["JKCF", "G", "CHG", "KGF", "EGF", "ADCE", "JDBD", "CKG", "EDFF"];
      res = [1,5,9,0,2,6,4,7,3,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

      r   = ["GKJ", "H", "DKF", "JBG", "EA", "JHE", "CFC", "DHH", "HHD"];
      res = [6,0,5,1,3,8,7,4,2,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["JKC", "C", "AHG", "ACH", "BK", "DFJ", "GEB", "DED", "CFE"];
      res = [1,5,4,2,3,0,6,9,7,8]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["FJG", "A", "JCE", "EE", "JJH", "JBD", "CCC", "AKG", "BJC"];
      res = [5,3,8,6,2,9,0,4,1,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["HFKK", "K", "JDB", "HAA", "HEH", "JEF", "FCKJ", "CEC", "FEDG"];
      res = [9,6,8,3,0,1,7,2,5,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);      

      r   = ["KCA", "GA", "DF", "BB", "GH", "GGJ", "ACK", "EKE", "GKD"];
      res = [4,9,0,3,2,6,1,8,7,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);  
      
      r   = ["AECA", "B", "FJE", "FKF", "DJG", "KJC", "AJCH", "BAB", "DGDD"];
      res = [2,4,3,1,8,7,6,5,0,9]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["GAC", "H", "DD", "JF", "CJ", "EG", "CDA", "KBH", "KDK"];
      res = [5,0,2,8,9,7,3,4,6,1]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["KJB", "F", "HKA", "GB", "KC", "HFH", "JDE", "BGK", "AEF"];
      res = [3,2,9,8,0,4,7,1,5,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["KKKC", "A", "JGF", "JFC", "AF", "DAH", "EJB", "KFC", "CJA"];
      res = [4,0,6,3,8,9,7,5,2,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["/", "-", "+", "+", "+", "-"];

      r   = ["CEDK", "ABB", "K", "KFG", "KKA", "GDK", "CJKA", "CFHG", "GDG"];
      res = [8,6,1,3,7,0,4,9,5,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["EFKK", "JJA", "BA", "BDHD", "AGGG", "CJCG", "JHJK", "CABE", "CJKE"];
      res = [2,1,3,0,7,9,5,8,6,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
     
      r =   ["BEDE", "ABDB", "B", "KJK", "CK", "CDD", "AHCF", "ABCG", "CDB"];
      res = [1,2,6,0,4,9,7,8,3,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["AAB", "CCD", "D", "EA", "FGH", "FAE", "AGJ", "BBF", "FAK"];
      res = [6,4,3,2,5,1,0,9,8,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);  

      r =   ["FAAC","BA", "DF", "BEK", "CKG", "HHDH", "FHAF", "CJJ", "HFAB"];
      res = [4,3,8,7,0,2,5,1,9,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CHKK", "CD", "CDH", "EHH", "CAD", "JBJ", "FHH", "CHH", "KGG"];
      res = [3,7,1,2,5,9,0,4,6,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
        
      r   = ["JDFG", "G", "HBF", "KJDK", "KEKF", "CFEH", "BAHH", "KECB", "AAJA"];
      res = [3,4,2,9,0,6,8,7,5,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r   = ["DFDJ", "EA", "EEJ", "FFKB", "FKKK", "EBHD", "CBAF", "FAJH", "GFKD"];
      res = [8,9,4,6,2,1,3,5,0,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["FCCE", "DG", "JG", "GAA", "DFJ", "AHK", "FJBA", "DCD", "BGG"];
      res = [7,8,6,5,4,1,2,9,3,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["FAJ", "FA", "HJ", "DAK", "GK", "KCG", "CEF", "HCH", "KBG"];
      res = [8,5,4,2,9,7,6,1,0,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["JKHH", "K", "GHH", "JFF", "GKE", "CDC", "JAKF", "GKB", "AKDC"];
      res = [1,7,8,9,3,5,6,0,2,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
 
      r   = ["BKGF", "BE", "JJG", "JHGD", "JJ", "JHCJ", "JADF", "GB", "JFKC"];
      res = [9,3,5,0,2,8,4,7,1,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
 
      r   = ["KCKC", "KCK", "GC", "GJKF", "AHD", "BJBB", "FBAK", "GHKF", "BJEB"];
      res = [9,2,0,8,3,4,1,5,7,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
 
      r   = ["HFCK", "JG", "ABG", "JAHG", "KED", "JBHF", "ACGA", "KJF", "AJAH"];
      res = [2,8,7,5,0,9,4,3,1,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["KJBG", "AF", "JEJ", "JEHG", "EAJA", "AFGE", "HBHB", "EAHK", "ADCA"];
      res = [3,0,9,6,1,4,8,5,2,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["FKDD", "HG", "JD", "BJCB", "EHG", "ACAE", "CAGH", "KHA", "ACEE"];
      res = [2,1,3,0,7,4,6,9,5,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
 
      r   = ["ECK", "F", "BF", "EA", "FC", "KJ", "EDA", "HG", "EHA"];
      res = [7,9,8,6,1,2,0,3,5,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["GGJJ", "FJ", "GGJ", "BFG", "HDK", "FCAJ", "EGAK", "HKK", "FAFJ"];
      res = [8,9,4,6,2,1,3,5,0,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["KCKD", "F", "KAD", "HDE", "CDJ", "GDGG", "GEGB", "CGC", "GCDG"];
      res = [9,4,3,0,6,8,1,7,5,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
 
      r   = ["HCHB", "D", "EGD", "CDB", "CAJG", "CCED", "JFFA", "CAHJ", "CFKG"];
      res = [0,6,1,4,7,9,8,3,2,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["+", "-", "-", "-", "+", "+"];
      
      r =   ["ECAC", "KECH", "HEAA", "EKDC", "GDJ", "EBEG", "BAD", "EJFF", "KHEF"];
      res = [3,7,9,0,1,8,5,4,6,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["KGBE","DDE", "KFCF", "KHBF", "EDJ", "KEFC", "BJA", "JD", "GJK"];
      res = [6,2,7,5,4,8,3,0,9,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
     
      r   = ["FBCF", "BK", "FCFF", "BDG", "GC", "BJE", "JEJ", "GA", "FKFH"];
      res = [4,5,6,7,8,1,2,3,9,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["KEB", "BEHF", "BDKB", "KHJ", "KGKC", "KCAG", "G", "KGGE", "KGGJ"];
      res = [7,2,4,8,6,0,3,5,9,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BHJ", "AFE", "FAK", "EB", "KC", "BBB", "BFF", "DJE", "GDH"];
      res = [4,1,0,3,2,6,5,8,7,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EFHC", "CBEK", "FFDB", "JGED", "CBEC", "GEAC", "CCGC", "H", "CCGK"];
      res = [6,9,1,0,3,5,4,7,2,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["KCAA", "EAF", "HGDE", "FKJ", "HJG", "BKG", "KGFA", "BFE", "HKEK"];
      res = [4,5,9,8,7,3,6,2,0,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["FKFJ", "EJ", "FKAA", "FCJ", "GA", "FAD", "GBAK", "GH", "GDKH"];
      res = [8,6,5,7,4,3,2,1,9,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["KABA", "KGK", "JFEE", "FGJC", "GD", "FGDH", "FJFF", "FDJ", "FGEB"];
      res = [8,4,7,9,0,1,5,6,3,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DDH", "BDA", "GAB", "FC", "JJK", "JBK", "BH", "AJJ", "FED"];
      res = [2,8,0,1,4,3,9,6,5,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["+", "-", "+", "-", "-", "+"];

      r =   ["EECH", "G", "EECG", "EEHD", "CJB", "EDCK", "FB", "CJE", "CEA"];
      res = [7,8,6,2,9,5,1,0,3,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);   

      r =   ["HJGK","CD", "HJDD", "ACCK", "CJD", "DEA", "AFCK", "FAB", "ABFB"];
      res = [1,8,3,9,5,4,6,2,7,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);   

      r   = ["BJCF", "FAHE", "DKHD", "FHCK", "FDGE", "BE", "FEJH", "EBEK", "DKEF"];
      res = [7,2,0,4,3,1,8,5,9,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EKDK", "HBDH", "CEDA", "GGJG", "HFF", "JEC", "GCGC", "HJBJ", "FBCB"];
      res = [0,4,6,9,2,5,1,3,8,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["KKCE", "KBGH", "DFBE", "KKDG", "CBF", "KAC", "JD", "DDJF", "DBGJ"];
      res = [8,3,9,2,6,5,4,0,7,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["DGE", "KDC", "AHDA", "AJA", "AKH", "G", "BHH", "CHF", "AHBH"];
      res = [1,4,8,5,3,0,9,2,7,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["BFDK", "KEE", "FBBB", "AGG", "DEK", "FHC", "EEG", "BJDB", "BAHJ"];
      res = [9,1,6,7,3,2,4,0,5,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["GCKE", "KDH", "EEEF", "GJG", "BG", "BJ", "GAKG", "HHB", "EGAF"];
      res = [7,5,8,9,2,6,1,4,0,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["CACF", "KKGE", "EKKE", "CHJJ", "DFCJ", "KHKF", "EBJ", "CHHK", "CAFE"];
      res = [9,8,4,3,6,0,7,2,5,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r   = ["EBG", "JFG", "GDEJ", "KA", "HG", "BF", "KFF", "JCJ", "GDHK"];
      res = [6,3,9,0,8,5,1,4,2,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["+", "+", "-", "-", "-", "-"];

      r =   ["JHA", "HKGJ", "GKBC", "HKGJ", "CBAC", "DFBG", "GKBC", "DFBG", "ADJE"];
      res = [4,2,3,1,7,8,6,5,9,0];  
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);   

      r =   ["JFJE", "FEC", "DABH", "FEC", "EKJ", "GEF", "DABH", "GEF", "DGJA"];
      res = [6,7,9,2,5,8,3,4,1,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);   

      r =   ["BDFB", "DCD", "GGCK", "DCD", "KK", "DAH", "GGCK", "DAH", "BEJG"];
      res = [2,4,3,7,8,9,5,6,0,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["HKBC", "HAFG", "EJAC", "HAFG", "BBJ", "DJE", "EJAC", "DJE", "EEDB"];
      res = [3,7,9,5,2,6,0,1,8,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["KAEH", "GDB", "KBJK", "GDB", "GJE", "HG", "KBJK", "HG", "KBCF"];
      res = [5,8,0,7,6,9,2,3,4,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["DGGB", "HKC", "DJAD", "HKC", "DFD", "CH", "DJAD", "CH", "DJDE"];
      res = [5,8,3,1,9,7,4,2,6,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["HDEB", "HKHJ", "CGAC", "HKHJ", "JEFB", "EHD", "CGAC", "EHD", "BBCA"];
      res = [8,4,5,7,6,9,0,2,1,3]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["JFK", "JHC", "DAF", "JHC", "JEG", "KB", "DAF", "KB", "EDD"];
      res = [0,4,9,7,6,1,5,8,3,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["DDCE", "JBC", "DAHF", "JBC", "DEH", "BGK", "DAHF", "BGK", "DEHD"];
      res = [5,3,6,1,2,8,0,9,4,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["DBA", "CFJH", "EEBF", "CFJH", "KCDF", "HECC", "EEBF", "HECC", "CJDG"];
      res = [7,9,3,6,4,8,5,1,0,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["+", "+", "-", "+", "-", "+"];

      r =   ["DEJB","GEH", "DJBH", "DHB", "JG", "HFK", "DCAB", "AG", "DAJG"];
      res = [8,0,7,3,4,5,1,2,6,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["EACC","JFCK", "AHBC", "FFKE", "AKC", "JHB", "DCHG", "GEAG", "CJBE"];
      res = [7,6,8,5,4,1,2,9,3,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["CKGA", "HJG", "CGBK", "HCK", "FE", "HHK", "CCHJ", "JBG", "CBDC"];
      res = [8,7,6,9,0,4,5,2,1,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["BFDB", "KKE", "ADFJ", "CJF", "DHJ", "AGE", "ADHG", "CCG", "AKKF"];
      res = [3,2,4,1,7,6,8,0,9,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["EHHF", "JKCA", "HHEB", "GAF", "GGG", "EH", "EKBC", "JFAE", "HHKD"];
      res = [5,3,6,0,4,8,1,7,2,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["JEC", "JDA", "CHD", "EDF", "AAC", "AKG", "CBB", "EKK", "GKK"];
      res = [1,0,6,7,2,4,8,9,3,5]
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["FCAA", "FGB", "FJEJ", "FFF", "HK", "EF", "FGCC", "JB", "FJDH"];
      res = [5,3,6,4,2,1,7,9,8,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["AFBK", "EGK", "ACEB", "FEH", "DB", "GAK", "AHJD", "DE", "AHDH"];
      res = [4,8,5,6,1,3,2,7,0,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["CDGK", "JBA", "CCHH", "BGEK", "KG", "BGBH", "ACGC", "GGJ", "AEAF"];
      res = [7,1,6,2,9,0,3,5,4,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["KJKC", "CEDD", "JBAE", "BGF", "KKK", "KEJ", "JKDH", "BGB", "ADFB"];
      res = [6,8,1,2,3,9,7,0,5,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["+", "+", "+", "-", "-", "-"];
    
      r =   ["GBKC","KHB", "ADKG", "EFED", "CCEJ", "KHB", "DHFB", "EFED", "GBKC"];
      res = [2,8,3,5,4,0,1,9,7,6];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["FGKH","FHB", "FJCD", "GHE", "KCD", "FHB", "FAAH", "GHE", "FGKH"];
      res = [8,7,9,3,0,1,4,6,5,2]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["FCGH", "JGD", "DEJA", "BDAB", "CHKD", "JGD", "HJHK", "BDAB", "FCGH"];
      res = [7,4,3,2,0,1,8,5,6,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["FKG", "ACE", "KAE", "CDH", "DBJ", "ACE", "HHH", "CDH", "FKG"];
      res = [5,4,8,2,3,1,0,9,6,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["DJAH", "JDFK", "CEFJ", "CEHE", "DJBA", "JDFK", "KHHG", "CEHE", "DJAH"];
      res = [9,8,3,2,4,7,0,6,1,5];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["CFD", "BAJ", "DKK", "EGA", "HF", "BAJ", "DHF", "EGA", "CFD"];
      res = [5,6,2,9,7,4,3,8,1,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["GGBH", "GJ", "GGCE", "FDE", "FKH", "GJ", "GDGC", "FDE", "GGBH"];
      res = [0,2,3,8,9,6,1,4,5,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["HFA", "DGEF", "KCEA", "KFCH", "JBH", "DGEF", "KHGJ", "KFCH", "HFA"];
      res = [4,8,5,1,7,0,6,9,3,2];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["DDBA", "JBCE", "CADJ", "EGGF", "KKDE", "JBCE", "GHEG", "EGGF", "DDBA"];
      res = [9,6,5,2,4,8,7,0,3,1];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["BBFK", "DHGK", "HFDE", "HCDB", "FFA", "DHGK", "GHAJ", "HCDB", "BBFK"];
      res = [2,1,3,4,8,7,6,5,0,9];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

    
      op  = ["+", "+", "+", "+", "+", "+"];

      r =   ["ADC", "BDA", "DCD", "JE", "D", "JG", "FBJ", "BGH", "GKJ"];
      res = [2,5,6,8,1,3,9,0,7,4];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["EBGB", "JJFD", "AHAA", "HDD", "BH", "CKK", "EEBA", "JJDK", "AAAA"];
      res = [9,3,5,6,8,2,7,4,1,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["DBEC", "JFEH", "ADFK", "DC", "B", "DA", "DHJE", "JFEG", "AABA"];
      res = [9,3,6,8,2,5,7,4,1,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["FCDB","EAAJ", "CKHB", "HGH", "DG", "BDF", "HJBE", "EGHG", "CGKD"];
      res = [8,3,7,4,5,1,9,2,0,6]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);
      
      r =   ["EEFH", "EJDK", "BHAH", "FDC", "DGBC", "JBFA", "CKAG", "HDFC", "GJBE"];
      res = [8,6,4,1,3,7,9,5,2,0]; 
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["BGJF", "ACDJ", "HHCH", "DBB", "JJBJ", "JCHE", "EFED", "EJJA", "DHHK"];
      res = [2,3,9,8,4,5,7,6,1,0];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["FJBD", "GEF", "FBBC", "BBF", "FDBB", "JDBE", "JJHC", "JKEE", "ADHC"];
      res = [4,9,6,5,0,1,7,8,2,3];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["HAJB", "CAA", "HKHJ", "ADED", "AGH", "AFHF", "DEFH", "KBD", "EHEF"];
      res = [1,9,6,3,4,5,8,2,0,7];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["CECG", "EDBE", "KAHA", "GEHD", "HGA", "GCEA", "FFBG", "EHKB", "JJCK"];
      res = [4,7,5,0,3,6,1,2,9,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      r =   ["KEE", "BG", "KCF", "DB", "GA", "AAJ", "KHG", "KC", "HKJ"];
      res = [1,2,7,5,4,0,6,9,3,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser);

      // last 240 not used (bug fix)
      r =   ["KEE", "BG", "KCF", "DB", "GA", "AAJ", "KHG", "KC", "HKJ"];
      res = [1,2,7,5,4,0,6,9,3,8];
      brainTeaser = new Array (op, r, res);
      puzzles.push(brainTeaser); 

    //var n = 1;
    //var m = 0;
    n =  rand_239();
    m =  rand_2();
    var op_org  = puzzles[n][0]; 
    var r_org   = puzzles[n][1]; 
    var res_org = puzzles[n][2];
  
    if(m == 0 ){
      // change horinusontal with vertical   
      op[0]=op_org[1];
      op[1]=op_org[0];
      op[2]=op_org[4];
      op[3]=op_org[5];
      op[4]=op_org[2];
      op[5]=op_org[3]; 
      r[0] = r_org[0];
      r[1] = r_org[3];
      r[2] = r_org[6];
      r[3] = r_org[1];
      r[4] = r_org[4];
      r[5] = r_org[7];
      r[6] = r_org[2];
      r[7] = r_org[5];
      r[8] = r_org[8];
      r_org = r;
    } else {
      op = op_org
      r  = r_org;	    
    }
  
    var c_org = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
    var c = shuffle(c_org);
    c_org = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"]; // c_org is changed
    for(i=0; i < 10; i++){	   
      for(var j=0; j < 10; j++) {
        if(c[j] == c_org[i]){
  	  res[i] = res_org[j];
 	  break;
        }	
      }
    }    

    // replace the 'n'th character of 's' with 't'
    function replaceAt(s, n, t) {
      return s.substring(0, n) + t + s.substring(n + 1);
    }
   
    for(i=0; i < 9; i++){
      for(j=0; j < r[i].length; j++) { 
        // addept r_org;
        switch(r_org[i].charAt(j)){
	  case "A" : { r_org[i] = replaceAt(r_org[i], j, c[0]); ;break};
	  case "B" : { r_org[i] = replaceAt(r_org[i], j, c[1]); ;break};
	  case "C" : { r_org[i] = replaceAt(r_org[i], j, c[2]); ;break};
	  case "D" : { r_org[i] = replaceAt(r_org[i], j, c[3]); ;break};
	  case "E" : { r_org[i] = replaceAt(r_org[i], j, c[4]); ;break};
	  case "F" : { r_org[i] = replaceAt(r_org[i], j, c[5]); ;break};
	  case "G" : { r_org[i] = replaceAt(r_org[i], j, c[6]); ;break};
	  case "H" : { r_org[i] = replaceAt(r_org[i], j, c[7]); ;break};
	  case "J" : { r_org[i] = replaceAt(r_org[i], j, c[8]); ;break};
	  case "K" : { r_org[i] = replaceAt(r_org[i], j, c[9]); ;break};
        }
      }  
    }
    
    //document.write("<br>");
    //document.write("op = " + op +"<br>");
    //document.write("r = " + r +"<br>");
    //document.write("res = " + res +"<br>"); 

    // 1 brainTaeser out 240 * 2 * 10! = 1.741.824.000 puzzles 
    brainTeaser = new Array (op, r_org, res);
    return (brainTeaser);

  } 

  function getPuzzle(){
    var i;
    var j;
    var x;
    var id0;
    var id1;
    var id2;
    var id3;
    var element;
    var b=0;
    var str;
    op  = [" ", " ", " ", " ", " ", " "];
    r=    [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    res = [0,0,0,0,0,0,0,0,0,0];
    solved = false;

    disableButtons(false);
    introText(country); 
    
    //alert("In de functie getPuzzle"); 
    
    brainTeaser = initGetPuzzle(x); 

    op  = brainTeaser[0];
    r   = brainTeaser[1];
    res = brainTeaser[2];
   
    document.getElementById("hidden_res" ).value=res;

    for(i=0; i<6; i++)	{ 
      str = "op" + i;
      document.getElementById(str).value = op[i];
    }

    //alert("r[0] " + r[0] + " " + r[0].length + " b= " + b);
    j=1;
    for(i=1; i<=36; i++){
      element="t" + i;                     // pointer id form select element ophogen 1 2 3 4 5  .... 36
      if((i%4 == 0) || i==1) {
        if(i == 1) {
          b = 0;		 
          //alert(b + " " + r[b] + " " + j); // "FB",
	} else {
	  if(i < 33){
	    b = i/4;
	    j = j+4;                          // pointer b ophogen 1 5 9 13 17 21 25 29 33 undefined
	    //alert(b + " " + r[b] + " " + j); // "AJAB", "AJGD", "BCK", "JJG", "ABBG", "BJB", "BJKJ", "CBKA"
	  }
	}  
      }
      //  ["FB", "AJAB", "AJGD", "BCK", "JJG", "ABBG", "BJB", "BJKJ", "CBKA"]
      id0=j+0; id1=j+1; id2=j+2; id3=j+3; 
      //alert(id0 + " " + id1 + " " + id2 + " " + id3); // [1 2 3 4] [5 6 7 8] [9 10 11 12]

      //alert(r[b] + " " + r[b].length + " b= " + b);
       
      if(r[b].length == 0){ // ingeval van ""   
	element="t"+ id0; document.getElementById(element).value= " ";          //alert(element + " spatie");
	element="t"+ id1; document.getElementById(element).value= " ";          //alert(element + " spatie");
 	element="t"+ id2; document.getElementById(element).value= " ";          //alert(element + " spatie");
	element="t"+ id3; document.getElementById(element).value= " ";          //alert(element + " spatie");
      }
      if(r[b].length == 1){ 
	element="t"+ id0; document.getElementById(element).value= " ";          //alert(element + " spatie");
	element="t"+ id1; document.getElementById(element).value= " ";          //alert(element + " spatie");
	element="t"+ id2; document.getElementById(element).value= " ";          //alert(element + " spatie");
	element="t"+ id3; document.getElementById(element).value= r[b][0]; //alert(element + " " + r[b][0]));          
      }
      if(r[b].length == 2){ 
	element="t"+ id0; document.getElementById(element).value= " ";          //alert(element + " spatie");
 	element="t"+ id1; document.getElementById(element).value= " ";          //alert(element + " spatie");
	element="t"+ id2; document.getElementById(element).value= r[b][0]; //alert(element + " " + r[b][0]);
	element="t"+ id3; document.getElementById(element).value= r[b][1]; //alert(element + " " + r[b][1]);
      }
      if(r[b].length == 3){
	element="t"+ id0; document.getElementById(element).value= " ";          //alert(element + " spatie");
	element="t"+ id1; document.getElementById(element).value= r[b][0]; //alert(element + " " + r[b][0]);
	element="t"+ id2; document.getElementById(element).value= r[b][1]; //alert(element + " " + r[b][1]);
 	element="t"+ id3; document.getElementById(element).value= r[b][2]; //alert(element + " " + r[b][2]);
      }
      if(r[b].length == 4){
        element="t"+ id0; document.getElementById(element).value= r[b][0]; //alert(element + " " + r[b][0]);
        element="t"+ id1; document.getElementById(element).value= r[b][1]; //alert(element + " " + r[b][1]);
        element="t"+ id2; document.getElementById(element).value= r[b][2]; //alert(element + " " + r[b][2]);
 	element="t"+ id3; document.getElementById(element).value= r[b][3]; //alert(element + " " + r[b][3]);
      }
    }
    // solve(); use button
  }

  function doPuzzle(){
    var display;
    var op  = ["/", "-", "*", "+", "+", "-"];
    var r   = ["CEGJ", "BH", "ACG", "BBCD", "DHC", "BHGF", "AGHK", "HECF", "BFCJ"];
    var res = [4,1,6,2,0,8,9,3,7,5];
    var i = 0;
    var x1;
    var x2;
    var x3;
    var x4; 
    var str;
    var shuffle = false;
    var equal1  = false; 
    var equal2  = false;
    var plus    = false; 

    //alert("In functie doPuzzle"); 
    
    solved  = false;
    attempt = 0;
    

    /***************************************/
    /* Hier de variabelen uit form ophalen */
    /***************************************/

    for(i=0; i<6; i++) {
      str = "op" + i;
      op[i] = document.getElementById(str).value;
    }
    
    str = document.getElementById("hidden_res").value;
    //alert("lengte string hidden_res = " + str.length);
    res[0] = str.charAt(0);
    res[1] = str.charAt(2);
    res[2] = str.charAt(4);
    res[3] = str.charAt(6);
    res[4] = str.charAt(8);
    res[5] = str.charAt(10);
    res[6] = str.charAt(12);
    res[7] = str.charAt(14);
    res[8] = str.charAt(16);
    res[9] = str.charAt(18);
    //alert("Belangrijk " + res);
    
    x1 = document.getElementById("t1").value;
    x2 = document.getElementById("t2").value;
    x3 = document.getElementById("t3").value;
    x4 = document.getElementById("t4").value;
    r[0] = x1+x2+x3+x4;
    var tr0 = r[0].trim();
    
    x1 = document.getElementById("t5").value;
    x2 = document.getElementById("t6").value;
    x3 = document.getElementById("t7").value;
    x4 = document.getElementById("t8").value;
    r[1] = x1+x2+x3+x4;
    var tr1 = r[1].trim();

    x1 = document.getElementById("t9").value;
    x2 = document.getElementById("t10").value;
    x3 = document.getElementById("t11").value;
    x4 = document.getElementById("t12").value;
    r[2] = x1+x2+x3+x4;
    var tr2 = r[2].trim();
    
    x1 = document.getElementById("t13").value;
    x2 = document.getElementById("t14").value;
    x3 = document.getElementById("t15").value;
    x4 = document.getElementById("t16").value;
    r[3] = x1+x2+x3+x4;
    var tr3 = r[3].trim();

    x1 = document.getElementById("t17").value;
    x2 = document.getElementById("t18").value;
    x3 = document.getElementById("t19").value;
    x4 = document.getElementById("t20").value;
    r[4] = x1+x2+x3+x4;
    var tr4 = r[4].trim();

    x1 = document.getElementById("t21").value;
    x2 = document.getElementById("t22").value;
    x3 = document.getElementById("t23").value;
    x4 = document.getElementById("t24").value;
    r[5] = x1+x2+x3+x4;
    var tr5 = r[5].trim();

    x1 = document.getElementById("t25").value;
    x2 = document.getElementById("t26").value;
    x3 = document.getElementById("t27").value;
    x4 = document.getElementById("t28").value;
    r[6] = x1+x2+x3+x4;
    var tr6 = r[6].trim();

    x1 = document.getElementById("t29").value;
    x2 = document.getElementById("t30").value;
    x3 = document.getElementById("t31").value;
    x4 = document.getElementById("t32").value;
    r[7] = x1+x2+x3+x4;
    var tr7 = r[7].trim();

    x1 = document.getElementById("t33").value;
    x2 = document.getElementById("t34").value;
    x3 = document.getElementById("t35").value;
    x4 = document.getElementById("t36").value;
    r[8] = x1+x2+x3+x4;
    var tr8 = r[8].trim();

    if(tr1.length == tr2.length &&
       tr1.length == tr3.length &&
       tr1.length == tr4.length &&
       tr1.length == tr5.length &&
       tr1.length == tr6.length &&
       tr1.length == tr7.length &&
       tr1.length == tr8.length){
       //alert("letter woorden even lang");
       equal1 = true;
    }

    if(tr1.length == tr2.length &&
       tr1.length == tr3.length &&
       tr1.length == tr4.length &&
       tr1.length == tr5.length &&
       tr1.length == tr6.length &&
       tr1.length == tr7.length &&
       tr1.length == tr8.length -1){
       //alert("even lang behalve rechts onder");
       equal2 = true;
    }
    
    if(op[0] == '+' && op[1] == '+' && op[2] == '+' && op[3] == '+' && op[4] == '+' && op[5]=='+'){
       plus = true;
      //alert("Yes! allemaal plusjes " + op);
    } 

    if( (plus && equal1) || (plus && equal2) ){
      res = getNewRes(res); 
    }

    //alert("doPuzzle op = " +  op + " " + op.length);
    //alert("doPuzzle r  = " +   r + " " + r.length);
    //alert("doPuzzle res= " + res + " " + res.length);

    if(false) { // TEST TEST
     res[0] = 0;
     res[1] = 1;
     res[2] = 2;
     res[3] = 3;
     res[4] = 4;
     res[5] = 5;
     res[6] = 6;
     res[7] = 7;
     res[8] = 8;
     res[9] = 9;
    }

    //console.log(op);
    //console.log(r);
    //console.log(res);
    //console.log(solved);
 
    disableButtons(true);

    message = "wait";
    if(country == "NL"){ NL(); }
    if(country == "UK"){ UK(); }
    date = new Date();
    begin_tijd = date.getTime();
   
    setTimeout(function(){heapsPermute(res, op, r, res.length)}, 10);
    //alert("Klaar");
  }

  
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function getNewRes(array) {
    //alert("res = " + array);
    for (var n=0;  n < 8; n++) {
      var getal  = [0,1,2,3,4,5,6,7,8,9];
      var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];

      var out = shuffle(array);
    
      //alert("res 2 =" + out);
      return out;
    }
  } 


  function calculate(op, r, res){
     // to compose a new number from the numbers
     var x;
     var i;
     var j;
     var str;
     var lengte;
     var p1=0; 
     var p2=0; 
     var p3=0; 
     var p4=0; 
     var getal = 0;
     var q = 0; 

     // replace new numbers to try
     i=0; j=0;
     for(j=0; j < 9; j++){
       str=r[j]; 
       str=str.trim(); // r intact laten 
       for(i=0; i < str.length; i++){  
       
	 // substitute numbers
         switch(str.charAt(i)){
	   case "A" : {q=res[0]; break};
	   case "B" : {q=res[1]; break};
	   case "C" : {q=res[2]; break};
	   case "D" : {q=res[3]; break};
	   case "E" : {q=res[4]; break};
	   case "F" : {q=res[5]; break};
	   case "G" : {q=res[6]; break};
	   case "H" : {q=res[7]; break};
	   case "J" : {q=res[8]; break};
	   case "K" : {q=res[9]; break};
         }
         //alert("BELANGRIJK q=" + q + " res " + res); 
	 if(str.length == 4){
	   if(i==0)p1=q*1000; 
	   if(i==1)p2=q*100;  
	   if(i==2)p3=q*10;  
	   if(i==3)p4=q*1;  
	   getal = p1+p2+p3+p4; 
	 }

         if(str.length == 3){
	   if(i==0)p2=q*100;   
	   if(i==1)p3=q*10;   
	   if(i==2)p4=q*1;   
	   getal = p2+p3+p4; 
	 }
         if(str.length == 2){
	   if(i==0)p3=q*10;  
	   if(i==1)p4=q*1;    
	   getal = p3+p4;       
	 }
         if(str.length == 1){
	   if(i==0)p4=q*1;     
	   getal = p4;          
	 }

      }
      rij[j]=getal;
    }


    // calculate 
    solved = false;
    solved = eval("if(rij[0]" + op[0] + "rij[1] == rij[2]){                                          if(rij[3]" + op[4] + "rij[4] == rij[5]){                                          if(rij[6]" + op[5] + "rij[7] == rij[8]){                                          if(rij[0]" + op[1] + "rij[3] == rij[6]){                                          if(rij[1]" + op[2] + "rij[4] == rij[7]){                                          if(rij[2]" + op[3] + "rij[5] == rij[8]){ true}else{false} }}}}}");  
    if(solved) {
      return true;
    } else {  
      return false; // undefined
    }
  }

  function swap(res, pos1, pos2) { 
    var temp  = res[pos1]; 
    res[pos1] = res[pos2]; 
    res[pos2] = temp; 
  }

  function heapsPermute(res, op, r, n){ 
    n = n || res.length; // set n default to array.length
    if (n === 1) {  
      attempt++;
      solved = calculate(op, r, res);
      //if(attempt %2000000 == 0 )alert(attempt);
      //if(attempt %200000 == 0 )console.log(attempt);
      if(attempt >= 3628800) { 
	solved = true; // not really
      }
      if(solved){
        date = new Date();
        eind_tijd  = date.getTime();
        tijd = (eind_tijd - begin_tijd)/1000;
	var uitkomst = res;
	result(uitkomst, op, attempt, tijd); // resultaten presenteren
      }
    } else { 
      for (var i = 1; i <= n; i += 1) { 
        if(!solved){	
          heapsPermute(res, op, r, n - 1);
          if (n % 2) { 
            var j = 1; 
          } else { 
            var j = i; 
          } 
          swap(res, j - 1, n - 1);
	}
      }
    } 
  }

  
  result = function (uitkomst, op, attempt, tijd) {

    var t = tijd/attempt;
    var tijd_gem =Math.round (t * 100)/100; 
    var i;
    var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
    
    var textA ="";
    var textB ="";
    var textC ="";
    var textD ="";
    var textE ="";
    var textF ="";
    var nl_opl ="    "; 
    var uk_opl ="    "; 
    var nl_geen_opl = "";
    var uk_geen_opl = ""; 
    var nl_uk_res = "";
    var bool  = false;
    var MA; // som goed of fout
    var MB;
    var MC;
    var MD;
    var ME;
    var MF;
    var s= "&nbsp;"
      
    
    //alert("In functie result");
    //alert("uitkomst=" + uitkomst);
    //console.log(rij);

    disableButtons(false);

    for(i=0; i<10; i++){
      nl_opl += letter[i]+"="+ uitkomst[i]+" ";	
      uk_opl += letter[i]+"="+ uitkomst[i]+" ";	
    }

    tijd = Math.round(tijd*100)/100;
    var aNl = attempt.toLocaleString('de-DE');
    var tNl = tijd.toLocaleString('de-DE');
    var aUk = attempt.toLocaleString('en');
    var tUk = tijd.toLocaleString('en');
    if(attempt >= 3628800) {
      nl_geen_opl = "\n\r     Geen oplossing gevonden. Controleer input.";
      nl_geen_opl += "\n\r     Maximum aantal pogingen " + aNl + ".\n\r     In " + tNl + " seconden.\n\r";
      uk_geen_opl = "\n\r     No solution found. Check input.";
      uk_geen_opl += "\n\r     Maximum number of attempts " + aUk + ".\n\r     In " + tUk + " seconds.\n\r";
    } else {
      nl_opl += "\n\r      Aantal pogingen " + aNl + " in "  + tNl + " seconden.\n\r";
      uk_opl += "\n\r     Number of attempts " + aUk + " in "  + tUk + " seconds.\n\r";
    }

/*
    str="if("+rij[3]+op[4]+rij[4]+"=="+rij[5]+"){true}else{false}"; bool=eval(str);
    if(country == "NL"){ if(bool){ MA=" ok"; } else { MA=" fout"; }}
    if(country == "UK"){if(bool){MA=" ok";} else {MA=" erroneous";}}

    str="if("+rij[3]+op[4]+rij[4]+"=="+rij[5]+"){true}else{false}"; bool=eval(str);
    if(country == "NL"){if(bool){MB=" ok";} else {MB=" fout";     }}
    if(country == "UK"){if(bool){MB=" ok";} else {MB=" erroneous";}}

    str="if("+rij[6]+op[5]+rij[7]+"=="+rij[8]+"){true}else{false}"; bool=eval(str);
    if(country == "NL"){if(bool){MC=" ok";} else {MC=" fout";     }}
    if(country == "UK"){if(bool){MC=" ok";} else {MC=" erroneous";}}

    str="if("+rij[0]+op[1]+rij[3]+"=="+rij[6]+"){true}else{false}"; bool=eval(str); 
    if(country == "NL"){if(bool){MD=" ok";} else {MD=" fout";     }}
    if(country == "UK"){if(bool){MD=" ok";} else {MD=" erroneous";}}

    str="if("+rij[1]+op[2]+rij[4]+"=="+rij[7]+"){true}else{false}"; bool=eval(str);
    if(country == "NL"){if(bool){ME=" ok";} else {ME =" fout";     }}
    if(country == "UK"){if(bool){ME=" ok";} else {ME =" erroneous";}}

    str="if("+rij[2]+op[3]+rij[5]+"=="+rij[8]+"){true}else{false}"; bool=eval(str);
    if(country == "NL"){if(bool){MF=" ok";} else {MF=" fout";      }}
    if(country == "UK"){if(bool){MF=" ok";} else {MF =" erroneous";}}
*/

   // formatting monospace 4 characters
   for(var i=0; i<9; i++){
      rij[i] = rij[i].toString();	    
      if(rij[i].length == 3)rij[i] = " " + rij[i];
      if(rij[i].length == 2)rij[i] = " " + " " + rij[i];
      if(rij[i].length == 1)rij[i] = " " + " " + " " + rij[i]; 
    }
    // console.log(rij);

   for(var i=0; i < 6; i++) {
     if(op[i]== "+") op[i] = "&plus;";
     if(op[i]== "-") op[i] = "&minus;";
     if(op[i]== "*") op[i] = "&times;";
     if(op[i]== "/") op[i] = "&divide;";
   }

    textA = "    "+rij[0]+s+op[0]+s+rij[1]+" = "+rij[2]+"\t  " + rij[0]+s+op[1]+s+rij[3]+" = "+rij[6]+"\n";
    textB = "    "+rij[3]+s+op[4]+s+rij[4]+" = "+rij[5]+"\t  " + rij[1]+s+op[2]+s+rij[4]+" = "+rij[7]+"\n";
    textC = "    "+rij[6]+s+op[5]+s+rij[7]+" = "+rij[8]+"\t  " + rij[2]+s+op[3]+s+rij[5]+" = "+rij[8]+"\n";
    nl_uk_res = textA + textB +textC;

    country_setting = country;
    // Fill both country div's by messageBox
    // Important! last fill is country selected
    
    if(country == "NL"){
      // Fill UK div
      country= "UK";
      if(attempt >= 3628800) {
        messageBox(uk_geen_opl, " "); 
      } else {
        messageBox(uk_opl, nl_uk_res)
      }
      // Fill NL div  
      country = "NL";
      if(attempt >= 3628800) {
        messageBox(nl_geen_opl, " "); 
      } else {
        messageBox(nl_opl, nl_uk_res);
      }
    }

    if(country == "UK"){
      // Fill NL div  
      country = "NL";
      if(attempt >= 3628800) {
        messageBox(nl_geen_opl, " "); 
      } else {
        messageBox(nl_opl, nl_uk_res);
      }
      // Fill UK div
      country= "UK";
      if(attempt >= 3628800) {
        messageBox(uk_geen_opl, " "); 
      } else {
        messageBox(uk_opl, nl_uk_res)
      }
    }

    country = country_setting;
    message = "result";
    if(country == "NL" )NL();  
    if(country == "UK" )UK();  

  }
