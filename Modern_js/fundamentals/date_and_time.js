let x;
// Date(year,month,date,hours,minute,second,milliseconds)
let d = new Date('2/1/2023  7:23:00');
x=d.getDay();
x=d.getHours();
x = d.getMinutes();

x = Intl.DateTimeFormat('en-In').format(d);
console.log(x);

