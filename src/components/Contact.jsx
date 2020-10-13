import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';


const Contact =({name, avatar, isOnline})=> (
    <div className='Contact'>
        <div className='avatar'>
            <img  className='avatar' src={avatar} alt="David_COoper_Image"/>
        </div>
        <div className='status status-text '>
            <div className='Name'>
                {name}
            </div>
            <div className={isOnline ? 'status-online': 'status-offline' }>
                {isOnline ?  'Online': 'Offline '}
            </div>
        </div>
    </div>

);
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
export default Contact;