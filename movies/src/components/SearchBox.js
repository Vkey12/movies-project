

const SearchBox =(props) => {
	return (
		<div className='col col-sm-4' >
			<input className='form-control'
				value={props.value} ></input>
			
		</div>
	);
};

export default SearchBox;