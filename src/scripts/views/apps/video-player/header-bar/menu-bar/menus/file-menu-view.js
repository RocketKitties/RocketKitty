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
			"class": "open-file",
			"icon": "fa fa-folder-open",
			"name": "Open",
			"shortcut": "command-O"
		},
		{
			"class": "open-clip",
			"icon": "fa fa-file-video",
			"name": "Open Clip",
			"menu": [
				{
					"class": "open-first",
					"icon": "fa fa-fast-backward",
					"name": "First",
					"shortcut": "up arrow"
				},
				{
					"class": "open-prev",
					"icon": "fa fa-backward",
					"name": "Prev",
					"shortcut": "left arrow"
				},
				{
					"class": "open-next",
					"icon": "fa fa-forward",
					"name": "Next",
					"shortcut": "right arrow"
				},
				{
					"class": "open-last",
					"icon": "fa fa-fast-forward",
					"name": "Last",
					"shortcut": "down arrow"
				}
			]
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
			"class": "download-file",
			"icon": "fa fa-download",
			"name": "Download",
			"shortcut": "shift-command-D"
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
		'click .open-file': 'onClickOpenFile',
		'click .open-first': 'onClickOpenFirst',
		'click .open-prev': 'onClickOpenPrev',
		'click .open-next': 'onClickOpenNext',
		'click .open-last': 'onClickOpenLast',
		'click .show-info': 'onClickShowInfo',
		'click .download-file': 'onClickDownloadFile',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	enabled: function() {
		let isOpen = this.parent.app.model != undefined;
		let isMultiple = this.parent.app.collection.length > 1;

		return {
			'new-window': true,
			'open-file': true,
			'open-clip': isMultiple,
			'open-first': isMultiple,
			'open-prev': isMultiple,
			'open-next': isMultiple,
			'open-last': isMultiple,
			'show-info': isOpen,
			'download-file': isOpen,
			'close-window': true
		};
	},
	
	//
	// mouse event handling methods
	//

	onClickOpenFile: function() {
		this.parent.app.showOpenDialog();
	},

	onClickOpenFirst: function() {
		this.parent.app.setClipNumber(this.parent.app.getClipNumber('first'));
	},

	onClickOpenPrev: function() {
		this.parent.app.setClipNumber(this.parent.app.getClipNumber('prev', {
			wraparound: true
		}));
	},

	onClickOpenNext: function() {
		this.parent.app.setClipNumber(this.parent.app.getClipNumber('next', {
			wraparound: true
		}));
	},

	onClickOpenLast: function() {
		this.parent.app.setClipNumber(this.parent.app.getClipNumber('last'));
	},

	onClickShowInfo: function() {
		this.parent.app.showInfoDialog();
	},
	
	onClickDownloadFile: function() {
		this.parent.app.downloadFile();
	}
});