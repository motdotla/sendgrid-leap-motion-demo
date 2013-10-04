#!/usr/bin/env node

var leapjs      = require('leapjs');
var controller  = new leapjs.Controller({enableGestures: true, frameEventName: 'deviceFrame'});
var sendgrid    = require('sendgrid')('hackmit', 'hackmit');

controller.on('ready', function() {
  console.log("Leap Device is ready.");
});

controller.on('frame', function(frame) {
  // loop through available gestures
  for(var i = 0; i < frame.gestures.length; i++){
    var gesture = frame.gestures[i];
    var type    = gesture.type;

    if (gesture.type == "circle" && gesture.state == "stop") {
      console.log("circle");
    }
  }
});

controller.connect();
