/******************************************************************************\
|                                                                              |
|                               view-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying view dropdown menus.                    |
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
			"class": "view-names",
			"group": "view-kind",
			"icon": "fa fa-align-left",
			"name": "Names",
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
		{
			"class": "view-maps",
			"group": "view-kind",
			"icon": "fa fa-map",
			"name": "Maps",
			"select": true,
			"menu": [
				{
					"class": "show-map",
					"group": "map-mode",
					"icon": "fa fa-map",
					"name": "Map",
					"select": true
				},
				{
					"class": "show-satellite",
					"group": "map-mode",
					"icon": "fa fa-satellite",
					"name": "Satellite",
					"select": true
				},
				{
					"class": "show-hybrid",
					"group": "map-mode",
					"icon": "fa fa-map-marked-alt",
					"name": "Hybrid",
					"select": true
				},
				{
					"class": "show-streets",
					"group": "map-mode",
					"icon": "fa fa-road",
					"name": "Streets",
					"select": true
				},
				{
					"class": "show-transportation",
					"group": "map-mode",
					"icon": "fa fa-bus",
					"name": "Transportation",
					"select": true
				},
				{
					"class": "show-aeronautical",
					"group": "map-mode",
					"icon": "fa fa-plane",
					"name": "Aeronautical",
					"select": true
				},
				"separator",
				{
					"class": "pan-to",
					"icon": "fa fa-arrows-alt",
					"name": "Pan",
					"menu": [
						{
							"class": "pan-north",
							"icon": "fa fa-arrow-up",
							"name": "North",
							"shortcut": "up arrow"
						},
						{
							"class": "pan-south",
							"icon": "fa fa-arrow-down",
							"name": "South",
							"shortcut": "down arrow"
						},
						{
							"class": "pan-east",
							"icon": "fa fa-arrow-right",
							"name": "East",
							"shortcut": "right arrow"
						},
						{
							"class": "pan-west",
							"icon": "fa fa-arrow-left",
							"name": "West",
							"shortcut": "left arrow"
						}
					]
				},
				{
					"class": "zoom-to",
					"icon": "fa fa-search",
					"name": "Zoom",
					"menu": [
						{
							"class": "zoom-in",
							"icon": "fa fa-search-plus",
							"name": "Zoom In",
							"shortcut": "="
						},
						{
							"class": "zoom-out",
							"icon": "fa fa-search-minus",
							"name": "Zoom Out",
							"shortcut": "-"
						}
					]
				},
				{
					"class": "reset-view",
					"icon": "fa fa-undo",
					"name": "Reset",
					"shortcut": "shift-command-R"
				}
			]
		},
		"separator",
		{
			"class": "view-details",
			"icon": "fa fa-tags",
			"name": "Details",
			"select": true,
			"menu": [
				{
					"class": "view-location",
					"icon": "fa fa-globe-americas",
					"name": "Location",
					"select": true
				},
				{
					"class": "view-occupation",
					"icon": "fa fa-briefcase",
					"name": "Occupation",
					"select": true
				},
				{
					"class": "view-gender",
					"icon": "fa fa-transgender",
					"name": "Gender",
					"select": true
				}
			]
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
			"class": "show-sidebar",
			"icon": "fa fa-pause",
			"name": "Sidebar",
			"select": true,
			"menu": [
				{
					"class": "show-actions-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-play-circle",
					"name": "Actions",
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

	hidden: function() {
		return {
			'view-maps': !this.parent.app.collection.hasGeolocation()
		};
	},

	selected: function() {
		let preferences = this.parent.app.preferences;
		let viewKind = preferences.get('view_kind');
		let toolbars = preferences.get('toolbars') || [];
		let mapMode = preferences.get('map_mode') || 'hybrid';
		let detailKind = preferences.get('detail_kind');
		let dateFormat = preferences.get('date_format');
		let sidebarPanels = preferences.get('sidebar_panels') || [];

		return {

			// item options
			//
			'view-icons': !viewKind || viewKind == 'icons',
			'view-names': viewKind == 'names',
			'view-lists': viewKind == 'lists',
			'view-trees': viewKind == 'trees',
			'view-cards': viewKind == 'cards',
			'view-tiles': viewKind == 'tiles',
			'view-maps': viewKind == 'maps',

			// mapping options
			//
			'show-map': mapMode == 'map',
			'show-satellite': mapMode == 'satellite',
			'show-hybrid': mapMode == 'hybrid',

			// detail options
			//
			'view-details': typeof detailKind == 'string' && detailKind != '',
			'view-location': detailKind == 'location',
			'view-occupation': detailKind == 'occupation',
			'view-age': detailKind == 'age',
			'view-gender': detailKind == 'gender',
			'view-birth-date': detailKind == 'birth_date',
			'view-join-date': detailKind == 'join_date',
			'view-connect-date': detailKind == 'connect_date',

			// date options
			//
			'view-date-only': dateFormat == 'date_only',
			'view-day-date': dateFormat == 'day_date',
			'view-time-only': dateFormat == 'time_only',
			'view-date-time': dateFormat == 'date_time',
			'view-day-date-time': dateFormat == 'day_date_time' || !dateFormat,

			// toolbar options
			//
			'show-toolbars': toolbars.length > 0,
			'show-nav-bar': toolbars.includes('nav'),

			// sidebar options
			//
			'show-sidebar': preferences.get('show_sidebar'),
			'show-actions-panel': sidebarPanels.includes('actions')
		};	
	}
});