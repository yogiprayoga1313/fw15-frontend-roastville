import React, { useState } from "react"
import side_picture from "public/assets/img/picture_auth.jpg"
import Image from "next/image"
import logo from "public/assets/img/logo_roastville.png"
import { Formik } from "formik"
import * as Yup from "yup"
import FooterAuth from "@/components/FooterAuth"

function SignUp() {
  // const [load, setLoad] = React.useState(false);
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is empty !"),
    password: Yup.string().required("Password is empty !"),
    phoneNumber: Yup.string().required("PhoneNumber is empty !"),
  })

  return (
    <>
      <div className="h-min-screen flex">
        <aside className="md:flex md:flex-1 md:block hidden">
          <Image
            src={side_picture}
            className="object-cover"
            alt="picture_side"
          />
        </aside>
        <div className="bg-login md:bg-login_mobile flex flex-col flex-1">
          <div className="flex h-[75%] flex-col gap-12 items-center p-5">
            <div className=" flex flex-col justify-center items-center w-full">
              <div className="flex gap-2 items-center">
                <div className="h-14 w-14">
                  <Image src={logo} className="object-cover" alt="logo" />
                </div>
                <div className="text-[20px] font-bold ">RoastVille</div>
              </div>
              <div className="text-[52px] leading-[78px] font-bold pt-8">
                Forgot your password?
              </div>
              <p>Don’t worry, we got your back!</p>
            </div>
            <div className="flex justify-center w-full px-0 md:px-24">
              <Formik
                initialValues={{ email: "", password: "", phoneNumber: "" }}
                validationSchema={validationSchema}
                // onSubmit={dologin}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleSubmit,
                  handleChange,
                  isSubmitting,
                }) => {
                  return (
                    <form onSubmit={handleSubmit} className="md:w-full w-full">
                      <div className="flex flex-col gap-4 ">
                        <div className="form-control">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter your email adress to get link"
                            className="input input-bordered w-full  px-3"
                          />
                          {errors.email && touched.email && (
                            <label htmlFor="email" className="label p-0">
                              <span className="label-text-alt font-bold text-md text-error">
                                {errors.email}
                              </span>
                            </label>
                          )}
                        </div>

                        <div className="w-full pt-4">
                          {/* {load ? (
                            <button
                              type="submit"
                              className="w-full btn btn-primary normal-case text-white"
                            >
                              <span className="loading loading-spinner loading-sm"></span>
                            </button>
                          ) : ( */}
                          <button
                            type="submit"
                            className=" w-full btn btn-primary normal-case text-white"
                          >
                            Request Link
                          </button>
                          {/* )} */}
                        </div>

                        <div className="md:pt-4 md:block hidden">
                          <button className="btn btn-primary rounded-xl w-full normal-case text-[20px] font-bold shadow-xl">
                            Resend Link
                          </button>
                        </div>
                      </div>
                    </form>
                  )
                }}
              </Formik>
            </div>
          </div>
          <FooterAuth />
        </div>
      </div>
    </>
  )
}

export default SignUp