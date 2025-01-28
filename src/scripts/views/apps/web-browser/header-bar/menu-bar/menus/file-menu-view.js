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
			"icon": "fa fa-file",
			"name": "New Window",
			"shortcut": "enter"
		},
		{
			"class": "open-url",
			"icon": "fa fa-folder-open",
			"name": "Open",
			"shortcut": "command-O"
		},
		"separator",
		{
			"class": "add-to-favorites",
			"icon": "fa fa-star",
			"name": "Add to Favorites",
			"shortcut": "command-="
		},
		{
			"class": "delete-favorites",
			"icon": "fa fa-trash-alt",
			"name": "Delete Favorites",
			"shortcut": "delete"
		},
		"separator",
		{
			"class": "save-url-as",
			"icon": "fa fa-save",
			"name": "Save As",
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
		'click .open-url': 'onClickOpenUrl',
		'click .add-to-favorites': 'onClickAddToFavorites',
		'click .delete-favorites': 'onClickDeleteFavorites',
		'click .save-url': 'onClickSaveUrl',
		'click .save-url-as': 'onClickSaveUrlAs',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	enabled: function() {
		return {
			'new-window': true,
			'open-url': application.isSignedIn(),
			'add-to-favorites': application.isSignedIn(),
			'delete-favorites': application.isSignedIn(),
			'save-url': false,
			'save-url-as': application.isSignedIn(),
			'close-window': true
		};
	},
	
	//
	// mouse event handling methods
	//

	onClickNewWindow: function() {
		this.parent.app.newWindow({
			url: this.parent.app.url
		});
	},

	onClickOpenUrl: function() {
		this.parent.app.showOpenUrlDialog();
	},

	onClickAddToFavorites: function() {
		this.parent.app.addToFavorites();
	},

	onClickDeleteFavorites: function() {
		if (this.parent.app.hasSelected()) {
			this.parent.app.deleteFavorites(this.parent.app.getSelected());
		}
	},

	onClickSaveUrl: function() {
		this.parent.app.saveUrl(this.parent.app.getUrl());
	},

	onClickSaveUrlAs: function() {
		this.parent.app.showSaveAsDialog(this.parent.app.getUrl());
	},

	//
	// selection event handling methods
	//

	onSelect: function() {
		this.setItemEnabled('delete-favorites');
	},

	onDeselect: function() {
		this.setItemDisabled('delete-favorites');
	}
});