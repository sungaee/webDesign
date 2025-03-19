window.addEventListener("load", function(){

	let popup = this.document.querySelector(".popup");
	let btn_close = this.document.querySelector(".btn_close");
	let popup_click = this.document.querySelector(".popup_click");

	popup_click.addEventListener("click", function(){
		popup.classList.add("on");
	})
	btn_close.addEventListener("click", function(){
		popup.classList.remove("on");
	})
})