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
			"class": "new-topic",
			"icon": "fa fa-plus",
			"name": "New Topic",
			"shortcut": "shift-command-enter"
		},
		{
			"class": "open-topics",
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
		'click .new-topic': 'onClickNewTopic',
		'click .open-topics': 'onClickOpenTopics',
		'click .show-info': 'onClickShowInfo',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let hasSelected = this.parent.app.hasSelected();

		return {
			'new-window': true,
			'new-topic': isSignedIn,
			'open-topics': isSignedIn && hasSelected,
			'show-info': isSignedIn && hasSelected,
			'close-window': true
		};
	},

	//
	// mouse event handling methods
	//

	onClickNewTopic: function() {
		this.parent.app.showNewTopicDialog();
	},

	onClickOpenTopics: function() {
		this.parent.app.openSelected();
	},

	onClickShowInfo: function() {
		this.parent.app.showInfoDialog();
	}
});