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
					"class": "view-location",
					"group": "detail-kind",
					"icon": "fa fa-globe-americas",
					"name": "Location",
					"select": true
				},
				{
					"class": "view-occupation",
					"group": "detail-kind",
					"icon": "fa fa-briefcase",
					"name": "Occupation",
					"select": true
				},
				{
					"class": "view-gender",
					"group": "detail-kind",
					"icon": "fa fa-transgender",
					"name": "Gender",
					"select": true
				},
				{
					"class": "view-age",
					"group": "detail-kind",
					"icon": "fa fa-hourglass-half",
					"name": "Age",
					"select": true
				},
				{
					"icon": "fa fa-calendar-alt",
					"name": "Date",
					"select": true,
					"menu": [
						{
							"class": "view-birth-date",
							"group": "detail-kind",
							"icon": "fa fa-birthday-cake",
							"name": "Birth Date",
							"select": true
						},
						{
							"class": "view-join-date",
							"group": "detail-kind",
							"icon": "fa fa-user-circle",
							"name": "Join Date",
							"select": true
						},
						{
							"class": "view-connect-date",
							"group": "detail-kind",
							"icon": "fa fa-user-friends",
							"name": "Connect Date",
							"select": true
						},
						"separator",
						{
							"class": "view-date-only",
							"group": "detail-kind",
							"icon": "fa fa-calendar-alt",
							"name": "Date Only",
							"select": true
						},
						{
							"class": "view-day-date",
							"group": "detail-kind",
							"icon": "fa fa-calendar-plus",
							"name": "Day, Date",
							"select": true
						}
					]
				}
			]
		},
		{
			"class": "map-view-kind",
			"icon": "fa fa-map-location",
			"name": "Map Items",
			"select": true,
			"menu": [
				{
					"class": "view-map-icons",
					"group": "map-view-kind",
					"icon": "fa fa-th",
					"name": "Icons",
					"select": true
				},
				{
					"class": "view-map-lists",
					"group": "map-view-kind",
					"icon": "fa fa-list",
					"name": "Lists",
					"select": true
				},
				{
					"class": "view-map-cards",
					"group": "map-view-kind",
					"icon": "fa fa-id-card",
					"name": "Cards",
					"select": true
				},
				{
					"class": "view-map-tiles",
					"group": "map-view-kind",
					"icon": "fa fa-th-large",
					"name": "Tiles",
					"select": true
				},
				"separator",
				{
					"class": "show-item-names",
					"icon": "fa fa-font",
					"name": "Names",
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
					"class": "show-groups-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-user",
					"name": "Groups",
					"select": true
				}
			]
		},
		{
			"class": "sidebar-view-kind",
			"icon": "fa fa-th",
			"name": "Sidebar Items",
			"select": true,
			"menu": [
				{
					"class": "view-sidebar-icons",
					"group": "sidebar-view-kind",
					"icon": "fa fa-th",
					"name": "Icons",
					"select": true
				},
				{
					"class": "view-sidebar-lists",
					"group": "sidebar-view-kind",
					"icon": "fa fa-list",
					"name": "Lists",
					"select": true
				},
				{
					"class": "view-sidebar-trees",
					"group": "sidebar-view-kind",
					"icon": "fa fa-tree",
					"name": "Trees",
					"select": true
				},
				{
					"class": "view-sidebar-cards",
					"group": "sidebar-view-kind",
					"icon": "fa fa-id-card",
					"name": "Cards",
					"select": true
				},
				{
					"class": "view-sidebar-tiles",
					"group": "sidebar-view-kind",
					"icon": "fa fa-th-large",
					"name": "Tiles",
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
		'click .map-mode > a': 'onClickMapMode',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .show-toolbar > a': 'onClickShowToolbar',

		// details options
		//
		'click .view-details': 'onClickViewDetails',
		'click .detail-kind > a': 'onClickDetailKind',
		'click .date-format > a': 'onClickDateFormat',

		// map options
		//
		'click .map-view-kind > a': 'onClickMapViewKind',
		'click .show-item-names': 'onClickOption',
		'click .pan-north': 'onClickPanNorth',
		'click .pan-south': 'onClickPanSouth',
		'click .pan-east': 'onClickPanEast',
		'click .pan-west': 'onClickPanWest',
		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .reset-view': 'onClickResetView',

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

	hidden: function() {
		return {
			'view-maps': !this.parent.app.collection.hasGeolocation()
		};
	},

	disabled: function() {
		let preferences = this.parent.app.preferences;
		let showingMap = preferences.get('view_kind') == 'maps';

		return {
			'pan-to': !showingMap,
			'pan-north': !showingMap,
			'pan-south': !showingMap,
			'pan-east': !showingMap,
			'pan-west': !showingMap,
			'zoom-to': !showingMap,
			'zoom-in': !showingMap,
			'zoom-out': !showingMap,
			'reset-view': !showingMap
		};
	},

	selected: function() {
		let preferences = this.parent.app.preferences;
		let mapMode = preferences.get('map_mode');
		let viewKind = preferences.get('view_kind');
		let toolbars = preferences.get('toolbars') || [];
		let detailKind = preferences.get('detail_kind');
		let dateFormat = preferences.get('date_format');
		let mapViewKind = preferences.get('map_view_kind');
		let sidebarPanels = preferences.get('sidebar_panels') || [];
		let sidebarViewKind = preferences.get('sidebar_view_kind');

		return {

			// view options
			//
			'view-icons': !viewKind || viewKind == 'icons',
			'view-names': viewKind == 'names',
			'view-lists': viewKind == 'lists',
			'view-trees': viewKind == 'trees',
			'view-cards': viewKind == 'cards',
			'view-tiles': viewKind == 'tiles',
			'view-maps': viewKind == 'maps',

			// map options
			//
			'show-map': mapMode == 'map',
			'show-satellite': mapMode == 'satellite',
			'show-hybrid': mapMode == 'hybrid',
			'show-streets': mapMode == 'streets',
			'show-transportation': mapMode == 'transportation',
			'show-sectional': mapMode == 'sectional',
			'show-ifrlo': mapMode == 'ifrlo',
			'show-ifrhi': mapMode == 'ifrhi',

			// toolbar options
			//
			'show-toolbars': toolbars.length > 0,
			'show-nav-bar': toolbars.includes('nav'),

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

			// map item options
			//
			'view-map-icons': mapViewKind == 'icons',
			'view-map-lists': mapViewKind == 'lists',
			'view-map-cards': mapViewKind == 'cards',
			'view-map-tiles': mapViewKind == 'tiles',
			'view-map-pages': mapViewKind == 'pages',
			'show-item-names': preferences.get('show_item_names'),

			// sidebar options
			//
			'show-sidebar': preferences.get('show_sidebar'),
			'show-actions-panel': sidebarPanels.includes('actions'),
			'show-groups-panel': sidebarPanels.includes('groups'),

			// sidebar item options
			//
			'view-sidebar-icons': sidebarViewKind == 'icons',
			'view-sidebar-lists': sidebarViewKind == 'lists',
			'view-sidebar-trees': sidebarViewKind == 'trees',
			'view-sidebar-cards': sidebarViewKind == 'cards',
			'view-sidebar-tiles': sidebarViewKind == 'tiles'
		};	
	},

	//
	// setting methods
	//

	setMapMode: function(mapMode) {
		this.$el.find('li.map-mode').removeClass('selected');
		this.$el.find('li .show-' + mapMode).closest('li').addClass('selected');
	},

	//
	// map event handling methods
	//

	onClickMapMode: function(event) {
		let className = $(event.currentTarget).attr('class').split(' ')[0];
		let mapMode = className.replace('show-', '').replace(/-/g, '_');

		// update menu
		//
		this.setMapMode(mapMode);
		if (!this.isItemSelected('view-maps')) {
			this.setViewKind('maps');
		}
		
		// update parent
		//
		this.parent.app.setOption('map_mode', mapMode);
	},

	onClickResetView: function() {
		this.parent.app.getChildView('content').getChildView('items').resetView();
	},
	
	//
	// pan event handling methods
	//

	onClickPanNorth: function() {
		let itemsView = this.parent.app.getChildView('content').getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').panToDirection('north', {
				duration: 1000
			});
		}
	},

	onClickPanSouth: function() {
		let itemsView = this.parent.app.getChildView('content').getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').panToDirection('south', {
				duration: 1000
			});
		}
	},

	onClickPanEast: function() {
		let itemsView = this.parent.app.getChildView('content').getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').panToDirection('east', {
				duration: 1000
			});
		}
	},
	
	onClickPanWest: function() {
		let itemsView = this.parent.app.getChildView('content').getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').panToDirection('west', {
				duration: 1000
			});
		}
	},

	//
	// zoom event handling methods
	//

	onClickZoomIn: function() {
		let itemsView = this.parent.app.getChildView('content').getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').zoomIn({
				duration: 1000
			});
		}
	},

	onClickZoomOut: function() {
		let itemsView = this.parent.app.getChildView('content').getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').zoomOut({
				duration: 1000
			});
		}
	}
});