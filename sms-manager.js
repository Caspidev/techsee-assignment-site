const twiloNumber = "+18335140008";
const accountSid = 'ACe5b0449958859ba0fd154943e0515f9c';
const authToken = '97b3081de1fe9814ed9d566b2292657f';
const authyAPIKey = "MZ01rhDOhLuA70QWVQqVdBEWJdW5TzXH";

const authy = require("authy")(authyAPIKey);
const client = require('twilio')(accountSid, authToken);

class SMSManager {

    constructor(phoneNumber, ext, content)
    {
        this.phoneNumber = phoneNumber;
        this.ext = ext;
        this.content = content;
    }
     
    SendSMS()
    {
        //Debug
        console.log('+' + this.ext + this.phoneNumber);
     
        client.messages
        .create({
            body: this.content,
            from: twiloNumber,
            to: '+' + this.ext + this.phoneNumber
        })
        .then(message => console.log(message.sid));
    }
} 

module.exports = SMSManager;
