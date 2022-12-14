import pool from "../../../Config/db"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        return getTeachers(req, res);
    }
    else if (req.method === 'POST') {
        return postTeacher(req, res);
    }
    else {
        return res.status(405).json({message: 'Method not allowed'})
    }
}

async function getTeachers(req, res) {
    const [rows] = await pool.query('SELECT * FROM Teacher');
    res.status(200).json(rows)
}

async function postTeacher(req, res) {
    const {name, phone, email} = req.body;
    const [rows] = await pool.query('INSERT INTO Teacher (name, phone, email) VALUES (?, ?, ?)', [name, phone, email]);
    res.status(200).json(rows)
}
