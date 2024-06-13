"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { useEffect, useState } from "react";

type Props = {};

function Professor_details({ }: Props) {
    const [details, setdetails] = useState<any>();

    useEffect(() => {
        const parseQueryString = (queryString: any) => {
            var pairs = queryString.split("&");
            var result: any = {};

            pairs.forEach((value: any) => {
                var keyValue = value.split("=");
                result[keyValue[0]] = keyValue?.[1]?.replace(/\+/g, " ");
            });

            return result;
        };
        const queryString = window.location.search.substring(1);
        const parsedData = parseQueryString(queryString);
        setdetails(parsedData);
        console.log(parsedData);
        const values = [...inputFields];
        values[0].value = parsedData?.professor;
        values[1].value = parsedData?.course_specialists;
        setInputFields(values);
    }, []);

    const [inputFields, setInputFields] = useState([
        { value: "", label: "Professor Profile Name" },
        { value: "", label: "Professor Course Specialists" },
    ]);

    const handleAddInputField = () => {
        setInputFields([...inputFields, { value: "", label: "New Field" }]);
    };

    const handleLabelChange = (index: any, event: any) => {
        const values = [...inputFields]; //privous value copy and set
        values[index].label = event.target.value; //bydefult value put on label field
        setInputFields(values);
    };

    const handleInputChange = (index: any, event: any) => {
        const values = [...inputFields];
        values[index].value = event.target.value;
        setInputFields(values);
    };
    const handleRemoveInputField = (index: any) => {
        //only thos data show data return does not match in array
        setInputFields(inputFields.filter((field, id) => id !== index)); //only this id removed this not match in array
    };

    return (
        <div>
            <DefaultLayout>
                <Breadcrumb pageName="Professor Details" />
                <div>
                    <hr className="bg-gray-200 my-8 h-px border-0 dark:bg-lightyellow" />
                    <div className="mx-auto flex h-auto md:w-1/2 items-center justify-center border border-white dark:shadow-lg dark:shadow-white">
                        <ul className="w-full py-2" aria-labelledby="dropdownButton">
                            <li className="flex items-center">
                                <a className="text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 block w-1/2 px-4 py-2 text-lg font-semibold dark:text-white dark:hover:text-lightblue">
                                    Sort Name
                                </a>
                                <span className="text-lg text-white">{details?.sortname}</span>
                            </li>

                            <li className="flex items-center">
                                <a className="text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 block w-1/2 px-4 py-2 text-lg font-semibold dark:text-white dark:hover:text-lightblue">
                                    Professor Name
                                </a>
                                <span className="text-lg text-white">{details?.professor}</span>
                            </li>
                            <li className="flex items-center">
                                <a className="text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 block w-1/2 px-4 py-2 text-lg font-semibold dark:text-white dark:hover:text-lightblue">
                                    Course Specialists
                                </a>
                                <span className="text-lg text-white">
                                    {details?.course_specialists}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <a className="text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 block w-1/2 px-4 py-2 text-lg font-semibold dark:text-white dark:hover:text-lightblue">
                                    Contact
                                </a>
                                <span className="text-lg text-white">{details?.contact}</span>
                            </li>
                            <li className="flex items-center">
                                <a className="text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 block w-1/2 px-4 py-2 text-lg font-semibold dark:text-white dark:hover:text-lightblue">
                                    Country
                                </a>
                                <span className="text-lg text-white">{details?.country}</span>
                            </li>
                            <li className="flex items-center">
                                <a className="text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 block w-1/2 px-4 py-2 text-lg font-semibold dark:text-white dark:hover:text-lightblue">
                                    Joinig Date
                                </a>
                                <span className="text-lg text-white">Dec-12-2008</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <hr className="bg-gray-200 my-14 h-px border-0 dark:bg-lightyellow" />
                    <div className="my-8 flex text-xl font-semibold dark:text-white">
                        Edit Professor Details
                    </div>
                    <hr className="bg-gray-200 my-10 h-px border-0 dark:bg-lightyellow" />
                    <div className="flex flex-col md:gap-5">
                        {inputFields.map((inputField, index) => (
                            <div key={index} className="relative mx-auto md:w-[600px]">
                                <input
                                    type="text"
                                    value={inputField.label}
                                    onChange={(event) => handleLabelChange(index, event)}
                                    maxLength={20}
                                    style={{ width: inputField.label ? `${inputField.label?.length * 8.5}px` : '230px' }}
                                    className="bg-[#2E3A47] border-o border-b-2 px-3 border-b-white border-double"
                                />
                                <input
                                    type="text"
                                    value={inputField.value}
                                    onChange={(event) => handleInputChange(index, event)}
                                    className="text-gray-900 dark:border-gray-600 peer w-full rounded-t-lg border-0 border-b-2 bg-gray px-10 pb-2.5 pt-5 text-lg dark:bg-[#2E3A47] dark:text-white"
                                />
                                <button
                                    className="text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 block w-full py-3 text-lg font-semibold dark:text-white dark:hover:text-lightblue"
                                    onClick={() => handleRemoveInputField(index)}
                                >
                                    Remove Field
                                </button>
                            </div>
                        ))}
                        <button
                            className="mx-auto flex h-12 w-35 border border-lightyellow p-2 font-semibold hover:border-white dark:text-white dark:shadow-md dark:shadow-lightyellow hover:dark:text-lightyellow hover:dark:shadow-white"
                            onClick={handleAddInputField}
                        >
                            Add Input Field
                        </button>
                    </div>
                </div>
            </DefaultLayout>
        </div>
    );
}

export default Professor_details;
