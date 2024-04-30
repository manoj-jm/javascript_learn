document.body.addEventListener("keydown", function (e) {
  // const key = document.querySelector('#key');
  const k = document.querySelector("#k");
  k.textContent = e.key;
  const kc = document.querySelector("#kc");
  kc.textContent = e.keyCode;
  const c = document.querySelector("#c");
  c.textContent = e.code;
  
  //space
  if (e.keyCode === 32) { 
      const k = document.querySelector("#k");
    k.textContent = e.code;
  }

  let arrobj = {
    o: "orange",
    r: "red",
    y: "yellow",
    b: "blue",
    g: "green",
    w:'white'
  };
  let arr = ["o", "r", "y", "b", "g"];
  arr.forEach((element) => {
    if (element === e.key) {
      document.body.style.backgroundColor = `${arrobj[e.key]}`;
      // console.log("key is matched" + element);
      document.body.style.color = `white`;
      k.style.color = 'white'
      kc.style.color = 'white'
      c.style.color = 'white'
    }
    
  });

});
