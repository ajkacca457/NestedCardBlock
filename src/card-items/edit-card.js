import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, MediaPlaceholder } from '@wordpress/block-editor';
import classNames from 'classnames';

export default function Edit({ attributes, setAttributes }) {
	const { title, description, alignment } = attributes;

	const changeTitle = (newTitle) => {
		setAttributes({
			title: newTitle
		});
	};

	const changeDescription = (newDescription) => {
		setAttributes({
			description: newDescription
		});
	};

	const changeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment
		});
	};

	const classes = classNames(`align-${alignment}`);

	return (
		<>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={changeAlignment} />
			</BlockControls>

			<div {...useBlockProps({
				className: classes
			})}>
				<MediaPlaceholder />
				<RichText tagName='h2' placeholder={__("Card Title", "nestedcardblock")} value={title} onChange={changeTitle} />
				<RichText tagName='p' placeholder={__("Card Description", "nestedcardblock")} value={description} onChange={changeDescription} />
			</div>
		</>
	);
}
