let btnel=document.querySelector(".copy-button");
btnel.addEventListener("click",function(){
    alert("Emoji Copied!");
});
let btnel2=document.querySelector(".clear-button");
btnel2.addEventListener("click",function(){
    alert("Emoji Cleared!");
});

let btnel3=document.querySelector(".generate-button");
btnel3.addEventListener("click",function(){
    alert("Emoji Generated!");
});

const emojis = ["😀", "😂", "😍", "🤔", "😎", "😭", "😡", "🎉", "🚀", "🌟","🎶","💁🏻","🥲","😙","✌️"];

function generateEmoji(){
    const randomIndex = Math.floor(Math.random() * emojis.length);

}
