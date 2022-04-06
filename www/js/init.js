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
    $("#loginButton").click(function(){

      $.ajax({
        method: "GET",
        url: $('#URL').val()+"/api/start_vr_exercise",
        data : {"pin":String($('.validate').val())},
        dataType: "json",
      }).done(function (info) {

        if(info["status"] == "OK"){
          alert("Correct Pin");

          localStorage.setItem("PIN", String($('.validate').val()));
          localStorage.setItem("ID", info["VRexerciseID"]);
          localStorage.setItem("version", info["minExVersion"]);
          localStorage.setItem("URL",$('#URL').val());
          
          window.location.assign('results.html');

        }else{
          alert(info['message']);
        }

      }).fail(function(){
        alert("No valid URL");
      });      
      
      //Page reload prevention
      return false;
      });
}
