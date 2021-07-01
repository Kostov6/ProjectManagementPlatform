const POST = async function (url, body){

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    const resData = await res.json();
}

export {POST}