/******************************************************************************\
|                                                                              |
|                               file-menu-view.js                              |
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

import Item from '../../../../../../models/storage/item.js';
import FileMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/file-menu-view.js';

export default FileMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "new-window",
			"icon": "far fa-window-maximize",
			"name": "New Window",
			"shortcut": "command-enter"
		},
		{
			"class": "new-topic",
			"icon": "fa fa-plus",
			"name": "New Topic",
			"shortcut": "shift-command-enter"
		},
		{
			"class": "open-topics",
			"icon": "fa fa-folder",
			"name": "Open Topics",
			"shortcut": "command-O"
		},
		"separator",
		{
			"class": "add-topics",
			"icon": "fa fa-plus",
			"name": "Add Topics",
			"shortcut": "command-D"
		},
		{
			"class": "remove-topics",
			"icon": "fa fa-minus",
			"name": "Remove Topics",
			"shortcut": "command-delete"
		},
		"separator",
		{
			"class": "show-info",
			"icon": "fa fa-info-circle",
			"name": "Show Info",
			"shortcut": "command-I"
		},
		{
			"class": "download-item",
			"icon": "fa fa-download",
			"name": "Download",
			"shortcut": "shift-command-D"
		},
		"separator",
		{
			"class": "close-topic",
			"icon": "fa fa-xmark",
			"name": "Close Topic",
			"shortcut": "command-L"
		},
		{
			"class": "close-post",
			"icon": "fa fa-xmark",
			"name": "Close Post",
			"shortcut": "command-L"
		},
		"separator",
		{
			"class": "close-window",
			"icon": "fa fa-circle-xmark",
			"name": "Close",
			"shortcut": "command-L"
		}
	],

	events: {
		'click .new-window': 'onClickNewWindow',
		'click .new-topic': 'onClickNewTopic',
		'click .open-topics': 'onClickOpenTopics',
		'click .add-topics': 'onClickAddTopics',
		'click .remove-topics': 'onClickRemoveTopics',
		'click .show-info': 'onClickShowInfo',
		'click .download-item': 'onClickDownloadItem',
		'click .close-topic': 'onClickCloseTopic',
		'click .close-post': 'onClickClosePost',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	visible: function() {
		let isSignedIn = application.isSignedIn();
		let hasSelectedOpenTopic = this.parent.app.hasSelectedOpenTopic();
		let hasSelectedOpenPost = this.parent.app.hasSelectedOpenPost();
		let isDesktop = this.parent.app.isDesktop();

		return {
			'new-window': true,
			'new-topic': isSignedIn,
			'open-topic': isSignedIn,
			'add-topics': isSignedIn,
			'remove-topics': isSignedIn,
			'show-info': isSignedIn,
			'download-item': isSignedIn,
			'close-topic': isSignedIn && hasSelectedOpenTopic,
			'close-post': isSignedIn && hasSelectedOpenPost,
			'close-window': !isDesktop
		};
	},

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let hasTabs = this.parent.app.hasTabs();
		let hasOpenItem = this.parent.app.hasOpenItem();
		let hasSelectedTopic = this.parent.app.hasSelectedTopic();
		let hasSelectedPost = this.parent.app.hasSelectedPost();
		let selectedTopic = hasSelectedTopic? this.parent.app.getSelectedTopics()[0] : undefined;
		let isTopicRequired = hasSelectedTopic && selectedTopic.isRequired();
		let isTopicOwned = hasSelectedTopic && selectedTopic.isOwnedBy(application.session.user);
		let hasSelectedItem = this.parent.app.selected && this.parent.app.selected.model instanceof Item;

		return {
			'new-window': true,
			'new-topic': isSignedIn,
			'open-topic': isSignedIn,
			'add-topics': isSignedIn && !hasSelectedTopic,
			'remove-topic': isSignedIn && hasSelectedTopic && !hasSelectedItem && !hasSelectedPost && !isTopicOwned && !isTopicRequired,
			'show-info': hasOpenItem || hasSelectedTopic,
			'download-item': hasSelectedItem,
			'close-topic': hasTabs,
			'close-post': hasTabs
		};
	},

	//
	// setting methods
	//

	setTopic: function(topic) {
		this.setItemDisabled('remove-topic', topic.isRequired() || 
			topic.isOwnedBy(application.session.user));
	},
	
	//
	// selection event handling methods
	//

	onSelect: function() {
		this.onChange();
	},

	onDeselect: function() {
		this.onChange();
	},

	//
	// mouse event handling methods
	//

	onClickNewTopic: function() {
		this.parent.app.showNewTopicDialog();
	},

	onClickOpenTopics: function() {
		this.parent.app.openSelectedTopics();
	},

	onClickAddTopics: function() {
		this.parent.app.showAddTopicsDialog();
	},

	onClickRemoveTopics: function() {
		this.parent.app.removeSelectedTopics();
	},

	onClickShowInfo: function() {
		this.parent.app.showInfoDialog();
	},

	onClickDownloadItem: function() {
		this.parent.app.download();
	},

	onClickCloseTopic: function() {
		this.parent.app.closeActiveTab();
	},

	onClickClosePost: function() {
		this.parent.app.closeActiveTab();
	}
});