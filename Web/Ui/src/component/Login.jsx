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
   
    <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
            <div className="col-xl-10">
                <div className="card border-0">
                    <div className="card-body p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="mb-5">
                                        <h3 className="h4 font-weight-bold text-warning">Login</h3>
                                    </div>
    
                                    <h6 className="h5 mb-0">Welcome back!</h6>
                                    <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>
    
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                        </div>
                                        <button type="button" onClick={handellogin} className="btn btn-warning">Login</button>
                                    </form>
                                </div>
                            </div>
    
                            <div className="col-lg-6 d-none d-lg-inline-block">
                                <div className="account-block rounded-right">
                                    <div className="overlay rounded-right"></div>
                                    <div className="account-testimonial">
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