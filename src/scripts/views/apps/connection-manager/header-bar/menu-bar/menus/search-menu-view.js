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
			"name": "By Name",
			"select": true
		},
		"separator",
		{
			"class": "search-by-location",
			"group": "search-by",
			"icon": "fa fa-globe-americas",
			"name": "By Location",
			"select": true
		},
		{
			"class": "search-by-occupation",
			"group": "search-by",
			"icon": "fa fa-briefcase",
			"name": "By Occupation",
			"select": true
		},
		{
			"class": "search-by-gender",
			"group": "search-by",
			"icon": "fa fa-transgender",
			"name": "By Gender",
			"select": true
		},
		{
			"class": "search-by-age",
			"group": "search-by",
			"icon": "fa fa-hourglass-half",
			"name": "By Age",
			"select": true
		},
		{
			"class": "search-by-date",
			"icon": "fa fa-calendar-alt",
			"name": "By Date",
			"select": true,
			"menu": [
				{
					"class": "search-by-birth-date",
					"group": "search-by",
					"icon": "fa fa-birthday-cake",
					"name": "Birth Date",
					"select": true
				},
				{
					"class": "search-by-join-date",
					"group": "search-by",
					"icon": "fa fa-user-circle",
					"name": "Join Date",
					"select": true
				},
				{
					"class": "search-by-connect-date",
					"group": "search-by",
					"icon": "fa fa-user-friends",
					"name": "Connect Date",
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

		// set initial menu state
		//
		return {
			'search-by-name': searchKind == 'name',
			'search-by-location': searchKind == 'location',
			'search-by-occupation': searchKind == 'occupation',
			'search-by-age': searchKind == 'age',
			'search-by-gender': searchKind == 'gender',
			'search-by-birth-date': searchKind == 'birth-date',
			'search-by-join-date': searchKind == 'join-date',
			'search-by-connect-date': searchKind == 'connect-date'
		};
	}
});