const tourSteps = {
    'dashboard': {
      'create-campaign': [
          {
            id: "createCampaign",
            step: 0,
            title: "Create Campaign",
            description: "Start here to create a new marketing campaign.",
            targetRef: "createButtonRef",
            color: "blue",
            isLast: false,
            callback: {
              method: 'POST',
              url: '/'
            }
          },
          {
            id: "nameCampaign",
            step: 1,
            title: "Name Your Campaign",
            description: "Give your campaign a memorable and descriptive name.",
            targetRef: "campaignNameRef",
            color: "indigo",
            isLast: false,
            callback: {
              method: 'PATCH',
              url: '/',
            }
          },
          {
            id: "defineCriteria",
            step: 2,
            title: "Define Audience",
            description: "Select the demographics to target with your campaign.",
            targetRef: "criteriaFormRef",
            color: "green",
            isLast: false,
            callback: {
              method: 'PATCH',
              url: '/'
            }
          },
          {
            id: "launchCampaign",
            title: "Launch",
            step: 3,
            description: "Review and deploy your campaign when ready.",
            targetRef: "launchButtonRef",
            color: "purple",
            isLast: true,
            callback: {
              method: 'PATCH',
              url: '/'
            }
          }
        ]
    }
}
module.exports = tourSteps;