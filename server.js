const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {client} = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getAMDProcessors = (request, response) => {
    client.query('SELECT * FROM amdprocessors;', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
      });
}
const getAMDMobos = (request, response) => {
    client.query('SELECT * FROM amdmobos;', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
      });
}
const getDDR4Rams = (request, response) => {
    client.query('SELECT * FROM ddr4rams;', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
      });
}
const getCases = (request, response) => {
    client.query('SELECT * FROM cases;', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
      });
}
const getCPUFansHeatSinks = (request, response) => {
    client.query('SELECT * FROM cpufansheatsinks;', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
      });
}
const getNvidiaGPUS = (request, response) => {
    client.query('SELECT * FROM nvidiagpus;', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
      });
}
const getHardDiskDrives = (request, response) => {
    client.query('SELECT * FROM harddiskdrives;', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
      });
}
const getNVMESSDs = (request, response) => {
    client.query('SELECT * FROM nvmessds;', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
      });
}
const getPSUS = (request, response) => {
    client.query('SELECT * FROM psus;', (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows)
      });
}


app
  .route('/amdprocessors')
  // GET endpoint
  .get(getAMDProcessors)

  app
  .route('/amdmobos')
  // GET endpoint
  .get(getAMDMobos)

  app
  .route('/ddr4rams')
  // GET endpoint
  .get(getDDR4Rams)
  app
  .route('/cases')
  // GET endpoint
  .get(getCases)
  app
  .route('/cpufansheatsinks')
  // GET endpoint
  .get(getCPUFansHeatSinks)
  app
  .route('/nvidiagpus')
  // GET endpoint
  .get(getNvidiaGPUS)
  app
  .route('/harddiskdrives')
  // GET endpoint
  .get(getHardDiskDrives)
  app
  .route('/nvmessds')
  // GET endpoint
  .get(getNVMESSDs)
  app
  .route('/psus')
  // GET endpoint
  .get(getPSUS)
// Start server
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening`)
})




