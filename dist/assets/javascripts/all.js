"use strict";
(() => {
  // src/assets/javascripts/modules/console.js
  var consoleLog = (msg) => {
    return console.log(msg);
  };

  // src/assets/javascripts/modules/notifications.js
  var checkForNotifications = () => {
    console.log("Looking for notifications...");
    const theNotification = document.querySelector(".govuk-comms-plugin__notification");
    const theTimeOut = theNotification?.dataset?.govukCommsPluginNotificationTimeout || 3e3;
    if (theNotification) {
      setTimeout(() => {
        theNotification.classList.add("govuk-comms-plugin__notification--show");
      }, theTimeOut);
    }
  };
  var initNotifications = () => {
    console.log("initNotifications");
    checkForNotifications();
  };

  // src/assets/javascripts/all.js
  consoleLog("Hey");
  initNotifications();
})();
