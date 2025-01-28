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
			"class": "search-by-name",
			"group": "search-by",
			"icon": "fa fa-font",
			"name": "Name",
			"select": true
		},
		"separator",
		{
			"class": "search-by-date",
			"icon": "fa fa-calendar-alt",
			"name": "Date",
			"select": true,
			"menu": [
				{
					"class": "search-by-create-date",
					"group": "search-by",
					"icon": "fa fa-magic",
					"name": "Create Date",
					"select": true
				},
				{
					"class": "search-by-modify-date",
					"group": "search-by",
					"icon": "fa fa-edit",
					"name": "Modify Date",
					"select": true
				},
				{
					"class": "search-by-access-date",
					"group": "search-by",
					"icon": "fa fa-eye",
					"name": "Access Date",
					"select": true
				}
			]
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
			'search-by-name': searchKind == 'name',
			'search-by-create-date': searchKind == 'create_date',
			'search-by-modify-date': searchKind == 'modify_date',
			'search-by-access-date': searchKind == 'access_date'
		};
	}
});