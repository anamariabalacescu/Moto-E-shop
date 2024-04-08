import React from 'react'
import { useState } from 'react'
import {RiSearch2Line} from '@react-icons/all-files/ri/RiSearch2Line';
import { useSearchParams } from 'react-router-dom';
import { Replace } from 'lucide-react';
import './styles/SearchBar.css'

const SearchBar = () => {
    const [focused, setFocused] = useState(false);
    const [search, setSearch] = useSearchParams();
    const onSearchChange = (e) => {
        const text = e.target.value;
        if (text.length === 0) {
            search.delete('query');
            setSearch(search, { Replace: true });
        } else {
            search.set('query', text);
            setSearch(search);
        }
    }
  return (
    <div className={'box'+ (focused ? 'focused': '')}>
        <label htmlFor="search">
            <RiSearch2Line className={'search-icon' + (focused ? 'light-purple':'')}/>
        </label>
        <input
        onBlur={()=>setFocused(false)}
        onFocus={()=>setFocused((focus)=> !focus)}
        onChange={onSearchChange}
        id='search'
        // title='search';
        type="search"
        className='input'
        placeholder='Find items...'
        />
    </div>
  )
}

export default SearchBar