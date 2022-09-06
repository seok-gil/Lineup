export async function ApiFetch({method, url, headers, body }) {
    const LineUpUrl = 'https://api.sportist.co.kr' + url
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
            if (res.status == 401) {
                return (res.status)
            }
            let data = await resChecked.json()
            return (data)
        }
    }
    catch (err) {
        console.log('catch', method, LineUpUrl, err)
    }
}
