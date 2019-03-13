const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const SMSManager = require('./sms-manager.js');
const bodyParser = require('body-parser');
const ngrokurl = 'https://react-app-techsee.herokuapp.com/'; //https only to open up the camera
const app = express();
const PORT = process.env.PORT | 1337;


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/sendsms', (req, res) => {
  const twiml = new MessagingResponse();
  let cameraUrl = ngrokurl+'camera/';
  let smsmessage = 'Hi there, click here to open up the camera \n\r' +  cameraUrl;
  twiml.message(smsmessage);
  let sms = new SMSManager(req.body.phonenumber,req.body.prefix,smsmessage);
 // sms.SendSMS();

  res.writeHead(200, {'Content-Type': 'application/x-www-form-urlencoded'});
  res.end(twiml.toString());
});

http.createServer(app).listen(PORT, () => {
  console.log('Express server listening on port '+ PORT);
});
