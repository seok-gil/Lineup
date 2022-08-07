export async function ApiFetch({ method, url, headers, body }) {
	const LineUpUrl = `http://api.sportist.co.kr` + url
	console.log(method, url, body)
	try {
		let res = await fetch(LineUpUrl, {
			method: method,
			headers: headers,
			body: body
		})
		let resChecked = res
		if (res.ok) {
			console.log("[",LineUpUrl, "] Request successful");
			resChecked = res;
			let data = await resChecked.json();
			// console.log(res)
			// console.log(data)
			return (data)
		}
		else {
			console.log(LineUpUrl, "Request unsuccessful1", resChecked);
			resChecked = res;
			// let data = await resChecked.json().then(console.log);
			return (res.status)
		}
	}
	catch (err) {
		console.log("catch", LineUpUrl, err);
	}
}
