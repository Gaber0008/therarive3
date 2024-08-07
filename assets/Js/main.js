// const messageInput = document.getElementById('message');
// const sendButton = document.getElementById('send');
// const chatMessages = document.querySelector('.chat-messages');

// sendButton.addEventListener('click', () => {
// const userMessage = messageInput.value;
// if (userMessage.trim() !== '') {
// const messageElement = document.createElement('div');
// messageElement.classList.add('chat-message', 'user');
// messageElement.textContent = userMessage;
// chatMessages.appendChild(messageElement);

// // Simulate chatbot response
// setTimeout(() => {
// const botMessage = document.createElement('div');
// botMessage.classList.add('chat-message', 'bot');
// botMessage.textContent = 'Hello, how can I help you?';
// chatMessages.appendChild(botMessage);

// // Scroll to the bottom of the chat messages
// chatMessages.scrollTop = chatMessages.scrollHeight;
// }, 1000);

// messageInput.value = '';
// }
// });
const submit=document.getElementById('submit');

console.log(submit);
submit.addEventListener('click',()=>{
    const namee=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const age=document.getElementById('age').value;
    const pass=document.getElementById('pass').value;

    if(namee === '' || email === ''|| !email.includes('@')||age===""||age===Number){// check the the data (validation)
        alert('please fill all the fields and check if email is valid.');//error message
    }else{
        localStorage.setItem('The namee',JSON.stringify(namee));
        localStorage.setItem('The email',JSON.stringify(email));
        localStorage.setItem('The age',JSON.stringify(age));
        localStorage.setItem('The pass',JSON.stringify(pass));
        signUp=document.getElementById('signup');
        signUp.reset();
        window.location.href = './chat.html';
    }
  
});

