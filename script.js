
function showRessources(product){
	var item = products[product];
	
	if(!products.hasOwnProperty(product)){
		console.log(product);
	}else{
		console.log(product+":");
		for(var i in item){
			
			showRessources(item[i]);
		}
		
	}
		
	
}
$('document').ready(function(){

for(var i in  products){
	$('#products').append('<li>'+i+'</li>');
}

$('#products li').on('click', function(){
	var recipe = $(this).text();
	showRessources(recipe);
})


})