
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
fetch("http://localhost:3000/posts")
.then((resp)=>resp.json())
.then((data)=> {
    text1.innerHTML = data[0].description1
    text2.innerHTML = data[1].description2
    text3.innerHTML = data[2].description3
});


 const bar = document.getElementById("bar");
 const sonic = document.getElementById("sonic");


 bar.addEventListener("click",() => {
    const sonic = document.getElementById("sonic");
    sonic.classList.toggle("astr")
})



