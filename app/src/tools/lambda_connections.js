import LAMBDA_URLS from "../config/lambda_functions_urls";

class AWSLambdaConnections {
  constructor() {
    this.lambda_urls = LAMBDA_URLS;
  }
  async sign_in(data) {
    console.log(data);
    console.log(this.lambda_urls.get_user);
    return await fetch(this.lambda_urls.get_user, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export default AWSLambdaConnections;
