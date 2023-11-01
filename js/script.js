function init(){
  function myEventFunction(){
    var userinput = document.getElementById('entryinput');
    alert('Victoria Burhans: ' + userinput);
  }
  

  var divalert = document.getElementById('entrybutton');
  divalert.addEventListener('click', myEventFunction);
}



window.addEventListener('load', init);
