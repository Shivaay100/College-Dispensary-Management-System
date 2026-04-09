import React from 'react'
import './searchBox.css'
import SearchIcon from '@mui/icons-material/Search';
const SearchBox = (props) => {
    const placeholder = props.placeholder?props.placeholder:'Search';
    const value = props.value?props.value:"";

    const handleOnChange = (event)=>{
        if(props.onChange){
            props.onChange(event.target.value);
        }
    }
  return (
    <div className='page-searchBox'>
        <input className='input-box' value={value} onChange={(event)=>handleOnChange(event)} placeholder={placeholder} />
            <div className='search-btn'>
                <SearchIcon />
            </div>
    </div>
  )
}

export default SearchBox