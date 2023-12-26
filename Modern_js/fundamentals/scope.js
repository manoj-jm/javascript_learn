function add(){
    var x = 100;
    console.log(x);
}

// console.log(x); // var is function scope
add();

// nested block scope
if (true){
    const y = 100 ;
    let b = 299;
    var c= 23;
}
// console.log(c);
// console.log(y);
// console.log(b);

// golbal variable will add to window object

function first(){
    const x =100;
    function sec (){
        const y = 399;
        console.log(x +y );
    }
    // console.log(y);//Referenceerror 
}

first()