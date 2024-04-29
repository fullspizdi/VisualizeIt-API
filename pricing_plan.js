/**
 * File: pricing_plan.js
 * Description: Contains the pricing plans available for the VisualizeIt API.
 */

// Define the pricing plans object
const PricingPlan = {
  Hobbyist: {
    description: "Ideal for experimentation and small-scale projects.",
    features: ["Text-to-Image Generation", "Style Customization", "Image Editing"],
    price: "$9.99/month"
  },
  Professional: {
    description: "Designed for businesses and regular creators.",
    features: ["Text-to-Image Generation", "Style Customization", "Image Editing", "Upscaling and Super-Resolution"],
    price: "$29.99/month"
  },
  Enterprise: {
    description: "High-volume generation and priority support.",
    features: ["Text-to-Image Generation", "Style Customization", "Image Editing", "Upscaling and Super-Resolution", "Diverse Content"],
    price: "Contact for pricing"
  }
};

module.exports = PricingPlan;
