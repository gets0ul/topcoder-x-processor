/*
 * Copyright (c) 2017 TopCoder, Inc. All rights reserved.
 */
'use strict';

/**
 * Schema for project and repository mapping.
 * @author TCSCODER
 * @version 1.0
 */
const dynamoose = require('dynamoose');

const Schema = dynamoose.Schema;

const schema = new Schema({
  id: {
    type: String,
    hashKey: true,
    required: true
  },
  title: {type: String, required: true},
  tcDirectId: {
    type: Number,
    required: true
  },
  rocketChatWebhook: {type: String, required: false},
  rocketChatChannelName: {type: String, required: false},
  archived: {type: String, required: true},
  owner: {type: String, required: true},
  secretWebhookKey: {type: String, required: true},
  copilot: {type: String, required: false},
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createCopilotPayments: {type: String, required: false},
  isConnect: {type: Boolean, required: false, default: true}
});

module.exports = schema;
