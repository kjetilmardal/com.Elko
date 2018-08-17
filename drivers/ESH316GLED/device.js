"use strict";

const Homey = require('homey');

const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

//#suggestion for code, don't own device so not sure abouit endpoint etc. So therefore the output on console from this.printNode() is essential to get needed info.

class ESH316GLED  extends ZigBeeDevice {

	onMeshInit() {
		this.enableDebug();
		this.printNode();

		if (this.hasCapability('onoff')) this.registerCapability('onoff', 'genOnOff');
		this.registerAttrReportListener('genOnOff', 'onOff', 1, 3600, 1, value => {
			this.log('onoff', value);
			this.setCapabilityValue('onoff', value === 1);
		}, 0);

		if (this.hasCapability('dim')) this.registerCapability('dim', 'genLevelCtrl');
		this.registerAttrReportListener('genLevelCtrl', 'currentLevel', 1, 3600, 1, value => {
			this.log('dim report', value);
			this.setCapabilityValue('dim', value / 254);
		}, 0);

  }
}

module.exports = ESH316GLED;

//─────────────── Logging stdout & stderr ───────────────
//2018-08-11 06:58:25 [log] [ElkoApp] Elko App is running!
//2018-08-11 06:58:25 [log] [ManagerDrivers] [ESH316GLED] [0] ZigBeeDevice has been inited
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ------------------------------------------
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] Node: f8da0f82-a366-45aa-815c-e65b83a142f8
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] - Battery: false
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] - Endpoints: 0
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] -- Clusters:
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] --- zapp
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] --- genBasic
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- cid : genBasic
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- sid : attrs
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- zclVersion : 1
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- appVersion : 0
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- hwVersion : 1
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- manufacturerName : ELKO
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- modelId : ElkoDimmerZHA
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- powerSource : 1
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- swBuildId : 0.0.19
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] --- genIdentify
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- cid : genIdentify
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- sid : attrs
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- identifyTime : 0
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] --- genOnOff
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- cid : genOnOff
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- sid : attrs
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- onOff : 1
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] --- genLevelCtrl
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- cid : genLevelCtrl
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- sid : attrs
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ---- currentLevel : 254
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] ------------------------------------------
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] registerAttrReportListener() -> already configured attr reporting attrReport_0_genOnOff_onOff
//2018-08-11 06:58:26 [log] [ManagerDrivers] [ESH316GLED] [0] registerAttrReportListener() -> already configured attr reporting attrReport_0_genLevelCtrl_currentLevel
