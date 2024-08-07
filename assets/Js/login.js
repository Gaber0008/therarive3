const logIn=document.getElementById('Login');
logIn.addEventListener('click',()=>{
  const email=document.getElementById('email').value;
    const pass=document.getElementById('pass').value;
    const email2= JSON.parse(localStorage.getItem('The email'));
    const pass2=JSON.parse(localStorage.getItem('The pass'));
    if (email === '' || pass === '') {
        alert('Please fill all the fields');
      } else if (email === email2 && pass === pass2) {
        window.location.href = './chat.html';
      } else {
        // Handle incorrect password or other error conditions
        alert('Incorrect email or password');
      }
})





















