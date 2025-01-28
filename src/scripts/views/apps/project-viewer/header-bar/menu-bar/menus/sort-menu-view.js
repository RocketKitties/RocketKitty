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
			"class": "sort-by-title",
			"group": "sort-by",
			"icon": "fa fa-font",
			"name": "By Title",
			"select": true
		},
		{
			"class": "sort-by-priority",
			"group": "sort-by",
			"icon": "fa fa-star",
			"name": "By Priority",
			"select": true
		},
		{
			"class": "sort-by-kind",
			"group": "sort-by",
			"icon": "fa fa-bug",
			"name": "By Kind",
			"select": true
		},
		"separator",
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
				},
				{
					"class": "sort-by-due-date",
					"group": "sort-by",
					"icon": "fa fa-calendar",
					"name": "Due Date",
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

		return {
			'sort-by-title': sortKind == 'title',
			'sort-by-priority': sortKind == 'priority',
			'sort-by-kind': sortKind == 'kind',
			'sort-by-create-date': sortKind == 'create_date',
			'sort-by-modify-date': sortKind == 'modify_date',
			'sort-by-due-date': sortKind == 'due_date',
			'sort-increasing': sortOrder == 'increasing',
			'sort-decreasing': sortOrder == 'decreasing'
		};
	}
});