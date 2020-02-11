import React from 'react';
import './ImageLinkForm.css';

// destruct from props
const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Git it a try'}
			</p>
			<div className='center'>
			 <div className='form center pa4 br3 shadow-5'>
				<input className='fa pa2 w-70 center' type='text' onChange={onInputChange}/>
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
				onClick={onButtonSubmit}>検出</button>
			 </div>	
			</div>
		</div>
	);
}

export default ImageLinkForm;