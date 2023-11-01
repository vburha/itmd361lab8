function init(){
  function myEventFunction(){
    alert('Victoria Burhans: Testing');
  }
  
  var divalert = document.getElementById('entrybutton');
  divalert.addEventListener('click', myEventFunction);
}



window.addEventListener('load', init);
