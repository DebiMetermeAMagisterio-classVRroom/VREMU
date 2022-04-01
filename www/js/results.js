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
        "passed_items":$('#passed').val()
        "failed_items":$('#failed').val()
        "score":$('#grade').val()
        "metadata":$('#metadata').val()
      }

      $.ajax({
        method: "POST",
        url: $('#URL').val()+"/api/finish_vr_exercise",
        data : {"pin":localStorage.getItem("PIN"),"autograde":autograde,"VRexerciseID":localStorage.getItem("ID"),"exVersion":localStorage.getItem("version")},
        dataType: "json",
      }).done(function (info) {

        alert("VR-Task results saved successfully");

      }).fail(function(){
        alert("URL no valida");
      });      
      
      //Page reload prevention
      return false;
      });
}
