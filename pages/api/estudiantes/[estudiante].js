import pool from "../../../Config/db"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        return getStudent(req, res);
    }
    else if (req.method === 'DELETE') {
        return deleteStudent(req, res);
    }
    else if (req.method === 'PUT') {
        return putStudent(req, res);
    }
    else {
        return res.status(405).json({message: 'Method not allowed'});
    }
}

async function getStudent(req, res) {
    const {estudiante} = req.query;
    const [rows] = await pool.query('SELECT * FROM Student WHERE id = ?', [estudiante]);
    res.status(200).json(rows[0])
}

async function deleteStudent(req, res) {
    const {estudiante} = req.query;
    const [rows] = await pool.query('DELETE FROM Student WHERE id = ?', [estudiante]);
    res.status(200).json(rows)
}

async function putStudent(req, res) {
    const {estudiante} = req.query;
    const {name, phone, email} = req.body;
    const [rows] = await pool.query('UPDATE Student SET name = ?, phone = ?, email = ? WHERE id = ?', [name, phone, email, estudiante]);
    res.status(200).json(rows)
}