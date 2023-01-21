// Import the AWS SDK for JavaScript in the Browser
import AWS from "aws-sdk";

// Configure the SDK with your AWS credentials and region
AWS.config.update({
  accessKeyId: "AKIAUFEBNFVSB5YOZLXS",
  secretAccessKey: "IYjDbzNyHxcto5UTsQw8bQlrnYpPtzDEeSHk/K+b",
  region: "ap-northeast-2",
});

// Create a new CloudFront service object
const cloudfront = new AWS.CloudFront();

// Define the parameters for the API call
const params = {
  Id: "E2SCF2TRV15IVX",
};

// Make the API call to get the distribution configuration
cloudfront.getDistributionConfig(params, function (err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    // Log the status of the distribution to the browser's developer console
    console.log(data.DistributionConfig.Status);
    console.log(
      "The status of the distribution is: ",
      data.DistributionConfig.Status
    );
  }
});
