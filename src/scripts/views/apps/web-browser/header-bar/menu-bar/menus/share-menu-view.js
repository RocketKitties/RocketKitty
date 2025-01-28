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
			"class": "share-by-topic",
			"icon": "fa fa-newspaper",
			"name": "By Discussion Topic"
		},
		{
			"class": "share-by-message",
			"icon": "fa fa-comments",
			"name": "By Chat Messsage"
		},
		"separator",
		{
			"class": "share-by-link",
			"icon": "fa fa-link",
			"name": "By Link"
		},
		{
			"class": "share-by-email",
			"icon": "fa fa-envelope",
			"name": "By Email"
		}
	],
	
	events: {

		// share with connections
		//
		'click .share-by-message': 'onClickShareByMessage',

		// share with anyone
		//
		'click .share-by-link': 'onClickShareByLink',
		'click .share-by-email': 'onClickShareByEmail',

		// share with everyone
		//
		'click .share-by-topic': 'onClickShareByTopic'
	},

	//
	// mouse event handling methods
	//

	onClickShareByMessage: function() {
		this.parent.app.shareByMessage();
	},

	onClickShareByLink: function() {
		this.parent.app.shareByLink();
	},

	onClickShareByEmail: function() {
		this.parent.app.shareByEmail();
	},

	onClickShareByTopic: function() {
		this.parent.app.shareByTopic();
	}
});