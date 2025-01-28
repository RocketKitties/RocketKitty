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
			"class": "fit",
			"icon": "fa fa-expand",
			"name": "Fit",
			"menu": [
				{
					"class": "fit-size",
					"icon": "fa fa-expand",
					"name": "Fit Size",
					"shortcut": "shift-command-F"
				},
				{
					"class": "fit-width",
					"icon": "fa fa-arrows-left-right-to-line",
					"name": "Fit Width",
					"shortcut": "shift-command-D"
				},
				{
					"class": "fit-height",
					"icon": "fa fa-arrows-left-right-to-line rotated",
					"name": "Fit Height",
					"shortcut": "shift-command-H"
				}
			]
		},
		{
			"class": "zoom",
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
				},
				{
					"class": "zoom-to-actual",
					"name": "Zoom to Actual Size",
					"shortcut": "command-1"
				}
			]
		},
		{
			"class": "rotate",
			"icon": "fa fa-redo",
			"name": "Rotate",
			"menu": [
				{
					"class": "rotate-left",
					"icon": "fa fa-undo",
					"name": "Rotate Left",
					"shortcut": "command-8"
				},
				{
					"class": "rotate-right",
					"icon": "fa fa-redo",
					"name": "Rotate Right",
					"shortcut": "command-9"
				},
				{
					"class": "rotate-reset",
					"icon": "fa fa-undo",
					"name": "Rotate Reset",
					"shortcut": "command-0"
				}
			]
		},
		"separator",
		{
			"class": "view-slide-show",
			"icon": "fa fa-play",
			"name": "Slide Show",
			"shortcut": "command-S",
			"select": true
		},
		{
			"class": "show-smoothing",
			"icon": "fa fa-wave-square",
			"name": "Smoothing",
			"shortcut": "command-M",
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
					"class": "show-mouse-mode-bar",
					"group": "show-toolbar",
					"icon": "fa fa-mouse-pointer",
					"name": "Mouse Mode",
					"select": true
				},
				{
					"class": "show-zoom-mode-bar",
					"group": "show-toolbar",
					"icon": "fa fa-expand",
					"name": "Zoom Mode",
					"select": true
				},
				{
					"class": "show-image-bar",
					"group": "show-toolbar",
					"icon": "fa fa-play",
					"name": "Image",
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
					"class": "show-rotate-bar",
					"group": "show-toolbar",
					"icon": "fa fa-rotate-right",
					"name": "Rotate",
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
					"class": "show-favorites-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-star",
					"name": "Favorites",
					"select": true
				},
				{
					"class": "show-images-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-image",
					"name": "Images",
					"select": true
				},
				{
					"class": "show-files-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-folder",
					"name": "Files",
					"select": true
				}
			]
		},
		{
			"class": "sidebar-items",
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
		{
			"class": "sidebar-tile-size",
			"icon": "fa fa-th-large",
			"name": "Sidebar Tile Size",
			"select": true,
			"menu": [
				{
					"class": "small-tile-size",
					"group": "sidebar-tile-size",
					"icon": "fa fa-th",
					"name": "Small",
					"select": true
				},
				{
					"class": "medium-tile-size",
					"group": "sidebar-tile-size",
					"icon": "fa fa-th-large",
					"name": "Medium",
					"select": true
				},
				{
					"class": "large-tile-size",
					"group": "sidebar-tile-size",
					"icon": "fa fa-image",
					"name": "Large",
					"select": true
				}
			]
		},
		{
			"class": "show-exif-info",
			"icon": "fa fa-table",
			"name": "Exif Info",
			"select": true
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
		'click .fit-size': 'onClickFitSize',
		'click .fit-width': 'onClickFitWidth',
		'click .fit-height': 'onClickFitHeight',

		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .zoom-to-actual': 'onClickZoomToActual',

		'click .rotate-left': 'onClickRotateLeft',
		'click .rotate-right': 'onClickRotateRight',
		'click .rotate-reset': 'onClickRotateReset',

		'click .show-smoothing': 'onClickShowSmoothing',
		'click .view-slide-show': 'onClickSlideShow',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .show-toolbar > a': 'onClickShowToolbar',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .show-sidebar-panel > a': 'onClickShowSideBarPanel',
		'click .sidebar-view-kind > a': 'onClickSideBarViewKind',
		'click .sidebar-tile-size > a': 'onClickSideBarTileSize',

		// mainbar options
		//
		'click .show-exif-info': 'onClickOption',

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

	selected: function() {
		let preferences = this.parent.app.preferences;
		let toolbars = preferences.get('toolbars') || [];
		let sidebarPanels = preferences.get('sidebar_panels') || [];
		let sidebarViewKind = preferences.get('sidebar_view_kind');
		let sidebarTileSize = preferences.get('sidebar_tile_size');

		return {

			// viewing options
			//
			'fit-size': this.parent.app.zoom == 'fit_size',
			'fit-width': this.parent.app.zoom == 'fit_width',
			'fit-height': this.parent.app.zoom == 'fit_height',
			'show-smoothing': preferences.get('show_smoothing'),

			// toolbar options
			//
			'show-toolbars': toolbars.length > 0,
			'show-nav-bar': toolbars.includes('nav'),
			'show-mouse-mode-bar': toolbars.includes('mouse_mode'),
			'show-zoom-mode-bar': toolbars.includes('zoom_mode'),
			'show-zoom-bar': toolbars.includes('zoom'),
			'show-rotate-bar': toolbars.includes('rotate'),
			'show-image-bar': toolbars.includes('image'),

			// sidebar options
			//
			'show-sidebar': preferences.get('show_sidebar'),
			'show-favorites-panel': sidebarPanels.includes('favorites'),
			'show-images-panel': sidebarPanels.includes('images'),
			'show-files-panel': sidebarPanels.includes('files'),

			// sidebar item options
			//
			'view-sidebar-icons': sidebarViewKind == 'icons',
			'view-sidebar-lists': sidebarViewKind == 'lists',
			'view-sidebar-cards': sidebarViewKind == 'cards',
			'view-sidebar-tiles': sidebarViewKind == 'tiles',

			// sidebar tile sizes
			//
			'small-tile-size': sidebarTileSize == 'small',
			'medium-tile-size': sidebarTileSize == 'medium',
			'large-tile-size': sidebarTileSize == 'large',

			// mainbar options
			//
			'show-exif-info': preferences.get('show_exif_info')
		};
	},

	disabled: function() {
		if (!this.parent.app.model) {
			return {
				'fit': true,
				'zoom': true,
				'rotate': true,
				'show-smoothing': true,
				'view-slide-show': true
			};
		} else {
			return false;
		}
	},

	//
	// setting methods
	//

	setSmoothing: function(smoothing) {
		this.parent.app.options.smoothing = smoothing;
		this.setItemSelected('show-smoothing', smoothing);
	},

	//
	// rendering methods
	//

	/*
	templateContext: function() {
		return {
			zoom: this.parent.app.zoom,
			zoomLevels: this.parent.app.zoomLevels,
		};
	},
	*/
	
	//
	// fit mouse event handling methods
	//

	onClickFitSize: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_size');
	},

	onClickFitWidth: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_width');
	},

	onClickFitHeight: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_height');
	},

	//
	// zoom mouse event handling methods
	//

	onClickZoomIn: function() {
		this.parent.app.getChildView('header zoom').zoomIn();
	},

	onClickZoomOut: function() {
		this.parent.app.getChildView('header zoom').zoomOut();
	},

	onClickZoomToActual: function() {
		this.parent.app.getChildView('header zoom').zoomTo(100);
	},

	//
	// rotate mouse event handling methods
	//

	onClickRotateLeft: function() {
		this.parent.app.rotateTo(this.parent.app.getRotation() - 90);
	},

	onClickRotateRight: function() {
		this.parent.app.rotateTo(this.parent.app.getRotation() + 90);
	},

	onClickRotateReset: function() {
		this.parent.app.rotateTo(0);
	},

	//
	// preferences mouse event handling methods
	//
	
	onClickShowSmoothing: function() {
		this.toggleMenuItem('show-smoothing');
		this.parent.app.setOption('show_smoothing', this.isItemSelected('show-smoothing'));
	},

	onClickSlideShow: function() {
		this.toggleMenuItem('view-slide-show');
		this.parent.app.toggleSlideShow();
	},

	onClickViewFullScreen: function() {
		this.parent.app.toggleFullScreen();
	}
});