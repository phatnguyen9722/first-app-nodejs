import pool from "../configs/connectDB"

let getHomepage = async (req, res) => {
    
    const [rows, fields] = await pool.query('SELECT * FROM `Persons`')
    return res.render('index.ejs', { users : rows }) 
}

module.exports = {
    getHomepage
}