function on(){
	chrome.storage.sync.set({'checked': 1}, function() {
   			chrome.runtime.reload();
   	})
}

function off(){
	chrome.storage.sync.set({'checked': 0}, function() {
   			chrome.runtime.reload();
   	})
}
	
function text(){
	var text = $('#thongbao').val();
  alert('Xin chào '+text+' !');
	chrome.storage.sync.set({'text': text}, function() {
   		chrome.runtime.reload();
  })
}