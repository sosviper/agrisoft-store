var Activity = require('./activity')
const dbactivities = require('./dbactivities');

// Requerido en todos
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
var router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)

// Ruta para todas las actividades
router.route('/activities').get((request, response) => {

  dbactivities.getActivities()
    .then(result => {
      response.json(result[0])
    })

})

// Ruta para todas las actividades por id
router.route('/activities/:id').get((request, response) => {

  dbactivities.getActivityById(request.params.id)
    .then(result => {
      response.json(result[0])
    })

})

// Ruta para guardar una actividad segun clase activity
router.route('/activity/guardar').post((request, response) => {

  let activity = {...request.body}

  // console.log(activity);

  dbactivities.insertActivity(activity).then(result => {
      response.json(result[0]);
    })

})

var port = process.env.PORT || 8090
app.listen(port)
console.log('Activities API Iniciando el puerto: ' + port);