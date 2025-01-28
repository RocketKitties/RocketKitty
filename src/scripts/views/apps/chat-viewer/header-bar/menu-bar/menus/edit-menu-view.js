/******************************************************************************\
|                                                                              |
|                               edit-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying edit dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import EditMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/edit-menu-view.js';

export default EditMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "edit message",
			"group": "chat option",
			"icon": "fa fa-pencil-alt",
			"name": "Edit Message",
			"shortcut": "command-E"
		},
		{
			"class": "delete message",
			"group": "chat option",
			"icon": "fa fa-trash-alt",
			"name": "Delete Message",
			"shortcut": "delete"
		}
	],

	events: {

		// topic options
		//
		'click .edit': 'onClickEditItem',
		'click .delete': 'onClickDeleteItem'
	},

	//
	// querying methods
	//

	enabled: function() {
		let hasSelectedMessage = this.parent.app.hasSelectedMessage();

		return {
			'edit': hasSelectedMessage,
			'delete': hasSelectedMessage
		};
	},

	//
	// mouse event handling methods
	//

	onClickEditItem: function() {
		this.parent.app.editSelected();
	},

	onClickDeleteItem: function() {
		this.parent.app.deleteSelected();
	}
});