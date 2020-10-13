import React from 'react';
import './Contact.css'

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
export default Contact;