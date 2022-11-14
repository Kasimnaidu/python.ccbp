let counterEl=document.getElementById("counter")
function onIncrement(){
    let Previous = counterEl.textContent;
    let update=parseInt(Previous)+1;
    counterEl.textContent=update;
    if (update<0){
        counterEl.style.color="Red"

    }else if(update>0){
        counterEl.style.color="Green"

    }else{
        counterEl.style.color="black"
    }
}
function onDecrement(){
    let Previous = counterEl.textContent;
    let update=parseInt(Previous)-1;
    counterEl.textContent=update;
    if (update<0){
        counterEl.style.color="Red"

    }else if(update>0){
        counterEl.style.color="Green"

    }else{
        counterEl.style.color="black"
    }
}
function Reset(){
    let update = 0;
    counterEl.textContent=update;
    if (update<0){
        counterEl.style.color="Red"

    }else if(update>0){
        counterEl.style.color="Green"

    }else{
        counterEl.style.color="black"
    }
}