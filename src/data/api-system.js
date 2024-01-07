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
    let userComments = response.data;
    return userComments;
  }
  async getVideoData() {
    const response = await axios.get(
      `${this.baseUrl}/showdates?api_key=${this.apiKey}`
    );
    console.log(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
    let showsList = response.data;
    return showsList;
  }
}

export default mainAPI;
