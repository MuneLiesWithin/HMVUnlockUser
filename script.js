function unlock()
{
    let input = document.getElementById("username").value
    if(input.trim() == ""){
        flashmessage("neutral", "Por favir insira um usuário")
    } else {
        fetch('https://localhost:44328/api/UnlockUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: input }),
        })
        .then(res =>   res.json())
        .then(data => {
            if(data === "Usuário desbloqueado") 
            {
                flashmessage("success", data)
            }
            else 
            {
                flashmessage("error", data)
            }
            
        })
        .catch(error => {
            flashmessage("error", "Ocorreu algum erro")
            console.error(error)
        })
    }
}
function flashmessage(type, message)
{
    let messageElement = document.getElementById("message") 

    if(type === "error") {
       messageElement.classList.add("error")
       messageElement.innerHTML = message
       setTimeout(() => {
        messageElement.innerHTML = "";
        messageElement.classList.remove("error");
    }, 3000)

    }
    else if(type === "success") {
        messageElement.classList.add("success")
        messageElement.innerHTML = message
        setTimeout(() => {
            messageElement.innerHTML = "";
            messageElement.classList.remove("success");
        }, 3000)
    }
    else if(type === "neutral") {
        messageElement.classList.add("neutral")
        messageElement.innerHTML = message
        setTimeout(() => {
            messageElement.innerHTML = "";
            messageElement.classList.remove("neutral");
        }, 3000)
    }
}