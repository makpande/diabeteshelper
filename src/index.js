/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This sample shows how to create a Lambda function for handling Alexa Skill requests that:
 *
 * - Custom slot type: demonstrates using custom slot types to handle a finite set of known values
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Diabetes Helper what are Types of Diabetes."
 *  Alexa: "(reads back recipe for Types of Diabetes)"
 */

'use strict';

var AlexaSkill = require('./AlexaSkill'),
    recipes = require('./recipes');

var recipe;

var APP_ID = undefined; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * DiabetesHelper is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var DiabetesHelper = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
DiabetesHelper.prototype = Object.create(AlexaSkill.prototype);
DiabetesHelper.prototype.constructor = DiabetesHelper;

DiabetesHelper.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechText = "Welcome to the Diabetes Helper. You can ask a question like, what is Diabetes? ... Now, what can I help you with?";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "For instructions on what you can say, please say help me.";
    response.ask(speechText, repromptText);
};

DiabetesHelper.prototype.intentHandlers = {
    "InfoIntent": function (intent, session, response) {
        var itemSlot = intent.slots.Item,
            itemName;
        if (itemSlot && itemSlot.value){
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = "Information for " + itemName,
            speechOutput,
            repromptOutput;

        recipe = recipes[itemName];

        if (recipe) {
            speechOutput = {
                speech: recipe.info + "You can say 'next' to learn more.", //"You can say more to learn about diabetes." // next item name,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            response.tellWithCard(speechOutput, cardTitle, recipe.info);
        } else {
            var speech;
            if (itemName) {
                speech = "I'm sorry, I currently do not know about " + itemName + ". What else can I help with?";
            } else {
                speech = "I'm sorry, I currently do not know about that. What else can I help with?";
            }
            speechOutput = {
                speech: speech,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            repromptOutput = {
                speech: "What else can I help you with?",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            response.ask(speechOutput, repromptOutput);
        }
    },

    "NextIntent": function (intent,session, response) {
      // response.ask("You requested the next intent", "Reprompt text");
      var itemName = recipe.next.toLowerCase();

      var cardTitle = "Information for " + itemName,
          speechOutput,
          repromptOutput;

      recipe = recipes[itemName];

      if (recipe) {
          speechOutput = {
              speech: (recipe.info + " You can say " + recipe.next + " to learn more about diabetes." ),// next item name,
              type: AlexaSkill.speechOutputType.PLAIN_TEXT
          };
          response.tellWithCard(speechOutput, cardTitle, recipe.info);
      } else {
          var speech;
          if (itemName) {
              speech = "I'm sorry, I currently do not know about " + itemName + ". What else can I help with?";
          } else {
              speech = "I'm sorry, I currently do not know about that. What else can I help with?";
          }
          speechOutput = {
              speech: speech,
              type: AlexaSkill.speechOutputType.PLAIN_TEXT
          };
          repromptOutput = {
              speech: "What else can I help you with?",
              type: AlexaSkill.speechOutputType.PLAIN_TEXT
          };
          response.ask(speechOutput, repromptOutput);
      }
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "You can ask questions about diabetes such as, what are the symptoms, or, you can say exit... Now, what can I help you with?";
        var repromptText = "You can say things like, what are the symptoms, or you can say exit... Now, what can I help you with?";
        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    }
};

exports.handler = function (event, context) {
    var diabetesHelper = new DiabetesHelper();
    diabetesHelper.execute(event, context);
};
