import pool from "../../Config/db"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const [rows] = await pool.query('SELECT NOW()')
  console.log(rows[0]['NOW()'])
  res.status(200).json(rows)
}
