import React, {useState, Component } from 'react';
import { validFname, validPassword } from './regex';
const Myform = () => {
    const[email, setEmail] = useState('')
    const[fname, setFname]= useState('')
    const[password, setPassword] = useState('')
    const[fnameErr, setfnameErr] = useState(false)
    const[pwdErr, setPwderr] = useState(false)
    const validateFname = (e) =>{
        if(!validFname.test(fname)){
            setfnameErr(true)
        }
        if(!validPassword.test(password)){
            setPwderr(true)
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(`the email you entered is ${email} and my name is ${fname}, the password is ${password}`)
    }
    return (<>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
              </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">Home</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" href="#">Link</a>
               </li>
            <li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Dropdown
                   </a>
                   <ul className="dropdown-menu">
               <li><a className="dropdown-item" href="#">Action</a></li>
               <li><a className="dropdown-item" href="#">Another action</a></li>
               <li><hr className="dropdown-divider"/></li>
               <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
           <form onSubmit={handleSubmit}>
             <div className="row mb-3">
               <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
               <div className="col-sm-10">
                 <input type="email" 
                 value={email}
                 onChange ={(e)=>setEmail(e.target.value)}
                 className="form-control" id="inputEmail3"/>
               </div>
             </div>
             <div className="row mb-3">
               <label for="inputFname3" className="col-sm-2 col-form-label">Fname</label>
               <div className="col-sm-10">
                 <input type="text" 
                 value={fname}
                 placeholder='enter your firstname'
                 onChange ={(e)=>setFname(e.target.value)}
                 className="form-control" id="inputFname3"/>
               </div>
             </div>
             <div className="row mb-3">
               <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
               <div className="col-sm-10">
                 <input type="password" 
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}
                 className="form-control" id="inputPassword3"/>
               </div>
             </div>
             <fieldset className="row mb-3">
               <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
               <div className="col-sm-10">
                 <div className="form-check">
                   <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                   <label className="form-check-label" for="gridRadios1">
                     First radio
                   </label>
                 </div>
                 <div className="form-check">
                   <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                   <label className="form-check-label" for="gridRadios2">
                     Second radio
                   </label>
                 </div>
                 <div className="form-check disabled">
                   <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                   <label className="form-check-label" for="gridRadios3">
                     Third disabled radio
                   </label>
                 </div>
               </div>
             </fieldset>
             <div className="row mb-3">
               <div className="col-sm-10 offset-sm-2">
                 <div className="form-check">
                   <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                   <label className="form-check-label" for="gridCheck1">
                     Example checkbox
                   </label>
                 </div>
               </div>
             </div>
             <button type="submit"
              onClick={validateFname}
              className="btn btn-primary">Sign in</button>
           </form>
           {fnameErr && <p>fname does not match the set pattern</p>}
           {pwdErr && <p>paswword error</p>}
    </>);
}
 
export default Myform;