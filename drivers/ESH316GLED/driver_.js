'use strict';

const ZigBeeDriver = require('homey-zigbeedriver');

const tempMin = 250;
const tempMax = 454;
const maxBrightness = 255;

module.exports = new ZigBeeDriver('ESH316GLED', {
    debug: false,
    capabilities: {
        dim: {
            command_endpoint: 0,
            command_cluster: 'genLevelCtrl',
            command_set: 'moveToLevel',
            command_set_parser: (value, node) => {
                return {
                    level: value * maxBrightness,
                    transtime: node.settings['0']
                };
            },
            command_get: 'currentLevel',
            command_report_parser: (value, node) => {
                return maxBrightness/value * 100;
            }
        },
        onoff: {
            command_endpoint: 0,
            command_cluster: 'genOnOff',
            command_set: (value, node) => {
                return value?'on':'off';
            },
            command_set_parser: (value, node) => {
                return {};
            },
            command_get: 'onOff',
            command_report_parser: (value, node) => {
                return value==1;
            }
        }

    }
});