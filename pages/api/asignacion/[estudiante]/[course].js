import pool from "../../../../Config/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        postAsignacion(req, res);
    }
    if (req.method === "DELETE") {
        deleteAsignacion(req, res);
    }
    else {
        res.status(405).json({message: 'Method not allowed'});
    }
}

async function postAsignacion(req, res) {
    const {estudiante, course} = req.query;
    const [rows] = await pool.query('INSERT INTO StudentCourse (id_student, id_course) VALUES (?, ?)', [estudiante, course]);
    res.status(200).json(rows)
}

async function deleteAsignacion(req, res) {
    const {estudiante, course} = req.query;
    const [rows] = await pool.query('DELETE FROM StudentCourse WHERE id_student = ? AND id_course = ?', [estudiante, course]);
    res.status(200).json(rows)
}