
const Campaign = require("../model/campaignModel");

exports.createCampaign = async(req,res) => {
  const dbDoc = {
    name: `New Campaign, ${Date.now()}`,
    status: 'CREATED'
  };
  const campaign = await Campaign.insertOne(dbDoc);
  res.status(200).json({
    message: "Campaign created successfully",
    success:true,
    campaign
  })
}

exports.updateCampaign = async (req, res) => {
    try {
      const { status, name, ageRange } = req.body;
      const {campaignId } = req.params;

      if (!campaignId) {
        return res.status(400).json({ error: "Campaign ID is required" });
      }
  
      const updatedCampaign = await Campaign.findByIdAndUpdate(
        campaignId, 
        { status, name, ageRange }, 
        { new: true, runValidators: true } 
      );
  
      if (!updatedCampaign) {
        return res.status(404).json({ error: "Campaign not found" });
      }
  
      res.json({ success: true, message: "Campaign updated successfully", data: updatedCampaign });
    } catch (error) {
      console.error("Error updating campaign:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };


  exports.getCampaign = async (req, res) => {
    try {
      const campaigns = await Campaign.find().sort({ createdAt: -1 });
      res.json({ success: true, data: campaigns });
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };