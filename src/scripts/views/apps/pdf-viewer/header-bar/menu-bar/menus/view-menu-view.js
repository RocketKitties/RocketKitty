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
			"class": "view-page",
			"icon": "fa fa-file",
			"name": "Page",
			"menu": [
				{
					"class": "view-first",
					"icon": "fa fa-fast-backward",
					"name": "First",
					"shortcut": "up arrow"
				},
				{
					"class": "view-prev",
					"icon": "fa fa-backward",
					"name": "Prev",
					"shortcut": "left arrow"
				},
				{
					"class": "view-next",
					"icon": "fa fa-forward",
					"name": "Next",
					"shortcut": "right arrow"
				},
				{
					"class": "view-last",
					"icon": "fa fa-fast-forward",
					"name": "Last",
					"shortcut": "down arrow"
				}
			]
		},
		"separator",
		{
			"class": "view-text",
			"icon": "fa fa-font",
			"name": "Text",
			"shortcut": "shift-command-T"
		},
		"separator",
		{
			"class": "fit-page",
			"icon": "fa fa-expand",
			"name": "Fit",
			"menu": [
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
				},
				{
					"class": "fit-size",
					"icon": "fa fa-expand",
					"name": "Fit Size",
					"shortcut": "shift-command-F"
				}
			]
		},
		{
			"class": "zoom-page",
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
					"icon": "fa fa-search",
					"name": "Zoom to Actual Size",
					"shortcut": "command-1"
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
					"class": "show-zoom-mode-bar",
					"group": "show-toolbar",
					"icon": "fa fa-expand",
					"name": "Zoom Mode",
					"select": true
				},
				{
					"class": "show-zoom-bar",
					"group": "show-toolbar",
					"icon": "fa fa-search",
					"name": "Zoom",
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
					"class": "show-pages-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-file",
					"name": "Pages",
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

		// navigation options
		//
		'click .view-first': 'onClickFirst',
		'click .view-prev': 'onClickPrev',
		'click .view-next': 'onClickNext',
		'click .view-last': 'onClickLast',

		// view options
		//
		'click .view-text': 'onClickViewText',
		'click .fit-width': 'onClickFitWidth',
		'click .fit-height': 'onClickFitHeight',
		'click .fit-size': 'onClickFitSize',

		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .zoom-to-actual': 'onClickZoomToActual',

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

	selected: function() {
		let preferences = this.parent.app.preferences;
		let toolbars = preferences.get('toolbars') || [];
		let sidebarPanels = preferences.get('sidebar_panels') || [];
		let sidebarTileSize = preferences.get('sidebar_tile_size');

		return {

			// toolbar options
			//
			'show-toolbars': toolbars.length > 0,
			'show-zoom-mode-bar': toolbars.includes('zoom_mode'),
			'show-zoom-bar': toolbars.includes('zoom'),

			// sidebar options
			//
			'show-sidebar': preferences.get('show_sidebar'),
			'show-pages-panel': sidebarPanels.includes('pages'),

			// sidebar tile sizes
			//
			'small-tile-size': sidebarTileSize == 'small',
			'medium-tile-size': sidebarTileSize == 'medium',
			'large-tile-size': sidebarTileSize == 'large',

			// info bar options
			//
			'show-exif-info': preferences.get('show_exif_info')
		};
	},

	//
	// navigation mouse event handling methods
	//
	
	onClickFirst: function() {
		let pageNumber = this.parent.app.getPageNumber('first');
		this.parent.app.setPageNumber(pageNumber);
	},

	onClickPrev: function() {
		let pageNumber = this.parent.app.getPageNumber('prev');
		this.parent.app.setPageNumber(pageNumber);
	},

	onClickNext: function() {
		let pageNumber = this.parent.app.getPageNumber('next');
		this.parent.app.setPageNumber(pageNumber);
	},

	onClickLast: function() {
		let pageNumber = this.parent.app.getPageNumber('last');
		this.parent.app.setPageNumber(pageNumber);
	},

	//
	// view mouse event handling methods
	//

	onClickViewText: function() {
		this.parent.app.showText();
	},

	//
	// fit mouse event handling methods
	//

	onClickFitWidth: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_width');
	},

	onClickFitSize: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_size');
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
	}
});