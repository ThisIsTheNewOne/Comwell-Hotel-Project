import Link from 'next/link';
import React from 'react';
import ContactInfo from '../molecules/ContactInfo';
import contactInfoFooter from '../../data/contactInfoFooter.json';
import SubFooter from './SubFooter';

const Footer: React.FC = () => {
  const footerPages = ['Hotels', 'Packages', 'Meeting & Conference', 'Restaurant & Events', 'Spa', 'Contact'];
 
  const contactInfo = contactInfoFooter
  
  return (
    <footer>
    {footerPages.map((page, index) => (
        <li key={index}>
          <Link href={`/${page.toLowerCase().replace(/ & | /, '-and-')}`}>
            <h1>{page}</h1>
          </Link>
        </li>
    ))}

    {contactInfo.map((contact, index) => (
        <ContactInfo key={index} contactInfo={contact}></ContactInfo>
    ))}

    <SubFooter />

    </footer>
  );
};

export default Footer;