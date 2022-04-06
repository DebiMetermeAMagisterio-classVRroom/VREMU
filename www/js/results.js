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
      autograde={
        "passed_items":parseInt($('#passed').val()),
        "failed_items":parseInt($('#failed').val()),
        "score":parseInt($('#grade').val()),
        "metadata":$('#metadata').val()
      };
      pin=localStorage.getItem("PIN");
      VRexerciseID=parseInt(localStorage.getItem("ID"));
      exVersion=parseInt(localStorage.getItem("version"));

      $.ajax({
        method: "POST",
        url: localStorage.getItem("URL")+"/api/finish_vr_exercise",
        data: JSON.stringify({"pin":pin,"autograde":autograde,"VRexerciseID":VRexerciseID,"exVersion":exVersion}),
        dataType: "json",
        contentType: "application/json"

      }).done(function (info) {
        alert("VR-Task results saved successfully");

      }).fail(function(info){
        alert("No valid URL");
      });      
      
      //Page reload prevention
      return false;
      });
}
