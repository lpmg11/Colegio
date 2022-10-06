import { createPool } from 'mysql2/promise';

const pool = createPool(process.env.DATABASE_URL);

export default pool;