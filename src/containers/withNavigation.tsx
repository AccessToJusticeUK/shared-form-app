import * as React from 'react';
// import { WrappedNavigationProps } from '../components/props.types';

export const withNavigation = (WrappedComponent: any) => {
  return class extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        openAtIndex: 1
      };
    }

    moveToNext = (data: string): void => {
      this.setState((prevState) => (
        { openAtIndex: prevState.openAtIndex + 1 }
      ));
    }

    render() {
      return <WrappedComponent {...this.props} openAtIndex={this.state.openAtIndex} moveToNext={this.moveToNext} />;
    }
  };
};
