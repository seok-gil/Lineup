export async function ApiFetch({ method, url, headers, body }) {
    const LineUpUrl = 'https://api.sportist.co.kr' + url
    // console.log(method, url, body, headers)
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
            console.log(method, LineUpUrl, 'Request unsuccessful1')
            console.log('error1', resChecked)
            let data = await resChecked.json()
            console.log('error1', data)
            return (data)
        }
    }
    catch (err) {
        console.log('catch', method, LineUpUrl, err)
    }
}

export async function ApiFetchNull({method, url, headers, body}) {
  const LineUpUrl = 'https://api.sportist.co.kr' + url
  console.log(method, url, body, headers)
  try {
    let res = await fetch(LineUpUrl, {
      method: method,
      headers: headers,
      body: body,
    })
    let resChecked = res
    if (res.ok) {
      console.log('[', LineUpUrl, '] Request successful')
      return true
    } else {
      console.log(method, LineUpUrl, 'Request unsuccessful1')
      console.log('error1', resChecked)
      console.log('error1', data)
      return false
    }
  } catch (err) {
    console.log('catch', method, LineUpUrl, err)
  }
}
