'use strict';

const Homey = require('homey');

const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

class ESHSUPERTR extends ZigBeeDevice {

	onMeshInit() {
		this.enableDebug();
		this.printNode();
	
}
}
module.exports = ESHSUPERTR;

//A lot more is found in ST_Code directory, many functions is not zigbee standard

//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ZigBeeDevice has been inited
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ------------------------------------------
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] Node: f09495b9-8b75-42b2-94a5-d0218e378abf
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] - Battery: false
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] - Endpoints: 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] -- Clusters:
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] --- zapp
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] --- genBasic
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- cid : genBasic
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- sid : attrs
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- zclVersion : 1
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- manufacturerName : ELKO
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- modelId : Super TR
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- powerSource : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] --- genIdentify
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- cid : genIdentify
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- sid : attrs
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- identifyTime : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] --- hvacThermostat
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1025 : 2000
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1026 : Gang
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1027 : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1028 : 15
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1029 : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1030 : 1
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1031 :
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1032 : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1033 : -9990
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1041 : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1042 : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1043 : 1
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1044 : 28
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1045 : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1046 : R
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1047 : 20
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1048 : 9
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1049 : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- cid : hvacThermostat
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- sid : attrs
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- localTemp : 2370
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- absMinHeatSetpointLimit : 5
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- absMaxHeatSetpointLimit : 50
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- occupiedCoolingSetpoint : 2600
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- occupiedHeatingSetpoint : 1500
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- ctrlSeqeOfOper : 2
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- systemMode : 1
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ------------------------------------------