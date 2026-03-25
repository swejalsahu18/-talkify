import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ForgetPass = () => {

    const [OTPSend, setOTPSend] = useState(false)

    const [resetPassword, setResetPassword] = useState({
        otp: "",
        email: "",
        password: "",
        cpassword: ""
    })

    let handleI = (event) => {
        setResetPassword({ ...resetPassword, [event.target.name]: event.target.value })

    }

    let SendOTP = async () => {

        // let newData = {
        //     email:resetPassword.gmail
        // }

        let response = await fetch("https://api.skillsvarz.com/api/forgot-password", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email":resetPassword.email})
        })

        let result = await response.json()

        console.log(response)

        if(response.status===200||response.status===201){
            toast.success("OTP sent Successfully")
            setOTPSend(true)
        }
        else{ 
            toast.error(response?.error?response.error:"Try Again...")
        setOTPSend(false)}

    }

    let ChangePassword = async ()=>{
        
      
        let NewData = {
            otp: resetPassword.otp,
            newPassword: resetPassword.password
        }

        let response = await fetch("https://api.skillsvarz.com/api/reset-password", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(NewData)
        })

        let res = await response.json();

        if (response.status === 200 || response.status === 201) {
    toast.success("Password Changed Successfully")
            setTimeout(() => {
                redirect('/login')
            }, 1000)
        }
        else toast.error(response?.error ? response.error : "Failed to Change Password")

    }


    let redirect = useNavigate()

    return (
        <>
            <div className=" min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

                <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

                    {/* Heading */}
                    <h2 className="text-2xl font-semibold text-center mb-6">
                        {OTPSend ? "Reset Password" : "Forgot Password"}
                    </h2>


                    {OTPSend ? (
                        <>
                            {/* OTP */}
                            <div className="mb-4">
                                <label className="text-sm text-gray-300">OTP</label>
                                <input
                                    onChange={handleI}
                                    name='otp'
                                    type="text"
                                    placeholder="Enter OTP"
                                    className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* New Password */}
                            <div className="mb-4">
                                <label className="text-sm text-gray-300">New Password</label>
                                <input
                                    onChange={handleI}
                                    name='password'
                                    type="password"
                                    placeholder="Enter new password"
                                    className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-6">
                                <label className="text-sm text-gray-300">Confirm Password</label>
                                <input
                                    onChange={handleI}
                                    name='cpassword'
                                    type="password"
                                    placeholder="Confirm new password"
                                    className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Buttons */}
                            <button className="w-full py-2 rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 hover:scale-105 transition duration-200"
                                onClick={ChangePassword}>
                                Change Password
                            </button>


                        </>

                    ) : (
                        <>
                            <div className="mb-4">
                                <label className="text-sm text-gray-300">Email</label>
                                <input
                                    onChange={handleI}
                                    name='email'
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button className="w-full py-2 rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 hover:scale-105 transition duration-200"
                                onClick={SendOTP}>
                                Send OTP
                            </button>

                            <p className="text-sm text-gray-400 text-center mt-4">
                                Remember your password?{" "}
                                <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => {
                                    redirect("/login")
                                }}>
                                    Login
                                </span>
                            </p>

                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default ForgetPass





