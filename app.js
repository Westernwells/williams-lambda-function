/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
const axios = require("axios");
const { landedCostRequest, dutyTaxRequest } = require("./sampleRequest");

exports.lambdaHandler = async (event, context) => {
    // Response data
  let response = "";
//   the response from the api call to zonos
  let body = "";
//   Axios Configuration
  let config = {
    baseURL: "https://api.zonos.com/v1/",
    headers: {
      "zonos-version": "2019-11-21",
      "serviceToken": "0c972f5f-dc42-4017-a7cd-1f908876a701",
    },
  };
  //   Geting Landed cost
  const postLandedCost = axios.post("/landed_cost", landedCostRequest, config);
  //   Geting Duty tax
  const postDutyTax = axios.post("/duty_tax", dutyTaxRequest, config);
  try {
    //   making call to zonos
    await axios
      .all([postLandedCost, postDutyTax])
      .then(
        axios.spread((...responses) => {
          const postLandedCostResponse = responses[0].data;
          const postDutyTaxResponse = responses[1].data;
        //   populating the body with zonos response
          body = {
            landed_cost: postLandedCostResponse,
            duty_tax: postDutyTaxResponse,
          };
          response = {
            statusCode: 200,
            body: JSON.stringify({
              message: "Success Fetching Response",
              body,
            }),
          };
        })
      )
      .catch((errors) => {
        // console.error(errors.response.data.errors);
        // if error
        return {
          statusCode: 400,
          body: JSON.stringify({
            message: "Error Fetching Response",
            error: errors.response.data.errors,
          }),
        };
        // react on errors.
      });
  } catch (err) {
    console.log(err);
    return err;
  }
  return response;
};
