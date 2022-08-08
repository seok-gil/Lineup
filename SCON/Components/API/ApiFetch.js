export async function ApiFetch({ method, url, headers, body }) {
    const LineUpUrl = 'http://api.sportist.co.kr' + url
    try {
        let res = await fetch(LineUpUrl, {
            method: method,
            headers: headers,
            body: body
        })
        let resChecked = res
        if (res.ok) {
            console.log('[',LineUpUrl, '] Request successful')
            let data = await resChecked.json()
            return (data)
        }
        else {
            console.log(LineUpUrl, method, 'Request unsuccessful1')
            let data = await resChecked.json()
            console.log('error', data)
            return (res.status)
        }
    }
    catch (err) {
        console.log('catch', LineUpUrl, err)
    }
}
