import React from 'react'
import SearchIcon from '@heroicons/react/solid/SearchIcon';
import DotsHorizontalIcon from "@heroicons/react/solid/DotsHorizontalIcon"
import VideoCameraIcon from '@heroicons/react/solid/VideoCameraIcon';
import Contact from './Contact';
const contact = [
    { src: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png", name: 'Harry Potter' },
    { src: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png", name: 'Harry Potter' },
    { src: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png", name: 'Harry Potter' },
    { src: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png", name: 'Harry Potter' },
    { src: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png", name: 'Harry Potter' },
    { src: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png", name: 'Harry Potter' },
    { src: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png", name: 'Harry Potter' },

];
function Widgets() {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6' />
                    <SearchIcon className='h-6' />
                    <DotsHorizontalIcon className='h-6' />
                </div>
            </div>
            {contact.map((contact,idx) =>
                <Contact key={idx} src={contact.src} name={contact.name} />
            )}

        </div>
    );
}

export default Widgets
