import React from 'react';
import Navbar from '../../components/Navbar';
class PhotogProfile extends React.Component {
  render() {
    return (
      <div>
          <Navbar />
        <h1>Photographer</h1>
        <form>
        <div className="form-group">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input className="form-control" id="nameInput" placeholder="John Smith"></input>
              </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
              <div className="form-group">
              <label htmlFor="exampleInputPassword1">Location</label>
              <input className="form-control" id="locationInput" placeholder="Chicago"></input>
              </div>
              <div className="form-group">
              <label htmlFor="exampleInputPassword1">Instagram Link</label>
              <input className="form-control" id="instagramInput" placeholder="@instagram"></input>
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputPassword1">Portfolio Link</label>
              <input className="form-control" id="portfolioInput" placeholder="yourpage.com"></input>
          </div>
          <div class="form-group">
        <label for="exampleFormControlTextarea1">Bio</label>
        <textarea class="form-control" id="bioInout" rows="3"></textarea>
  </div>
                <button type="photogProfile-submit" className="btn btn-primary">Submit</button>
</form>
            </div>
            );
          }
        }
        
export default PhotogProfile;