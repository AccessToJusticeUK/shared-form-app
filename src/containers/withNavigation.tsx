import * as React from 'react';

export const withNavigation = (WrappedComponent: any) => {
    return class extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            this.state = {
                currentId: 1
            };
        }

        moveToNext = (previous: number): void => {
            const allStagesHaveFinished = this.props.stagesLength && this.props.stagesLength === previous;
            if (allStagesHaveFinished) {          
                this.props.moveToNext(); // also call the version of this method that was passed down
                // Todo. with no argument passed? Is this doing anything?
            }
            this.setState({
                currentId: previous + 1
            });              
        }

        render() {
            return (
                <WrappedComponent 
                    {...this.props}
                    nextToComplete={this.state.currentId}
                    moveToNext={this.moveToNext}
                />
            );
        }
    };
};
