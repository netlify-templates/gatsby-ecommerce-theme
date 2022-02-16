import React, { useState } from 'react';
import Icon from '../Icons/Icon';
import * as styles from './Accordion.module.css';

const Accordion = (props) => {
  const { title, type='caret', customStyle, children } = props;
  
  const [open, setOpen] = useState(false);

  const combinedStyling = {...styles, ...customStyle}

  return (
    <div className={combinedStyling.accordionRoot}>
      <div 
        className={`${combinedStyling.accordionHeader}`} 
        role={'presentation'} onClick={()=>setOpen(!open)}>
        <span className={`${combinedStyling.accordionTitle} ${combinedStyling.uppercase}`}>
          {title}
        </span>
        {type === 'caret' &&
        <div className={`${styles.iconContainer} ${open === true ? styles.rotate : ''}`}>
          <Icon symbol={'caret'}></Icon>
        </div>}
      </div>
      <div className={`${styles.accordionContent} ${open === true ? styles.show : styles.hide}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
