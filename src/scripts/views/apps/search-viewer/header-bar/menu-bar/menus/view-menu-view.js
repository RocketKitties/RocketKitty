/******************************************************************************\
|                                                                              |
|                               view-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying file dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import ViewMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/view-menu-view.js';

export default ViewMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "view-icons",
			"group": "view-kind",
			"icon": "fa fa-th",
			"name": "Icons",
			"select": true
		},
		{
			"class": "view-lists",
			"group": "view-kind",
			"icon": "fa fa-list",
			"name": "Lists",
			"select": true
		},
		{
			"class": "view-cards",
			"group": "view-kind",
			"icon": "fa fa-id-card",
			"name": "Cards",
			"select": true
		},
		{
			"class": "view-tiles",
			"group": "view-kind",
			"icon": "fa fa-th-large",
			"name": "Tiles",
			"select": true
		},
		"separator",
		{
			"class": "show-toolbars",
			"icon": "fa fa-wrench",
			"name": "Toolbars",
			"select": true,
			"menu": [
				{
					"class": "show-nav-bar",
					"group": "show-toolbar",
					"icon": "fa fa-sitemap",
					"name": "Nav",
					"select": true
				}
			]
		},
		{
			"class": "view-details",
			"icon": "fa fa-tags",
			"name": "Details",
			"select": true,
			"menu": [
				{
					"class": "view-size",
					"icon": "fa fa-download",
					"name": "Size",
					"select": true
				},
				{
					"class": "view-date",
					"icon": "fa fa-calendar-alt",
					"name": "Date",
					"select": true,
					"menu": [
						{
							"class": "view-create-date",
							"icon": "fa fa-magic",
							"name": "Create Date",
							"select": true
						},
						{
							"class": "view-modify-date",
							"icon": "fa fa-edit",
							"name": "Modify Date",
							"select": true
						},
						{
							"class": "view-access-date",
							"icon": "fa fa-eye",
							"name": "Access Date",
							"select": true
						},
						"separator",
						{
							"class": "view-date-only",
							"icon": "fa fa-calendar-alt",
							"name": "Date Only",
							"select": true
						},
						{
							"class": "view-day-date",
							"icon": "fa fa-calendar-plus",
							"name": "Day, Date",
							"select": true
						},
						{
							"class": "view-time-only",
							"icon": "fa fa-clock",
							"name": "Time Only",
							"select": true
						},
						{
							"class": "view-date-time",
							"icon": "fa fa-calendar-check",
							"name": "Date, Time",
							"select": true
						},
						{
							"class": "view-day-date-time",
							"icon": "fa fa-calendar-alt",
							"name": "Day, Date, Time",
							"select": true
						}
					]
				}
			]
		},
		{
			"class": "show-sidebar",
			"icon": "fa fa-pause",
			"name": "Sidebar",
			"select": true,
			"menu": [
				{
					"class": "show-params-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-sliders",
					"name": "Parameters",
					"select": true
				}
			]
		},
		"separator",
		{
			"class": "window-size",
			"icon": "far fa-window-maximize",
			"name": "Window Size",
			"menu": [
				{
					"class": "shrink-window",
					"icon": "fa fa-minus",
					"name": "Shrink",
					"shortcut": "command-["
				},
				{
					"class": "grow-window",
					"icon": "fa fa-plus",
					"name": "Grow",
					"shortcut": "command-]"
				},
				{
					"class": "expand-window",
					"icon": "fa fa-expand",
					"name": "Expand",
					"shortcut": "command-\\"
				}
			]
		},
		"separator",
		{
			"class": "spaces",
			"icon": "far fa-window-maximize",
			"name": "Spaces",
			"select": true,
			"menu": [
				{
					"class": "prev-space",
					"icon": "fa fa-chevron-left",
					"name": "Prev",
					"shortcut": "command-left arrow"
				},
				{
					"class": "next-space",
					"icon": "fa fa-chevron-right",
					"name": "Next",
					"shortcut": "command-right arrow"
				}
			]
		},
		{
			"class": "windows",
			"icon": "far fa-window-restore",
			"name": "Windows",
			"select": true,
			"menu": [
				{
					"class": "minimize-all",
					"icon": "fa fa-window-minimize",
					"name": "Minimize All"
				},
				{
					"class": "unminimize-all",
					"icon": "fa fa-window-restore",
					"name": "Unminimize All"
				}
			]
		},
		{
			"class": "view-full-screen",
			"icon": "fa fa-desktop",
			"name": "Full Screen",
			"shortcut": "command-up arrow",
			"select": true
		},
		"separator",
		{
			"class": "view-preferences",
			"icon": "fa fa-snowflake",
			"name": "Preferences"
		}
	],

	events: {

		// view options
		//
		'click .view-kind > a': 'onClickViewKind',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .show-toolbar > a': 'onClickShowToolbar',

		// details options
		//
		'click .view-details': 'onClickViewDetails',
		'click .detail-kind > a': 'onClickDetailKind',
		'click .date-format > a': 'onClickDateFormat',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .show-sidebar-panel > a': 'onClickShowSideBarPanel',
		'click .sidebar-view-kind > a': 'onClickSideBarViewKind',
		'click .sidebar-tile-size > a': 'onClickSideBarTileSize',

		// window options
		//
		'click .shrink-window': 'onClickShrinkWindow',
		'click .grow-window': 'onClickGrowWindow',
		'click .expand-window': 'onClickExpandWindow',

		// desktop options
		//
		'click .prev-space': 'onClickPrevSpace',
		'click .next-space': 'onClickNextSpace',
		'click .minimize-all': 'onClickMinimizeAll',
		'click .unminimize-all': 'onClickUnminimizeAll',
		'click .view-full-screen': 'onClickViewFullScreen',

		// preferences options
		//
		'click .view-preferences': 'onClickViewPreferences'
	},

	//
	// querying methods
	//

	disabled: function() {
		return {
			'view-preferences': !application.session.user
		};	
	},

	selected: function() {
		let preferences = this.parent.app.preferences;
		let viewKind = preferences.get('view_kind');
		let toolbars = preferences.get('toolbars') || [];
		let detailKind = preferences.get('detail_kind');
		let dateFormat = preferences.get('date_format');
		let sidebarPanels = preferences.get('sidebar_panels') || [];

		return {

			// viewing options
			//
			'view-icons': viewKind == 'icons',
			'view-lists': viewKind == 'lists',
			'view-cards': viewKind == 'cards',
			'view-tiles': viewKind == 'tiles',

			// toolbar options
			//
			'show-toolbars': toolbars.length > 0,
			'show-nav-bar': toolbars.includes('nav'),

			// detail options
			//
			'view-details': typeof detailKind == 'string' && detailKind != '',
			'view-size': detailKind == 'size',
			'view-create-date': detailKind == 'create_date',
			'view-modify-date': detailKind == 'modify_date',
			'view-access-date': detailKind == 'access_date',
			'view-date-only': dateFormat == 'date_only',
			'view-day-date': dateFormat == 'day_date',
			'view-time-only': dateFormat == 'time_only',
			'view-date-time': dateFormat == 'date_time',
			'view-day-date-time': dateFormat == 'day_date_time' || !dateFormat,

			// sidebar options
			//
			'show-sidebar': preferences.get('show_sidebar'),
			'show-params-panel': sidebarPanels.includes('params')
		};	
	}
});