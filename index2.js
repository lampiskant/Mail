function save(){
    let name_text = document.querySelector('#name').value;
    localStorage.setItem('name', name_text);

    let surname_text = document.querySelector('#surname').value;
    localStorage.setItem('surname', surname_text);

    let email = document.querySelector('#email').value;
    localStorage.setItem('email', email);

    let password = document.querySelector('#password').value;
    localStorage.setItem('password', password);
    
    document.querySelector('h1').innerHTML = '<img src="koulis.jpg" alt=""></img>'
}
