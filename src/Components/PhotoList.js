import React from 'react';
import Photo from './Photo';
import NoPhoto from './NoPhoto';

const PhotoList = props => {

	const results = props.data;
	let photos ;

	// If finde any results display the photo
	if (results.length > 0 ) {
		photos = results.map(photo => <Photo
			     url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
	 				 key={photo.id}
				   title={photo.title} />
		)
	} else {
		photos = <NoPhoto />
	}

	return(
		<div className="photo-container">
			<h2>Results for {props.query}</h2>
			<ul>
				{photos}
			</ul>
		</div>
	);
}


export default PhotoList;
