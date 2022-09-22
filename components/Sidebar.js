/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from "next/image";
import SidebarIcon from './SidebarIcon';
import UserIcon from "@heroicons/react/solid/UserIcon"
import UserGroupIcon from "@heroicons/react/solid/UserGroupIcon"
import ShoppingBagIcon from "@heroicons/react/solid/ShoppingBagIcon"
import DesktopComputerIcon from "@heroicons/react/solid/DesktopComputerIcon"
import CalendarIcon from "@heroicons/react/solid/CalendarIcon"
import ClockIcon from "@heroicons/react/solid/ClockIcon"
import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon"

function Sidebar() {
    return (
        <div>

            <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
                <div className='flex items-center sm:space-x-2 justify-start hover:bg-gray-200 rounded-xl cursor-pointer'>
                    <Image
                        src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png"
                        width={40}
                        height={40}
                        layout='fixed'
                    />
                    <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">Syrine Gaddour</p>
                </div>
                <SidebarIcon Icon={UserIcon} title="Friends" />
                <SidebarIcon Icon={UserGroupIcon} title="Groups" />
                <SidebarIcon Icon={ShoppingBagIcon} title="Marketplace" />
                <SidebarIcon Icon={DesktopComputerIcon} title="Watch" />
                <SidebarIcon Icon={CalendarIcon} title="Events" />
                <SidebarIcon Icon={ClockIcon} title="Memories" />
                <SidebarIcon Icon={ChevronDownIcon} title="See More" />

            </div>
        </div>
    )
}

export default Sidebar
