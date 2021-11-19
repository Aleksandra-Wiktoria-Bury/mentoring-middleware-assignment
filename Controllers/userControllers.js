const validate = (req, res)=>{
    res.status(200).json('Validate route')
}
const sanitize = (req, res)=>{
    res.status(200).json('Sanitize route')
}

module.exports = {validate, sanitize}