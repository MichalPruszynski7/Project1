  function init (){
	var tcButton = document.getElementById("attentiontext");

  function myevent() {
	alert("Please dont Be Alarmed This Event is Family Friendly :)");
  }

  tcButton.addEventListener("click", myevent);
  }
  window.addEventListener('load', init)