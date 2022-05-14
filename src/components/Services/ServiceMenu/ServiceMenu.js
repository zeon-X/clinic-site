import React from 'react';
import './ServiceMenu.css'

const ServiceMenu = ({ data, func }) => {
    const { menuTitle, id } = data;
    const { title, d } = menuTitle;
    return (
        <p
            onClick={() => {
                func(id);
            }}
            className='menu-item flex justify-center items-center my-3' >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>

            {title}
        </p>
    );
};

export default ServiceMenu;