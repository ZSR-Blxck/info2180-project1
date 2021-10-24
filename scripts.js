window.onload=function()
{
	  document.querySelector("button").addEventListener("click", function(event){
        event.preventDefault()
        required();
    });

	function required() 
    {
    	var email= document.getElementById("email");
    	message = ("Thank you! Your email address"+ email+ " has been added to our mailing list!");
      // CHECKS IF FIELD IS EMPTY
      if (email=="")
      { 
          Alert("Please enter a valid email address.");
          return false;
      }
      	messageElement.innerHTML = message;
          return true;
    }

}