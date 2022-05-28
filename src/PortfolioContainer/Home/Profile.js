import React from "react";
import Typical from "react-typical";
import './Profile.css';

export const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
                  <div className='colz'>
                      <div className="colz-icon">

                      
            <a href='https://www.facebook.com/abhi.sindam'>
              <i className='fa fa-facebook-square'></i>
            </a>
            <a href='https://www.google.com/'>
              <i className='fa fa-google-plus-square'></i>
            </a>
            <a href='https://www.instagram.com/?hl=en'>
              <i className='fa fa-instagram'></i>
            </a>
            <a href='https://www.youtube.com/'>
              <i className='fa fa-youtube-square'></i>
            </a>
            <a href='https://twitter.com/i/flow/login'>
              <i className='fa fa-twitter'></i>
                          </a>
                          </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Abhishek</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                              {" "}
                              <Typical
                                  loop={Infinity}
                                  setps={[
                                      "Full Stack Devloper ",
                                      1000,
                                      "Mern Stack Devloper",
                                      1000,
                                      "React/React Nativ Devloper",
                                      1000,
                                      
                                  ]}  
                              />
                          </h1>
              <span className='profile-role-tagline'>
                Knack of building application with front and back end oprations.
              </span>
            </span>
          </div>
          <div className='profile-option'>
            <button className='btn primary-btn'>
              {""}
              Hire Me{" "}
            </button>
            <a href='https://docs.google.com/document/d/1rQQcsAkOlasuQwxf_OTWDoAqjWLxrJetPAeBKMZQt08/edit'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
              </div>
              <div className="profile-picture">
                  <div className="profile-picture-background"></div>
              </div>
      </div>
    </div>
  );
};
