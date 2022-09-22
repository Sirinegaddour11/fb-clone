/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import SearchIcon from "@heroicons/react/solid/SearchIcon"
import HomeIcon from "@heroicons/react/solid/HomeIcon"
import PlayIcon from "@heroicons/react/solid/PlayIcon"
import FlagIcon from "@heroicons/react/solid/FlagIcon"
import ShoppingCartIcon from "@heroicons/react/solid/ShoppingCartIcon"
import UserGroupIcon from "@heroicons/react/solid/UserGroupIcon"
import ViewGridIcon from "@heroicons/react/solid/ViewGridIcon"
import ChatIcon from "@heroicons/react/solid/ChatIcon"
import BellIcon from "@heroicons/react/solid/BellIcon"
import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon"

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md ">

            {/*left*/}
            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <div className="hidden md:inline-flex  ml-2 items-center rounded-full bg-gray-100 p-2">

                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink "
                        type="text" placeholder="Search Facebook" />
                </div>
            </div>
            {/*Center*/}
            <div className="flex justify-center flex-grow ">
                <div className="flex space-x-6 md:space-x-2 ">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>

            </div>
            {/*Right*/}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/*Profile pic */}
                <Image
                    src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png"
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <p className="hidden lg:inline-flex text-smwhitespace-nowrap font-semibold pr-3">Syrine Gaddour</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>

        </div>
    )
}
export default Header
