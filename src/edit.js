import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import classNames from 'classnames';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { columns } = attributes;

	const changeColumns = (newColumns) => {
		setAttributes({
			columns: newColumns
		});
	};

	const classes = classNames({
		[`column-${columns}`]: columns
	});


	return (
		<>
			<InspectorControls>
				<PanelBody>
					<RangeControl label={__("Number of Columns", "nestedcardblock")} min={1} max={3} onChange={changeColumns} value={columns}></RangeControl>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({
				className: classes
			})}>
				<InnerBlocks allowedBlocks={['create-block/card-item']} template={[
					['create-block/card-item'],
					['create-block/card-item'],
					['create-block/card-item']
				]} />
			</div>
		</>
	);
}
