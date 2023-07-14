const navBar = document.querySelector("nav"),
  menuBtns = document.querySelectorAll(".menu-icon"),
  overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});


// chat
const socket = io();

console.log('this works')

$("#chatForm").submit(() => {
  // Get the message text value
  let messageText = $("#chat-input").val();

  // Don't emit an empty message
  if(messageText.trim() !== ''){
    socket.emit("message", messageText);
    $("#chat-input").val("");
  }

  return false;
});

socket.on("message", (message) => {
  displayMessage(message.content);
});

let displayMessage = (message) => {
  $("#chat").prepend($("<li>").html(message));
};
