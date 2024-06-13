'use client'
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

type Props = {
    open: boolean;
    handleClose: () => void
    formvalue: (value: any) => void;
}

const FromPopup = ({ open, handleClose, formvalue }: Props) => {

    const [coursefield, setcoursefiledata] = useState()
    const popupRef = useRef<any>(null);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current?.contains(event.target as Node)) {
                handleClose();
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [open, handleClose]);


    const schema = Yup.object().shape({
        // name: Yup.string().required(),
        Soursename: Yup.string().required("Course Name Must Requires.."),
        revenues: Yup.string().required("Price is Required").min(1),
        course: Yup.string().required("please Select Your Course"),
        visitors: Yup.string().required("visitors Count is Required").min(1),
        status: Yup.string().required("Download Status Is Required"),
    });
    const formik = useFormik({
        initialValues: {
            Soursename: "",
            revenues: "",
            course: "",
            visitors: "",
            status: "",
        },
        validationSchema: schema,

        onSubmit: async (values: any, errors: any) => {
            console.log(values, "SSSSSSSSSSSS");
            formvalue(values)
            resetForm();
            try {
                const response = await axios.post('http://localhost:4000/coursename', values);
                // console.log(response.data, "AAAAAAAAAA");s
                resetForm();
            } catch (error) {
                console.error(error, "Course Post Data Failed");
            }
        },
    });

    const { isSubmitting, errors, touched, values, initialValues, handleChange, handleBlur, resetForm } = formik;
    const blockInvalidChar = (e: any) => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault();
    console.log(errors, "errors")
    return (
        <div>

            {open && (
                <>
                    <div
                        id="crud-modal"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="flex overflow-y-auto overflow-x-auto fixed justify-center items-center z-50 w-full inset-0 h-[calc(100%-1rem)] max-h-full mt-16"
                    >
                        <div ref={popupRef} className="relative p-4 w-full max-w-xl max-h-full justify-center items-center ">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-graydark dark:text-graydark">
                                        Add New Assignment
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            resetForm(); //close the form then All filed is Clearout
                                            handleClose();
                                        }}
                                        className="text-gray-400 bg-transparent hover:bg-red hover:text-bold rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-toggle="crud-modal"
                                    >
                                        <svg
                                            className="w-3 h-3"
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

                                <form className="p-4 md:p-5" onSubmit={formik.handleSubmit}>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-graydark dark:text-graydark"
                                            >
                                                Sourse Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formik.values.Soursename} //value of Sourse Name field
                                                onBlur={formik.handleBlur} //once click on the field after not data put then error this field
                                                onChange={formik.handleChange} //value of Sourse Name field change
                                                name="Soursename"
                                                id="name"
                                                className="bg-darkgray font-medium border-graydark border text-graydark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkgray dark:border-graydark dark:placeholder-darkgray dark:text-darkgray dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Type Source "
                                            />
                                            {errors.Soursename && touched.Soursename ? (<div className="text-red">{errors.Soursename}</div>) : null}
                                        </div>

                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="price"
                                                className="block mb-2 text-sm font-medium text-graydark dark:text-graydark"
                                            >
                                                Price
                                            </label>
                                            <input
                                                type="number"
                                                name="revenues"
                                                value={formik.values.revenues}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                onKeyDown={blockInvalidChar}
                                                min={1}
                                                id="price"
                                                className="bg-darkgray font-medium  border border-darkgray text-graydark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkgray dark:border-graydark dark:placeholder-gray-400 dark:darkgray dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="$2999"
                                            />
                                            {errors.revenues && touched.revenues ? (<div className="text-red">{errors.revenues}</div>) : null}
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="category"
                                                className="block mb-2 text-sm font-medium text-graydark dark:text-graydark"
                                            >
                                                Course Category
                                            </label>
                                            <select
                                                id="course"
                                                value={formik.values.course}
                                                onChange={formik.handleChange}
                                                className="bg-darkgray font-medium border border-graydark text-graydark text-sm rounded-lg block w-full p-2.5 dark:bg-darkgray dark:border-graydark dark:text-graydark dark:focus:border-primary-500"
                                            >
                                                <option selected>Select Course</option>
                                                <option value="Engineering">Engineering</option>
                                                <option value="Medical">Medical</option>
                                                <option value="Gaming">Gaming</option>
                                                <option value="Network">Network</option>
                                                <option value="Security">Security</option>
                                                <option value="Finance">Finance</option>
                                                <option value="UPSC">UPSC</option>
                                            </select>
                                            {errors.course && touched.course ? (<div className="text-red">{errors.course}</div>) : null}
                                        </div>


                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="price"
                                                className="block mb-2 text-sm font-medium text-graydark dark:text-graydark"
                                            >
                                                View
                                            </label>
                                            <input
                                                type="number"
                                                name="visitors"
                                                value={formik.values.visitors}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                min={1}
                                                className="bg-darkgray font-medium  border border-darkgray text-graydark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkgray dark:border-graydark dark:placeholder-gray-400 dark:darkgray dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Pending Action"
                                            />
                                            {errors.visitors && touched.visitors ? (<div className="text-red">{errors.visitors}</div>) : null}
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="category"
                                                className="block mb-2 text-sm font-medium text-graydark dark:text-graydark"
                                            >
                                                Download Status
                                            </label>
                                            <input
                                                type="text"
                                                name="status"
                                                value={formik.values.status}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}

                                                className="bg-darkgray font-medium  border border-darkgray text-graydark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkgray dark:border-graydark dark:placeholder-gray-400 dark:darkgray dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Pending progress"
                                            />
                                            {errors.status && touched.status ? (<div className="text-red">{errors.status}</div>) : null}
                                        </div>
                                        <div className="col-span-2">
                                            <input
                                                type="file"
                                                name="file"
                                                className="bg-darkgray border font-medium  mt-4 mb-4 border-darkgray text-darkgray  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkgray dark:border-graydark dark:placeholder-darkgray dark:darkgray dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="$2999"
                                            />
                                            <label
                                                htmlFor="description"
                                                className="block mb-2 text-sm font-medium text-darkgray dark:text-graydark "
                                            >
                                                Course Description
                                            </label>

                                            <textarea
                                                id="description"
                                                rows={4}
                                                className="block bg-darkgray font-medium p-2.5 w-full text-sm text-graydark bg-darkgray rounded-lg border border-darkgray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-graydark dark:placeholder-graydark dark:text-graydark  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Write course Related description here..."
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <svg
                                            className="me-1 -ms-1 w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        // xmlns="http://www.w3.org/2000/svg" for live demo purposes
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Public Assignment
                                    </button>
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

export default FromPopup