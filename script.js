function sendMessage() {
    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    if (input.value.trim() === "") return;

    let userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input.value;
    chatBox.appendChild(userMsg);

    // Simulated Bot Response
    let botMsg = document.createElement("p");
    botMsg.style.color = "#58a6ff";
    botMsg.textContent = "AI: Hello! How can I help you today?";
    
    setTimeout(() => {
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}

