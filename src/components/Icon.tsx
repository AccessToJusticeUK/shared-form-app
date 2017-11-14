import * as React from 'react';
import { IconProps } from './props.types';
import { concatClassNames } from '../helpers/formatters';

export const Icon: React.StatelessComponent<IconProps> = (props) => {
  return (
    <div className={concatClassNames('icon', props.classNames)}>
      <img className="icon-img" src={props.imgSrc} alt="logo" />
      { props.text && <span className="icon-text">{props.text}</span> }
    </div>
  );
};
