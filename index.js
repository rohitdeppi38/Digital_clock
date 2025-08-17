const date= new Date();
let seconds= date.getSeconds();
let minutes = date.getMinutes()-15;
let hours = (date.getHours())-2.5;

document.querySelector("#second").style.transform=`translateX(0vh)`;
setInterval(() => {
    seconds=(seconds+1)%60;
    minutes=(minutes+( 1/60))%60;
    hours =(hours+(1/3600))%12
    document.querySelector("#second").style.transform=`rotate(${seconds*6}deg)`;
    document.querySelector("#minute").style.transform=`rotate(${minutes*6}deg)`;
    document.querySelector("#hour").style.transform=`rotate(${hours*30}deg)`;
}, 1000);
