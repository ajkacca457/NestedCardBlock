import { useBlockProps, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';


export default function save({ attributes }) {
    const { title, description, alignment, alt, url } = attributes;
    const classes = classNames(`align-${alignment}`);


    return (
        <div {...useBlockProps.save({
            className: classes
        })}>
            <div className='image-container'>
                {url ? <img src={url} alt={alt} /> : <div className='placeholder'>Place Holder</div>}
            </div>
            {title && <RichText.Content tagName='h2' value={title} />}
            {description && <RichText.Content tagName='p' value={description} />}
        </div>
    );
}
