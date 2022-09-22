/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from "next/image";
import EmojiHappyIcon from "@heroicons/react/solid/EmojiHappyIcon"
import VideoCameraIcon from "@heroicons/react/solid/VideoCameraIcon"
import CameraIcon from "@heroicons/react/solid/CameraIcon"
import { useRef } from 'react';
function InputBox() {
    const sendPost = (e) => {
        e.preventDefault();
    };

    const inputRef = useRef(null);
   
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image
                    className='rounded-full'
                    src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png"
                    width={40}
                    height={40}
                    layout='fixed'
                />

                <form className='flex flex-1'>
                    <input
                        className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                        type="text"
                        ref={inputRef}
                        placeholder={"what's on your mind, Syrine gaddour ?"} />

                    {/* <button type='submit'  >Submit</button> */}
                </form>
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400 ' />
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300' />
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
