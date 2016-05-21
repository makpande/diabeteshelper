/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
// module.exports = {
//
//   "diabetes": "Diabetes is a disease in which the body is unable to properly use and store glucose, Glucose backs up in the bloodstream, causing one’s blood glucose (sometimes referred to as blood sugar) to rise too high.",
//   "types of diabetes": "Common types of diabetes are Type one Diabetes, Type two Diabetes, Gestational Diabetes.",
//   "type one diabetes": "In type one (fomerly called juvenile-onset or insulin-dependent) diabetes, the body completely stops producing any insulin, a hormone that enables the body to use glucose found in foods for energy.",
//   "type two diabetes": "Type two (formerly called adult-onset or non insulin-dependent) diabetes results when the body doesn’t produce enough insulin and/or is unable to use insulin properly (insulin resistance). This form of diabetes usually occurs in people who are over 40, overweight, and have a family history of diabetes.",
//   "gestational diabetes": "Gestational diabetes is a condition in which women without previously diagnosed diabetes exhibit high blood glucose levels during pregnancy. It usually occurs for a temporary period and can go away after child birth.",
//   "eating habits": "You can have sweets in moderation and should make of healthy meal plans.",
//   "leading cause of death": "Type 2 Diabetes is the seventh leading cause of death in the United States.",
//   "heart disease and diabetes": "It accounts for 90% to 95% of all diagnosed cases of heart disease.",
//   "role of insulin in diabetes": "Insulin is a hormone that helps your body turn sugar into energy.",
//   "insulin resistant diabetes": "When you have type 2 diabetes, your cells don't respond to insulin like they should.",
//   "side effects of diabetes": "When it happens, sugar backs up in your blood. Your pancreas makes even more insulin to get rid of sugar, so you wind up with too much of both insulin and sugar.",
//   "facts of diabetes": "Almost a one third of people with diabetes don't know they have diabetes.",
//   "symptoms": "Heavy thirst is a common symptom, people with high blood sugar are often extremely thirsty. Other symptoms include dry mouth and being hungry (espicially after you eat).",
//   "sore symptoms": "Peeing more, fatigue, blurred vision, headaches, itching, numbness and tingling in your hands and feet, wounds heal more slowly, gain weight, frequent yeast infection, have sexual problems.",
//   "facts about beginning of diabetes": "This disease doesn't start suddenly. Some people are first diagnosed with prediabetes(also called impaired glucose tolerance or impaired fasting glucose).",
//   "diabetes control": "Lifestyle changes like weight loss, eating a healthier diet, and getting more exercise can often ward off full blown diabetes. Lifestyle changes is more important can cut your risk by 58%.",
//   "initial treatment": "Taking prescription medicine like metformin can help. Talk to your doctor about treatment.",
//   "age at risk": "For people age 60 or older their risk of diabetes is 71%.",
//   "main factor for diabetes": "Obesity is the main factor for people likely to get diabetes.",
//   "severe effects of diabetes": "Over the time, severe effects of diabetes include blindness, heart disease, nerve and blood vessel damage, kidney disease and other major health problems.",
//   "common effects on health": "Depression and gum disease are also more common for diabetes patients as per CDC.",
//   "cause of diabetes": "Causes can be genetic and lifestyle factors like physical activity, illeness, stress can affect blood glucose levels."
// };
module.exports = {
  "diabetes": {
    "next": "types of diabetes",
    "info": "Diabetes is a disease in which the body is unable to properly use and store glucose (a form of sugar). Glucose backs up in the bloodstream, causing one’s blood glucose (sometimes referred to as blood sugar) to rise too high."
  },
  "types of diabetes": {
    "next": "type 1 diabetes",
    "info": "Common types of diabetes are Type 1 Diabetes, Type 2 Diabetes, Gestational Diabetes"
  },
  "type 1 diabetes": {
    "next": "type 2 diabetes",
    "info": "In type 1 (fomerly called juvenile-onset or insulin-dependent) diabetes, the body completely stops producing any insulin, a hormone that enables the body to use glucose found in foods for energy."
  },
  "type 2 diabetes": {
    "next": "gestational diabetes",
    "info": "Type 2 (formerly called adult-onset or non insulin-dependent) diabetes results when the body doesn’t produce enough insulin and/or is unable to use insulin properly (insulin resistance). This form of diabetes usually occurs in people who are over 40, overweight, and have a family history of diabetes."
  },
  "gestational diabetes": {
    "next": "eating habits",
    "info": "Gestational diabetes is a condition in which women without previously diagnosed diabetes exhibit high blood glucose levels during pregnancy. It usually occurs for a temporary period and can go away after child birth."
  },
  "eating habits": {
    "next": "leading cause of death",
    "info": "You can have sweets in moderation and should make of healthy meal plans."
  },
  "leading cause of death": {
    "next": "heart disease and diabetes",
    "info": "Type 2 Diabetes is the seventh leading cause of death in the United States."
  },
  "heart disease and diabetes": {
    "next": "role of insulin in diabetes",
    "info": "It accounts for 90% to 95% of all diagnosed cases of heart disease."
  },
  "role of insulin in diabetes": {
    "next": "insulin resistant diabetes",
    "info": "Insulin is a hormone that helps your body turn sugar into energy."
  },
  "insulin resistant diabetes": {
    "next": "side effects of diabetes",
    "info": "When you have type 2 diabetes, your cells don't respond to insulin like they should."
  },
  "side effects of diabetes": {
    "next": "facts of diabetes",
    "info":"When it happens, sugar backs up in your blood. Your pancreas makes even more insulin to get rid of sugar, so you wind up with too much of both insulin and sugar.",
  },
  "facts of diabetes": {
    "next": "symptoms",
    "info": "Almost a one third of people with diabetes don't know they have diabetes."
  },
  "symptoms": {
    "next": "more symptoms",
    "info": "Heavy thirst is a common symptom, people with high blood sugar are often extremely thirsty.Other symptoms include dry mouth and being hungry (espicially after you eat).",
  },
  "more symptoms": {
    "next": "facts about beginning of diabetes",
    "info": "Peeing more, fatigue, blurred vision, headaches, itching, numbness and tingling in your hands and feet, wounds heal more slowly, gain weight, frequent yeast infection, have sexual problems.",
  },
  "facts about beginning of diabetes": {
    "next": "diabetes control",
    "info": "This disease doesn't start suddenly. Some people are first diagnosed with prediabetes(also called impaired glucose tolerance or impaired fasting glucose).",
  },
  "diabetes control": {
    "next": "initial treatment",
    "info": "Lifestyle changes like weight loss, eating a healthier diet, and getting more exercise can often ward off full blown diabetes. Lifestyle changes is more important can cut your risk by 58%.",
  },
  "initial treatment": {
    "next": "age at risk",
    "info": "Taking prescription medicine like metformin can help. Talk to your doctor about treatment.",
  },
  "age at risk": {
    "next": "main factor for diabetes",
    "info": "For people age 60 or older their risk of diabetes is 71%."
  },
  "main factor for diabetes": {
    "next": "severe effects of diabetes",
    "info": "Obesity is the main factor for people likely to get diabetes."
  },
  "severe effects of diabetes": {
    "next": "common effects on health",
    "info": "Over the time, severe effects of diabetes include blindness, heart disease, nerve and blood vessel damage, kidney disease and other major health problems.",
  },
  "common effects on health": {
    "next": "cause of diabetes",
    "info": "Depression and gum disease are also more common for diabetes patients as per CDC."
  },
  "cause of diabetes": {
    "next": "effects of type one diabetes",
    "info": "Causes can be genetic and lifestyle factors like physical activity, illeness, stress can affect blood glucose levels."
  },
  "effects of type 1 diabetes": {
    "next": "type 1 diabetes treatment",
    "info": "Type one diabetes by an auto immune response that kills the body's own insulin producing cells."
  },
  "type 1 diabetes treatment": {
    "next": "reduce risk of Diabetes",
    "info": "Treatment of type one diabetes is by taking insulin daily by injection or insulin pump."
  },
  "reduce risk of diabetes": {
    "next": "diagnostic test",
    "info": "You can reduce the risk of diabetes by eating healthy meals and snacks and doing regular physical activity and regular monitoring of blood glucose levels. Execise or be physically active every day of the week for 30 minutes, check feet every six months."
  },
  "diagnostic test": {
    "next": "more diagnostic test",
    "info": "Blood test before meals targeted blood glucose level between 70 to 110 mg/dl and 2 hours after meals up to 140 mg/dl."
  },
  "more diagnostic test": {
    "next": "diabetes",
    "info": "A1C also know as average blood glucose level of 120 days should have targeted level below 7."
  }
};
