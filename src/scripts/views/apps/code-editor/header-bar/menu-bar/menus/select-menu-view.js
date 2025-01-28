/******************************************************************************\
|                                                                              |
|                              select-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying select dropdown menus.                  |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import SelectMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/select-menu-view.js';

export default SelectMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "select-all",
			"icon": "fa fa-asterisk",
			"name": "All",
			"shortcut": "command-A"
		},
		"separator",
		{
			"class": "select-word",
			"icon": "fa fa-text-width",
			"name": "Word",
			"shortcut": "command-1"
		},
		{
			"class": "select-line",
			"icon": "fa fa-arrows-alt-h",
			"name": "Line",
			"shortcut": "command-2"
		},
		{
			"class": "select-block",
			"icon": "fa fa-align-justify",
			"name": "Block",
			"shortcut": "command-3"
		},
		"separator",
		{
			"class": "select-before",
			"icon": "fa fa-long-arrow-alt-up",
			"name": "Before",
			"shortcut": "command-["
		},
		{
			"class": "select-after",
			"icon": "fa fa-long-arrow-alt-down",
			"name": "After",
			"shortcut": "command-]"
		},
		{
			"class": "select-range",
			"icon": "fa fa-arrows-alt-v",
			"name": "Range"
		}
	],

	events: {
		'click .select-all': 'onClickSelectAll',
		'click .select-invert': 'onClickSelectInvert',
		'click .select-word': 'onClickSelectWord',
		'click .select-line': 'onClickSelectLine',
		'click .select-block': 'onClickSelectBlock',
		'click .select-before': 'onClickSelectBefore',
		'click .select-after': 'onClickSelectAfter',
		'click .select-range': 'onClickSelectRange'
	},

	//
	// querying methods
	//

	disabled: function() {
		return {
			'select-invert': true
		};
	},

	//
	// mouse event handling methods
	//

	onClickSelectAll: function() {
		this.parent.app.select('all');
	},

	onClickSelectInvert: function() {
		this.parent.app.select('invert');
	},

	onClickSelectWord: function() {
		this.parent.app.select('word');
	},

	onClickSelectLine: function() {
		this.parent.app.select('line');
	},

	onClickSelectBlock: function() {
		this.parent.app.select('block');
	},

	onClickSelectBefore: function() {
		this.parent.app.select('before');
	},

	onClickSelectAfter: function() {
		this.parent.app.select('after');
	},

	onClickSelectRange: function() {
		this.parent.app.selectRange();
	},

	//
	// selection event handling methods
	//

	onSelect: function() {
		this.setItemEnabled('select-invert');
	},

	onDeselect: function() {
		this.setItemDisabled('select-invert');
	}
});