// kafkaesque.js - Kafkaesque horoscope service

const express = require('express');
let app = express();
let port = process.env.PORT || 3000;

const { handleCors } = require("./handleCors");

const serviceName = 'Kafkaesque';
const css = 'color: black;';
let horoscopeText;

let getHoroscope = function(req, res){
    const caseNeutralSign = req.params.sign.toLowerCase();

    console.log(`  Getting horoscope for ${caseNeutralSign}`);
    if (caseNeutralSign === 'aries')
        horoscopeText = 'You will be arrested today. You will never be told \
the nature of the charges against you. \
Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'taurus')
        horoscopeText = 'You will feel your father\'s disapproval keenly today. \
Pretty much like every other day. Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'gemini')
        horoscopeText = 'After tomorrow, let\'s just say you\'ll be wearing shoes \
six at a time. Shop accordingly. Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'cancer')
        horoscopeText = 'You will write the person you love, telling them your \
relationship will never happen. They will never write back. \
Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'leo')
        horoscopeText = 'The excitement of finding a new form of disappointment \
will fade quickly. Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'virgo')
        horoscopeText = 'You will have a sudden insight that will bring you \
lasting peace and contentment. Just kidding. \
Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'libra')
        horoscopeText = 'Your lawyer will assure you that this will all be \
over soon. He is correct, but not in a good way. \
Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'scorpio')
        horoscopeText = 'What happens today won\'t be any more bearable if \
the stars tell you about it beforehand, so let\'s leave it at that. \
Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'sagittarius')
        horoscopeText = 'Not everybody would keep pursuing an unobtainable goal, \
but you seem to have a real flair for it. \
Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'capricorn')
        horoscopeText = 'You will start the day with a really good cappuccino. \
Like, seriously good. But it\'ll all be downhill from there. \
Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'aquarius')
        horoscopeText = 'You don\'t have a dog, but even if you did, it \
wouldn\'t like you. Your life will be bleak and miserable.';
    else if (caseNeutralSign === 'pisces')
        horoscopeText = 'Your city will have an amazing zoo, but you\'ll never \
live to see it. Your life will be bleak and miserable.';
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
console.log(`Kafkaesque astrological service running on port ${port}...`);