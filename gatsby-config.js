/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.production`,
})

const sourceS3 = {
  resolve: 'gatsby-source-s3-asset',
  options: {
    bucketName: 'godanpark.com',
    //domain: null, // [optional] Not necessary to define for AWS S3; defaults to `s3.amazonaws.com`
    //protocol: 'https', // [optional] Default to `https`.
    //publicDomain: null, // [optional] Use this domain to construct the public URL for the assets
    accessKeyId: `${process.env.accessKeyId}`,
       secretAccessKey: `${process.env.secretAccessKey}`,
  },
}

const plugins = [
  sourceS3,
  // ...
]

module.exports = { plugins }
