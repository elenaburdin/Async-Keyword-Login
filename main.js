const login = async (username, password) => {
    if (!password || !username) throw 'Missing Credentials'
    if (password === 'blabla123') return 'Welcome!'
    throw 'Invalid Password'
}

login('testuser', 'blabla123')
    .then(msg => {
        console.log('LOGGED IN')
        console.log(msg)
    })
    .catch(err => {
        console.log('Invalid Password')
        console.log(err)
    })
