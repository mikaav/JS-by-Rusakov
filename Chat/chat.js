function error(msg) {
  console.log(msg);
}

async function updateChat() {
  let response = await fetch("chat.php");
  if (response.status == 200) {
    let json = await response.json();
    //console.log(json);
    let messages = document.querySelectorAll(".message");
    for (let m of massages) m.remove();
    for (let text of json) {
      if (text == "") continue;
      let m = document.createElement("p");
      m.innerHTML = text;
      m.classList.add("massage");
      document.querySelector("#chat").append(m);
    }
  }
  setTimeout(updateChat, 3000);
}

async function sendForm(event) {
  event.preventDefault();
  let response = await fetch("chat.php", {
    method: "POST",
    body: new FormData(event.target),
  });

  if (response.status == 200) {
    event.target.text.value = "";
    let text = await response.text();
    //conxole.log(text);
    if (text != "ok") error("Message not delivered!" + text);
  } else error("Problem with Connection to Server!");
}

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("form[name=add]")
    .addEventListener("submit", sendForm);
  updateChat();
});