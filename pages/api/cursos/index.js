import pool from "../../../Config/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return getCourses(req, res);
  }
  else if (req.method === "POST") {
    return postCourse(req, res);
  }
  else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

async function getCourses(req, res) {
    const [rows] = await pool.query("SELECT * FROM Course");
    res.status(200).json(rows);
}

async function postCourse(req, res) {
    const { name, schedule, id_teacher } = req.body;
    const created_at = new Date();
    const [rows] = await pool.query("INSERT INTO Course (name, schedule, id_teacher, created_at) VALUES (?, ?, ?, ?)", [name, schedule, id_teacher, created_at]);
    res.status(200).json(rows);
}