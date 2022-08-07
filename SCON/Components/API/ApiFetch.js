export async function ApiFetch({ method, url, headers, body }) {
	var LineUpUrl = `http://api.sportist.co.kr` + url
	
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
			console.log(LineUpUrl, "Request unsuccessful1");
			resChecked = res;
			let data = await resChecked.json().then(console.log);
			return (res.status)
		}
}
