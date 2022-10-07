import pool from "../../../Config/db"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        return getMaestro(req, res);
    }
    else if (req.method === 'DELETE') {
        return deleteMaestro(req, res);
    }
    else if (req.method === 'PUT') {
        return putMaestro(req, res);
    }
    else {
        res.status(405).json({message: 'Method not allowed'})
    }
}

async function getMaestro(req, res) {
    const {maestro} = req.query;
    const [rows] = await pool.query('SELECT * FROM Teacher WHERE id = ?', [maestro]);
    res.status(200).json(rows[0])
}

async function deleteMaestro(req, res) {
    const {maestro} = req.query;
    const [rows] = await pool.query('DELETE FROM Teacher WHERE id = ?', [maestro]);
    res.status(200).json(rows)
}

async function putMaestro(req, res) {
    const {maestro} = req.query;
    const {name, phone, email} = req.body;
    const [rows] = await pool.query('UPDATE Teacher SET name = ?, phone = ?, email = ? WHERE id = ?', [name, phone, email, maestro]);
    res.status(200).json(rows)
}