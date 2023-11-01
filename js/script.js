function init(){
  function myEventFunction(){
    alert('Victoria Burhans: ' + entryinput);
  }
  
  var userinput = document.getElementById('entryinput');
  var divalert = document.getElementById('entrybutton');
  divalert.addEventListener('click', myEventFunction);
}



window.addEventListener('load', init);
