// optimistic.js - Optimistic horoscope service

const express = require('express');
let app = express();
let port = process.env.PORT || 3000;

const { handleCors } = require("./handleCors");

const serviceName = 'Optimistic';
const css = 'color: red;';
let horoscopeText;

let getHoroscope = function(req, res){
    const caseNeutralSign = req.params.sign.toLowerCase();

    console.log(`  Getting horoscope for ${caseNeutralSign}`);
    if (caseNeutralSign === 'aries')
        horoscopeText = 'The stars suggest you talk to your friends and loved ones today.';
    else if (caseNeutralSign === 'taurus')
        horoscopeText = 'The stars say it\'s time for a vacation!';
    else if (caseNeutralSign === 'gemini')
        horoscopeText = 'The stars say you should put your irrational fears behind you and make the most of the day!';
    else if (caseNeutralSign === 'cancer')
        horoscopeText = 'The stars say something hilarious will happen to you today. Laugh hard!';
    else if (caseNeutralSign === 'leo')
        horoscopeText = 'The stars say your enemies will forgive you today.';
    else if (caseNeutralSign === 'virgo')
        horoscopeText = 'The stars say something will weigh heavily on your mind. Stay positive!';
    else if (caseNeutralSign === 'libra')
        horoscopeText = 'The stars say to stand up for yourself - today is no time to back down. You can do this!';
    else if (caseNeutralSign === 'scorpio')
        horoscopeText = 'The stars say you should be grateful for all the wonderful friends in your life.';
    else if (caseNeutralSign === 'sagittarius')
        horoscopeText = 'The stars say a financial windfall could be yours today.';
    else if (caseNeutralSign === 'capricorn')
        horoscopeText = 'The stars say you should treat yourself to a lavish dinner tonight. You\'ve earned it!';
    else if (caseNeutralSign === 'aquarius')
        horoscopeText = 'The stars say you should make a generous, unexpected gift to someone you barely know today.';
    else if (caseNeutralSign === 'pisces')
        horoscopeText = 'The stars say to approach a confrontation with kid gloves and everything will be fine.';
    else
        horoscopeText = 'Sorry, you need to tell me your sign.';

    res.set({'Access-Control-Allow-Origin': req.header('Origin'),
        'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        'Cache-Control': 'no-cache, no-store, must-revalidate'})
        .json({'serviceName': serviceName,
            'horoscopeText': horoscopeText,
            'css': css});
};

app.route('/horoscope/:sign')
    .get(getHoroscope)
    .options(handleCors);

app.listen(port);
console.log(`Optimistic astrological service running on port ${port}...`);