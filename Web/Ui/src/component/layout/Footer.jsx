import React, { useState } from 'react';

export default function Footer() {




return(
            
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Restaurantly</h3>
              <div className="social-links mt-3">
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li> */}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              {/* <li><i className="bx bx-chevron-right"></i> <a href="#"></a></li> */}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            {/* <form action="" method="post">
              <input type="email" name="email" /><input type="submit" value="Subscribe" />
            </form> */}

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
  
      
)

}


