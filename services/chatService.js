
const processMessage = (userMessage) => {
  const normalizedMessage = userMessage.toLowerCase();

  if (normalizedMessage.includes('campaign') || 
      normalizedMessage.includes('marketing') || 
      normalizedMessage.includes('how to create') ||
      normalizedMessage.includes('guide') ||
      normalizedMessage.includes('tutorial')) {
    return getCampaignTourResponse();
  }

  if (normalizedMessage.includes('audience') || 
      normalizedMessage.includes('targeting') || 
      normalizedMessage.includes('select criteria') ||
      normalizedMessage.includes('define users')) {
    return getAudienceSelectionResponse();
  }

  return {
    message: "I'm here to help you navigate our platform. You can ask me about creating campaigns, selecting audiences, or any other feature you'd like to learn about."
  };
};

const getCampaignTourResponse = () => ({
  message: "Here's how to create a new marketing campaign:",
  pageId: "campaign",
  featureId: "create-campaign",
  tourSteps: [
    {
      title: "Create a new campaign",
      description: "Click this button to start creating your new marketing campaign.",
      elementSelector: "#create-campaign-button",
      position: "bottom"
    },
    {
      title: "Select your audience criteria",
      description: "Define who you want to target with your campaign.",
      elementSelector: "#age-range-select",
      position: "right"
    },
    {
      title: "Apply your selection criteria",
      description: "Click to apply your audience selection criteria.",
      elementSelector: "#apply-criteria-button",
      position: "top"
    },
    {
      title: "Launch your campaign",
      description: "Once you're satisfied with your campaign setup, click here to launch it.",
      elementSelector: "#launch-campaign-button",
      position: "left"
    }
  ]
});

/**
 * Generates response for audience selection queries
 */
const getAudienceSelectionResponse = () => ({
  message: "Here's how to define your target audience:",
  tourSteps: [
    {
      title: "Open audience selection",
      description: "Navigate to the audience selection card.",
      elementSelector: "#select-criteria-card",
      position: "top"
    },
    {
      title: "Choose age range",
      description: "Select the age range for your target audience.",
      elementSelector: "#age-range-select",
      position: "bottom"
    },
    {
      title: "Apply criteria",
      description: "Click to apply your selected criteria.",
      elementSelector: "#apply-criteria-button",
      position: "right"
    }
  ]
});

module.exports = { processMessage };
