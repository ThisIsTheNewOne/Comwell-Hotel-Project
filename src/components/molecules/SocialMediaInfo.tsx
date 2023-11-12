import { type } from 'os';
import React from 'react';

interface Props {
 socialMediaInfo: SocialMediaInfoProp,
}

type SocialMediaInfoProp = {
  img:string,
  title: string,
}

const SocialMediaInfo : React.FC<Props> = (props:Props) => {
  const { socialMediaInfo } = props;
  const { img, title } = socialMediaInfo;

  return (
    <div>
       <div>{img}</div>
       <div>{title}</div>
    </div>
  );

};

export default SocialMediaInfo ;