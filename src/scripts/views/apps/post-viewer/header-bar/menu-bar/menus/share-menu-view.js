/******************************************************************************\
|                                                                              |
|                               share-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying share dropdown menus.                   |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import Topic from '../../../../../../models/topics/topic.js';
import Post from '../../../../../../models/topics/post.js';
import Comment from '../../../../../../models/comments/comment.js';
import Reply from '../../../../../../models/comments/reply.js';
import ShareMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/share-menu-view.js';

export default ShareMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "like-post",
			"group": "like post-option",
			"icon": "fa fa-thumbs-up",
			"name": "Like Post",
			"shortcut": "command-+"
		},
		{
			"class": "reply-to-post",
			"group": "reply post-option",
			"icon": "fa fa-comment",
			"name": "Comment on Post",
			"shortcut": ""
		},
		{
			"class": "like-comment",
			"group": "like comment-option",
			"icon": "fa fa-thumbs-up",
			"name": "Like Comment",
			"shortcut": "command-+"
		},
		{
			"class": "reply-to-comment",
			"group": "reply comment-option",
			"icon": "fa fa-reply",
			"name": "Reply to Comment",
			"shortcut": ""
		},
		{
			"class": "like-reply",
			"group": "like reply-option",
			"icon": "fa fa-thumbs-up",
			"name": "Like Reply",
			"shortcut": "command-+"
		},
		{
			"class": "reply-to-reply",
			"group": "reply reply-option",
			"icon": "fa fa-reply",
			"name": "Reply to Reply",
			"shortcut": ""
		},
		"separator",
		{
			"class": "share-by-topic",
			"icon": "fa fa-newspaper",
			"name": "By Discussion Topic"
		},
		{
			"class": "share-by-message",
			"icon": "fa fa-comments",
			"name": "By Chat Messsage"
		},
		"separator",
		{
			"class": "share-by-link",
			"icon": "fa fa-link",
			"name": "By Link"
		}
	],

	events: {
		'click .like-post': 'onClickLikeItem',
		'click .like-comment': 'onClickLikeItem',
		'click .like-reply': 'onClickLikeItem',

		'click .reply-to-post': 'onClickReplyToItem',
		'click .reply-to-comment': 'onClickReplyToItem',
		'click .reply-to-reply': 'onClickReplyToItem',

		// share with connections
		//
		'click .share-by-message': 'onClickShareByMessage',

		// share with anyone
		//
		'click .share-by-link': 'onClickShareByLink',
		'click .share-by-email': 'onClickShareByEmail',

		// share with everyone
		//
		'click .share-by-topic': 'onClickShareByTopic'
	},

	//
	// querying methods
	//

	disabled: function() {
		if (application.isSignedIn()) {
			return {
				'share-by-link': false
			};
		} else {
			return {
				'share-topic-by-invitation': true,
				'share-by-link': false
			};
		}
	},

	//
	// selection event handling methods
	//

	onSelect: function(view) {
		let model = view.model;
		if (model instanceof Topic) {
			this.$el.find('.topic-option').show();
			this.$el.find('.post-option').hide();
			this.$el.find('.comment-option').hide();
			this.$el.find('.reply-option').hide();
		} else if (model instanceof Post) {
			this.$el.find('.topic-option').hide();
			this.$el.find('.post-option').show();
			this.$el.find('.comment-option').hide();
			this.$el.find('.reply-option').hide();
		} else if (model instanceof Comment) {
			this.$el.find('.topic-option').hide();
			this.$el.find('.post-option').hide();
			this.$el.find('.comment-option').show();
			this.$el.find('.reply-option').hide();
		} else if (model instanceof Reply) {
			this.$el.find('.topic-option').hide();
			this.$el.find('.post-option').hide();
			this.$el.find('.comment-option').hide();
			this.$el.find('.reply-option').show();
		} else {
			this.$el.find('.topic-option').hide();
			this.$el.find('.post-option').hide();
			this.$el.find('.comment-option').hide();
			this.$el.find('.reply-option').hide();
		}

		// set enabled / disabled state
		//
		let likeable = model.isLikeableByCurrentUser();
		if (likeable) {
			this.$el.find('li.like').removeClass('disabled');
		} else {
			this.$el.find('li.like').addClass('disabled');
		}
	},

	onDeselect: function() {
		this.$el.find('.topic-option').show();
		this.$el.find('.post-option').hide();
		this.$el.find('.comment-option').hide();
		this.$el.find('.reply-option').hide();
	},
	
	//
	// mouse event handling methods
	//

	onClickLikeItem: function() {
		this.parent.app.selected.like();
	},

	onClickReplyToItem: function() {
		this.parent.app.selected.reply();
	},

	onClickShareByMessage: function() {
		this.parent.app.shareByMessage();
	},

	onClickShareByLink: function() {
		this.parent.app.shareByLink();
	},

	onClickShareByEmail: function() {
		this.parent.app.shareByEmail();
	},

	onClickShareByTopic: function() {
		this.parent.app.shareByTopic();
	}
});