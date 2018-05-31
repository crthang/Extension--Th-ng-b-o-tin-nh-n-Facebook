 chrome.storage.sync.get(["checked","text"], function(data) {
 	// console.log(data['text']);
       if (data['checked'] === 1) {
       		if(!data['text']){
       			var text = 'bạn có một tin nhắn mới';
       		}else{
       			var text = data['text'];
       		}
       		let message = new Audio('https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q='+ text+'ơi có đứa nhắn tin kìa' +'&tl=vi&total=1&idx=0&textlen=7');
		      chrome.webRequest.onBeforeRequest.addListener(
		        function(details) {
		        	if(details.url.includes('delivery_receipts.php')){
						message.play();
					}
		        },
		       {urls: ["<all_urls>"]});
		 }
 });


      