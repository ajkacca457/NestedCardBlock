import { useBlockProps, RichText} from '@wordpress/block-editor';
import classNames from 'classnames';


export default function save({attributes}) {
    const {title,description,alignment}=attributes;
    const classes= classNames(`align-${alignment}`);


	return (
		<div { ...useBlockProps.save({
            className:classes
            }) }>
			<RichText.Content tagName='h2' value={title}/>
            <RichText.Content tagName='p' value={description}/>
		</div>
	);
}
