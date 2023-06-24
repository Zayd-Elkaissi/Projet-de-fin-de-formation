import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Registre() {

        const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const navigate = useNavigate();

      async function handelRegistre(){
        try {
           console.log(name);
            console.log(email);
            console.log(password);
          const response = await axios.post('http://127.0.0.1:8000/api/register',{name,email,password});
         if (response.status === 200) {
            console.log(response.data)
            alert('success');
            setName("");
            setEmail("");
            setPassword("");
            navigate('/');
          } 
        }catch(error) {
            alert('email déja existe');
           
        }
        
        }



    return ( 

        <body className='pt-3'>
   
        <div id="main-wrapper" className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10">
                    <div className="card border-0">
                        <div className="card-body p-0">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="mb-5">
                                            <h3 className="h4 font-weight-bold text-warning">Register</h3>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Email</label>
                                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Confirm Password</label>
                                                <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                            </div>
                                            <button type="button" onClick={handelRegistre} className="btn btn-warning">Register</button>
                                        </form>
                                    </div>
                                </div>
        
                                <div className="col-lg-6 d-none d-lg-inline-block">
                                    <div className="account-block rounded-right">
                                        <div className="overlay rounded-right"></div>
                                        <div className="account-testimonial">
                                            {/* <h4 className="text-white mb-4">This  beautiful theme yours!</h4> */}
                                            {/* <p className="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p> */}
                                            {/* <p>- Admin User</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                   
                    </div>
        
                </div>
             
            </div>
           
        </div>
    </body>

//         <div className="login-form">
//      <h1>BBBoot</h1>
//      <div className="form-group ">
//      <input type="text" className="form-control" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
//        <i className="mdi mdi-account"></i>
//      </div>
//      <div className="form-group log-status">
//      <input type="email" className="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//        <i className="mdi mdi-lock"></i>
//      </div>
//      <div className="form-group log-status">
//      <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//        <i className="mdi mdi-lock"></i>
//      </div>
//      <div className="form-group log-status">
//      <input type="password" className="form-control" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//        <i className="mdi mdi-lock"></i>
//      </div>
//      <button type="button" className="log-btn" onClick={handelRegistre}><i className="mdi mdi-account"></i> Register</button>
     
    
//    </div>
     );
}

export default Registre;