"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Professor } from "@/types/professor";
import Link from "next/link";
import { useState } from "react";

const professor_list: Professor[] = [
    {
        sortname: "JL",
        professor: "Joe Larson ",
        course_specialists: "Fornt-end Development",
        contact: +8118474958,
        country: `United State`,
        status: "Active",
    },
    {
        sortname: "AL",
        professor: "Ashley Lawson ",
        course_specialists: "Responsive Design",
        contact: +1243941787,
        country: `India`,
        status: "Inactive",
    },
    {
        sortname: "FB",
        professor: "Frances Burns ",
        course_specialists: "Mobile Applicationn",
        contact: +1686032320,
        country: `United Kindom`,
        status: "suspended",
    },
    {
        sortname: "JM",
        professor: "Jane Montgomery",
        course_specialists: "Graphics Design with Adobe XD",
        contact: +88772715360,
        country: `Australia`,
        status: "Inactive",
    },
    {
        sortname: "AL",
        professor: "Ashley Lawson",
        course_specialists: "SEO Optimization",
        contact: +4392715360,
        country: `Canada`,
        status: "suspended",
    },
    {
        sortname: "JL",
        professor: "Joe Larson",
        course_specialists: "Android Development",
        contact: +9579715360,
        country: `South Africa`,
        status: "Active",
    },
];

const Professor = () => {
    const [viewopen, setviewopen] = useState(false);
    const [shwodata, setshowdata] = useState();

    const handleOpen = (setkey: any) => {
        setviewopen(!viewopen);
        setshowdata(setkey);
    };
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Professor List" />

                <div className="flex w-full items-end justify-end pb-6">
                    <button
                        type="button"
                        className="mb-2 me-2 flex gap-2 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    >
                        Add Professor
                        <svg
                            fill="white"
                            height="17px"
                            width="17px"
                            viewBox="0 0 472.600 472.600"
                        >
                            <g>
                                <polygon
                                    points="278.565,194.051 278.565,0 194.053,0 194.053,194.051 0,194.051 0,278.564 194.053,278.564 194.053,472.615 
			                                        278.565,472.615 278.565,278.564 472.615,278.564 472.615,194.051"
                                />
                            </g>
                        </svg>
                    </button>
                </div>

                <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-lightyellow dark:bg-boxdark sm:px-7.5 xl:pb-1 ">
                    <div className="max-w-full overflow-x-auto">
                        <h4 className="mb-6 text-xl font-semibold text-black dark:text-[#FFA70B]">
                            Professer Details
                        </h4>
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[220px] px-4 py-4 font-medium uppercase text-black dark:text-white xl:pl-11">
                                        Professor
                                    </th>
                                    <th className="min-w-[220px] py-4 font-medium uppercase text-black dark:text-white xl:pl-0">
                                        Course Specialists
                                    </th>
                                    <th className="min-w-[150px] px-2 py-4 font-medium uppercase text-black dark:text-white">
                                        Contact
                                    </th>
                                    <th className="min-w-[120px] px-4 py-4 font-medium uppercase text-black dark:text-white">
                                        Country
                                    </th>
                                    <th className="px-4 py-4 font-medium uppercase text-black dark:text-white">
                                        Status
                                    </th>
                                    <th className="px-4 py-4 font-medium uppercase text-black dark:text-white">
                                        View Details
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {professor_list.map((professorDetails, index) => (
                                    <tr key={index} >
                                        <td className=" mt-6 flex gap-3 border-b border-[#eee] py-5 pl-9 dark:border-strokedark">
                                            <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                className="border-gray-300 mt-3 h-4 w-4 rounded-full dark:border-gray dark:bg-gray dark:hover:shadow-lg "
                                            />
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFA70B] bg-gray text-left text-sm font-semibold text-black shadow-lg dark:border-lightblue dark:bg-sky dark:text-white">
                                                {professorDetails.sortname}
                                            </span>
                                            <h5 className="mt-2 text-black dark:text-white">
                                                {professorDetails.professor}
                                            </h5>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                                            <p className="text-black dark:text-white">
                                                {professorDetails.course_specialists}
                                            </p>
                                            <td>
                                                <div className="relative flex justify-end px-20">
                                                    <button
                                                        id="dropdownButton"
                                                        data-dropdown-toggle="dropdown"
                                                        className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 absolute inline-block p-1.5 text-sm dark:text-primary"
                                                        type="button"
                                                        onClick={() => handleOpen(index)}
                                                    >
                                                        view more
                                                    </button>

                                                    {viewopen && shwodata === index && (
                                                        <div
                                                            id="dropdown"
                                                            onClick={handleOpen}
                                                            className="divide-gray-100 dark:bg-gray-700 absolute left-[100px] z-50 mr-8 w-[500px] list-none divide-y rounded-lg bg-white text-base shadow"
                                                        >
                                                            <ul
                                                                className="w-[500px] border border-lightblue px-6 py-2 shadow-2xl dark:border-lightblue"
                                                                aria-labelledby="dropdownButton"
                                                            >
                                                                <li>
                                                                    <li className="pb-4 text-3xl font-semibold">
                                                                        Professor Designation details
                                                                    </li>
                                                                    <a className="text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 h-auto w-[500px] whitespace-nowrap text-wrap py-2 dark:text-black dark:hover:text-lightblue">
                                                                        Lorem ipsum dolor sit amet consectetur
                                                                        adipisicing elit. Quasi voluptatum, vel
                                                                        dolorem non ratione sunt mollitia facere
                                                                        dicta nam vero nobis, omnis quo voluptatibus
                                                                        velit, perspiciatis earum. Voluptatem natus,
                                                                        ad dolores commodi ullam quis officia in? Et
                                                                        rerum totam cum enim exercitationem harum
                                                                        vitae facere deleniti possimus atque quo
                                                                        praesentium, ipsam distinctio eum, eos in
                                                                        sed ipsum ipsa. quo voluptatibus velit,
                                                                        perspiciatipraesentium, ipsam distinctio eum,
                                                                        eos insed ipsum ipsa. Possimus soluta iste iusto
                                                                        officiis
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </td>

                                        <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                                            <p className="text-black dark:text-white">
                                                {professorDetails.contact}
                                            </p>
                                        </td>
                                        <td className="items-center justify-center border-b border-[#eee] px-8 py-5 dark:border-strokedark">
                                            <p className="text-black dark:text-white">
                                                {professorDetails.country}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                            <p
                                                className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${professorDetails.status === "Active"
                                                    ? "bg-success text-success"
                                                    : professorDetails.status === "suspended"
                                                        ? "bg-danger text-danger"
                                                        : "bg-warning text-warning"
                                                    }`}
                                            >
                                                {professorDetails.status}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                                            <div className="flex items-center space-x-3.5 ">

                                                <Link href={{ pathname: '/professor_list/details', query: { sortname: professorDetails.sortname, professor: professorDetails.professor, course_specialists: professorDetails.course_specialists, contact: professorDetails.contact, country: professorDetails.country } }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100.828" height="14.769" viewBox="0 0 23.828 14.769" fill="white" className="dark:hover:fill-primary">
                                                        <polygon points="13.616 2.828 16.201 5.414 0 5.414 0 9.414 16.143 9.414 13.616 11.94 16.444 14.769 23.828 7.385 16.444 0 13.616 2.828" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default Professor;
