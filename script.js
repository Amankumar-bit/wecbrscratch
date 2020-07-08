
function forgetpass(){
    
    document.getElementById('child-card2').style.transform="rotateY(360deg)";
    document.getElementById('child-card2').style.transformStyle="preserve-3d";
    document.getElementById('child-card2').style.transition="transform 1.2s";
    document.getElementById("page3").style.display="unset";
    document.getElementById("page1").style.display="none";
    
}
function regist(){
    document.getElementById('child-card2').style.transform="rotateY(360deg)";
    document.getElementById('child-card2').style.transformStyle="preserve-3d";
    document.getElementById('child-card2').style.transition="transform 1.2s";
    
   
    document.getElementById("hideCard").style.display="unset";
    document.getElementById("page1").style.display="none";
    
}
function resetme(){
    document.getElementById('child-card2').style.transform="rotateY(360deg)";
    document.getElementById('child-card2').style.transformStyle="preserve-3d";
    document.getElementById('child-card2').style.transition="transform 1.2s";
    document.getElementById("page2").style.display="unset";
    document.getElementById("page3").style.display="none";
    
}

$("#firstupload").click(function(){
    $("#inputProfile").click();
 });
 $("#secondupload").click(function(){
    $("#inputCollegeLogo").click();
 });

 $("#thirdupload").click(function(){
    $("#inputCollegeId").click();
 });


$("#toggleSection").click(function () {
    $("#toggleSection").text("RESEND OTP");
 });