// document.querySelector('form').onkeypress = checkEnter;


function answerme(prompt){
    //str.includes("world");

    if(prompt.includes('faq')){
        return '<button onclick="faq(1)" type="button">1)I did not receive my voting card</button></span></div></div><div><div class="left"><span class="left"><button onclick="faq(2)" type="button">2)Inesh gives godawful prompts </button></span></div></div><div><div class="left"><span class="left"><button onclick="faq(3)" type="button">3)Can I Give votes with covid? </button></span></div></div><div><div class="left"><span class="left"><button onclick="faq(4)" type="button">4)Where are the voting devices? </button></span></div></div><div><div class="left"><span class="left"><button onclick="faq(5)" type="button">5)What if I forget my voter card or not receive my card?</button>';
    }
    if(prompt.includes('1') || prompt.includes('one')){
        return "Don’t worry voting cards are still being processed please wait until 6th of September and for any further queries contact info@lumin.us";
    }
    if(prompt.includes('2') || prompt.includes('two')){
        return "Yeah. it sucks really.";
    }
    if(prompt.includes('3') || prompt.includes('three')){
        return "You can give vote even if you are infected as we follow a safe environment so that every citizen can vote without spreading the disease or getting infected.";
    }
    if(prompt.includes('4') || prompt.includes('four')){
        return "The voting machines are located at every fast food store drive through so that anyone can vote even those who are uncomfortable wearing a mask outside, this enables a safe distance and prevents the spread of COVID-19. They are also located at Schools and other public institutions but the use of mask is compulsory at the institutions the failure of which may lead to consequences.";
    }
    if(prompt.includes('5') || prompt.includes('five')){
        return "You can use either two of the 3 your fingerprint, facial recognition and the chip inside the voter card to enable you to vote so you can vote as long as you have an intact face and arms.";
    }
    if(prompt.includes('sex')){
        return "karwado";
    }
    if(prompt == 'hi' || prompt == 'hello' || prompt == 'hey'){
        return "Hey, nice to meet you!";
    }
    if(prompt == 'contact'){
        return "<a href='mailto:info@lumin.us'>info@lumin.us</a>"
    }
    else{
        return "I'm not quite sure what you are saying, but here's a summary of the entire process: <br><br> The voting machines are located at every fast food store drive through so that anyone can vote even those who are uncomfortable wearing a mask outside, this enables a safe distance and prevents the spread of COVID-19. They are also located at Schools and other public institutions but the use of mask is compulsory at the institutions the failure of which may lead to consequences. You can use either two of the 3 your fingerprint, facial recognition and the chip inside the voter card to enable you to vote so you can vote as long as you have an intact face and arms. For any other queries contact <a href='mailto:info@lumin.us'>info@lumin.us</a>";
    }
}

document.forms["mail"].elements[0].addEventListener("keydown", function(theKey) {
    if (theKey.code === "Enter") {
        return buttonPress();
    }
});


function buttonPress(){
    const inputForm = document.forms["mail"];
    let prompt = inputForm.elements[0].value;
    var chatList = document.getElementById("chats");
    inputForm.elements[0].value = "";
    prompt = prompt.toLowerCase();
    // console.log()
    if(prompt==""){
        return;
    }
    console.log(prompt);
    console.log(answerme(prompt));
    chatList.innerHTML += '<div style="display: flex; flex-flow: row-reverse;"><div class="right"><span class="right">' + prompt + '</span></div></div>';
    chatList.innerHTML += '<div><div class="left"><span class="left">' + answerme(prompt) + '</span></div></div>';
    chatList.scrollTo(0, chatList.scrollHeight);
}

function faq(n){
    var chatList = document.getElementById("chats");
    if(n == '1'){
        chatList.innerHTML += '<div><div class="left"><span class="left">' + "Don’t worry voting cards are still being processed please wait until 6th of September and for any further queries contact info@lumin.us" + '</span></div></div>';
        chatList.scrollTo(0, chatList.scrollHeight,'ease');
    }
    if(n == '2'){
        chatList.innerHTML += '<div><div class="left"><span class="left">' + "Yeah. it sucks really." + '</span></div></div>';
        chatList.scrollTo(0, chatList.scrollHeight);
    }
    if(n == '3'){
        chatList.innerHTML += '<div><div class="left"><span class="left">' + "You can give vote even if you are infected as we follow a safe environment so that every citizen can vote without spreading the disease or getting infected." + '</span></div></div>';
        chatList.scrollTo(0, chatList.scrollHeight);
    }
    if(n == '4'){
        chatList.innerHTML += '<div><div class="left"><span class="left">' + "The voting machines are located at every fast food store drive through so that anyone can vote even those who are uncomfortable wearing a mask outside, this enables a safe distance and prevents the spread of COVID-19. They are also located at Schools and other public institutions but the use of mask is compulsory at the institutions the failure of which may lead to consequences." + '</span></div></div>';
        chatList.scrollTo(0, chatList.scrollHeight);
    }
    if(n == '5'){
        chatList.innerHTML += '<div><div class="left"><span class="left">' + "You can use either two of the 3 your fingerprint, facial recognition and the chip inside the voter card to enable you to vote so you can vote as long as you have an intact face and arms." + '</span></div></div>';
        chatList.scrollTo(0, chatList.scrollHeight);
    }
}