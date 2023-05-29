let p=document.createElement('p');
p.id="timer";


function getTime(){
    
    
    let dateInfo=new Date();
// console.log(dateInfo);
// dateInfo.setHours(24);
// dateInfo.setMinutes(1);
let date=dateInfo.toLocaleDateString();

let time=dateInfo.toLocaleTimeString().split(":");
let hrs=time[0];
let min=time[1];
let sec=time[2];

// console.log(date,hrs,min,sec);
let isPm=false;
let fullTime;

if(hrs>12){
  isPm=true;
  fullTime=`${hrs-12}:${min}:${sec} ${isPm?'PM':'AM'}`;
}
else{
    isPm=false;
    fullTime=`${hrs}:${min}:${sec} ${isPm?'PM':'AM'}`;
}
console.log(fullTime);
p.innerText=`${date}, ${fullTime} `;
document.body.append(p);
}

setInterval(getTime,1000);



// let data=`${month}/${date}/${year},`