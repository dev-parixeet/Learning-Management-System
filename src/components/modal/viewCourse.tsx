import React, { useEffect, useRef } from 'react'

type Props = { detailspop: boolean; handleDetailsClose: () => void, datapass: any }

function ViewCourse({ detailspop, handleDetailsClose, datapass }: Props) {
    const popupRef = useRef<any>(null);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current?.contains(event.target as Node)) {
                handleDetailsClose();
            }
        };

        if (detailspop) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [open, handleDetailsClose]);

    return (
        <div>
            {detailspop && (
                <>
                    <div
                        id="crud-modal"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="flex overflow-y-auto overflow-x-hidden fixed justify-center items-center z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                    >
                        <div ref={popupRef} className="relative p-4 w-full max-w-xl max-h-full justify-center items-center ml-59">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-graydark">
                                    <h3 className="text-lg font-semibold text-graydark dark:text-graydark">
                                        View Course Details
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={handleDetailsClose}
                                        className="text-gray-400 bg-transparent hover:bg-red hover:text-bold rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-toggle="crud-modal"
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            // aria-hidden="true"
                                            // xmlns="http://www.w3.org/2000/svg"
                                            // fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <form className="p-4 md:p-5" >
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-graydark dark:text-graydark"
                                            >
                                                Source Name
                                            </label>
                                            <input
                                                type="text"
                                                value={datapass?.name}
                                                name="name"
                                                id="name"
                                                className="bg-darkgray font-medium border-graydark  border text-graydark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkgray dark:border-graydark dark:placeholder-darkgray dark:text-darkgray dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Type Course name"
                                            />
                                        </div>

                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="price"
                                                className="block mb-2 text-sm font-medium text-graydark dark:text-graydark"
                                            >
                                                Price
                                            </label>
                                            <input
                                                type="text"
                                                name="revenues"
                                                value={datapass?.revenues}
                                                className="bg-darkgray font-medium  border border-darkgray text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkgray dark:border-graydark dark:darkgray"
                                                placeholder="$2999"
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="category"
                                                className="block mb-2 text-sm font-medium text-graydark dark:text-graydark"
                                            >
                                                Course
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name='course'
                                                    value={datapass?.course}
                                                    placeholder="Active Input"
                                                    className="w-full rounded-lg border-[1.5px] border-black bg-transparent px-5 py-2 text-black disabled:bg-whiter dark:bg-form-input dark:text-white"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="category"
                                                className="block mb-2 text-sm font-medium text-graydark dark:text-graydark"
                                            >
                                                View
                                            </label>
                                            <input
                                                type="text"
                                                name="visitors"
                                                value={datapass?.visitors}
                                                className="bg-darkgray border font-medium  mt-4 mb-4 border-darkgray text-black  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkgray dark:border-graydark dark:darkgray"
                                                placeholder="$2999"
                                            />
                                            <label
                                                htmlFor="description"
                                                className="block mb-2 text-sm font-medium text-darkgray dark:text-graydark "
                                            >
                                                Download Status
                                            </label>

                                            <input
                                                type='text'
                                                name="status"
                                                value={datapass?.status}
                                                className="block bg-darkgray font-medium p-2.5 w-full text-sm text-graydark bg-darkgray rounded-lg border border-darkgray dark:border-graydark dark:text-graydark "

                                            />
                                        </div>
                                    </div>
                                    {/* <button
                                                type="submit"
                                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                <svg
                                                    className="me-1 -ms-1 w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                Public Assignment
                                            </button> */}
                                </form>
                            </div>
                        </div>

                    </div>
                    <div modal-backdrop="" className="bg-lightgray dark:bg-popupback backdrop-blur-md opacity-50 fixed inset-0 z-40"></div>
                </>
            )}

        </div>
    )
}

export default ViewCourse