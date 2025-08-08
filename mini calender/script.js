const monthNameE1 = document.getElementById("month-name");
const dayNameE1 = document.getElementById("day-name");
const dayNumberE1 = document.getElementById("day-number");
const yearNumberE1 = document.getElementById("year-number");

 const date = new Date();
 const month = date.getMonth();   
 monthNameE1.innerText = date.toLocaleString("en",{
        month:"long"
 })


 dayNameE1.innerText =date.toLocaleString("en",{
        weekday:"long"
 })

 dayNumberE1.innerText = date.toLocaleString("en",{
        day:"numeric"
 })

 dayNumberE1.innertext = date.getDate()
 yearE1.innertext = date.getFullYear()
 

    