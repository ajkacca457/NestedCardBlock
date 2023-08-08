import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({attributes,setAttributes}) {
	const {title,description}= attributes;

	const changeTitle=(newTitle)=>{
		setAttributes({
			title:newTitle
		})
	}

	const changeDescription=(newDescription)=>{
		setAttributes({
			description:newDescription
		})
	}


	return (
		<div { ...useBlockProps() }>
            <RichText tagName='h2' placeholder={__("Card Title","nestedcardblock")} value={title} onChange={changeTitle}/>
            <RichText tagName='p' placeholder={__("Card Description","nestedcardblock")} value={description} onChange={changeDescription} />
		</div>
	);
}
