import { useFormik } from "formik"
import { useState } from "react"
import Danger from "../../components/utility/Danger";
import PrimaryButton from "../../components/utility/PrimaryButton";
import Warning from "../../components/utility/Warning";
import { SigninSchema } from "../../validation/authValidation"

export default function signIn(){
    const [error, setError] = useState(null)
    const handleFormSubmit = async (values) => {
        setError(null)
        const data = JSON.stringify(values)
        const promise = await fetch(`/api/auth/signin`, {
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        const response = await promise.json()
        if(!promise.ok){
            if(response.errors && response.errors.length > 0 ){
                setError(response.errors[0]);
            }
            else{
                setError(`${promise.statusText} : ${promise.status}`)
            }
            
            return;
        }
        
        window.location.href = '/';
    }
    const formik = useFormik({
        validationSchema: SigninSchema, 
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: handleFormSubmit
    })
    return (
        <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center md:flex-row">

                    <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                        <p className="font-medium text-blue-500 uppercase">Building Businesses</p>
                        <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                            Changing The Way People Do Business.
                        </h2>
                        <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p>
                    </div>

                    <form className="w-full mt-16 md:mt-0 md:w-2/5" onSubmit={formik.handleSubmit}>
                        <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                            <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                            <input 
                                type="text" 
                                name="email" 
                                className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" 
                                placeholder="Email address" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.errors.email && formik.touched.email ? <Warning message={formik.errors.email} /> : null}
                            <input 
                                type="password" 
                                name="password" 
                                className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" 
                                placeholder="Password" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password ? <Warning message={formik.errors.password} /> : null}
                            
                            {error && 
                                <Danger message={error} />
                            }
                            
                            <PrimaryButton
                                text="Log Me In"
                            />
                            
                            <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_" className="text-blue-500 underline">Sign up here</a></p>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}