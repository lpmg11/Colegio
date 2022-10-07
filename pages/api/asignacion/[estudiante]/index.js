import pool from "../../../../Config/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        getAsignacion(req, res);
    }
    else {
        res.status(405).json({message: 'Method not allowed'});
    }
}

async function getAsignacion(req, res) {
    const {estudiante} = req.query;
    console.log(estudiante);
    const [rows] = await pool.query('SELECT * FROM StudentCourse WHERE id_student = ?', [estudiante]);
    res.status(200).json(rows[0])
}
