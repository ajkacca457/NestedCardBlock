import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit-card';
import Save from './save-card';


registerBlockType("create-block/card-item", {
	title: __("Card Item", "nestedcardblock"),
	category: __("design", "nestedcardblock"),
	icon: "id-alt",
	description: "Card item block for nested-card-block",
	parent: ["create-block/nestedcardblock"],

	supports: {
		html: false,
		reusable: false
	},
	attributes: {
		title: {
			type: "string",
			source: "html",
			selector: "h2"
		},
		description: {
			type: "string",
			source: "html",
			selector: "p"
		},
		alignment: {
			type: "string",
			default: "left"
		},
		id: {
			type: "number",
		},
		alt: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "alt",
			default: ""
		},
		url: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src"
		}
	},

	edit: Edit,
	save: Save
});
