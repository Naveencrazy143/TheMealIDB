import React from 'react';

function Footer() {
  return (
    <footer className="text-light py-4" style={{background:'#23180d'}}>
      <div className="container">
        < div className="row">

      
          <div className="col-lg-4 col-md-4">
            <p>&copy; 2024 TheMealDB Proudly build in India</p>
          </div>
        

          <div className="col-lg-4 col-md-4">
            <h5>CONTACT US</h5>
            <p><i className="fas fa-home"></i> Address: 123 Street, City, Country</p>
<p><i className="fas fa-phone"></i> Phone: 6379955228</p>
<p><i className="fas fa-envelope"></i> Email: naveen.jdit@gmail.com</p>

          </div>
          <div className="col-lg-4 col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
            </ul>
          </div>
        </div>
     
      </div>
    </footer>
  );
}

export { Footer};
