window.onload = function () {
    let path = 'flamincome'
    try {
        let str = window.location.hash.substr(1)
        if (str.length > 0) {
            path = str
        }
    } finally {
        fetch(path).then(resp => {
            resp.text().then(text => {
                document.getElementById('code').innerText = text
            })
        })
    }
}
