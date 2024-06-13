'use client'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { LoginActivite } from '@/types/logintime';
import { getCookie } from 'cookies-next';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

type Props = {}

const activitelist: LoginActivite[] = [
    {
        logoname: "CR",
        browser: "Chrome on Window",
        ip: "192.149.122.128",
        country: "India",

    },
    {
        logoname: "MO",
        browser: "Mozilla on Window",
        ip: "452.149.722.980",
        country: "United States",
    },
    {
        logoname: "CR",
        browser: "Chrome on iMac",
        ip: "86.188.154.225",
        country: "Canada",
    },
    {
        logoname: "SA",
        browser: "Safari on iMac",
        ip: "223.109.172.198",
        country: "India",
    },
    {
        logoname: "MO",
        browser: "Mozilla on Window",
        ip: "192.149.122.128",
        country: "Isreal"
    },
    {
        logoname: "CR",
        browser: "Chrome on Window",
        ip: "100.170.152.458",
        country: "Australia"
    },
    {
        logoname: "SA",
        browser: "Safari on iMac",
        ip: "178.009.190.134",
        country: "United Kingdom"
    },
    {
        logoname: "MO",
        browser: "Mozilla on Window",
        ip: "134.109.552.888",
        country: "Russia"
    },
];

const LoginActivites = ({ }: Props) => {
    const [logintime, setlogintime] = useState<any>()

    useEffect(() => {
        const loginTime = getCookie('loginTime');
        setlogintime(loginTime)
    }, []);

    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName='Login Activites' />

                <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-lightblue dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <h4 className="mb-6 text-md font-semibold text-black dark:text-[#FFA70B]">
                            Here is your last 08 login activities log
                        </h4>
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[220px] px-4 py-4 font-medium uppercase text-black dark:text-white xl:pl-11">
                                        Browser
                                    </th>
                                    <th className="min-w-[220px] py-4 font-medium uppercase text-black dark:text-white xl:pl-0">
                                        ip
                                    </th>
                                    <th className="min-w-[150px] px-2 py-4 font-medium uppercase text-black dark:text-white">
                                        Login Time
                                    </th>
                                    <th className="min-w-[150px] px-2 py-4 font-medium uppercase text-black dark:text-white">
                                        Login Date
                                    </th>
                                    <th className="min-w-[120px] px-4 py-4 font-medium uppercase text-black dark:text-white">
                                        Country
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {activitelist.map((loginlist: any, index: any) => {
                                    return (
                                        <tr key={index}>
                                            <td className=" mt-6 flex gap-3 border-b border-[#eee] py-5 pl-9 dark:border-strokedark">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFA70B] bg-gray text-left text-sm font-semibold text-black shadow-lg dark:border-lightblue dark:bg-fitblue majinto dark:text-majinto">
                                                    {loginlist.logoname}
                                                </span>
                                                <h5 className="mt-2 text-black dark:text-white">
                                                    {loginlist.browser}
                                                </h5>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {loginlist.ip}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                                                <p className="text-black dark:text-white ml-6">
                                                    {logintime && moment(logintime).format('HH:mm:ss')}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {logintime && moment(logintime).format('DD-MM-YYYY')}
                                                </p>
                                            </td>

                                            <td className="border-b border-[#eee] py-5 dark:border-strokedark">
                                                <p className="text-black dark:text-white ml-5">
                                                    {loginlist.country}
                                                </p>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default LoginActivites;