/* eslint-disable react/jsx-key */
import React from 'react'
import StoryCard from './StoryCard'


const stories = [
    {
        name: 'sirine hgfv',
        src: "http://links.papareact.com/k2j",
        profile: "http://links.papareact.com/f0p"
    },
    {
        name: 'gggg jhcbvdsjv',
        src: "http://links.papareact.com/xql",
        profile: "http://links.papareact.com/snf"
    },
    {
        name: 'sirine hgfv',
        src: "http://links.papareact.com/k2j",
        profile: "http://links.papareact.com/f0p"
    },
    {
        name: 'gggg jhcbvdsjv',
        src: "http://links.papareact.com/xql",
        profile: "http://links.papareact.com/snf"
    },
    {
        name: 'sirine hgfv',
        src: "http://links.papareact.com/k2j",
        profile: "http://links.papareact.com/f0p"
    },
]
function Stories() {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}

        </div>
    );
}

export default Stories;
