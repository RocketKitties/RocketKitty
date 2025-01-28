/******************************************************************************\
|                                                                              |
|                             context-menu-view.js                             |
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

import ContextMenuView from '../../../../views/apps/common/context-menus/context-menu-view.js';

export default ContextMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "new-map",
			"icon": "fa fa-map",
			"name": "New Map",
			"shortcut": "command-enter"
		},
		{
			"class": "open-item",
			"icon": "fa fa-folder-open",
			"name": "Open",
			"shortcut": "command-O"
		},
		"separator",
		{
			"class": "show-info",
			"icon": "fa fa-info-circle",
			"name": "Show Info",
			"shortcut": "command-I"
		},
		"separator",
		{
			"class": "share",
			"icon": "fa fa-share",
			"name": "Share",
			"menu": [
				{
					"class": "share-with-connections",
					"icon": "fa fa-user-friends",
					"name": "With Connections"
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
				},
				{
					"class": "share-by-email",
					"icon": "fa fa-envelope",
					"name": "By Email"
				}
			]
		},
		"separator",
		{
			"class": "zoom-to",
			"icon": "fa fa-search",
			"name": "Zoom To",
			"shortcut": "command-Z"
		},
		"separator",
		{
			"class": "add-photos",
			"icon": "fa fa-camera",
			"name": "Add Photos",
			"shortcut": "shift-command-O"
		},
		{
			"class": "remove-photos",
			"icon": "fa fa-minus",
			"name": "Remove Photos",
			"shortcut": "delete"
		},
		{
			"class": "add-videos",
			"icon": "fa fa-video",
			"name": "Add Videos",
			"shortcut": "shift-command-O"
		},
		{
			"class": "remove-videos",
			"icon": "fa fa-minus",
			"name": "Remove Videos",
			"shortcut": "delete"
		},
		{
			"class": "add-people",
			"icon": "fa fa-user-friends",
			"name": "Add People",
			"shortcut": "shift-command-F"
		},
		{
			"class": "remove-people",
			"icon": "fa fa-minus",
			"name": "Remove People",
			"shortcut": "delete"
		},
		{
			"class": "add-place",
			"icon": "fa fa-map-marker-alt",
			"name": "Add Place",
			"shortcut": "command-P"
		},
		{
			"class": "edit-place",
			"icon": "fa fa-pencil-alt",
			"name": "Edit Place",
			"shortcut": "command-E"
		},
		{
			"class": "delete-place",
			"icon": "fa fa-trash-alt",
			"name": "Delete Place",
			"shortcut": "delete"
		},
		{
			"class": "add-favorite",
			"icon": "fa fa-map-pin",
			"name": "Add Favorite",
			"shortcut": "command-1"
		},
		{
			"class": "edit-favorite",
			"icon": "fa fa-pencil-alt",
			"name": "Edit Favorite",
			"shortcut": "command-E"
		},
		{
			"class": "delete-favorite",
			"icon": "fa fa-trash-alt",
			"name": "Delete Favorite",
			"shortcut": "delete"
		},
		"separator",
		{
			"class": "save-map",
			"icon": "fa fa-save",
			"name": "Save",
			"shortcut": "command-S"
		},
		{
			"class": "save-as",
			"icon": "fa fa-save",
			"name": "Save As",
			"shortcut": "shift-command-S"
		}
	],

	events: _.extend({}, ContextMenuView.prototype.events, {
		'click .new-map': 'onClickNewMap',
		'click .open-item': 'onClickOpenItem',
		'click .show-info': 'onClickShowInfo',

		// share with connections
		//
		'click .share-by-invitation': 'onClickShareByInvitation',
		'click .share-by-topic': 'onClickShareByTopic',
		'click .share-by-message': 'onClickShareByMessage',

		// share with anyone
		//
		'click .share-by-link': 'onClickShareByLink',
		'click .share-by-email': 'onClickShareByEmail',

		// edit map
		//
		'click .add-photos': 'onClickAddPhotos',
		'click .remove-photos': 'onClickRemovePhotos',
		'click .add-videos': 'onClickAddVideos',
		'click .remove-videos': 'onClickRemoveVideos',
		'click .add-people': 'onClickAddPeople',
		'click .remove-people': 'onClickRemovePeople',
		'click .add-place': 'onClickAddPlace',
		'click .edit-place': 'onClickEditPlace',
		'click .delete-place': 'onClickDeletePlace',
		'click .add-favorite': 'onClickAddFavorite',
		'click .edit-favorite': 'onClickEditFavorite',
		'click .delete-favorite': 'onClickDeleteFavorite',

		'click .zoom-to': 'onClickZoomTo',
		'click .save-map': 'onClickSaveMap',
		'click .save-as': 'onClickSaveAs'
	}),

	//
	// querying methods
	//

	visible: function() {
		let hasSelectedPhotos = this.parent.hasSelectedLayerItems('photos');
		let hasSelectedVideos = this.parent.hasSelectedLayerItems('videos');
		let hasSelectedPeople = this.parent.hasSelectedLayerItems('people');
		let hasSelectedPlaces = this.parent.hasSelectedLayerItems('places');
		let hasSelectedFavorites = this.parent.hasSelectedLayerItems('favorites');
		let hasSelected = hasSelectedPhotos || hasSelectedVideos || hasSelectedPeople || hasSelectedPlaces || hasSelectedFavorites;

		return {
			'new-map': !hasSelected,
			'open-item': !hasSelectedPlaces && !hasSelectedFavorites,
			'add-photos': !hasSelected,
			'remove-photos': hasSelectedPhotos,
			'add-videos': !hasSelected,
			'remove-videos': hasSelectedVideos,
			'add-people': !hasSelected,
			'remove-people': hasSelectedPeople,
			'add-place': !hasSelected,
			'edit-place': hasSelectedPlaces,
			'delete-place': hasSelectedPlaces,
			'add-favorite': !hasSelected,
			'edit-favorite': hasSelectedFavorites,
			'delete-favorite': hasSelectedFavorites,
			'show-info': hasSelected,
			'zoom-to': hasSelected,
			'save-map': !hasSelected,
			'save-as': !hasSelected
		};
	},

	//
	// rendering methods
	//

	templateContext: function() {
		return {
			is_desktop: this.parent.isDesktop()
		};
	},

	//
	// mouse event handling methods
	//

	onClickNewMap: function() {
		this.parent.newFile();
	},

	onClickOpenItem: function() {
		this.parent.openSelected();
	},

	onClickShowInfo: function() {
		this.parent.showInfoDialog();
	},

	onClickShareByInvitation: function() {
		this.parent.shareWithConnections();
	},

	onClickShareByTopic: function() {
		this.parent.shareByTopic();
	},

	onClickShareByMessage: function() {
		this.parent.shareByMessage();
	},

	onClickShareByLink: function() {
		this.parent.shareByLink();
	},

	onClickShareByEmail: function() {
		this.parent.shareByEmail();
	},

	onClickAddPhotos: function() {
		this.parent.showAddPhotosDialog();
	},
	
	onClickRemovePhotos: function() {
		this.parent.removeSelectedPhotos();
	},

	onClickAddVideos: function() {
		this.parent.showAddVideosDialog();
	},
	
	onClickRemoveVideos: function() {
		this.parent.removeSelectedVideos();
	},

	onClickAddPeople: function() {
		this.parent.showAddPeopleDialog();
	},

	onClickRemovePeople: function() {
		this.parent.removeSelectedPeople();
	},

	onClickAddPlace: function() {
		this.parent.addPlace();
	},

	onClickEditPlace: function() {
		this.parent.editPlace(this.parent.getSelectedLayerItems('places')[0]);
	},

	onClickDeletePlace: function() {
		this.parent.deletePlace(this.parent.getSelectedLayerItems('places')[0]);
	},

	onClickAddFavorite: function() {
		this.parent.addFavorite();
	},

	onClickEditFavorite: function() {
		this.parent.editFavorite(this.parent.getSelectedLayerItems('favorites')[0]);
	},

	onClickDeleteFavorite: function() {
		this.parent.deleteFavorite(this.parent.getSelectedLayerItems('favorites')[0]);
	},

	onClickZoomTo: function() {
		this.parent.zoomToItem(this.parent.getSelectedItem());
	},

	onClickSaveMap: function() {
		this.parent.save();
	},

	onClickSaveAs: function() {
		this.parent.saveAs();
	},

	onClickCloseMap: function() {
		this.parent.close();
	}
});