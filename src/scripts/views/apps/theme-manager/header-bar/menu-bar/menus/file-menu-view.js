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
			"class": "open-theme",
			"icon": "fa fa-folder-open",
			"name": "Open",
			"shortcut": "command-O"
		},
		"separator",
		{
			"class": "save-as",
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
		'click .open-theme': 'onClickOpenTheme',
		'click .open-my-theme': 'onClickOpenMyTheme',
		'click .save-as': 'onClickSaveAs',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// mouse event handling methods
	//

	onClickOpenTheme: function() {
		this.parent.app.openTheme({
			local: false
		});
	},

	onClickOpenMTheme: function() {
		this.parent.app.openTheme({
			local: true
		});
	},

	onClickSaveAs: function() {
		this.parent.app.saveAs();
	}
});