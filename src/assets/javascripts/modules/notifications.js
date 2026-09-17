export const notifyUserOfMessage = (type, heading, message, from, target) => {
  console.log('notifyUserOfMessage')
  type = type || 'email'
  // Insert relevant html into page (SMS or Email)
  addHtmlToPage(type, heading, message, from)
  // Reveal notification
  const theNotification = document.querySelector('.govuk-comms-plugin--' + type + '-alert')
  setTimeout(() => {
    theNotification.classList.add('govuk-comms-plugin--translate-from-bottom')
  }, 1000)
  // Handle click
  theNotification.addEventListener('click', (e) => {
    if (target) {
      window.location.href = target
    } else {
      theNotification.classList.remove('active')
    }
  })
}

const checkForNotifications = () => {
    const theNotification = document.querySelector('.govuk-comms-plugin__notification')
    const theTimeOut = theNotification?.dataset?.govukCommsPluginNotificationDelay || 3000
    if (theNotification) {
        setTimeout(() => {
            theNotification.classList.add('govuk-comms-plugin__notification--show')
        }, theTimeOut)
    }
}

export const initNotifications = () => {
  checkForNotifications()
}