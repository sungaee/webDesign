window.addEventListener("load", function(){

    //팝업
    let popup = this.document.querySelector(".popup");
    let popup_click = this.document.querySelector(".popup_click");
    let pop_close = this.document.querySelector(".pop_close");

    popup_click.addEventListener("click", function(){
        popup.classList.add("on");
    })
    pop_close.addEventListener("click", function(){
        popup.classList.remove("on");
    })


    //슬라이드
    let train = this.document.querySelector(".train");
    let count = 0;

    this.setInterval(function(){ 
        count++;
        if(count > 2){count = 0}
        train.style.transform = `translateX(${count* -33.333}%)`;
    }, 2500)


    //탭메뉴
    let tabs = this.document.querySelectorAll(".tabs>a");
    let tabs_contents = this.document.querySelectorAll(".tabs_contents>ul")

    tabs.forEach(function(tab, index){
        tab.addEventListener("click", function(){
            tabs[0].classList.remove("on");
            tabs[1].classList.remove("on");
            tab.classList.add("on");

            tabs_contents[0].classList.remove("on")
            tabs_contents[1].classList.remove("on")
            tabs_contents[index].classList.add("on");
        })
    })


})