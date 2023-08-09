import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, MediaPlaceholder, MediaReplaceFlow } from '@wordpress/block-editor';
import { Spinner, ToolbarButton } from '@wordpress/components';
import classNames from 'classnames';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { useEffect, useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const { title, description, alignment, id, alt, url } = attributes;
	const [blobURL, setBlobURL] = useState();

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

	const changeImage = (image) => {
		if (!image || !image.url) {
			setAttributes({
				id: undefined,
				alt: "",
				url: undefined
			});
			return;
		}
		setAttributes({
			alt: image.alt,
			url: image.url
		});
	};

	const classes = classNames(`align-${alignment}`);

	const removeImage = () => {
		setAttributes({
			id: undefined,
			alt: "",
			url: undefined
		});
	};

	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({
				url: undefined,
				alt: ""
			});
		}
	}, []);

	useEffect(() => {
		if (isBlobURL(url)) {
			setBlobURL(url);
		} else {
			revokeBlobURL(blobURL);
			setBlobURL();
		}
	}, [url]);

	return (
		<>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={changeAlignment} />
			</BlockControls>
			{url && <BlockControls group="block">
				<MediaReplaceFlow
					name={__("Replace Image", "nestedcardblock")}
					onError={(value) => console.log(value)}
					onSelect={changeImage}
					accept='image/*'
					allowedTypes={["image"]}
					mediaId={id}
					mediaURL={url}
				/>

				<ToolbarButton onClick={removeImage}>
					{__("Remove Image", "nestedcardblock")}
				</ToolbarButton>
			</BlockControls>}

			<div {...useBlockProps({
				className: classes
			})}>
				<div className={`image-container ${isBlobURL(url) ? "is-loading" : ""}`}>
					{url && <img src={url} alt={alt} />}
					{isBlobURL(url) && <Spinner />}
				</div>
				<MediaPlaceholder icon="admin-media"
					onError={(value) => console.log(value)}
					onSelect={changeImage}
					accept='image/*'
					allowedTypes={["image"]}
					disableMediaButtons={url} />
				<RichText tagName='h2' placeholder={__("Card Title", "nestedcardblock")} value={title} onChange={changeTitle} />
				<RichText tagName='p' placeholder={__("Card Description", "nestedcardblock")} value={description} onChange={changeDescription} />
			</div>
		</>
	);
}
