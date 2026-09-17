# GOV.UK Communication Simulations (govuk-communications-plugin)

A plugin to integrate simulations of communication patterns such as email or SMS notifications into GOV.UK prototypes. 

This includes the ability to convey the passing of time between interactions and simulate potential device or channel switching.

## Installation

To install the plugin use:

`npm install @benwatsonuk/govuk-comms-plug --save`

## Set up

Once installed and activated, you can use the provided templates and macros to similate notifications.

To use the email template, add the following to the top of your HTML page or create a page from the template under 'Manage Prototype'.

`{% extends "templates/email.html" %}`

To use a notification add the macro with desired parameters to a block of your choice, the following is recommended:

`{% block containerEnd %}
		{{ govukCommsPluginNotification({
		delay: "500",
		type: "email",
		style: "apple",
		href: "../emails/email-verify-your-email",
		transition: "move",
		heading: "Verify your email",
		sender: "File Transfer Service",
		message: "To continue your registration to use FTS you must verify your email address before we can send your activation code."
	})}}
	{% endblock %}`

    ##Parameters

    The macro will work with defaults without configuration, but it likely won't be much use without a few instructions. The following items can be used:

    type: email | authApp | sms
    style: default | apple | apple--dark
    href: string (the relative path to the email you wish to link to)
    transition: fade (default) | move | move-in-from-bottom
    heading: string
    message: string
    sender: string