window.addEventListener("load", function(){
    let train = this.document.querySelector(".train")
    let count = 0;

    this.setInterval(function(){
        count++;
        if(count>2){count=0}
        train.style.transform = `translateY(${-33.3333 * count}%)`;
    },2500);
})