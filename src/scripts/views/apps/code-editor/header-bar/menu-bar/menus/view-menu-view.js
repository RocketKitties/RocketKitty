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
			"class": "font-sizes",
			"icon": "fa fa-font",
			"name": "Font Size",
			"select": true,
			"menu": [
				{
					"class": "font-size-10",
					"group": "font-size",
					"name": "10",
					"select": true
				},
				{
					"class": "font-size-11",
					"group": "font-size",
					"name": "11",
					"select": true
				},
				{
					"class": "font-size-12",
					"group": "font-size",
					"name": "12",
					"select": true
				},
				{
					"class": "font-size-13",
					"group": "font-size",
					"name": "13",
					"select": true
				},
				{
					"class": "font-size-14",
					"group": "font-size",
					"name": "14",
					"select": true
				},
				{
					"class": "font-size-15",
					"group": "font-size",
					"name": "15",
					"select": true
				},
				{
					"class": "font-size-16",
					"group": "font-size",
					"name": "16",
					"select": true
				},
				{
					"class": "font-size-18",
					"group": "font-size",
					"name": "18",
					"select": true
				},
				{
					"class": "font-size-20",
					"group": "font-size",
					"name": "20",
					"select": true
				},
				{
					"class": "font-size-24",
					"group": "font-size",
					"name": "24",
					"select": true
				},
				"separator",
				{
					"class": "decrease-font-size",
					"icon": "fa fa-minus",
					"name": "Decrease",
					"shortcut": "shift-command-["
				},
				{
					"class": "increase-font-size",
					"icon": "fa fa-plus",
					"name": "Increase",
					"shortcut": "shift-command-]"
				}
			]
		},
		"separator",
		{
			"class": "show-gutter",
			"icon": "fa fa-ellipsis-v",
			"name": "Gutter",
			"select": true
		},
		{
			"class": "show-indent-guides",
			"icon": "fa fa-indent",
			"name": "Indent Guides",
			"select": true
		},
		{
			"class": "show-print-margin",
			"icon": "fa fa-print",
			"name": "Print Margin",
			"select": true
		},
		{
			"class": "show-invisibles",
			"icon": "fa fa-blind",
			"name": "Invisibles",
			"select": true
		},
		"separator",
		{
			"class": "tabify",
			"icon": "fa fa-long-arrow-alt-right",
			"name": "Tabify"
		},
		{
			"class": "untabify",
			"icon": "fa fa-angle-double-right",
			"name": "Untabify"
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
					"class": "show-run-bar",
					"group": "show-toolbar",
					"icon": "fa fa-play",
					"name": "Run",
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
			"class": "show-console",
			"icon": "fa fa-chart-bar",
			"name": "Console",
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
		'click .font-size': 'onClickFontSize',
		'click .decrease-font-size': 'onClickDecreaseFontSize',
		'click .increase-font-size': 'onClickIncreaseFontSize',
		'click .show-gutter': 'onClickOption',
		'click .show-indent-guides': 'onClickOption',
		'click .show-print-margin': 'onClickOption',
		'click .show-invisibles': 'onClickOption',
		'click .tabify': 'onClickTabify',
		'click .untabify': 'onClickUntabify',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .show-toolbar > a': 'onClickShowToolbar',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .show-sidebar-panel > a': 'onClickShowSideBarPanel',
		'click .sidebar-view-kind > a': 'onClickSideBarViewKind',
		'click .show-console': 'onClickOption',

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
		'click .view-preferences': 'onClickViewPreferences',
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
		let fontSize = preferences.get('font_size');
		let toolbars = preferences.get('toolbars') || [];
		let sidebarPanels = preferences.get('sidebar_panels') || [];
		let sidebarViewKind = preferences.get('sidebar_view_kind');

		return {

			// font options
			//
			'font-size-10': fontSize == 10,
			'font-size-11': fontSize == 11,
			'font-size-12': fontSize == 12,
			'font-size-13': fontSize == 13,
			'font-size-14': fontSize == 14,
			'font-size-15': fontSize == 15,
			'font-size-16': fontSize == 16,
			'font-size-18': fontSize == 18,
			'font-size-20': fontSize == 20,
			'font-size-24': fontSize == 24,

			// editing options
			//
			'show-gutter': preferences.get('show_gutter'),
			'show-indent-guides': preferences.get('show_indent_guides'),
			'show-print-margin': preferences.get('show_print_margin'),
			'show-invisibles': preferences.get('show_invisibles'),

			// toolbar options
			//
			'show-toolbars': toolbars.length > 0,
			'show-nav-bar': toolbars.includes('nav'),
			'show-run-bar': toolbars.includes('run'),

			// sidebar options
			//
			'show-sidebar': preferences.get('show_sidebar'),
			'show-files-panel': sidebarPanels.includes('files'),
			'show-favorites-panel': sidebarPanels.includes('favorites'),
			'show-console': preferences.get('show_console'),

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
	// mouse event handling methods
	//

	onClickFontSize: function(event) {
		let className = $(event.target).closest('a').attr('class')
			.replace('dropdown-toggle', '').trim();
		let fontSize = parseInt(className.replace('font-size-', ''));
		this.$el.find('.font-size').removeClass('selected');
		this.setItemSelected('font-size-' + fontSize, true);
		this.parent.app.setOption('font_size', fontSize);
	},

	onClickDecreaseFontSize: function() {
		let items = this.$el.find('.font-size');
		for (let i = 0; i < items.length; i++) {
			let item = items[i];
			if ($(item).hasClass('selected')) {
				if (i > 0) {
					let prevItem = items[i - 1];
					let className = $(prevItem).find('a').attr('class');
					let fontSize = parseInt(className.replace('font-size-', ''));
					$(item).removeClass('selected');
					this.setItemSelected('font-size-' + fontSize, true);
					this.parent.app.setOption('font_size', fontSize);
					return;
				}
			}
		}
	},

	onClickIncreaseFontSize: function() {
		let items = this.$el.find('.font-size');
		for (let i = 0; i < items.length; i++) {
			let item = items[i];
			if ($(item).hasClass('selected')) {
				if (i < items.length - 1) {
					let prevItem = items[i + 1];
					let className = $(prevItem).find('a').attr('class');
					let fontSize = parseInt(className.replace('font-size-', ''));
					$(item).removeClass('selected');
					this.setItemSelected('font-size-' + fontSize, true);
					this.parent.app.setOption('font_size', fontSize);
					return;
				}
			}
		}
	},

	onClickTabify: function() {
		this.parent.app.tabify();
		this.setItemSelected('show-invisibles');
		this.parent.app.setOption('show_invisibles', true);
	},

	onClickUntabify: function() {
		this.parent.app.untabify();
		this.setItemSelected('show-invisibles');
		this.parent.app.setOption('show_invisibles', true);
	}
});