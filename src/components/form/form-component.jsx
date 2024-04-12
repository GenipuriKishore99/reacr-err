import {useFormik} from 'formik';
import axios from 'axios';
export function RegForm(){
      const formik=useFormik({
           initialValues:({
            "Name":"",
            "Email":"",
            "Phone":"",
            "Password":""

           }),
           onSubmit:(values)=>{
            axios({
                method:"post",
                url:"http://127.0.0.1:5000/regdetails",
                data:values
            }).then(()=>{
                alert("data saved Succesfully....!")
            })
            .catch((err)=>{
                console.log(err)
            })
            
            // alert(JSON.stringify(values))
           }
      })

    return(
        <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <h5>registration Page</h5>
            </div>
            <div>
                <label className="form-label">Name</label>
                <input type="text" className="form-control w-50" name="Name" onChange={formik.handleChange}></input>
            </div>
            <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-control w-50" name="Email" onChange={formik.handleChange}></input>
            </div>
            <div>
                <label>Phone</label>
                <input type="text"className='form-control w-50' name="Password" onChange={formik.handleChange}></input>
            </div>
            <div>
                <label className="form-label">Password</label>
                <input type="text" className="form-control w-50" name="Password" onChange={formik.handleChange}></input>
            </div>
            <div className="m-2">
                <input type="submit" className="btn btn-primary me-3"></input>
                <input type="reset" className="btn btn-danger"></input>

            </div>
        </form>
        </>
    )
}