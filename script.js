const form = document.querySelector('.form')
const username = document.querySelector('#username')  
const password = document.querySelector('#password')  
const feedback = document.querySelector('.feedback')
const inputs = document.querySelector('.input')
let pattern = /^[a-zA-Z]{2,20}$/;


form.addEventListener('submit', e => {
    e.preventDefault()

    let userN =  form.username.value;
    if(pattern.test(userN)){
        feedback.textContent = ' ';
        
    }else{
        feedback.textContent = 'invalid'
        feedback.style.color = 'red'

    }
    form.reset();
})











