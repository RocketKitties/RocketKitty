/******************************************************************************\
|                                                                              |
|                                   main.js                                    |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the application entry point and loading.                 |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

// load configuration files
//
Promise.all([

	// configs
	//
	fetch('config/config.json').then(response => response.json()),
	fetch('config/branding.json').then(response => response.json()),
	fetch('config/theme.json').then(response => response.json()),

	// settings
	//
	fetch('settings/settings.json').then(response => response.json())
]).then((files) => {

	// set globals
	//
	let i = 0;

	// load configs
	//
	window.config = files[i++];
	window.config.branding = files[i++];
	window.config.theme = files[i++];

	// load settings
	//
	window.config.settings = files[i++];

	// load application
	//
	import('./application.js').then((Application) => {

		// go!
		//
		$(document).ready(() => {
			window.application = new Application.default({});

			// start!
			//
			application.start();
		});
	});
});