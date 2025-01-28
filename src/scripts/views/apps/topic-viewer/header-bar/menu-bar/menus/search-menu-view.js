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
		},
		{
			"class": "search-by-num-attachments",
			"group": "search-by",
			"icon": "fa fa-file",
			"name": "By Attachments",
			"select": true
		}
	],

	events: {
		'click .search-by > a': 'onClickSearchBy'
	},

	//
	// querying methods
	//

	selected: function() {
		let preferences = this.parent.app.preferences;
		let searchKind = preferences.get('search_kind');

		return {
			'search-by-message': searchKind == 'message',
			'search-by-date': searchKind == 'date',
			'search-by-num-likes': searchKind == 'num_likes',
			'search-by-num-comments': searchKind == 'num_comments',
			'search-by-num-attachments': searchKind == 'num_attachments'
		};
	}
});