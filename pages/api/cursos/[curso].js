import pool from "../../../Config/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        getCourse(req, res);
    }
    if (req.method === "DELETE") {
        deleteCourse(req, res);
    }
    if (req.method === "PUT") {
        putCourse(req, res);
    }
    else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

async function getCourse(req, res) {
    const { curso } = req.query;
    const [rows] = await pool.query("SELECT * FROM Course WHERE id = ?", [curso]);
    res.status(200).json(rows[0]);
}

async function deleteCourse(req, res) {
    const { curso } = req.query;
    const [rows] = await pool.query("DELETE FROM Course WHERE id = ?", [curso]);
    res.status(200).json(rows);
}

async function putCourse(req, res) {
    const { curso } = req.query;
    const { name, schedule, id_teacher } = req.body;
    const [rows] = await pool.query("UPDATE Course SET name = ?, schedule = ?, id_teacher = ? WHERE id = ?", [name, schedule, id_teacher, curso]);
    res.status(200).json(rows);
}