import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);
    const [country, setCountry]  = useState('Pound');

    const changeCurrency = (val, text)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
            setCountry(text);
    };
    
  return (
        <DropdownButton id="dropdown-basic-button" title={`Currency (${currency} ${country})`} variant="success">
            <Dropdown.Item onClick={event=>changeCurrency('$', 'Dollar')}>$ Dollar</Dropdown.Item>
            <Dropdown.Item onClick={event=>changeCurrency('£', 'Pound')}>£ Pound</Dropdown.Item>
            <Dropdown.Item onClick={event=>changeCurrency('€', 'Euro')}>€ Euro</Dropdown.Item>
            <Dropdown.Item onClick={event=>changeCurrency('₹', 'Ruppee')}>₹ Ruppee</Dropdown.Item>
        </DropdownButton>
    );
};

export default Currency;