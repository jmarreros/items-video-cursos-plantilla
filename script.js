const items = document.getElementById('list-items');

// Click Events for the link show/hide controls
items.addEventListener('click', function(e){
	
	if ( ! e.target ) return;

	// show/hide controls link
	if ( e.target.matches('.item .links .arrow') ){
		const link = e.target;
		link.classList.toggle('down');

		const item = link.parentNode.parentNode.querySelector('.controls');
		item.classList.toggle('hide');
	}

	// isheader conditional show/hide controls
	if ( e.target.matches('.item .control-check-header input') ){

		const item = e.target.parentNode.parentNode.parentNode;
		
		item.querySelector('.links .item-link').classList.toggle('isheader');
		item.querySelector('.control-type').classList.toggle('hide');
		item.querySelector('.control-code').classList.toggle('hide');
		item.querySelector('.control-check-lock').classList.toggle('hide');
	}

	if ( e.target.matches('.item .control-check-lock input') ){	
		const item = e.target.parentNode.parentNode.parentNode;

		item.querySelector('.links .item-link').classList.toggle('islock');
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


const item = document.querySelector('.item');

update_ids( item, 3 );

function update_ids( item, id){
	item.setAttribute('data-id', id);
	item.querySelector('.control-name label').setAttribute('for', `name-${id}`);
	item.querySelector('.control-name input').setAttribute('id', `name-${id}`);
}




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


