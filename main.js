const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
const hearts = document.querySelectorAll(".like-glyph");
const errorMessage = document.querySelector(".hidden");

const likerTask = (e) => {
  const heart = e.target;

  mimicServerCall()
  .then(function(response){
    alert(response);
    if (heart.innerText === "♡"){
      heart.innerText = FULL_HEART;
    }
    else {
      heart.innerText = EMPTY_HEART;
    }
    if (heart.className === "like-glyph"){
      heart.className = "activated-heart";
    }
    else {
      heart.className = "like-glyph";
    }
  })
  .catch(function(error){
    document.getElementById("modal-message").innerText = error;
    if (errorMessage.classList.contains("hidden")){
      errorMessage.classList.remove("hidden");
    }
    setTimeout(() => {
      errorMessage.classList.add("hidden");
      }, 3000);
  })


}


for (const heart of hearts ){
  heart.addEventListener("click", likerTask);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
