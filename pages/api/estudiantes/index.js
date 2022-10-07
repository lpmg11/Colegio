import pool from "../../../Config/db"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const [rows] = await pool.query('SELECT * FROM Student');
        res.status(200).json(rows)
    }
    if (req.method === 'POST') {
        postStudent(req, res);
    }
    else {
        res.status(405).json({message: 'Method not allowed'});
    }
}

async function postStudent(req, res) {
  const {name, phone, email} = req.body;
  const [rows] = await pool.query('INSERT INTO Student (name, phone, email) VALUES (?, ?, ?)', [name, phone, email]);
  res.status(200).json(rows)
}
