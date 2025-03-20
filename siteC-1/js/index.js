window.addEventListener("load", function(){

	//팝업
	let popup = this.document.querySelector(".popup");
	let btn_close = this.document.querySelector(".btn_close");
	let popup_click = this.document.querySelector(".popup_click");

	popup_click.addEventListener("click", function(){
		popup.classList.add("on");
	})
	btn_close.addEventListener("click", function(){
		popup.classList.remove("on");
	})

	//탭
	let tabs = this.document.querySelectorAll(".tabs>a");
	let tab_contents = this.document.querySelectorAll(".tab_contents>ul");

	tabs.forEach(function(tab, index){
		tab.addEventListener("click", function(){
			tabs[0].classList.remove("on");
			tabs[1].classList.remove("on");
			tab.classList.add("on");

			tab_contents[0].classList.remove("on");
			tab_contents[1].classList.remove("on");
			tab_contents[index].classList.add("on")
		})
	})

	//슬라이드
	let train = this.document.querySelectorAll(".train>li")
	let count = 0;

	this.setInterval(function(){
		count++;
		if(count > 2){count = 0};
		train.forEach(function(obj, index){
			train[index].classList.remove("on")
			train[count].classList.add("on")
		})
	},2500)
})