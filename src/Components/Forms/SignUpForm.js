import { Formik } from "formik";
import React from "react";
import * as Yup from 'yup';

const SignUpSchema=Yup.object().shape({
  firstname: Yup.string().required("This field is required"),
  email:Yup.string().email('Invalid email').required('This field is required'),
  phone:Yup.number().required('This field is required'),
  password:Yup.string().required('This fiels is require').min(6,'must be of 6 characters'),
  confirmPassword:Yup.string().required("This field is required")
  .min(6,"must be of 6 characters long")
  .oneOf([Yup.ref("password")],"Please must match"),
  termsAndConditions:Yup.boolean().oneOf([true],'Please accept terms and conditions.')
});

const SigninForm = () => {
  return (
    <>
      <Formik
      initialValues={{
        firstname:"",
        lastName: "",
  gender: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  subscription: "",
  termsAndConditions: false,
      }}
     
      validationSchema={SignUpSchema}
      onSubmit={(values)=>{
        console.log(values);
      }}
      >
        {(formik)=>(
      <form onSubmit={formik.handleSubmit  }>
   
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input type="text" className="form-control" name="firstname" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}/>

        {formik.touched.firstname && formik.errors.firstname && ( <span className="field-error">{formik.errors.firstname}</span>)}
        </div>
        <div className="form-group mt-2">
          <label for="lastName">Last Name</label>
          <input type="text" className="form-control" name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName} 
          />
        </div>
        <div className="form-group mt-2">
          <label>Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender==="male"}
              />
              <label className="form-check-label" for="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender==="female"}
              />
              <label className="form-check-label" for="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender==="other"}
              />
              <label className="form-check-label" for="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="form-group mt-2">
          <label for="email">Email</label>
          <input type="text" className="form-control" name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} />
          {formik.touched.email && formik.errors.email && ( <span className="field-error">{formik.errors.email}</span>)}
        </div>
        <div className="form-group mt-2">
          <label for="phone">Phone Number</label>
          <input type="number" className="form-control" name="phone" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}/>
           {formik.touched.phone && formik.errors.phone && ( <span className="field-error">{formik.errors.phone}</span>)}
        </div>
        <div className="form-group mt-2">
          <label for="password">Password</label>
          <input type="password" className="form-control" name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password} />
           {formik.touched.password && formik.errors.password && ( <span className="field-error">{formik.errors.password}</span>)}
        </div>
        <div className="form-group mt-2">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          
          />
           {formik.touched.confirmPassword && formik.errors.confirmPassword && ( <span className="field-error">{formik.errors.confirmPassword}</span>)}
        </div>

        <div className="form-group mt-2">
          <label for="confirmPassword">Subscription</label>
          <select className="form-control" name="subscription"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subscription}>
            <option value="">Select</option>
            <option value="subscription-1">Free</option>
            <option value="subscription-2">Pro</option>
            <option value="subscription-3">Enterprise</option>
          </select>
        </div>

        <div className="form-group mt-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="termsAndCondtions"
              
            />
             
            <label className="form-check-label" htmlFor="termsAndCondtions">
              Accept terms and conditions.
            </label>
          
          </div>
          {formik.touched.termsAndConditions && formik.errors.termsAndConditions && ( <span className="field-error">{formik.errors.termsAndConditions}</span>)}
        </div>

        <div className="d-grid mt-2">
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </div>
      </form>
      )}
      </Formik>
    </>
  );
};

export default SigninForm;







// import { Formik } from "formik";
// import React from "react";
// import * as Yup from 'yup';

// //const SignUpSchema

// const SigninForm = () => {
//   return (
//     <>
//       <Formik
//       initialValues={{
//         firstname:"",
//         lastName: "",
//   gender: "",
//   email: "",
//   phone: "",
//   password: "",
//   confirmPassword: "",
//   subscription: "",
//   termsAndConditions: false,
//       }}
//       validate={(values)=>{
//         const errors={};
//         if(!values.firstname){
//           errors.firstname="Required!";
//         }

//         if (!values.email) {
//           errors.email = "Required!";
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
//           errors.email = "Invalid email address";
//         }
//         return errors;
//       }}>
//         {(formik)=>(
//       <form onSubmit={formik.handleSubmit  }>
//       {console.log(formik)}
//         <div className="form-group">
//           <label for="firstName">First Name</label>
//           <input type="text" className="form-control" name="firstname" 
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.firstname}/>

//         {formik.touched.firstname && formik.errors.firstname && ( <span className="field-error">{formik.errors.firstname}</span>)}
//         </div>
//         <div className="form-group mt-2">
//           <label for="lastName">Last Name</label>
//           <input type="text" className="form-control" name="lastName"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.lastName} 
//           />
//         </div>
//         <div className="form-group mt-2">
//           <label>Gender</label>
//           <div>
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="gender"
//                 id="male"
//                 value="male"
//                 onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           checked={formik.values.gender==="male"}
//               />
//               <label className="form-check-label" for="male">
//                 Male
//               </label>
//             </div>
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="gender"
//                 id="female"
//                 value="female"
//                 onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           checked={formik.values.gender==="female"}
//               />
//               <label className="form-check-label" for="female">
//                 Female
//               </label>
//             </div>
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="gender"
//                 id="other"
//                 value="other"
//                 onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           checked={formik.values.gender==="other"}
//               />
//               <label className="form-check-label" for="other">
//                 Other
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="form-group mt-2">
//           <label for="email">Email</label>
//           <input type="text" className="form-control" name="email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email} />
//         </div>
//         <div className="form-group mt-2">
//           <label for="phone">Phone Number</label>
//           <input type="number" className="form-control" name="phone" 
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.phone}/>
//         </div>
//         <div className="form-group mt-2">
//           <label for="password">Password</label>
//           <input type="password" className="form-control" name="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password} />
//         </div>
//         <div className="form-group mt-2">
//           <label for="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             className="form-control"
//             name="confirmPassword"
//             onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.confirmPassword}
//           />
//         </div>

//         <div className="form-group mt-2">
//           <label for="confirmPassword">Subscription</label>
//           <select className="form-control" name="subscription"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.subscription}>
//             <option value="">Select</option>
//             <option value="subscription-1">Free</option>
//             <option value="subscription-2">Pro</option>
//             <option value="subscription-3">Enterprise</option>
//           </select>
//         </div>

//         <div className="form-group mt-2">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value=""
//               id="termsAndCondtions"
//             />
//             <label className="form-check-label" htmlFor="termsAndCondtions">
//               Accept terms and conditions.
//             </label>
//           </div>
//         </div>

//         <div className="d-grid mt-2">
//           <button type="submit" className="btn btn-primary btn-block">
//             Sign Up
//           </button>
//         </div>
//       </form>
//       )}
//       </Formik>
//     </>
//   );
// };

// export default SigninForm;

