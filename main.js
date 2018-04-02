window.onload = function () {

	const replaceSpaces = str => str.replace(/ /g, '');

	let todos = [];

	// const Template = class {
	// 	constructor(id, title) {
	// 		this.id = id;
	// 		this.title = title;
	// 		this.done = false;
	// 	}
	// };

	const updateUI = () => {
		const todosList = document.getElementById('list');
		todosList.innerHTML = '';
		todos.forEach(todo => {
			const newLi = document.createElement('li');
			newLi.id = todo.id;
			newLi.className = todo.done ? 'checked' : '';
			newLi.innerHTML = todo.title;
			document.getElementById('list').appendChild(newLi);
		});
		console.log('todos', todos);
	};


	const addEl = () => {
		const inputValue = document.getElementById('input').value;
		const a = replaceSpaces(inputValue);



		if (!replaceSpaces(inputValue)) {
			input.value = '';
			alert('no value');
		} else {
			const id = todos.length;
			// todos.push({ ...new Template(id, inputValue) });


			todos.push({
				id,
				title: inputValue,
				done: false,
			});

			input.value = '';
			updateUI();

		}

	};

	document.getElementById('addTodoBtn').onclick = function () {
		addEl();
		// addCloseBtn();
	};

	let li = document.getElementById('list');
	li.addEventListener('click', function (ev) {
		const a = ev.target.tagName;

		if (ev.target.tagName === 'LI') {
			todos = todos.map((todo) => {
				if (todo.id === +ev.target.id) {
					return { ...todo, done: !todo.done };
				}

				return { ...todo };
			});
			updateUI();
			// addCloseBtn();
		}
	});

	// const addCloseBtn = () => {
	// 	// for (let i = 0; i <= document.getElementById("list").childElementCount - 1; i++){
	// 	// 	let el = document.getElementById(i);
	// 	// 	let sp = el.createElement("SPAN");
	// 	// 	console.log(el);
	// 	// 	el.className = "close";
	// 	// 	el.appendChild(sp);

	// 	// }
	// 	let myNodelist = document.getElementsByTagName("LI");
	// 	console.log(myNodelist);
	// 	for (let i = 0; i <= document.getElementById("list").childElementCount - 1; i++) {
	// 		var span = document.createElement("SPAN");
	// 		var txt = document.createTextNode("\u00D7");
	// 		span.className = "close";
	// 		span.appendChild(txt);
	// 		myNodelist[i].appendChild(span);
	// 	};
	// }

};
