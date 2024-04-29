/**
 * File: example_request.js
 * Description: Contains an example request to the VisualizeIt API for generating an image.
 */

// Import necessary modules
const VisualizeItAPI = require('./visualizeit_api');

// Example request parameters
const apiKey = "your_api_key_here";
const description = "A vibrant Van Gogh-inspired landscape with rolling hills, golden wheat fields, and a swirling blue sky.";
const style = "oil painting";

// Make a request to generate the image
const generatedImageUrl = VisualizeItAPI.generateImage(apiKey, description, style);

// Display the generated image URL
console.log("Generated Image URL:", generatedImageUrl);

