// Set your app credentials
const credentials = {
    apiKey: 'atsk_82ca53f8ebbd467c72ef605a3b3c95e5ae388b5ff65aa841c23664ae51cc3d3ee040ee1d',
    username: 'sandbox',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the airtime service
const airtime = AfricasTalking.AIRTIME;

function sendAirtime() {
    const options = {
        maxNumRetry: 3, // Will retry the transaction every 60seconds for the next 3 hours.
        recipients: [{
            phoneNumber: "+2349030194735",
            currencyCode: "NGN",
            amount: "50"
        }]
    };

    // That’s it hit send and we’ll take care of the rest
    airtime.send(options)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
}

sendAirtime();