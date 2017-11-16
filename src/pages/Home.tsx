import * as React from 'react';
import { StickyHeader } from '../components/StickyHeader';
import { StickyHeaderProps } from '../components/props.types';

export const Home: React.StatelessComponent<StickyHeaderProps> = (props) => {
    return(
      <div className="home">
        <StickyHeader logoSrc={props.logoSrc} title={props.title} />
        <div className="app-content">
          {props.children}
        </div>
      </div>
    );
};