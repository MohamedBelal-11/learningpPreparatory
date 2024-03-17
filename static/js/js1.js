function vswith(item = HTMLElement, activity = false, time = 0.5, ostart = 0, oend = 1){
    let j ,b ;
    item.style.cssText += `transition: ${String(time)}s;`
    if (activity == false) {
        clearTimeout(b)
        item.style.cssText += `opacity: ${String(ostart)};`
        j = setTimeout(function(){
            item.classList.add("dn");
        },(time * 1000) + 20)
    }else if (activity == true) {
        clearTimeout(j);
        item.classList.remove("dn");
        b = setTimeout(function(){
            item.style.cssText += `opacity: ${String(oend)};`;
        },20);
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