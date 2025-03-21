window.addEventListener("load", function(){
	// 팝업
	let popup = this.document.querySelector(".popup");
	let modal = this.document.querySelector(".modal");
	let popup_close = this.document.querySelector(".popup_close");
	let popup_click = this.document.querySelector(".popup_click");

	popup_click.addEventListener("click", function(){
		popup.classList.add("on");
		modal.classList.add("on");
	})
	popup_close.addEventListener("click", function(){
		popup.classList.remove("on");
		modal.classList.remove("on");
	})

	// 슬라이드
	let train = this.document.querySelector(".train");
	let count = 0;

	this.setInterval(function(){
		count++;
		if(count>2){count=0};
		train.style.transform = `translateX(${-33.333 * count}%)`;

	},2500)


})