var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({
      isLoading: true,
      location: undefined,
      temp: undefined,
      errorMessage: undefined
    });

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp:temp,
        isLoading: false
      });
    },function (e) {
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
    });
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
        return   <WeatherMessage temp={temp} location={location}/>;
      }
    };

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <errorModal message={errorMessage}/>
        )
      }
    };

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
