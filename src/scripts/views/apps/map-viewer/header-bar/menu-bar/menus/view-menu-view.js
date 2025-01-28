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
			"class": "show-elevation",
			"group": "map-mode",
			"icon": "fa fa-mountain",
			"name": "Elevation",
			"select": true
		},
		{
			"class": "show-aeronautical",
			"group": "map-mode",
			"icon": "fa fa-plane",
			"name": "Aeronautical",
			"select": true,
			"menu": [
				{
					"class": "show-vfr",
					"group": "aero-mode",
					"icon": "fa fa-eye",
					"name": "VFR (Sectional)",
					"select": true
				},
				{
					"class": "show-ifrlo",
					"group": "aero-mode",
					"icon": "fa fa-arrow-up",
					"name": "IFR / Low",
					"select": true
				},
				{
					"class": "show-ifrhi",
					"group": "aero-mode",
					"icon": "fa fa-arrow-down",
					"name": "IFR / High",
					"select": true
				}
			]
		},
		"separator",
		{
			"class": "navigation",
			"group": "left",
			"icon": "fa fa-arrows-alt",
			"name": "Navigation",
			"menu": [
				{
					"class": "zoom-to-location",
					"icon": "fa fa-crosshairs",
					"name": "Current Location",
					"shortcut": "command-H"
				},
				"separator",
				{
					"class": "zoom-to",
					"icon": "fa fa-search",
					"name": "Zoom To",
					"shortcut": "command-Z"
				},
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
				},
				"separator",
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
				},
				"separator",
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
				},
				{
					"class": "show-mouse-mode-bar",
					"group": "show-toolbar",
					"icon": "fa fa-mouse-pointer",
					"name": "Mouse Mode",
					"select": true
				},
				{
					"class": "show-nav-mode-bar",
					"group": "show-toolbar",
					"icon": "fa fa-arrows-alt",
					"name": "Nav Mode",
					"select": true
				},
				{
					"class": "show-annotations-bar",
					"group": "show-toolbar",
					"icon": "fa fa-pencil",
					"name": "Annotations",
					"select": true
				},
				{
					"class": "show-zoom-bar",
					"group": "show-toolbar",
					"icon": "fa fa-search",
					"name": "Zoom",
					"select": true
				},
				{
					"class": "show-map-bar",
					"group": "show-toolbar",
					"icon": "fa fa-map",
					"name": "Map",
					"select": true
				}
			]
		},
		{
			"class": "layers",
			"icon": "fa fa-layer-group",
			"name": "Layers",
			"select": true,
			"menu": [
				{
					"class": "show-crosshairs-layer",
					"group": "show-layer",
					"icon": "fa fa-crosshairs",
					"name": "Crosshairs",
					"select": true
				},
				{
					"class": "show-photos-layer",
					"group": "show-layer",
					"icon": "fa fa-camera",
					"name": "Photos",
					"select": true
				},
				{
					"class": "show-videos-layer",
					"group": "show-layer",
					"icon": "fa fa-camera",
					"name": "Videos",
					"select": true
				},
				{
					"class": "show-overlays-layer",
					"group": "show-layer",
					"icon": "fa fa-grip-lines",
					"name": "Overlays",
					"select": true
				},
				{
					"class": "show-people-layer",
					"group": "show-layer",
					"icon": "fa fa-user-friends",
					"name": "People",
					"select": true
				},
				{
					"class": "show-places-layer",
					"group": "show-layer",
					"icon": "fa fa-map-marker-alt",
					"name": "Places",
					"select": true
				},
				{
					"class": "show-favorites-layer",
					"group": "show-layer",
					"icon": "fa fa-map-pin",
					"name": "Favorites",
					"select": true
				},
				{
					"class": "show-annotations-layer",
					"group": "show-layer",
					"icon": "fa fa-pencil",
					"name": "Annotations",
					"select": true
				},
				{
					"class": "show-weather-layer",
					"group": "show-layer",
					"icon": "fa fa-cloud-sun-rain",
					"name": "Weather",
					"select": true
				},
				"separator",
				{
					"class": "show-all-layers",
					"icon": "fa fa-plus",
					"name": "All"
				},
				{
					"class": "show-no-layers",
					"icon": "fa fa-minus",
					"name": "None"
				}
			]
		},
		{
			"class": "show-map-options",
			"icon": "fa fa-map",
			"name": "Map",
			"select": true,
			"menu": [
				{
					"class": "show-grid",
					"icon": "fa fa-border-none",
					"name": "Grid",
					"select": true
				},
				{
					"class": "show-smoothing",
					"icon": "fa fa-wave-square",
					"name": "Smoothing",
					"select": true
				}
			]
		},
		{
			"class": "view-map-items",
			"icon": "fa fa-map-location",
			"name": "Map Items",
			"select": true,
			"menu": [
				{
					"class": "view-map-icons",
					"icon": "fa fa-th",
					"name": "Icons",
					"select": true
				},
				{
					"class": "view-map-lists",
					"icon": "fa fa-list",
					"name": "Lists",
					"select": true
				},
				{
					"class": "view-map-cards",
					"icon": "fa fa-id-card",
					"name": "Cards",
					"select": true
				},
				{
					"class": "view-map-tiles",
					"icon": "fa fa-th-large",
					"name": "Tiles",
					"select": true
				},
				"separator",
				{
					"class": "show-item-names",
					"group": "show-toolbar",
					"icon": "fa fa-font",
					"name": "Names",
					"select": true
				},
				{
					"class": "show-geo-orientations",
					"group": "show-toolbar",
					"icon": "fa fa-location-arrow",
					"name": "Orientations",
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
					"class": "show-maps-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-map",
					"name": "Maps",
					"select": true
				},
				{
					"class": "show-photos-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-camera",
					"name": "Photos",
					"select": true
				},
				{
					"class": "show-videos-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-video",
					"name": "Videos",
					"select": true
				},
				{
					"class": "show-overlays-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-grip-lines",
					"name": "Overlays",
					"select": true
				},
				{
					"class": "show-people-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-user-friends",
					"name": "People",
					"select": true
				},
				{
					"class": "show-places-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-map-marker-alt",
					"name": "Places",
					"select": true
				},
				{
					"class": "show-favorites-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-map-pin",
					"name": "Favorites",
					"select": true
				},
				{
					"class": "show-shared-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-share",
					"name": "Shared",
					"select": true
				}
			]
		},
		{
			"class": "view-sidebar-items",
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
		'click li.map-mode a': 'onClickMapMode',
		'click li.aero-mode a': 'onClickAeroMode',

		// navigation options
		//
		'click .zoom-to-location': 'onClickZoomToLocation',
		'click .zoom-to': 'onClickZoomTo',
		'click .pan-north': 'onClickPanNorth',
		'click .pan-south': 'onClickPanSouth',
		'click .pan-east': 'onClickPanEast',
		'click .pan-west': 'onClickPanWest',
		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .reset-view': 'onClickResetView',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .show-toolbar > a': 'onClickShowToolbar',

		// layer options
		//
		'click .show-layer > a': 'onClickShowLayer',
		'click .show-all-layers': 'onClickShowAllLayers',
		'click .show-no-layers': 'onClickShowNoLayers',
		
		// map options
		//
		'click .show-grid': 'onClickOption',
		'click .show-smoothing': 'onClickOption',
		'click .map-view-kind a': 'onClickMapViewKind',
		'click .show-item-names': 'onClickOption',
		'click .show-geo-orientations': 'onClickOption',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .show-sidebar-panel > a': 'onClickShowSideBarPanel',
		'click .sidebar-view-kind > a': 'onClickSideBarViewKind',
		'click .sidebar-tile-size > a': 'onClickSideBarTileSize',
		'click .show-image-info': 'onClickOption',

		// view options
		//
		'click .shrink-window': 'onClickShrinkWindow',
		'click .grow-window': 'onClickGrowWindow',
		'click .expand-window': 'onClickExpandWindow',
		'click .prev-space': 'onClickPrevSpace',
		'click .next-space': 'onClickNextSpace',
		'click .view-full-screen': 'onClickViewFullScreen',

		// preferences options
		//
		'click .view-preferences': 'onClickViewPreferences'
	},

	//
	// querying methods
	//

	enabled: function() {
		let hasPhotos = this.parent.app.hasItems('photos');
		let hasVideos = this.parent.app.hasItems('videos');
		let hasOverlays = this.parent.app.hasItems('overlays');
		let hasPeople = this.parent.app.hasItems('people');
		let hasPlaces = this.parent.app.hasItems('places');
		let hasFavorites = this.parent.app.hasItems('favorites');
		let hasAnnotations = this.parent.app.hasItems('annotations');
		let hasSelectedPhotos = this.parent.app.hasSelectedLayerItems('photos');
		let hasSelectedVideos = this.parent.app.hasSelectedLayerItems('videos');
		let hasSelectedPeople = this.parent.app.hasSelectedLayerItems('people');
		let hasSelectedPlaces = this.parent.app.hasSelectedLayerItems('places');		
		let hasSelectedFavorites = this.parent.app.hasSelectedLayerItems('favorites');
		let hasSelectedItems = hasSelectedFavorites || hasSelectedPlaces || hasSelectedPhotos || hasSelectedVideos || hasSelectedPeople;

		return {
			'zoom-to': hasSelectedItems,
			'show-crosshairs-layer': true,
			'show-favorites-layer': hasFavorites,
			'show-photos-layer': hasPhotos,
			'show-videos-layer': hasVideos,
			'show-overlays-layer': hasOverlays,
			'show-people-layer': hasPeople,
			'show-places-layer': hasPlaces,
			'show-annotations-layer': hasAnnotations,
			'show-weather-layer': true,
			'show_small_icons': true,
			'show_medium_icons': true,
			'show_large_icons': true,
			'show_icon_names': true,
			'show_smoothing': true
		};	
	},

	selected: function() {
		let preferences = this.parent.app.preferences;
		let mapLayers = preferences.get('map_layers') || [];
		let toolbars = preferences.get('toolbars') || [];
		let mapMode = this.parent.app.getMapMode() || preferences.get('map_mode');
		let aeroMode = this.parent.app.getAeroMode() || preferences.get('aero_mode');
		let mapViewKind = preferences.get('map_view_kind');
		let sidebarPanels = preferences.get('sidebar_panels') || [];
		let sidebarViewKind = preferences.get('sidebar_view_kind');

		return {

			// map options
			//
			'show-map': mapMode == 'map',
			'show-satellite': mapMode == 'satellite',
			'show-hybrid': mapMode == 'hybrid',
			'show-streets': mapMode == 'streets',
			'show-transportation': mapMode == 'transportation',
			'show-elevation': mapMode == 'elevation',
			'show-aeronautical': mapMode == 'aeronautical',
			'show-vfr': aeroMode == 'vfr',
			'show-ifrlo': aeroMode == 'ifrlo',
			'show-ifrhi': aeroMode == 'ifrhi',

			// toolbar options
			//
			'show-toolbars': toolbars.length > 0,
			'show-nav-bar': toolbars.includes('nav'),
			'show-mouse-mode-bar': toolbars.includes('mouse_mode'),
			'show-nav-mode-bar': toolbars.includes('nav_mode'),
			'show-zoom-bar': toolbars.includes('zoom'),
			'show-annotations-bar': toolbars.includes('annotations'),
			'show-map-bar': toolbars.includes('map'),

			// layer options
			//
			'show-crosshairs-layer': mapLayers.includes('crosshairs'),
			'show-photos-layer': mapLayers.includes('photos'),
			'show-videos-layer': mapLayers.includes('videos'),
			'show-overlays-layer': mapLayers.includes('overlays'),
			'show-people-layer': mapLayers.includes('people'),
			'show-places-layer': mapLayers.includes('places'),
			'show-favorites-layer': mapLayers.includes('favorites'),
			'show-annotations-layer': mapLayers.includes('annotations'),
			'show-weather-layer': mapLayers.includes('weather'),

			// viewing options
			//
			'show-grid': preferences.get('show_grid'),
			'show-smoothing': preferences.get('show_smoothing'),

			// map item options
			//
			'view-map-icons': mapViewKind == 'icons',
			'view-map-lists': mapViewKind == 'lists',
			'view-map-cards': mapViewKind == 'cards',
			'view-map-tiles': mapViewKind == 'tiles',
			'show-item-names': preferences.get('show_item_names'),
			'show-geo-orientations': preferences.get('show_geo_orientations'),

			// sidebar options
			//
			'show-sidebar': preferences.get('show_sidebar'),
			'show-maps-panel': sidebarPanels.includes('maps'),
			'show-photos-panel': sidebarPanels.includes('photos'),
			'show-videos-panel': sidebarPanels.includes('videos'),
			'show-overlays-panel': sidebarPanels.includes('overlays'),
			'show-people-panel': sidebarPanels.includes('people'),
			'show-places-panel': sidebarPanels.includes('places'),
			'show-favorites-panel': sidebarPanels.includes('favorites'),
			'show-shared-panel': sidebarPanels.includes('shared'),	

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

	setSmoothing: function(smoothing) {
		this.parent.app.options.smoothing = smoothing;
		this.setItemSelected('toggle-smoothing', smoothing);
	},

	setMapMode: function(mapMode) {
		this.$el.find('li.map-mode').removeClass('selected');
		this.$el.find('li .show-' + mapMode).closest('li').addClass('selected');
	},

	setAeroMode: function(aeroMode) {
		this.$el.find('li.aero-mode').removeClass('selected');
		this.$el.find('li .show-' + aeroMode).closest('li').addClass('selected');
	},

	toggleToolbar: function(className) {

		// call superclass method
		//
		this.toggleMenuItem(className);

		// update parent
		//
		this.parent.app.setOption('toolbars', this.getSelectedToolbars());
	},

	toggleLayer: function(className) {

		// call superclass method
		//
		this.toggleMenuItem(className);

		// update parent
		//
		this.parent.app.setOption('layers', this.getSelectedLayers());
	},

	//
	// map mouse event handling methods
	//

	onClickMapMode: function(event) {
		let className = $(event.currentTarget).attr('class').split(' ')[0];
		let mapMode = className.replace('show-', '');

		// update menu
		//
		this.setMapMode(mapMode);

		// update parent
		//
		this.parent.app.setOption('map_mode', mapMode);
	},

	onClickAeroMode: function(event) {
		let className = $(event.currentTarget).attr('class');
		let aeroMode = className.replace('show-', '');

		// update menu
		//
		this.setAeroMode(aeroMode);

		// update parent
		//
		this.parent.app.setOption('aero_mode', aeroMode);
	},

	onClickResetView: function() {
		this.parent.app.resetView();
	},
	
	//
	// pan mouse event handling methods
	//

	onClickPanNorth: function() {
		this.parent.app.panToDirection('north');
	},

	onClickPanSouth: function() {
		this.parent.app.panToDirection('south');
	},

	onClickPanEast: function() {
		this.parent.app.panToDirection('east');
	},

	onClickPanWest: function() {
		this.parent.app.panToDirection('west');
	},

	//
	// zoom mouse event handling methods
	//

	onClickZoomToLocation: function() {
		this.parent.app.zoomToLocation();
	},

	onClickZoomTo: function() {
		this.parent.app.zoomToItem(this.parent.app.getSelectedItem());
	},

	onClickZoomIn: function() {
		this.parent.parent.getChildView('zoom').zoomIn();
	},

	onClickZoomOut: function() {
		this.parent.parent.getChildView('zoom').zoomOut();
	},

	//
	// layer mouse event handling methods
	//

	onClickShowLayer: function(event) {
		let className = $(event.target).closest('a').attr('class');	

		// update menu and app
		//
		this.toggleLayer(className);
	},

	onClickShowAllLayers: function() {

		// update menu
		//
		this.$el.find('.show-layer').addClass('selected');

		// update map
		//
		this.parent.app.setOption('layers', true);
	},

	onClickShowNoLayers: function() {

		// update menu
		//
		this.$el.find('.show-layer').removeClass('selected');

		// update map
		//
		this.parent.app.setOption('layers', false);
	}
});