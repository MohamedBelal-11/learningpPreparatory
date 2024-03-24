function vswith(item = HTMLElement, activity = false, time = 0.5, ostart = 0, oend = 1){
    item.style.cssText += `transition: ${String(time)}s;`
    if (activity == false) {
        item.style.cssText += `z-index: -100;opacity: ${String(ostart)};`
    }else if (activity == true) {
        item.style.cssText += `z-index: 10;opacity: ${String(oend)};`
    };
};
let vsis = document.getElementsByClassName("vsi");
for (let i = 0; i < vsis.length; i++){
    vsis[i].parentElement.addEventListener("mouseover",function(){
        vswith(vsis[i],true, 0.3);
    });
    vsis[i].parentElement.addEventListener("mouseleave",function(){
        vswith(vsis[i], false, 0.3);
    });
};