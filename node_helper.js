/**************
*  MMM-Glassy
*  ©Bugsounet
*  04/2024
**************/

const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  socketNotificationReceived (notification, payload) {
    switch (notification) {
      case "INIT":
        console.log("[GLASSY] MMM-Glassy Version:", require("./package.json").version, "rev:", require("./package.json").rev);
        if (payload.debug) console.log("[GLASSY] Config:", payload);
        break;
    }
  }
});
