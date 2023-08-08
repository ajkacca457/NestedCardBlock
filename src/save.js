import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classNames from 'classnames';

export default function save({attributes}) {
	const {columns}= attributes;
	const classes= classNames({
		[`column-${columns}`]:columns
	})
	return (
		<div { ...useBlockProps.save({
			className:classes
		}) }>
			<InnerBlocks.Content/>
		</div>
	);
}
