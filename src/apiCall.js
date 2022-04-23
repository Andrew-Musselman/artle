const getData = async (path) => {
    const response = await fetch(path).catch(err => console.log(err))
    const checkedResponse = await checkResponse(response)
   return  checkedResponse
}

const checkResponse = (res) => {
    if(!res.ok) {
        throw new Error('There\'s a snake in my boot')
    } else {
        return res.json()
    }
}

export default getData;