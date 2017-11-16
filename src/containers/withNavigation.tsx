import * as React from 'react';

export const withNavigation = (WrappedComponent: any) => {
    return class extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            this.state = {
                currentId: 1,
                data: {}
            };
        }

        setData = (id: number, text: string): void => {
            this.setState((prevState) => ({
                data: {
                    ...prevState.data,
                    [id]: text
                }
            }));
        }

        moveToNext = (): void => {
            this.setState((prevState) => ({
                currentId: prevState.currentId + 1
            }));
        }

        render() {
            console.log('data', this.state.data);
            const canMoveToNext = this.state.data[this.state.currentId] ? true : false;
            console.log('canMoveToNext',canMoveToNext)
            console.log('currentId', this.state.currentId)
            return (
                <WrappedComponent 
                    {...this.props}
                    openAtIndex={this.state.currentId}
                    moveToNext={this.moveToNext}
                    setData={this.setData}
                    canMoveToNext={canMoveToNext}
                    completeAtIndex={this.state.currentId - 1}
                />
            );
        }
    };
};
