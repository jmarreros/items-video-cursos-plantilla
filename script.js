const template = `
<li class="item">
	<div class="links my-handle">
		<a href="#" class="item-link">Untitled</a>
		<a href="#" class="arrow down"></a>
	</div>
	<div class="controls hide">
		<p class="control-name">
			<label>Name</label><input type="text" value="Untitled"/>
		</p>
		<p class="control-check-header">
			<input type="checkbox"><label>Is header?</label>
		</p>
		<p class="control-type">
			<label>Type</label>
			<select>
				<option value="youtube" selected>Youtube</option>
				<option value="vimeo">Vimeo</option>
				<option value="custom">custom</option>
			</select>
		</p>
		<p class="control-code">
			<label>Code</label><textarea cols="30" rows="4"></textarea>						
		</p>
		<p class="control-check-lock">
			<input type="checkbox">
			<label>Locked for guests?</label>
		</p>
		<hr>
		<div class="control-options">
			<div><a href="#" class="remove">Remove</a> | <a href="#" class="close">Close</a></div>
			<div><a href="#" class="preview">Preview</a></div>
		</div>
	</div>
</li>`;

const items = document.getElementById('list-items');

// Click Events for the link show/hide controls
items.addEventListener('click', function(e) {
	
	if ( ! e.target ) return;

	// show/hide controls link
	if ( e.target.matches('.item .arrow') || e.target.matches('.item .close') ){
		
		let item = e.target.parentNode.parentNode;

		if ( e.target.className == 'close' ){
			item = e.target.parentNode.parentNode.parentNode.parentNode;
		}

		const link = item.querySelector('.links .arrow');
		const controls = item.querySelector('.controls');

		link.classList.toggle('down');
		controls.classList.toggle('hide');

		if ( ! link.classList.contains('down') ) {
			close_opens(item.dataset.id);
		}

	}

	// isheader conditional show/hide controls
	if ( e.target.matches('.item .control-check-header input') ){

		const item = e.target.parentNode.parentNode.parentNode;
		
		item.querySelector('.links .item-link').classList.toggle('isheader');
		item.querySelector('.control-type').classList.toggle('hide');
		item.querySelector('.control-code').classList.toggle('hide');
		item.querySelector('.control-check-lock').classList.toggle('hide');
	}

	// islock conditional to hide/show lock icon
	if ( e.target.matches('.item .control-check-lock input') ){	
		const item = e.target.parentNode.parentNode.parentNode;
		item.querySelector('.links .item-link').classList.toggle('islock');
	}


	//Remove element
	if ( e.target.matches('.item .remove') ){
		const item = e.target.parentNode.parentNode.parentNode.parentNode;
		item.parentNode.removeChild(item);
		reorder_list(items);
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


// Adding new item
const addnew =  document.getElementById('add-item');

addnew.addEventListener('click', function(){
	const listhtml = document.createRange().createContextualFragment(template);
	items.appendChild(listhtml);

	const item = items.lastChild;
	update_ids(item, items.childElementCount - 1);

	// item.querySelector()
	// TODO : Agregar + 1 a untitled

});

// for hidden items open except id
function close_opens(id){
	items.querySelectorAll('.item').forEach( function( item, index) {
		if ( index != id ){
			item.querySelector('.links .arrow').classList.add('down');
			item.querySelector('.controls').classList.add('hide');
		}
	});
}

// function to udpate ids attributes for the HTML item
function update_ids( item, id){
	item.setAttribute('data-id', id);
	item.querySelector('.control-name label').setAttribute('for', `name-${id}`);
	item.querySelector('.control-name input').setAttribute('id', `name-${id}`);
	item.querySelector('.control-check-header label').setAttribute('for', `isheader-${id}`);
	item.querySelector('.control-check-header input').setAttribute('id', `isheader-${id}`);
	item.querySelector('.control-type label').setAttribute('for', `type-${id}`);
	item.querySelector('.control-type select').setAttribute('id', `type-${id}`);
	item.querySelector('.control-code label').setAttribute('for', `code-${id}`);
	item.querySelector('.control-code textarea').setAttribute('id', `code-${id}`);
	item.querySelector('.control-check-lock label').setAttribute('for', `islock-${id}`);
	item.querySelector('.control-check-lock input').setAttribute('id', `islock-${id}`);
}

function reorder_list( items ){
	items.querySelectorAll('.item').forEach( function(item, index) {
		update_ids(item, index);
	});
}

sortable = Sortable.create(items, {
	handle: ".my-handle",
	onEnd: function ( evt ) {
		if ( evt.oldIndex != evt.newIndex ){
			reorder_list( items );
		}
	}
});


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


