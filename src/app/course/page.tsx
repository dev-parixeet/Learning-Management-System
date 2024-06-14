"use client";
import React, { useState } from "react";
import { Course } from "@/types/course";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Pagination from "@/components/Pagination/page";
import Link from "next/link";
import FromPopup from "@/components/modal/PopupForm";
import ViewCourse from "@/components/modal/viewCourse";
import { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";
// import { useRef } from "react";
// import generatePDF from "react-to-pdf";


type Props = {};
const coursename: Course[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    course: "Computer Science",
    visitors: 3.5,
    revenues: "5,768",
    status: "view",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    course: "MBBS",
    visitors: 2.2,
    revenues: "4,635",
    status: "Download",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-07.svg",
    name: "Youtube",
    course: "CA",
    visitors: 2.1,
    revenues: "4,290",
    status: "Unpaid",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-06.svg",
    name: "Instagram",
    course: "History",
    visitors: 1.5,
    revenues: "3,580",
    status: "view",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    course: "DESGING",
    visitors: 3.5,
    revenues: "6,768",
    status: "Pending",
    sales: 390,
    conversion: 4.2,
  },
];
const PAGE_SIZE = 5;
function Course({ }: Props) {
  const [open, setOpen] = useState(false);
  const [detailspop, setdetailspop] = useState(false);
  const [datapass, setdatapass] = useState({});
  const [currentPage, setCurrentPage] = useState<any>(1);

  const targetRef = useRef<any>();

  const formvalue = (item: any) => {
    console.log(item, "Items");
    coursename.push(item);
    console.log(coursename, "CoursePage......");
  };

  // Assuming coursename is your list of courses
  const totalCourses = coursename.length;
  const totalPages = Math.ceil(totalCourses / PAGE_SIZE);
  console.log(totalPages ,"total page number")

  // Handler for page change
  const onPageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const handlepdf = (key: any) => {
    const data: any = document.getElementById(`user${key}`);
    console.log("gffgdf", data);
    const doc = new jsPDF();
    console.log(doc,"doc")

    html2canvas(data, { scale: 4 }).then((canvas: any) => {
      // document.body.appendChild(canvas);
      const imgData = canvas.toDataURL('image/png');
      console.log(imgData);
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.text("New Assignment Course", 70, 20);
      pdf.setTextColor(15, 173, 207)
      pdf.setFont("Helvetica");
      pdf.setFontSize(24);
      const imgWidth = 215;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 30, imgWidth, imgHeight);
      pdf.save("Course.pdf");
    });

  }

  const handlepdflist = () => {
    const data: any = document.getElementById(`totalList`);
    console.log("gffgdf", data);
    const doc = new jsPDF();

    html2canvas(data, { scale: 2 }).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.text("New Assignment Course", 70, 20);
      pdf.setTextColor(15, 173, 207)
      pdf.setFont("Helvetica");
      pdf.setFontSize(24);
      const imgWidth = 215;
      // const imgHeight = 25;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 30, imgWidth, imgHeight);
      pdf.save("OverallCourse.pdf");
    });
  }

  return (
    <>
      <DefaultLayout>
        <div className="col-span-12 xl:col-span-7">
          <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-6 flex justify-between ">
              <div>
                <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                  Course List
                </h4>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="mb-2 me-2 rounded-full bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Add Assignment
                </button>
                <button
                  type="button"
                  onClick={() => handlepdflist()}
                  className="mb-2 me-2 rounded-full bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Download List
                </button>
              </div>
            </div>
            <hr className="my-8 h-px border-0 bg-gray dark:bg-lightblue"></hr>

            <div className="flex w-full scroll-my-px flex-col">
              <div className="grid w-full grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
                <div className="p-2.5 xl:p-4 ">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Source
                  </h5>
                </div>
                <div className="p-2.5 xl:p-4">
                  <h5 className="justify-center text-sm font-medium uppercase xsm:text-base">
                    courses
                  </h5>
                </div>
                <div className="p-2.5 text-center xl:p-4">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    View
                  </h5>
                </div>
                <div className="p-2.5 text-center xl:p-4">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Price
                  </h5>
                </div>
                <div className="p-2.5 text-center xl:p-4">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Download Status
                  </h5>
                </div>

                <div className="hidden p-2.5 text-center sm:block xl:p-4">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Action
                  </h5>
                </div>
              </div>
              {/* {console.log((currentPage-1)*3,endIndex "Sfdfsd")} */}
              <div id="totalList"> {coursename
                .slice(
                  (currentPage - 1) * 5,
                  currentPage * 5 > coursename.length ? coursename.length : 5 * currentPage,)
                ?.map((courslist, key) => {
                  return (<>
                    <div
                      // ref={targetRef}
                      id={`user${key}`}
                      className={`grid grid-cols-3 sm:grid-cols-6 ${key === Course.length - 1
                        ? ""
                        : "border-b border-stroke dark:border-strokedark"
                        }`}
                      key={key}
                    >
                      <div className="flex w-full items-center gap-3 p-2.5 xl:p-5">
                        <div className="h-9 w-full max-w-9 flex-shrink-0">
                          <Image
                            src={courslist.logo ?? "/images/brand/brand-01.svg"}
                            width={60}
                            height={50}
                            alt="Brand"
                          />
                        </div>
                        <p className="hidden font-medium text-black dark:text-white sm:block">
                          {courslist.name}
                        </p>
                      </div>
                      <div className="flex items-center justify-start p-2.5 xl:p-5">
                        <p className="font-medium text-black dark:text-white ">
                          {courslist.course}
                        </p>
                      </div>
                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-black dark:text-white">
                          {courslist.visitors} k
                        </p>
                      </div>
                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="font-medium text-meta-3">
                          {courslist.revenues}
                        </p>
                      </div>

                      <td className="border-b border-[#eee] px-4 py-5 text-center dark:border-strokedark">
                        <p
                          className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium mt-[14px] ${courslist.status === "paid" ||
                            courslist.status === "view"
                            ? "bg-success text-success"
                            : courslist.status === "Unpaid" ||
                              courslist.status === "Download"
                              ? "bg-danger text-danger "
                              : "bg-warning text-warning"
                            }`}
                        >
                          {courslist.status}
                        </p>
                      </td>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          <div className="flex items-center space-x-3.5">
                            <button className="hover:text-primary">
                              <svg
                                onClick={() => {
                                  setdetailspop(true), setdatapass(courslist);
                                }}
                                className="fill-current"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                                  fill=""
                                />
                                <path
                                  d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                                  fill=""
                                />
                              </svg>
                            </button>
                            <button className="hover:text-primary">
                              <svg
                                className="fill-current"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                                  fill=""
                                />
                                <path
                                  d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                                  fill=""
                                />
                                <path
                                  d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                                  fill=""
                                />
                                <path
                                  d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                                  fill=""
                                />
                              </svg>
                            </button>
                            <button
                              className="hover:text-primary"
                              onClick={() => handlepdf(key)}
                            >
                              <svg
                                className="fill-current"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                                  fill=""
                                />
                                <path
                                  d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                                  fill=""
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </div>
                    </div>
                  </>)
                }
                )}
              </div>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </DefaultLayout>
      <FromPopup
        handleClose={() => setOpen(false)}
        open={open}
        formvalue={formvalue}
      />
      <ViewCourse
        handleDetailsClose={() => setdetailspop(false)}
        detailspop={detailspop}
        datapass={datapass}
      />
    </>
  );
}

export default Course;
