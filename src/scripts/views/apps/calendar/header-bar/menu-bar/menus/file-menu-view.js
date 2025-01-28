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
			"class": "new-event",
			"icon": "fa fa-file",
			"name": "New Event",
			"shortcut": "command-E"
		},
		"separator",
		{
			"class": "open-date",
			"icon": "fa fa-folder-open",
			"name": "Open",
			"menu": [
				{
					"class": "open-prev",
					"icon": "fa fa-arrow-left",
					"name": "Prev",
					"shortcut": "left arrow"
				},
				{
					"class": "open-next",
					"icon": "fa fa-arrow-right",
					"name": "Next",
					"shortcut": "right arrow"
				},
				{
					"class": "open-up",
					"icon": "fa fa-arrow-up",
					"name": "Up",
					"shortcut": "up arrow"
				},
				{
					"class": "open-current",
					"icon": "fa fa-redo",
					"name": "Current",
					"shortcut": "down arrow"
				}
			]
		},
		"separator",
		{
			"class": "delete-event",
			"icon": "fa fa-trash-alt",
			"name": "Delete Event",
			"shortcut": "delete"
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
		'click .new-event': 'onClickNewEvent',
		'click .open-prev': 'onClickPrev',
		'click .open-next': 'onClickNext',
		'click .open-up': 'onClickUp',
		'click .open-current': 'onClickCurrent',
		'click .delete-event': 'onClickDeleteEvent',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	enabled: function() {
		let preferences = this.parent.app.preferences;
		let isSignedIn = application.isSignedIn();
		let hasSelected = this.parent.app.hasSelected();

		return {
			'new-window': true,
			'new-event': isSignedIn,
			'open-prev': true,
			'open-next': true,
			'open-up': preferences.get('view_kind') == 'day',
			'open-current': true,
			'delete-event': isSignedIn && hasSelected,
			'close-window': true
		};
	},

	//
	// mouse event handling methods
	//

	onClickNewEvent: function() {
		this.parent.app.newEvent();
	},

	onClickPrev: function() {
		this.parent.app.goto('prev');
	},

	onClickNext: function() {
		this.parent.app.goto('next');
	},

	onClickUp: function() {
		this.parent.app.goto('up');
	},

	onClickCurrent: function() {
		this.parent.app.goto('current');
	},

	onClickDeleteEvent: function() {
		this.parent.app.deleteEvents(this.parent.app.getSelectedModels());
	}
});