import { useFormik } from "formik"
import { useState } from "react"
import Danger from "../../components/utility/Danger";
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
        if(!promise.ok){
            setError(`${promise.statusText} : ${promise.status}`)
            return;
        }
        const response = await promise.json()
        console.log(response)
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
        <div className="container">
            
            <div className="center-form">
                <div>
                
                    <form onSubmit={formik.handleSubmit}>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" name="email" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.errors.email && formik.touched.email ? <Warning message={formik.errors.email} /> : null}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password ? <Warning message={formik.errors.password} /> : null}
                        </div>
                        
                        {error !== null && 
                            <Danger message={error} />
                        }
                        <div className="form-group">
                            
                            <button className="form-control btn btn-primary">Sign In</button>
                        </div>
                        
                    </form>
                </div>
            </div>
               
        </div>
    );
}