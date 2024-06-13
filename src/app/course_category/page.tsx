'use client'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import { Cetegory } from '@/types/category';
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import React, { useState } from 'react'

type Props = {}
const cetegorylist: Cetegory[] = [
    {
        name: "GD",
        category_name: "Graphic Desgine",
        subcategory_name: " 5 Sub Category available",
    },
    {
        name: "WD",
        category_name: "Web Development",
        subcategory_name: " 6 Sub Category available",
    },
    {
        name: "MA",
        category_name: "Mobile Applicationt",
        subcategory_name: " 5 Sub Category available",
    },
    {
        name: "GA",
        category_name: "Game Development",
        subcategory_name: " 5 Sub Category available",
    },
    {
        name: "NA",
        category_name: "Network Development",
        subcategory_name: " 2 Sub Category available",
    },
    {
        name: "PS",
        category_name: "Photo Shoot",
        subcategory_name: " 3 Sub Category available",
    },
    {
        name: "MA",
        category_name: "Mobile Application",
        subcategory_name: " 5 Sub Category available",
    },
    {
        name: "RJ",
        category_name: "React JS",
        subcategory_name: " 4 Sub Category available",
    },
];

const courseCategory = (props: Props) => {
    const [opendrop, setopendrop] = useState(false)
    const [dropkey, setdropkey] = useState()

    const handleOpen = (pass: any) => {
        setopendrop(!opendrop);
        setdropkey(pass)
    }
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName='Course Category' />
                <div>

                    <div className='flex justify-between  w-full h-auto'>
                        <div className='dark:text-darkgray page-title text-md font-semibold '>
                            You have total 6 Categories
                        </div>
                        <div className='flex justify-end items-end'>
                            <button
                                type="button"
                                className="flex gap-2 mb-2 me-2 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                            >
                                Add Category
                                <svg fill="white" height="17px" width="17px" version="1.1" id="Layer_1"
                                    viewBox="0 0 472.600 472.600" >

                                    <g>
                                        <polygon points="278.565,194.051 278.565,0 194.053,0 194.053,194.051 0,194.051 0,278.564 194.053,278.564 194.053,472.615 
			                                                278.565,472.615 278.565,278.564 472.615,278.564 472.615,194.051"/>
                                    </g>

                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between w-full h-full my-8 flex-wrap flex-row gap-2'>
                        {cetegorylist.map((cetegoryname, index) => {

                            return (
                                <div key={index} className='flex justify-between w-72 mt-4 '>
                                    <div className="w-full max-w-sm bg-white dark:bg-black border border-lightblue dark:border-lightyellow rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex justify-end px-4 pt-4">
                                            <button
                                                id="dropdownButton"
                                                data-dropdown-toggle="dropdown"
                                                className="absolute inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700  focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                                type="button"
                                                onClick={() => handleOpen(index)}
                                            >
                                                <span className="sr-only">Open dropdown</span>
                                                <svg
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 3"
                                                >
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                </svg>
                                            </button>
                                            {/* Dropdown menu */}
                                            {opendrop && dropkey === index && (
                                                <div
                                                    id="dropdown"
                                                    onClick={handleOpen}
                                                    className="absolute z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mr-8"
                                                >
                                                    <ul className="py-2" aria-labelledby="dropdownButton" >
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black dark:hover:text-lightblue"
                                                            >
                                                                Edit
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black dark:hover:text-lightblue"
                                                            >
                                                                Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col items-center pb-10">
                                            <span className="w-24 h-24 rounded-full shadow-lg text-left flex justify-center items-center text-3xl font-semibold text-black border-2 dark:text-red dark:border-lightblue bg-gray border-[#FFA70B]">
                                                {cetegoryname.name}
                                            </span>

                                            <h5 className="mb-1 mt-2 text-xl font-medium  dark:text-darkgray">
                                                {cetegoryname.category_name}
                                            </h5>
                                            <span className="text-sm text-black dark:text-warning">
                                                {cetegoryname.subcategory_name}
                                            </span>
                                            <div>
                                                <ul className='flex flex-wrap gap-3 justify-center items-center mt-4'>
                                                    <li><span className='bg-danger text-danger bg-opacity-15 p-0.5'>Photoshop</span></li>
                                                    <li><span className='bg-lightblue text-lightblue bg-opacity-15 p-0.5'>Logo Design</span></li>
                                                    <li><span className='bg-success text-success bg-opacity-15 p-0.5'>Adobe Illustrator</span></li>
                                                    <li><span className='bg-warning text-warning bg-opacity-15 p-0.5'>Drawing</span></li>
                                                </ul>
                                            </div>
                                            <div className="flex mt-1 md:mt-2">
                                                {/* <a
                                                    href="#"
                                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    >
                                                    Add friend
                                                </a>
                                                <a
                                                    href="#"
                                                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                    >
                                                    Message
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                        })}
                    </div>

                </div>

            </DefaultLayout>
        </>
    )
}

export default courseCategory