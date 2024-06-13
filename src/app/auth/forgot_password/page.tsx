'use client'
import AxiosInstance from '@/utils/axiosinstances';
import { useFormik } from 'formik';
import * as Yup from "yup";
import React from 'react'

type Props = {}

const ForgotPassword = ({ }: Props) => {
    const schema = Yup.object().shape({
        email: Yup.string().email("Invalid Email Adrees").required().min(2),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: schema,
        onSubmit: async (values: any, errors: any) => {
            try {
                const response = await AxiosInstance.post("/forgotpassword", values, {
                })
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
            resetForm();
        }
    })
    const { isSubmitting, errors, touched, values, initialValues, handleChange, handleBlur, handleReset, resetForm } = formik;
    return (
        <div>
            <div className="flex justify-center items-center h-screen">

                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-[800px]" >
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark ">
                        <h3 className="font-medium text-black dark:text-white">
                            Reset Your Password
                        </h3>
                    </div>
                    <form onClick={formik.handleSubmit}>
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Enter your email address"
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                                {errors.email && touched.email ? (<div className="text-red">{errors.email}</div>) : null}
                            </div>

                            <button type='button' className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;