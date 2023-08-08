import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


registerBlockType( "create-block/card-item", {
    title :__("Card Item", "nestedcardblock") ,
	category: __("design","nestedcardblock"),
	icon: "id-alt",
	description: "Card item block for nested-card-block",
    parent:["create-block/nestedcardblock"],
	edit: ()=><p>Edit inner block</p>,
	save: ()=><p>Save inner block</p>
} );
