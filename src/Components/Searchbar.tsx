import React from 'react'
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchUserRequest } from '../Redux/User/Actions';

const { Search } = Input;

const Searchbar = () => {
    const dispatch = useDispatch();

    // dispatch the action to get the information of github user
    const onSearch = (value: string) => {
        dispatch(fetchUserRequest(value));
    }

    return (
        <div className='search-container'>
            <Search placeholder="Search Username" onSearch={onSearch} enterButton />
        </div>
    )
}

export default Searchbar;
