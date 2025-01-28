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
			"class": "view-name-only",
			"icon": "fa fa-font",
			"name": "Name Only",
			"select": true
		},
		{
			"class": "view-album",
			"icon": "fa fa-folder",
			"name": "Album",
			"select": true
		},
		{
			"class": "view-artist",
			"icon": "fa fa-user",
			"name": "Artist",
			"select": true
		},
		{
			"class": "view-band",
			"icon": "fa fa-users",
			"name": "Band",
			"select": true
		},
		{
			"class": "view-composer",
			"icon": "fa fa-magic",
			"name": "Composer",
			"select": true
		},
		{
			"class": "view-genre",
			"icon": "fa fa-tags",
			"name": "Genre",
			"select": true
		},
		{
			"class": "view-length",
			"icon": "fa fa-clock",
			"name": "Length",
			"select": true
		},
		{
			"class": "view-publisher",
			"icon": "fa fa-money-bill",
			"name": "Publisher",
			"select": true
		},
		{
			"class": "view-title",
			"icon": "fa fa-font",
			"name": "Title",
			"select": true
		},
		{
			"class": "view-track-number",
			"icon": "fa fa-list-ol",
			"name": "Track Number",
			"select": true
		},
		{
			"class": "view-year",
			"icon": "fa fa-calendar-alt",
			"name": "Year",
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
					"class": "show-play-bar",
					"group": "show-toolbar",
					"icon": "fa fa-play",
					"name": "Play",
					"select": true
				},
				{
					"class": "show-volume-bar",
					"group": "show-toolbar",
					"icon": "fa fa-volume-up",
					"name": "Volume",
					"select": true
				},
				{
					"class": "show-track-bar",
					"group": "show-toolbar",
					"icon": "fa fa-list",
					"name": "Track",
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
					"class": "show-track-info-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-table",
					"name": "Track Info",
					"shortcut": "command-I",
					"select": true
				},
				{
					"class": "show-files-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-file",
					"name": "Files",
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
		{
			"class": "show-analyser",
			"icon": "fa fa-chart-bar",
			"name": "Analyser",
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
		'click .detail-kind a': 'onClickDetailKind',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .show-toolbar > a': 'onClickShowToolbar',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .show-sidebar-panel > a': 'onClickShowSideBarPanel',
		'click .sidebar-view-kind > a': 'onClickSideBarViewKind',
		'click .show-analyser': 'onClickOption',

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
		let detailKind = preferences.get('detail_kind');
		let toolbars = preferences.get('toolbars') || [];
		let sidebarPanels = preferences.get('sidebar_panels') || [];
		let sidebarViewKind = preferences.get('sidebar_view_kind');

		return {

			// detail options
			//
			'view-name-only': !detailKind,
			'view-album': detailKind == 'album',
			'view-artist': detailKind == 'artist',
			'view-band': detailKind == 'band',
			'view-composer': detailKind == 'composer',
			'view-genre': detailKind == 'genre',
			'view-length': detailKind == 'length',
			'view-publisher': detailKind == 'publisher',
			'view-track-number': detailKind == 'track_number',
			'view-year': detailKind == 'year',

			// toolbar options
			//
			'show-toolbars': toolbars.length > 0,
			'show-play-bar': toolbars.includes('play'),
			'show-volume-bar': toolbars.includes('volume'),
			'show-track-bar': toolbars.includes('track'),

			// sidebar options
			//
			'show-sidebar': preferences.get('show_sidebar'),
			'show-favorites-panel': sidebarPanels.includes('favorites'),
			'show-track-info-panel': sidebarPanels.includes('track_info'),
			'show-files-panel': sidebarPanels.includes('files'),
			'show-analyser': preferences.get('show_analyser'),

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

	setDetailKind: function(detailKind) {

		// update menu
		//
		this.$el.find('li[type=detail-kind].selected').removeClass('selected');
		this.$el.find('.view-' + detailKind).closest('li').addClass('selected');
	},

	//
	// event handling methods
	//
	
	onChange: function() {
		if (this.parent.app.model) {
			this.setDisabled(false);
		}
	},

	//
	// mouse event handling methods
	//

	onClickVolumeUp: function() {
		this.parent.app.volumeUp();
	},

	onClickVolumeDown: function() {
		this.parent.app.volumeDown();
	},

	onClickTrackInfo: function() {
		this.toggleMenuItem('show-track-info');
		this.parent.app.setOption('show_track_info', this.isItemSelected('show-track-info'));
	}
});