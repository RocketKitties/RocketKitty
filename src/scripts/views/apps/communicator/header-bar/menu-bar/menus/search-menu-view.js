/******************************************************************************\
|                                                                              |
|                              search-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying search dropdown menus.                  |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import Topic from '../../../../../../models/topics/topic.js';
import Chat from '../../../../../../models/chats/chat.js';
import SearchMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/search-menu-view.js';

export default SearchMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "search-by-message",
			"group": "search-by",
			"icon": "fa fa-quote-left",
			"name": "By Message",
			"select": true
		},
		"separator",
		{
			"class": "search-by-date",
			"group": "search-by",
			"icon": "fa fa-calendar-alt",
			"name": "By Date",
			"select": true
		},
		"separator",
		{
			"class": "search-by-num-likes",
			"group": "search-by",
			"icon": "fa fa-thumbs-up",
			"name": "By Likes",
			"select": true
		},
		{
			"class": "search-by-num-comments",
			"group": "search-by",
			"icon": "fa fa-comment",
			"name": "By Comments",
			"select": true
		}
	],

	events: {
		'click .search-by > a': 'onClickSearchBy'
	},

	//
	// querying methods
	//

	visible: function() {
		let isTopic = this.parent.app.model instanceof Topic;
		let isChat = this.parent.app.model instanceof Chat;

		return {
			'search-by-message': isTopic || isChat,
			'search-by-date': isTopic || isChat,
			'search-by-num-links': isTopic,
			'search-by-num-comments': isTopic
		};
	},

	selected: function() {
		let preferences = this.parent.app.preferences;
		let searchKind = preferences.get('search_kind');

		return {
			'search-by-message': searchKind == 'message',
			'search-by-date': searchKind == 'date',
			'search-by-num-links': searchKind == 'num_links',
			'search-by-num-comments': searchKind == 'num_comments'
		};
	}
});