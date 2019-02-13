import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

    state = { lat: null, errorMessage: '' };      

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            positionError => this.setState({ errorMessage: positionError.message })
        );
    }

    //we must be trying not to use callbacks and other stuff in render() method
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <div>Loading!</div>;

        //else (!this.state.errorMessage && !this.state.lat) {
        //return <div>Loading! Wait a secont, you freak!</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));