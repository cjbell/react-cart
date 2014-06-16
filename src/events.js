var merge = require("react/lib/merge");
var EventEmitter = require("events").EventEmitter;

var events = merge({}, EventEmitter.prototype);

module.exports = events;