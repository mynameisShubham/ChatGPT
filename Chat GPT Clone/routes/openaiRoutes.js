const express = require("express");
const { summaryController, paragraphController, chatbotController, jsconverterController, scifiImageController } = require("../controller/openaiController");



const routers = express.Router();

//route
routers.post("/summary", summaryController);
routers.post("/paragraph", paragraphController);
routers.post("/chatbot", chatbotController);
routers.post("/js-converter", jsconverterController);
routers.post("/scifi-image", scifiImageController);

module.exports = routers;