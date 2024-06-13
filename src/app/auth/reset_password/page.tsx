'use client'
import AxiosInstance from '@/utils/axiosinstances';
import { useFormik } from 'formik';
import { useSearchParams } from 'next/navigation';
// import { useParams } from 'next/navigation';
import React from 'react'
import * as Yup from "yup";


const Resetpassword = () => {
  const schema = Yup.object().shape({
    password: Yup.string().required().min(7),
    confirmPassword: Yup.string().required().min(7),
  });
  
  const router = useSearchParams();
  const email= router.get("email")
  console.log(email, "URLDATAAA")

  const formik = useFormik({
    initialValues: {
      email: email,
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: async (values: any, errors: any) => {
      try {
        const response = await AxiosInstance.post("/resetpassword", values, {
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
    <div className="flex justify-center items-center h-screen">

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-[800px]" >
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark ">
          <h3 className="font-medium text-black dark:text-white">
            New PassWord
          </h3>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                New Password
              </label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter your new password"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors.password && touched.password ? (<div className="text-red">{errors.password}</div>) : null}
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter your confirm password"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors.confirmPassword && touched.confirmPassword ? (<div className="text-red">{errors.confirmPassword}</div>) : null}
            </div>

            <button type='submit' className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Resetpassword;