// digital clock 
let hours = document.getElementById("hour");
let minutess = document.getElementById("minutes");
let secondss = document.getElementById("seconds");
let ampm = document.getElementById('ampm');



setInterval(() => {
    

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";
    
    if(h > 12){
        h = h - 12;
    };
    
    h = (h < 10 ) ? "0" + h : h;
    m = (m < 10 ) ? "0" + m : m;
    s = (s < 10 ) ? "0" + s : s;
    
    hours.innerHTML = h;
    minutess.innerHTML = m;
    secondss.innerHTML = s;
    ampm.innerHTML = am;
   


});