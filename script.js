//your JS code here. If required.
let p = document.getElementById("timer");
let d = new Date();
let c = d.getDay();
let a = d.getDate();
let b = d.getFullYear();

let k = d.getHours();
let q = d.getMinutes();
 let h = setInterval(() => {
    let z = d.getSeconds();
}, 1000);
let s = h;
console.log(p.innerText = c+"/"+a+"/"+b+", "+k+":"+q+":"+s+" Am");