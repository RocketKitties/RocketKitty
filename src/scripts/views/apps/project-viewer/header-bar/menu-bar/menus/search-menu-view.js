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
			"class": "search-by-title",
			"group": "search-by",
			"icon": "fa fa-font",
			"name": "By Title",
			"select": true
		},
		{
			"class": "search-by-description",
			"group": "search-by",
			"icon": "fa fa-quote-left",
			"name": "By Description",
			"select": true
		},
		"separator",
		{
			"class": "search-by-create-date",
			"group": "search-by",
			"icon": "fa fa-magic",
			"name": "By Create Date",
			"select": true
		},
		{
			"class": "search-by-update-date",
			"group": "search-by",
			"icon": "fa fa-pencil-alt",
			"name": "By Update Date",
			"select": true
		},
		{
			"class": "search-by-due-date",
			"group": "search-by",
			"icon": "fa fa-calendar",
			"name": "By Due Date",
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
			'search-by-num-links': searchKind == 'num_links',
			'search-by-num-comments': searchKind == 'num_comments'
		};
	}
});