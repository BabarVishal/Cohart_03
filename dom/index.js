let ctr = 0;

function callback(){
    let ele = document.querySelectorAll("h1")[1];
    ele.innerHTML = ctr;
    ctr = ctr + 1;
}

setInterval(callback, 1000);

