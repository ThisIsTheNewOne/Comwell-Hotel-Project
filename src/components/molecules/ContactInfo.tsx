import React from "react";

interface Props {
  contactInfo: { header: string; body: ContactDetail[] }[];
}

type ContactDetail = {
  title: string;
  content: string;
};

const ContactInfo: React.FC<Props> = (props: Props) => {
  const { contactInfo } = props;

  return (
    <div>
      <div>
        {contactInfo.map((infoItem, index) => {
          return (
            <div key={index}>
              <div className="mb-2 mt-2">{infoItem.header}</div>
              <div>
                {infoItem.body.map((item, index) => (
                  <div key={index} className="flex">
                    <h3 className="font-light mb-1 !important">
                      <strong>
                        {item.title !== "" ? item.title + ":" + " " : item.title}
                      </strong>
                    </h3>
                    <p>
                      <strong>{item.content}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
