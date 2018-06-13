// Get dependencies
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const port = 4300;

// Start server
app.listen(port, function(req, res) {
  console.log('Server is running at port: ', port);
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded());

app.post('/send-email', function(req, res) {
  // The request will contain the content of your form (or whatever else you want to pass in to the http post)
  console.log(req.body);

  // Create a transporter that will carry your message, insert valid email credentials for x's
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'xxxxxxx@gmail.com',
      pass: 'xxxxxxx',
    },
  });

  // Create your message
  let message = {
    from: '"Sender Name", mailer@nodemailer.com',
    to: 'xxxxxxx@gmail.com',
    subject: 'New Message From: ' + req.body.name,
    // You can choose to not format with "text" or format the message with "HTML". Only use one
    text:
      'Name: ' +
      req.body.name +
      '\nEmail: ' +
      req.body.email +
      '\nPhone: ' +
      req.body.phone +
      '\n    ' +
      req.body.message,
    html:
      '<h4> Name: </h4>' +
      req.body.name +
      '<h4>Email: </h4>' +
      req.body.email +
      '<h4>Phone: </h4>' +
      req.body.phone +
      '<p>    ' +
      req.body.message +
      '</p>',
  };

  // Use the transporter to send the message. You can also add error and confirmation checking using the response. See nodemailer docs.
  transporter.sendMail(message);
});
