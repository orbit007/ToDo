let inputtag = document.querySelector("input");
let ultag = document.querySelector("ul");

inputtag.addEventListener('keydown',function(e){

    let key = e.key;
    if(key=='Enter')
    {
        let value = inputtag.value;
        inputtag.value="";
        let litag = document.createElement("li");

        litag.innerHTML= `<div>${value}</div>   
           <div class="delete"><i class="fa-solid fa-trash"></i></div>`

        handelrem(litag);
        ultag.appendChild(litag);
    }
})

function handelrem(litag)
{
    let deletediv = litag.querySelector(".delete");
    deletediv.addEventListener("click",function(){
        litag.remove();
    })
}