// Set your app credentials
const credentials = {
    apiKey: 'atsk_f473ebbcb2946ba2d7791ac1dbba07d85bf097a86a9a81dd9a03ef95dee0aa69f3de842f',
    username: 'Umardoja',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+2349030194735'],
        // Set your message
        message: "I'm a lumberjack and its ok, I sleep all night and I work all day",
        // Set your shortCode or senderId
        from: 'ATAlert'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}

sendMessage();