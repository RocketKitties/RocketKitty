/******************************************************************************\
|                                                                              |
|                               file-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying file dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import FileMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/file-menu-view.js';

export default FileMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "new-window",
			"icon": "far fa-window-maximize",
			"name": "New Window",
			"shortcut": "command-enter"
		},
		{
			"class": "open-profile",
			"icon": "fa fa-folder-open",
			"name": "Open",
			"shortcut": "command-O"
		},
		"separator",
		{
			"class": "show-info",
			"icon": "fa fa-info-circle",
			"name": "Show Info",
			"shortcut": "command-I"
		},
		{
			"class": "export-as",
			"icon": "fa fa-save",
			"name": "Export As",
			"shortcut": "command-S"
		},
		"separator",
		{
			"class": "close-window",
			"icon": "fa fa-circle-xmark",
			"name": "Close",
			"shortcut": "command-L"
		}
	],

	events: {
		'click .new-window': 'onClickNewWindow',
		'click .open-profile': 'onClickOpenProfile',
		'click .show-info': 'onClickShowInfo',
		'click .export-as': 'onClickExportAs',
		'click .close-profile': 'onClickCloseProfile',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let isCurrentUser = this.parent.app.model.isCurrent();

		return {
			'new-window': true,
			'open-profile': isSignedIn,
			'show-info': !isCurrentUser,
			'export-as': isSignedIn,
			'close-profile': true,
			'close-window': true
		};
	},

	//
	// mouse event handling methods
	//

	onClickOpenProfile: function() {
		this.parent.app.showOpenConnectionsDialog();
	},

	onClickShowInfo: function() {
		this.parent.app.showInfoDialog();
	},

	onClickExportAs: function() {
		this.parent.app.exportAs();
	},
	
	onClickCloseProfile: function() {
		this.parent.app.close();
	}
});