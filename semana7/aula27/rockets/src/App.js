
import React from "react";
import axios from "axios";
import styled from "styled-components";

const RocketSelect = styled.select`
  width: 100%;
`;

class App extends React.Component {
  state = {
    rocketList: [],
    selectedRocketUrl:""
  };

  componentDidMount() {
    this.fetchRocket();
  }

  fetchRocket = () => {
    const apiUrl = 'https://api.spacexdata.com/v3/rockets';
    axios.get(apiUrl).then((response) => {
      this.setState({ rocketList: response.data});
    });
  };

  onChangeSelect = (event) => {
    console.log("SELECIONOU ALGO", event.target.value);
    const apiUrl = `https://api.spacexdata.com/v3/rockets/${event.target.value}`;
    axios.get(apiUrl).then((response) => {
      console.log("RESPOSTA ROCKET", response.data);

      this.setState({selectedRocketUrl: response.data.flickr_images});
    });
  };

  render() {
    console.log(this.state.rocketList);
    const optionList = this.state.rocketList.map((rocket) => {
      return <option key={rocket.rocket_id}>{rocket.rocket_id}</option>;
    });

    return (
      <div className="App">
        <RocketSelect onChange={this.onChangeSelect}>
          {optionList}
        </RocketSelect>
        <img src={this.state.selectedRocketUrl} alt="" />
      </div>
    );
  }
}

export default App;
