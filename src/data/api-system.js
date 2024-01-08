import axios from "axios";

// const aPIlinkAllVidoes =
//   "https://project-2-api.herokuapp.com/videos/?api_key=268db567-3d81-46b3-bbc4-56d1c1fd483d";
// async function output() {
//   const response = await axios.get(aPIlinkAllVidoes);
//   return response.data;
// }
// export default output;

class brainFlixAPI {
  constructor() {
    this.key = "268db567-3d81-46b3-bbc4-56d1c1fd483d";
    this.url = "https://project-2-api.herokuapp.com";
  }
  async getVideoList() {
    const response = await axios.get(`${this.url}/videos/?api_key=${this.key}`);
    console.log(`${this.url}/videos/?api_key=${this.key}`);
    let videoList = response.data;
    return videoList;
  }
  async getVideobyId(id) {
    const response = await axios.get(
      `${this.url}/video/${id}?api_key=${this.key}`
    );
    console.log(`${this.url}/video/${id}?api_key=${this.key}`);
    let videoData = response.data;
    return videoData;
  }
}
export default brainFlixAPI;
/*
how to:
Make an input into an API*/
