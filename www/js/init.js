(function($){
  $(function(){

    //$('.parallax').parallax();
    $('select').formSelect();
    

  }); // end of document ready
})(jQuery); // end of jQuery name space
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    //LoginButton onclick function
    $("#loginButton").click(function(){

      $.ajax({
        method: "GET",
        url: $('#URL').val()+"/api/start_vr_exercise",
        data : {"pin":String($('.validate').val())},
        dataType: "json",
      }).done(function (info) {

        if(info["status"] == "OK"){
          alert("Pin correcte");

          localStorage.setItem("PIN", $('#pin').val())
          localStorage.setItem("ID", info["VRexerciseID"])
          localStorage.setItem("version", info["minExVersion"])
          
          window.location.assign('results.html');

        }else{
          alert(info['message']);
        }

      }).fail(function(){
        alert("URL no valida");
      });      
      
      //Page reload prevention
      return false;
      });
}
