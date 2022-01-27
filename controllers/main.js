
// Check Username, passsword in post(login) request
// If exists, create new JWT
// Send JWT to front-end

// Setup authentication so only  the request with JWT can access  the dashboard



const login = async (req, res) => {
    res.send('Fake Login/Register Signup Route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello John Doe`, secret: `Here is oyur authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {login, dashboard};