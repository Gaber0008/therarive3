const LetsGo=document.getElementById('send')
LetsGo.addEventListener('click',()=>{
    const namee= JSON.parse(localStorage.getItem('The namee'));
    const email= JSON.parse(localStorage.getItem('The email'));
    const age= JSON.parse(localStorage.getItem('The age'));
    const msg=document.createElement('div');
    msg.classList.add('msg');
    const autoMsg = document.createElement('p');
    autoMsg.classList.add('automsg');
    const chatMessages = document.getElementById('chat-messages');
    console.log(namee);
    chatMessages.appendChild(msg).appendChild(autoMsg);
    if(age<=16){
        autoMsg.innerHTML=`Hi,${namee}<br>
        lorem;ltrblrmtwprmnpomnrpompomromeprlorem;<br>
        lorem;ltrblrmtwprmnpomnrpompomromeprlorem;<br>
        lorem;ltrblrmtwprmnpomnrpompomromeprlorem;<br>`
    }else{
        autoMsg.innerHTML=`Hi,${namee}<br>
        60`
    }
})