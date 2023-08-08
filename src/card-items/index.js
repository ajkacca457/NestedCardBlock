import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit-card';
import Save from './save-card';


registerBlockType( "create-block/card-item", {
    title :__("Card Item", "nestedcardblock") ,
	category: __("design","nestedcardblock"),
	icon: "id-alt",
	description: "Card item block for nested-card-block",
    parent:["create-block/nestedcardblock"],

	supports : {
		html:false,
		reusable:false
	},
	attributes: {
		title :{
			type:"string",
			source:"html",
			selector:"h2"
		},
		description :{
			type:"string",
			source:"html",
			selector:"p"
		}
	},

	edit: Edit,
	save: Save
} );
