
function EnterEventHandler(){
  var input = document.getElementById("InputFilter");
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("Description2").innerHTML=``;

      event.preventDefault();
      document.getElementById("SearchJoke").click();
    }
  });
}


function sendApiGetReq(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const keyword = document.getElementById("InputFilter").value;
  if(keyword==''){
    fetch(`https://v2.jokeapi.dev/joke/Any`, requestOptions)
    .then(response => response.json())
    .then(json => {
      if(json.type=='twopart'){
        document.getElementById("Description").innerHTML=`${json.setup}`;
        document.getElementById("Description2").innerHTML=`${json.delivery}`;
      }else{
        document.getElementById("Description").innerHTML=`${json.joke}`;
      }
    } )
    .catch(error => console.log('error', error));
    
    document.getElementById("InputFilter").value=null;
  }else{
    fetch(`https://v2.jokeapi.dev/joke/Any?contains=${keyword}`, requestOptions)
    .then(response => response.json())
    .then(json => {
      if(json.error==true){
        document.getElementById("Description").innerHTML="No joke found.";
      }else
      {
        if(json.type=='twopart'){
          document.getElementById("Description").innerHTML=`${json.setup}`;
          document.getElementById("Description2").innerHTML=`${json.delivery}`;
        }else{
          document.getElementById("Description").innerHTML=`${json.joke}`;
        }
      }     
    } )
    .catch(error => console.log('error', error));
    
    document.getElementById("InputFilter").value=null;
  }
}
function selectText() {
  const input = document.getElementById("InputFilter");
  input.focus();
  input.select();
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("Description2").innerHTML=``;

      event.preventDefault();
      document.getElementById("SearchJoke").click();
    }
  });
}




