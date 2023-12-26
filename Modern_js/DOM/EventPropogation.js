// document.querySelector('.language').addEventListener('click',function(e){
//     console.log("ul is poped");
// },false)

// document.querySelector('a').addEventListener("click",function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("li is poped first")

// },false)


// remvove the list item upon click
document.querySelector('.language').addEventListener('click',function(e){
    const li = e.target;
    console.log(e.target.tagName)
    li.remove();
})