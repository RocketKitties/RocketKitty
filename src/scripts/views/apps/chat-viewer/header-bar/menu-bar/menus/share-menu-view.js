/******************************************************************************\
|                                                                              |
|                              share-menu-view.js                              |
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

import ShareMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/share-menu-view.js';

export default ShareMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "share-chat",
			"icon": "fa fa-comments",
			"name": "Chat"
		},
		{
			"class": "share-location",
			"icon": "fa fa fa-map-marker-alt",
			"name": "Location"
		}
	],

	events: {

		// share chat
		//
		'click .share-chat': 'onClickShareChat',
		'click .share-location': 'onClickShareLocation',

		// share items
		//
		'click .share-attachments': 'onClickShareAttachments'
	},

	//
	// querying methods
	//

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let hasChat = this.parent.app.collection.length > 0;

		return {
			'share-chat': isSignedIn && hasChat
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

	onClickShareChat: function() {
		this.parent.app.showChatInvitationsDialog(this.parent.app.getActiveModel());
	},

	onClickShareAttachments: function(event) {
		let key = $(event.target).closest('a').text().trim();
		let files = config.defaults.sharing.files[key];
		let directory = application.getDirectory(files.directory);
		this.parent.app.shareItemsWithChat(directory);
	},

	onClickShareLocation: function() {
		this.parent.app.shareLocationWithChat();
	}
});