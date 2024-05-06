import React, { FC, memo } from 'react';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

interface IProps {
  icon: IconProp;
}
const FontAwesome: FC<IProps> = ({ icon }) => {
  return (<FontAwesomeIcon icon={icon} />)
};

export default memo(FontAwesome);