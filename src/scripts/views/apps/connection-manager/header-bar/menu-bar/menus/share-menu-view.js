/******************************************************************************\
|                                                                              |
|                               share-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying share dropdown menus.                   |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import ShareMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/share-menu-view.js';

export default ShareMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "share-message",
			"icon": "fa fa-comments",
			"name": "Message"
		},
		{
			"class": "share-gesture",
			"icon": "fa fa-hand-pointer",
			"name": "Gesture"
		}
	],
	
	events: {
		'click .share-attachments': 'onClickShareAttachments',
		'click .share-message': 'onClickShareMessage',
		'click .share-gesture': 'onClickShareGesture'
	},

	//
	// querying methods
	//

	enabled: function() {
		let hasSelected = this.parent.app.hasSelected();
		let oneSelected = this.parent.app.numSelected() == 1;
	
		return {
			'share-attachments': hasSelected,
			'share-message': oneSelected,
			'share-gesture': oneSelected
		};
	},

	//
	// getting methods
	//

	getItems: function() {
		return this.items.clone().concat(this.getFileItems());
	},

	//
	// mouse event handling methods
	//

	onClickShareAttachments: function(event) {
		let key = $(event.target).closest('a').text().trim();
		let files = config.defaults.sharing.files[key];
		let directory = application.getDirectory(files.directory);
		this.parent.app.shareWithSelected({
			model: directory
		});
	},

	onClickShareMessage: function() {
		this.parent.app.shareMessageWithSelected();
	},

	onClickShareGesture: function() {
		this.parent.app.showGestureDialog();
	}
});