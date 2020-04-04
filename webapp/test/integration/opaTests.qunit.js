/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"GitHub_test/GitHub_Collaborate/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});