import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  async function handellogin(){
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login',{email,password});
     if (response.status === 200) {
        alert('success login hello ' + response.data.user.name);
      } 
      localStorage.setItem('user-info',JSON.stringify(response));
      navigate('/');
    }catch(error) {
        console.log(error.response.statusText)
        alert('Error login');
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
                                        <h3 class="h4 font-weight-bold text-warning">Login</h3>
                                    </div>
    
                                    <h6 class="h5 mb-0">Welcome back!</h6>
                                    <p class="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>
    
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" />
                                        </div>
                                        <div class="form-group mb-5">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" />
                                        </div>
                                        <button type="button" onClick={handellogin} class="btn btn-warning">Login</button>
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

  //       <div class="login-form">
  //    <h1>BBBoot</h1>
  //    <div class="form-group ">
  //      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" placeholder="Username " id="UserName"/>
  //      <i class="mdi mdi-account"></i>
  //    </div>
  //    <div class="form-group log-status">
  //      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" placeholder="Password" id="Passwod"/>
  //      <i class="mdi mdi-lock"></i>
  //    </div>
  //     <span class="alert">Invalid Credentials</span>
  //     <a class="link" href="#">Lost your password?</a>
  //    <button type="button" class="log-btn" onClick={handellogin}><i class="mdi mdi-account"></i> Log in</button>
     
    
  //  </div>

   
     );
}

export default Login;