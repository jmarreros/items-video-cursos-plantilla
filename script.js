const items = document.getElementById('list-items');

// Click Events for the link show/hide controls
items.addEventListener('click', function(e){
	
	if ( ! e.target ) return;

	if ( e.target.matches('.item .item-link') ){
		const link = e.target;
		link.classList.toggle('down');
		const item = link.parentNode.querySelector('.controls');
		item.classList.toggle('hide');
	}


} );

// onchange for change link text with input name value
items.addEventListener( 'keyup', function(e){
	
	if ( ! e.target ) return;

	if ( e.target.matches('.item input[type="text"]') ){
		const input = e.target;
		const item = input.parentNode.parentNode.parentNode;
		const link = item.querySelector('.item-link');
		link.innerHTML = input.value;
	};

});

// const inputs = document.querySelectorAll('.item input[type="text"]');

// inputs.forEach( function(el){
// 	el.addEventListener('keyup', function(){
// 		console.log(el.value);
// 	});
// });


// inputs.addEventListener('onchange', function(e){

// 	console.log(e.target);

// });




// const curso = [
// 	{
// 		idcurso: 1,
// 		name: 'Introducción',
// 		isheader: true,
// 		islock:false,
// 		type:'custom',
// 		code:'',
// 		note:''
// 	},
// 	{
// 		idcurso: 2,
// 		name: 'Item 1',
// 		isheader: false,
// 		islock:false,
// 		type:'Youtube',
// 		code:'Este es el código para el video de youtube',
// 		note:'Este es un comentario para el video de youtube'
// 	}
// 	];


