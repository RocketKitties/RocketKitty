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
			"class": "new-connection",
			"icon": "fa fa-plus",
			"name": "New Connection",
			"shortcut": "shift-command-N"
		},
		{
			"class": "open-connection",
			"icon": "fa fa-folder-open",
			"name": "Open",
			"shortcut": "command-O"
		},
		"separator",
		{
			"class": "add-group",
			"icon": "fa fa-user-plus",
			"name": "Add Group",
			"shortcut": "command-G"
		},
		{
			"class": "delete-groups",
			"icon": "fa fa-user-times",
			"name": "Delete Groups",
			"shortcut": "delete"
		},

		{
			"class": "show-info",
			"icon": "fa fa-info-circle",
			"name": "Show Info",
			"shortcut": "command-I"
		},
		{
			"class": "show-on-map",
			"icon": "fa fa-map",
			"name": "Show on Map",
			"shortcut": "command-M"
		},
		"separator",
		{
			"class": "delete-connections",
			"icon": "fa fa-trash-alt",
			"name": "Delete Connections",
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
		'click .new-connection': 'onClickNewConnection',
		'click .open-connection': 'onClickOpenConnection',
		'click .add-group': 'onClickAddGroup',
		'click .delete-groups': 'onClickDeleteGroups',
		'click .show-info': 'onClickShowInfo',
		'click .show-on-map': 'onClickShowOnMap',
		'click .delete-connections': 'onClickDeleteConnections',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let hasSelectedMember = this.parent.app.hasSelectedMember();
		let hasSelectedGroup = this.parent.app.hasSelectedGroup() == true;
		let numSelected = this.parent.app.numSelected();
		let oneSelected = numSelected == 1;
		let hasSelectedGeolocated = this.parent.app.hasSelectedGeolocated() == true;	

		return {
			'new-window': true,
			'new-connection': isSignedIn,
			'open-connection': isSignedIn && oneSelected,
			'add-group': isSignedIn,
			'delete-groups': isSignedIn && hasSelectedGroup && !hasSelectedMember,
			'show-info': hasSelectedMember,
			'show-on-map': hasSelectedGeolocated,
			'delete-connections': hasSelectedMember,
			'close-window': true
		};
	},

	//
	// mouse event handling methods
	//

	onClickNewConnection: function() {
		this.parent.app.showFindConnectionsDialog();
	},

	onClickOpenConnection: function() {
		this.parent.app.openConnection(this.parent.app.getSelectedModel());
	},

	onClickAddGroup: function() {
		this.parent.app.showNewGroupDialog();
	},

	onClickDeleteGroups: function() {
		this.parent.app.deleteGroups(this.parent.app.getSelectedGroups());
	},

	onClickShowInfo: function() {
		this.parent.app.showInfoDialog();
	},

	onClickShowOnMap: function() {
		this.parent.app.showSelectedGeolocatedModels();
	},

	onClickDeleteConnections: function() {
		this.parent.app.deleteSelectedConnections();
	},
});