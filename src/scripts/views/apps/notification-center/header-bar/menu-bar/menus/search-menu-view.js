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
		{
			"class": "search-by-kind",
			"group": "search-by",
			"icon": "fa fa-exclamation-triangle",
			"name": "By Kind",
			"select": true
		},
		{
			"class": "search-by-date",
			"group": "search-by",
			"icon": "fa fa-calendar-alt",
			"name": "Date",
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
			'search-by-name': searchKind == 'name',
			'search-by-kind': searchKind == 'kind',
			'search-by-date': searchKind == 'date'
		};
	}
});