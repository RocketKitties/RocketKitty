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
			"icon": "fa fa-hashtag",
			"name": "New Topic",
			"shortcut": "shift-command-enter"
		},
		{
			"class": "new-chat",
			"icon": "fa fa-comments",
			"name": "New Chat",
			"shortcut": "shift-command-enter"
		},
		"separator",
		{
			"class": "open-topics",
			"icon": "fa fa-folder",
			"name": "Open Topics",
			"shortcut": "command-O"
		},
		{
			"class": "open-chats",
			"icon": "fa fa-folder",
			"name": "Open Chats",
			"shortcut": "command-O"
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
			"class": "add-topics",
			"icon": "fa fa-plus",
			"name": "Add Topics",
			"shortcut": "command-D"
		},
		{
			"class": "remove-topics",
			"icon": "fa fa-minus",
			"name": "Remove Topics",
			"shortcut": "delete"
		},
		{
			"class": "end-chat",
			"icon": "fa fa-minus",
			"name": "End Chat",
			"shortcut": "delete"
		},
		"separator",
		{
			"class": "close-tab",
			"icon": "fa fa-xmark",
			"name": "Close Tab",
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
		'click .new-chat': 'onClickNewChat',
		'click .open-topics': 'onClickOpenTopics',
		'click .open-chats': 'onClickOpenChats',
		'click .add-topics': 'onClickAddTopics',
		'click .remove-topics': 'onClickRemoveTopics',
		'click .end-chat': 'onClickEndChat',
		'click .show-info': 'onClickShowInfo',
		'click .download-item': 'onClickDownloadItem',
		'click .close-tab': 'onClickCloseTab',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	visible: function() {
		let isSignedIn = application.isSignedIn();
		let hasSelectedOpenTopic = this.parent.app.hasSelectedOpenTopic();
		let hasSelectedOpenPost = this.parent.app.hasSelectedOpenPost();
		let hasSelectedOpenChat = this.parent.app.hasSelectedOpenChat();
		let hasSelectedOpenTab = hasSelectedOpenTopic || hasSelectedOpenPost || hasSelectedOpenChat;
		let isWindowed = this.parent.app.isWindowed();

		return {
			'new-window': true,
			'new-topic': isSignedIn,
			'new-chat': isSignedIn,
			'open-topics': isSignedIn,
			'open-chats': isSignedIn,
			'add-topics': isSignedIn,
			'remove-topics': isSignedIn,
			'end-chat': isSignedIn && hasSelectedOpenChat,
			'show-info': true,
			'download-item': true,
			'close-chat': hasSelectedOpenTab,
			'close-window': isWindowed
		};
	},

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let hasTabs = this.parent.app.hasTabs();
		let hasSelected = this.parent.app.hasSelected();
		let isChat = this.parent.app.hasSelectedOpenChat();
		let hasSelectedTopic = this.parent.app.hasSelectedTopic();
		let hasSelectedPost = this.parent.app.hasSelectedPost();
		let selectedTopic = this.parent.app.getSelectedTopics()[0];
		let isTopicRequired = selectedTopic && selectedTopic.isRequired();
		let isTopicOwned = selectedTopic && selectedTopic.isOwnedBy(application.session.user);
		let hasSelectedItem = this.parent.app.hasSelectedFileItem();

		return {
			'new-window': true,
			'new-topic': isSignedIn,
			'new-chat': isSignedIn,
			'open-topics': isSignedIn,
			'open-chats': isSignedIn,
			'add-topics': isSignedIn,
			'remove-topics': isSignedIn && hasSelectedTopic && !hasSelectedItem && !hasSelectedPost && !isTopicOwned && !isTopicRequired,
			'end-chat': isChat && !hasSelected,
			'show-info': hasTabs,
			'download-item': hasSelectedItem,
			'close-tab': hasTabs,
			'close-window': true
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

	onClickNewChat: function() {
		this.parent.app.showChatInvitationsDialog();
	},

	onClickOpenTopics: function() {
		this.parent.app.openSelectedTopics();
	},

	onClickOpenChats: function() {
		this.parent.app.openSelectedChats();
	},

	onClickAddTopics: function() {
		this.parent.app.showAddTopicsDialog();
	},

	onClickRemoveTopics: function() {
		this.parent.app.removeSelectedTopics();
	},

	onClickEndChat: function() {
		this.parent.app.endSelectedChat();
	},

	onClickShowInfo: function() {
		this.parent.app.showInfoDialog();
	},

	onClickDownloadItem: function() {
		this.parent.app.download();
	},

	onClickCloseTab: function() {
		this.parent.app.closeActiveTab();
	}
});