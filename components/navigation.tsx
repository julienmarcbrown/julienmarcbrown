import SocialLinks from "./social-links";
import Link from "next/link";
import {Menu, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import React, {Fragment} from 'react'


const Navigation = () => {
    return (
        <div className="relative z-10 border-b-2 md:p-24 border-b-gray-50 bg-gray-100" id="nav">
            <div className="mx-auto w-full m:w-[75%]">
                <div className="relative">
                    <Menu>
                        <div className="relative py-6">
                            <nav className="relative flex items-center" aria-label="Global">
                                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                                    <div className="flex w-full items-center justify-between md:w-auto">
                                        <Link href="/">
                                            <h1 className="text-3xl md:text-6xl font-semibold hover:text-gray-900 text-gray-700 tracking-wide px-6 m:ml-36 float-left">
                                                Julien Marc Brown
                                            </h1>
                                        </Link>
                                        <div className="flex items-center md:hidden">
                                            <Menu.Button
                                                className="inline-flex items-center justify-center rounded-md  p-2 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                <MenuIcon className="h-8 w-8" aria-hidden="true"/>
                                            </Menu.Button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="hidden w-full md:ml-6 md:flex md:flex-row md:items-center md:justify-between ">
                                    <div className="font-light flex flex-row items-center space-x-8 text-gray-600">
                                        <Link href="#about" className="hover:font-normal hover:text-gray-950">
                                            About
                                        </Link>
                                        <Link href="#skills" className="hover:font-normal hover:text-gray-950">
                                            Skills
                                        </Link>
                                        <Link href="#history" className="hover:font-normal hover:text-gray-950">
                                            Work History
                                        </Link>
                                        <Link href="#contact" className="hover:font-normal hover:text-gray-950">
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="-translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="-translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Menu.Items className="absolute top-0 right-0 w-[100%] md:hidden">
                                <div className="overflow-hidden rounded-l shadow-md ring-1 ring-black ring-opacity-20">
                                    <div className="flex items-center justify-between px-3 pt-6">
                                        <div className="mr-2">
                                            <Menu.Button
                                                className="p-2hover:bg-gray-100 inline-flex items-center justify-center rounded-md hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XIcon className="h-8 w-8" aria-hidden="true"/>
                                            </Menu.Button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-2 pt-2 pb-3">
                                        <div className="flex flex-col px-2 pt-2 pb-2 space-y-5 font-regular text-gray-800">
                                            <Link href="#about">
                                                About
                                            </Link>
                                            <Link  href="#resume">
                                                Resume
                                            </Link>
                                        </div>
                                        <div className="flex flex-col items-center pt-10 space-y-5">
                                            <Link
                                                className="rounded-xl border-2 border-[#696969] px-4 py-3 w-full text-center font-regular text-gray-800 hover:border-[#141414] hover:text-[#141414]"
                                                href="#contact">
                                                Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navigation
