import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="text-white text-center py-3" style={{ background:"linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)"}}>
      <p>Made with <FontAwesomeIcon icon={faHeart} className="text-danger" /> by Fredericton Malayalee Association</p>
    </footer>
  );
}

export default Footer;
