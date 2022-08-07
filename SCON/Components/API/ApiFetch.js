export async function ApiFetch({ method, url, headers, body }) {
	const LineUpUrl = `http://api.sportist.co.kr` + url
	// console.log(method, url, body)
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
			return (data)
		}
		else {
			console.log(LineUpUrl, "Request unsuccessful1", resChecked);
			resChecked = res;
			return (res.status)
		}
	}
	catch (err) {
		console.log("catch", LineUpUrl, err);
	}
}
