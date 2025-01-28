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
			"class": "new",
			"icon": "fa fa-magic",
			"name": "New",
			"menu": [
				{
					"class": "new-map",
					"icon": "fa fa-map",
					"name": "New Map",
					"shortcut": "command-M"
				},
				{
					"class": "new-folder",
					"icon": "fa fa-folder",
					"name": "New Folder",
					"shortcut": "command-enter"
				},
				{
					"class": "new-window",
					"icon": "far fa-window-maximize",
					"name": "New Window",
					"shortcut": "shift-command-enter"
				}
			]
		},
		{
			"class": "open-item",
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
			"class": "save-map",
			"icon": "fa fa-save",
			"name": "Save",
			"shortcut": "command-S"
		},
		{
			"class": "save-as",
			"icon": "fa fa-save",
			"name": "Save As",
			"shortcut": "shift-command-S"
		},
		{
			"class": "download-items",
			"icon": "fa fa-download",
			"name": "Download",
			"shortcut": "shift-command-D"
		},
		"separator",
		{
			"class": "delete-items",
			"icon": "fa fa-trash-alt",
			"name": "Delete",
			"shortcut": "command-delete"
		},
		"separator",
		{
			"class": "close-tab",
			"icon": "fa fa-xmark",
			"name": "Close Tab",
			"shortcut": "command-L"
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
		'click .new-map': 'onClickNewMap',
		'click .new-folder': 'onClickNewFolder',
		'click .new-window': 'onClickNewWindow',
		'click .open-item': 'onClickOpenItem',
		'click .show-info': 'onClickShowInfo',
		'click .save-map': 'onClickSaveMap',
		'click .save-as': 'onClickSaveAs',
		'click .download-items': 'onClickDownloadItems',
		'click .delete-items': 'onClickDeleteItems',
		'click .close-tab': 'onClickCloseTab',
		'click .close-window': 'onClickCloseWindow',
	},
	
	//
	// querying methods
	//

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let hasTabs = this.parent.app.hasTabs();
		let file = this.parent.app.getActiveModel();
		let directory = file? file.parent : undefined;
		let isSaved = file && file.isSaved();
		let hasSelectedItems = this.parent.app.hasSelectedItems();
		let isWritable = file? file.isWritableBy(application.session.user) : false;
		let isDirectoryWritable = directory? directory.isWritableBy(application.session.user) : isSignedIn;
		let hasSelected = this.parent.app.hasSelected();

		return {
			'new-window': true,
			'new-map': true,
			'new-folder': true,
			'open-item': true,
			'show-info': isSaved || hasSelected,
			'save-map': isSaved && isWritable,
			'save-as': hasTabs,
			'download-items': isSaved,
			'delete-items': hasSelectedItems === true && isDirectoryWritable,
			'close-tab': hasTabs,
			'close-window': true
		};
	},

	//
	// event handling methods
	//

	onSave: function() {
		this.setItemDisabled('save-map');
	},

	//
	// mouse event handling methods
	//

	onClickNewMap: function() {
		this.parent.app.newFile();
	},

	onClickNewFolder: function() {
		this.parent.app.newFolder();
	},

	onClickOpenItem: function() {
		this.parent.app.openSelected();
	},

	onClickShowInfo: function() {
		this.parent.app.showInfoDialog();
	},

	onClickDownloadItems: function() {
		this.parent.app.downloadSelected();
	},

	onClickDeleteItems: function() {
		this.parent.app.deleteSelectedItems();
	},

	onClickSaveMap: function() {
		this.parent.app.save();
	},

	onClickSaveAs: function() {
		this.parent.app.saveAs();
	},

	onClickCloseTab: function() {
		this.parent.app.closeActiveTab();
	}
});