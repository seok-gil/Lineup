async function ApiFetch({method, url, headers, body}) {
	try {
		let res = await fetch(url , {
			method: method,
			headers: headers,
			body : body
		})
		let resChecked
		if (res.ok) {
			// console.log("Request successful");
			resChecked = res;
			let data = await resChecked.json();
			return (data.data[0].attributes.data)
		}
		else {
			console.log("Request unsuccessful1");
		}
	}
	catch (err) {
		console.log(err);
	}
}

async function ApiFetchOne({method, url, headers, body}) {
	try {
		let res = await fetch(url , {
			method: method,
			headers: headers,
			body : body
		})
		let resChecked
		if (res.ok) {
			// console.log("Request successful");
			resChecked = res;
			let data = await resChecked.json();
			// console.log("APIONE", data)
			return (data.data.attributes.data)
		}
		else {
			console.log(url)
			console.log("Request unsuccessful2");
		}
	}
	catch (err) {
		console.log(err);
	}
}

async function ApiFetchArr({method, url, headers, body}) {
	try {
		let res = await fetch(url , {
			method: method,
			headers: headers,
			body : body
		})
		let resChecked
		if (res.ok) {
			// console.log("Request successful");
			resChecked = res;
			let data = await resChecked.json();
			return (data.data.attributes.data)
		}
		else {
			console.log("Request unsuccessful3");
		}
	}
	catch (err) {
		console.log(err);
	}
}
/*
///////////////////////////////////////////////////////GET
fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then((response) => response.json())
	.then((data) => console.log(data))
///////////////////////////////////////////////////////POST
fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		title: "Test",
		body: "I am testing!",
		userId: 1,
	}),
})
	.then((response) => response.json())
	.then((data) => console.log(data))
///////////////////////////////////////////////////////PUT
fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "PUT",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		title: "Test",
		body: "I am testing!",
		userId: 1,
	}),
})
	.then((response) => response.json())
	.then((data) => console.log(data))
///////////////////////////////////////////////////////DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "DELETE",
})
	.then((response) => response.json())
	.then((data) => console.log(data))
*/

export { ApiFetch, ApiFetchOne, ApiFetchArr }
