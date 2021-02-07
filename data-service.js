require('dotenv').config()
const Pool = require('pg').Pool
const isProduction = process.env.NODE_ENV === 'production'
const connectionString = "postgres://jooupvbxdktbkw:73e3dd4bbb5c7d93680585e0e5c6cee0482813c4df86aa9e90d799378ca7aaad@ec2-52-205-3-3.compute-1.amazonaws.com:5432/d2pv1ef692tq8q"
// postgres://jooupvbxdktbkw:73e3dd4bbb5c7d93680585e0e5c6cee0482813c4df86aa9e90d799378ca7aaad@ec2-52-205-3-3.compute-1.amazonaws.com:5432/d2pv1ef692tq8q

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
  })
const getAMDProcessors = (request, response) => {
  pool.query('SELECT * FROM public.amdprocessors', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
    getAMDProcessors,

}