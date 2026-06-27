function signup () {
    var email = document.getElementById('semail').value 
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email', email)
    localStorage.setItem('Passward', pass)
}
function signin () {
    var email = document.getElementById('lemail').value 
    var pass = document.getElementById('lpass').value
    if(localStorage.getItem('Email') == email   &&   localStorage.getItem('Passward') == pass){
    //     alert('welcome nalle.....🥱🥱.....')
    location.href = './index.html'
     }
    else{
        alert('chal nikal pahle signup kr ke ao.....hehehe...😁🤓')
    }
}

function logout() {
    
    localStorage.removeItem('Email');
    localStorage.removeItem('Passward');
    
    
    alert('Aap logout ho gaye! Phir se signin karein.');
    
    location.href = './signup.html'; 
}