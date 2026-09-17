"use strict";
(() => {
  // src/assets/javascripts/modules/console.js
  var consoleLog = (msg) => {
    return console.log(msg);
  };

  // src/assets/javascripts/modules/notifications.js
  var checkForNotifications = () => {
    const theNotification = document.querySelector(".govuk-comms-plugin__notification");
    const theTimeOut = theNotification?.dataset?.govukCommsPluginNotificationDelay || 3e3;
    const theTarget = theNotification?.dataset?.govukCommsPluginNotificationTarget || null;
    if (theNotification) {
      setTimeout(() => {
        theNotification.classList.add("govuk-comms-plugin__notification--show");
      }, theTimeOut);
      if (theTarget) {
        theNotification.addEventListener("click", (e) => {
          window.location.href = theTarget;
        });
      }
    }
  };
  var initNotifications = () => {
    checkForNotifications();
  };

  // src/assets/javascripts/all.js
  consoleLog("Hey");
  initNotifications();
})();
