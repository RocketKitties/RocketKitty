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
			"class": "search-by-address",
			"group": "search-by",
			"icon": "fa fa-home",
			"name": "By Address",
			"select": true
		},
		{
			"class": "search-by-name",
			"group": "search-by",
			"icon": "fa fa-font",
			"name": "By Place Name",
			"select": true
		},
		{
			"class": "search-by-coords",
			"group": "search-by",
			"icon": "fa fa-crosshairs",
			"name": "By Coordinates",
			"select": true
		}
	],

	events: {
		'click .search-by > a': 'onClickSearchBy'
	},

	//
	// querying methods
	//

	hidden: function() {
		return {
			'search-by-name': true
		};
	},

	selected: function() {
		let preferences = this.parent.app.preferences;
		let searchKind = preferences.get('search_kind');

		return {
			'search-by-address': searchKind == 'address',
			'search-by-name': searchKind == 'name',
			'search-by-coords': searchKind == 'coords'
		};
	}
});