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
            }

            this.setState({
                currentId: previous + 1
            });
        }

        render() {
            const lastStepCompleted = this.props.stagesLength ? this.props.lastStepCompleted : this.state.currentId - 1;

            return (
                <WrappedComponent
                    {...this.props}
                    nextToComplete={this.state.currentId}
                    moveToNext={this.moveToNext}
                    lastStepCompleted={lastStepCompleted}
                />
            );
        }
    };
};
