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
   
        <div id="main-wrapper" class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="card border-0">
                        <div class="card-body p-0">
                            <div class="row no-gutters">
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="mb-5">
                                            <h3 class="h4 font-weight-bold text-warning">Register</h3>
                                        </div>
        
                                        {/* <h6 class="h5 mb-0">Welcome back!</h6> */}
                                        {/* <p class="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p> */}
        
                                        <form>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Email</label>
                                                <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Confirm Password</label>
                                                <input type="password" class="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                            </div>
                                            <button type="button" onClick={handelRegistre} class="btn btn-warning">Register</button>
                                        </form>
                                    </div>
                                </div>
        
                                <div class="col-lg-6 d-none d-lg-inline-block">
                                    <div class="account-block rounded-right">
                                        <div class="overlay rounded-right"></div>
                                        <div class="account-testimonial">
                                            {/* <h4 class="text-white mb-4">This  beautiful theme yours!</h4> */}
                                            {/* <p class="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p> */}
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

//         <div class="login-form">
//      <h1>BBBoot</h1>
//      <div class="form-group ">
//      <input type="text" class="form-control" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
//        <i class="mdi mdi-account"></i>
//      </div>
//      <div class="form-group log-status">
//      <input type="email" class="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//        <i class="mdi mdi-lock"></i>
//      </div>
//      <div class="form-group log-status">
//      <input type="password" class="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//        <i class="mdi mdi-lock"></i>
//      </div>
//      <div class="form-group log-status">
//      <input type="password" class="form-control" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//        <i class="mdi mdi-lock"></i>
//      </div>
//      <button type="button" class="log-btn" onClick={handelRegistre}><i class="mdi mdi-account"></i> Register</button>
     
    
//    </div>
     );
}

export default Registre;