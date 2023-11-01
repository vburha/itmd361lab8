function init(){
  function myEventFunction(){
    var userinput = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = userinput.value;
    alert('Victoria Burhans: ' + userinput.value);
  }
  
  var divalert = document.getElementById('entrybutton');
  divalert.addEventListener('click', myEventFunction);
}



window.addEventListener('load', init);
