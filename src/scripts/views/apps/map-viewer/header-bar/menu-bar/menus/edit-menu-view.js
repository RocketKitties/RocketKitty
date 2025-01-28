/******************************************************************************\
|                                                                              |
|                               edit-menu-view.js                              |
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

import EditMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/edit-menu-view.js';

export default EditMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "edit-selected",
			"icon": "fa fa-pencil-alt",
			"name": "Edit Selected",
			"shortcut": "command-E"
		},
		"separator",
		{
			"class": "add-photos",
			"icon": "fa fa-camera",
			"name": "Add Photos",
			"shortcut": "command-P"
		},
		{
			"class": "add-videos",
			"icon": "fa fa-video",
			"name": "Add Videos",
			"shortcut": "command-V"
		},
		{
			"class": "add-people",
			"icon": "fa fa-user-friends",
			"name": "Add People",
			"shortcut": "shift-command-P"
		},
		{
			"class": "add-place",
			"icon": "fa fa-map-marker-alt",
			"name": "Add Place",
			"shortcut": "shift-command-L"
		},
		{
			"class": "add-favorite",
			"icon": "fa fa-map-pin",
			"name": "Add Favorite",
			"shortcut": "shift-command-F"
		},
		"separator",
		{
			"class": "delete-selected",
			"icon": "fa fa-trash-alt",
			"name": "Delete Selected",
			"shortcut": "delete"
		}
	],
	
	events: {
		'click .edit-selected': 'onClickEditSelected',
		'click .add-place': 'onClickAddPlace',
		'click .add-favorite': 'onClickAddFavorite',
		'click .add-photos': 'onClickAddPhotos',
		'click .add-videos': 'onClickAddVideos',
		'click .add-people': 'onClickAddPeople',
		'click .delete-selected': 'onClickDeleteSelected',
	},
	
	//
	// querying methods
	//

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let hasSelectedPlaces = this.parent.app.hasSelectedMapItems('places');
		let hasSelectedFavorites = this.parent.app.hasSelectedMapItems('favorites');
		let hasSelected = this.parent.app.hasSelected();

		return {
			'edit-selected': hasSelectedPlaces || hasSelectedFavorites,
			'add-place': isSignedIn,
			'add-favorite': isSignedIn,
			'add-photos': isSignedIn,
			'add-videos': isSignedIn,
			'add-people': isSignedIn,
			'delete-selected': hasSelected
		};
	},

	//
	// mouse event handling methods
	//

	onClickEditSelected: function() {
		this.parent.app.editSelected();
	},

	onClickAddPlace: function() {
		this.parent.app.addPlace();
	},

	onClickAddFavorite: function() {
		this.parent.app.addFavorite();
	},

	onClickAddPhotos: function() {
		this.parent.app.showAddPhotosDialog();
	},

	onClickAddVideos: function() {
		this.parent.app.showAddVideosDialog();
	},

	onClickAddPeople: function() {
		this.parent.app.showAddPeopleDialog();
	},

	onClickDeleteSelected: function() {
		this.parent.app.deleteSelected();
	}
});