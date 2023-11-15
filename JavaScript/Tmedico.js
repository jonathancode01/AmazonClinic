const formEl = document.getElementById('form-api')

    formEl.addEventListener('submit', evento => {
        evento.preventDefault();

        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData);


        fetch('https://reqres.in/api/users',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => console.log(data))
    })