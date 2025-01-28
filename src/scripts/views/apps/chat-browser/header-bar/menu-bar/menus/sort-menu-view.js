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
			"class": "sort-by-members",
			"group": "sort-by",
			"icon": "fa fa-users",
			"name": "By Members",
			"select": true
		},
		{
			"class": "sort-by-messages",
			"group": "sort-by",
			"icon": "fa fa-comments",
			"name": "By Messages",
			"select": true
		},
		{
			"class": "sort-by-date",
			"icon": "fa fa-calendar-alt",
			"name": "By Date",
			"select": true,
			"menu": [
				{
					"class": "sort-by-create-date",
					"group": "sort-by",
					"icon": "fa fa-magic",
					"name": "Create Date",
					"select": true
				},
				{
					"class": "sort-by-modify-date",
					"group": "sort-by",
					"icon": "fa fa-edit",
					"name": "Modify Date",
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
		let sortKind = preferences.get('sort_kind') || 'name';
		let sortOrder = preferences.get('sort_order') || 'increasing';

		// set initial menu state
		//
		return {
			'sort-by-name': sortKind == 'name',
			'sort-by-members': sortKind == 'members',
			'sort-by-create-date': sortKind == 'create_date',
			'sort-increasing': sortOrder == 'increasing',
			'sort-decreasing': sortOrder == 'decreasing'
		};
	}
});