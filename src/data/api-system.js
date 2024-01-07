import axios from "axios";

class mainAPI {
  constructor() {
    this.apiKey = "268db567-3d81-46b3-bbc4-56d1c1fd483d";
    this.baseUrl = "https://project-2-api.herokuapp.com";
  }
  async getVidoeslist() {
    const response = await axios.get(
      `${this.baseUrl}/vidoes?api_key=${this.apiKey}`
    );
    console.log(`${this.baseUrl}/vidoes?api_key=${this.apiKey}`);
    let videoList = response.data;
    return videoList;
  }
  /*async getVideoData(currentVideoID) {
    const response = await axios.get(
      `${this.baseUrl}/vidoes/${currentVideoID}?api_key=${this.apiKey}`
    );
    console.log(
      `${this.baseUrl}/vidoes/${currentVideoID}?api_key=${this.apiKey}`
    );
    let currentVideoID = response.data;
    return currentVideo;
  }*/
}

export default mainAPI;
