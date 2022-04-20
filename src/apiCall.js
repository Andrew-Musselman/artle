const getData = (path) => {
    fetch(path)
    .then(response => checkResponse(response))
    .catch(err => console.log(err))
}

const checkResponse = (res) => {
    if(!res.ok) {
        throw new Error('There\'s a snake in my boot')
    } else {
        return res.json()
    }
}

export default getData;