/******************************************************************************\
|                                                                              |
|                               sort-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying sort dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import SortMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/sort-menu-view.js';

export default SortMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "sort-by-name",
			"group": "sort-by",
			"icon": "fa fa-font",
			"name": "By Name",
			"select": true
		},
		"separator",
		{
			"class": "sort-by-location",
			"group": "sort-by",
			"icon": "fa fa-globe-americas",
			"name": "By Location",
			"select": true
		},
		{
			"class": "sort-by-occupation",
			"group": "sort-by",
			"icon": "fa fa-briefcase",
			"name": "By Occupation",
			"select": true
		},
		{
			"class": "sort-by-gender",
			"group": "sort-by",
			"icon": "fa fa-transgender",
			"name": "By Gender",
			"select": true
		},
		{
			"class": "sort-by-age",
			"group": "sort-by",
			"icon": "fa fa-hourglass-half",
			"name": "By Age",
			"select": true
		},
		{
			"class": "sort-by-date",
			"icon": "fa fa-calendar-alt",
			"name": "By Date",
			"select": true,
			"menu": [
				{
					"class": "sort-by-birth-date",
					"group": "sort-by",
					"icon": "fa fa-birthday-cake",
					"name": "Birth Date",
					"select": true
				},
				{
					"class": "sort-by-join-date",
					"group": "sort-by",
					"icon": "fa fa-user-circle",
					"name": "Join Date",
					"select": true
				},
				{
					"class": "sort-by-connect-date",
					"group": "sort-by",
					"icon": "fa fa-user-friends",
					"name": "Connect Date",
					"select": true
				}
			]
		},
		"separator",
		{
			"class": "sort-increasing",
			"group": "sort-order",
			"icon": "fa fa-sort-amount-up",
			"name": "Increasing",
			"select": true
		},
		{
			"class": "sort-decreasing",
			"group": "sort-order",
			"icon": "fa fa-sort-amount-down",
			"name": "Decreasing",
			"select": true
		}
	],

	//
	// querying methods
	//

	selected: function() {
		let preferences = this.parent.app.preferences;
		let sortKind = preferences.get('sort_kind');
		let sortOrder = preferences.get('sort_order');

		// set initial menu state
		//
		return {
			'sort-by-name': sortKind == 'name',
			'sort-by-location': sortKind == 'location',
			'sort-by-occupation': sortKind == 'occupation',
			'sort-by-gender': sortKind == 'gender',
			'sort-by-age': sortKind == 'age',
			'sort-by-birth-date': sortKind == 'birth_date',
			'sort-by-join-date': sortKind == 'join_date',
			'sort-by-connect-date': sortKind == 'connect_date',
			'sort-increasing': sortOrder == 'increasing',
			'sort-decreasing': sortOrder == 'decreasing'
		};
	}
});