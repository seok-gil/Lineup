export async function ApiFetch({ method, url, headers, body }) {
	var LineUpUrl = `http://api.sportist.co.kr` + url
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
			console.log(LineUpUrl, "Request unsuccessful1");
			resChecked = res;
			let data = await resChecked.json().then(console.log);
			throw new Error(res.status);
		}
	}
	catch (err) {
		console.log(LineUpUrl, err);
	}
}
