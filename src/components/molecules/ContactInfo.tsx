import React from 'react';

interface Props {
  contactInfo: ContactInfo,
}

type ContactInfo = {
  header:string,
  body: ContactDetail[],
}

type ContactDetail = {
  title: string,
  content: string,
}

const ContactInfo : React.FC<Props> = (props:Props) => {
  const { contactInfo } = props;
  const { header, body } = contactInfo;

  return (
    <div>
       <div>{header}</div>
        <div>
          {body.map((item, index) => (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
    </div>
  );

};

export default ContactInfo ;