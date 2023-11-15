function cadPOST(url, body) {
    console.log(body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }
    return request.responseText
}

function cadUser(){
    event.preventDefault()
    let url = "https://reqres.in/api/users"
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    console.log(name)
    console.log(password)
    
    body = {
        "name": name,
        "password": password
    }
    cadPOST(url, body)
}




