// optimistic.js - Optimistic horoscope service
const express = require('express');
app = express();
port = process.env.PORT || 3000;

const serviceName = 'Optimistic';
const css = 'color: red;';
let horoscopeText;

getHoroscope = function(req, res){
    const sign = req.params.sign.toLowerCase();

    console.log(`  Getting horoscope for ${sign}`);
    if (sign === 'aries')
        horoscopeText = 'The stars suggest you talk to your friends and loved ones today.';
    else if (sign === 'taurus')
        horoscopeText = 'The stars say it\'s time for a vacation!';
    else if (sign === 'gemini')
        horoscopeText = 'The stars say you should put your irrational fears behind you and make the most of the day!';
    else if (sign === 'cancer')
        horoscopeText = 'The stars say something hilarious will happen to you today. Laugh hard!';
    else if (sign === 'leo')
        horoscopeText = 'The stars say your enemies will forgive you today.';
    else if (sign === 'virgo')
        horoscopeText = 'The stars say something will weigh heavily on your mind. Stay positive!';
    else if (sign === 'libra')
        horoscopeText = 'The stars say to stand up for yourself - today is no time to back down. You can do this!';
    else if (sign === 'scorpio')
        horoscopeText = 'The stars say you should be grateful for all the wonderful friends in your life.';
    else if (sign === 'sagittarius')
        horoscopeText = 'The stars say a financial windfall could be yours today.';
    else if (sign === 'capricorn')
        horoscopeText = 'The stars say you should treat yourself to a lavish dinner tonight. You\'ve earned it!';
    else if (sign === 'aquarius')
        horoscopeText = 'The stars say you should make a generous, unexpected gift to someone you barely know today.';
    else if (sign === 'pisces')
        horoscopeText = 'The stars say to approach a confrontation with kid gloves and everything will be fine.';
    else
        horoscopeText = 'Sorry, you need to tell me your sign.';

    res.set({'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        'Cache-Control': 'no-cache, no-store, must-revalidate'})
        .json({'serviceName': serviceName,
            'horoscopeText': horoscopeText,
            'css': css});
};

reassureTheClient = function(req, res) {
    res.header('Access-Control-Allow-Origin', req.header('Origin'));
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
}

app.route('/horoscope/:sign')
    .get(getHoroscope)
    .options(reassureTheClient);

app.listen(port);
console.log(`Optimistic astrological service running on port ${port}...`);