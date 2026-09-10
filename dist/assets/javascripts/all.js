console.log('Loaded Comms')

function alertTheUser(message) {
  alert(message)
}

const theTrigger = document.getElementById('triggerDaysPassing')
const theCounter = document.getElementById('daysPassing')

const notifyUserOfMessage = (type, heading, message, from, target) => {
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

const addHtmlToPage = (type, heading, message, from) => {
  console.log('addHtmlToPage')
  document.getElementById('main-content').innerHTML += setTheHtml(type, heading, message, from)
}

const truncateString = (str, n) => {
  if (str.length > n) {
    return str.substring(0, n) + "...";
  } else {
    return str;
  }
}

const setTheHtml = (type, heading, message, from) => {
  if (type === 'email') {
    message = truncateString(message, 75)
    return `<div class="govuk-comms-plugin--email-alert govuk-comms-plugin--email-alert--windows-10">
    <h2>${from}</h2>
    <h3>${heading}</h3>
    <p>${message}</p>
    </div>`
  } else {
    return `<div id="phoneBackground" class="govuk-comms-plugin--phone-alert active">
        <div id="phone-mockup" class="active">

        </div>
    </div>`
  }
}

// The following could do with a rewrite

// function daysPass (page, waitTime, days) {
//   console.log('Days passing function called')
//   const theWaitTime = waitTime || 3000
//   setTimeout(function () {
//     theTrigger.classList.add('active')
//   }, theWaitTime)
//   theTrigger.addEventListener('click', function () {
//     theCounter.classList.add('active')
//     theTrigger.classList.remove('active')
//     for (let i = 0; i <= days; ++i) {
//       setTimeout((function (x) {
//         return function () {
//           document.getElementById('days').innerHTML = x.toString()
//         }
//       })(i), i * 1000)
//     }
//     setTimeout(function () { document.location.href = page }, (days * 1000))
//   })
// }
//
// if (theCounter.length === 1) {
//   const url = (theCounter.getAttribute('data-dayspassurl'))
//   const timeToPrompt = (theCounter.getAttribute('data-dayspasstimetoprompt')) || 5000
//   const days = (theCounter.getAttribute('data-dayspassdays')) || 5
//   daysPass(url, timeToPrompt, days)
// }

// if ($('#phoneBackground #phone-mockup').length === 1) {
//   $('#phone-mockup').on('click', function () {
//     $('#phoneBackground').toggleClass('active')
//     $(this).toggleClass('active')
//   })
// }
//
// if ($('#phoneAccessCode #phone-mockup').length === 1) {
//   setTimeout(function () {
//     $('#phone-mockup').toggleClass('active')
//   }, (3000))
// }
