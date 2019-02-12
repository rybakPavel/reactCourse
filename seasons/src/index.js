import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // this is the only time we do use the direct assignment to 'this.state' method
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we must call setState
                this.setState({ lat: position.coords.latitude });

                //this.state.lat = position.coords.latitude     is VERY bad example!!!
            },
            positionError => {
                this.setState({ errorMessage: positionError.message });
            }
        );
    }

    render() {
        //we must be trying not to use callbacks and other stuff in render() method
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));