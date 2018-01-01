const template = `
<li class="item">
	<div class="links">
		<a href="#" class="item-link"></a>
		<a href="#" class="arrow"></a>
	</div>
	<div class="controls">
		<p class="control-name">
			<label>Name</label><input type="text" value=""/>
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
			<div><a href="#" class="remove">Remove</a> | <a href="#" class="cancel">Cancel</a></div>
			<div><a href="#" class="preview">Preview</a></div>
		</div>
	</div>
</li>`;

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


// Adding new item
const addnew =  document.getElementById('add-item');

addnew.addEventListener('click', function(){
	const listhtml = document.createRange().createContextualFragment(template);
	items.appendChild(listhtml);

	const item = items.lastChild;
	update_ids(item, items.childElementCount);

	// console.log(items.childElementCount);
});


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


