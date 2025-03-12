const ChatService = require("../services/chatService");
const tourSteps = require('../data/tour-steps');

exports.getNextStep = async (req, res) => {
  try {
    const { pageId, featureId, currentStep } = req.body;
    if (!pageId || !featureId || currentStep === undefined) {
      return res.status(400).json({ error: "Missing required parameters." });
    }

    if (!tourSteps[pageId] || !tourSteps[pageId][featureId]) {
      return res.status(404).json({ error: "Invalid pageId or featureId." });
    }

    const steps = tourSteps[pageId][featureId];

    if (currentStep >= steps.length - 1) {
      return res.json({ completed: true, message: "Tour completed successfully." });
    }

    const nextStep = steps[currentStep + 1];

    res.json({ completed: false, currentStep: nextStep });
  } catch (error) {
    console.error("Error fetching next step:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};


exports.botMessage = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = ChatService.processMessage(message);
    res.json(response);
  } catch (error) {
    console.error("Error processing chat message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};