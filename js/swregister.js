if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js',{
		scope:'./'
	})
	.then(reg=>{
		console.log("sucess");
	})
		.catch(error=>{
			console.log("error");

		});
}