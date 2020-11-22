import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="iconsFooter">
          <div>
            <a href="https://www.facebook.com/yanfaacom">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/yanfaacom">
              <FontAwesomeIcon className="instagram" icon={faInstagram} />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/yanfaacom">
              <FontAwesomeIcon className="twitter" icon={faTwitter} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/yanfaacom">
              <FontAwesomeIcon className="linked" icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="textFooter">جميع الحقوق محفوظة لموقع ينفع &copy; 2020</p>
      </div>
    </div>
  );
};

export default footer;
