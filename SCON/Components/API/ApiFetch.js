async function ApiFetch({ method, url, headers, body }) {
	try {
		let res = await fetch(url, {
			method: method,
			headers: headers,
			body: body
		})
		let resChecked = res
		console.log(res)
		if (res.ok) {
			// console.log("Request successful");
			resChecked = res;
			let data = await resChecked.json();
			console.log(data)
			return (data)
		}
		else {
			console.log("Request unsuccessful1");
		}
	}
	catch (err) {
		console.log(err);
	}
}

async function ApiFetchOne({ method, url, headers, body }) {
	try {
		let res = await fetch(url, {
			method: method,
			headers: headers,
			body: body
		})
		let resChecked
		if (res.ok) {
			// console.log("Request successful");
			resChecked = res;
			let data = await resChecked.json();
			// console.log("APIONE", data)
			// console.log("success", url)
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

async function ApiFetchArr({ method, url, headers, body }) {
	try {
		let res = await fetch(url, {
			method: method,
			headers: headers,
			body: body
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



/*





import { ApiFetch } from '../../Components/API/ApiFetch';

export function HomeScreen({ navigation }) {
	const [data, setData] = useState();

	useEffect(() => {
		ApiFetch({
			method: 'GET',
			url: 'http://localhost:1337/api/homes',
			headers: { Authorization: 'token' },
			body: null,
		}).then(thing => {
			setData(thing);
		});
	}, []);



	-----------------------


import { ApiFetchOne } from '../../../Components/API/ApiFetch';
import { SafeAreaView, View, Text } from 'react-native';


export function AdminNotiListScreen({ navigation }) {
	const [data, setData] = useState([]);
	const [lastFeed, setLastFeed] = useState(1)
	const [nextFeed, setNextFeed] = useState(10)
	var temp = data

	async function getApi() {
		for (var i = lastFeed; i < nextFeed; ++i) {
			await ApiFetchOne({
				method: 'GET',
				url: `http://localhost:1337/api/notices/${i}`,
				headers: { "Authorization": "token" },
				body: null
			})
				.then((thing => {
					temp.push(thing)
				}))
		}
	}
	useEffect(() => {
		getApi().then(() => {
			setLastFeed(nextFeed)
			setData(temp)
		})
	}, [])

	*/


