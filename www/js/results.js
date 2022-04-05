(function($){
  $(function(){

    $('select').formSelect();
    

  }); // end of document ready
})(jQuery); // end of jQuery name space
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    //LoginButton onclick function
    $("#sendButton").click(function(){
      console.log("dins el sendButton");
      autograde={
        "passed_items":$('#passed').val(),
        "failed_items":$('#failed').val(),
        "score":$('#grade').val(),
        "metadata":$('#metadata').val()
      };
      autograde= JSON.stringify(autograde);
      pin=localStorage.getItem("PIN");
      VRexerciseID=parseInt(localStorage.getItem("ID"));
      exVersion=parseInt(localStorage.getItem("version"));

      console.log(autograde);
      console.log(pin);
      console.log(typeof(pin));
      console.log(VRexerciseID);
      console.log(exVersion);
      console.log(localStorage.getItem("URL"));

      $.ajax({
        method: "POST",
        url: localStorage.getItem("URL")+"/api/finish_vr_exercise",
        data: JSON.stringify({"pin":pin,"autograde":autograde,"VRexerciseID":VRexerciseID,"exVersion":exVersion}),
        dataType: "json",
        contentType: "application/json"

      }).done(function (info) {
        console.log(info);
        alert("VR-Task results saved successfully");

      }).fail(function(info){
        alert("URL no valida");
        console.log(info);
      });      
      
      //Page reload prevention
      return false;
      });
}
