document.getElementById("1").addEventListener("click", on);
document.getElementById("0").addEventListener("click", off);	
document.getElementById("save").addEventListener("click", text);

chrome.storage.sync.get(["checked","text"], function(data) {
       if (data['checked'] === 1) {
       		$("#1").addClass("active");
		 }else{
       		$("#0").addClass("active");
		 }
		var thongbao = document.getElementById('thongbao');
		if(!data['text']){
			thongbao.innerHTML += '';
		}else{
			thongbao.innerHTML += data['text'];
		}
});