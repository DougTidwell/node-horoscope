// ominous.js - Ominous horoscope service
var express = require('express');
app = express();
port = process.env.PORT || 3000;

const serviceName = 'Ominous';
const css = 'color: red;';
var horoscopeText;

getHoroscope = function(req, res){
    const caseNeutralSign = req.params.sign.toLowerCase();
    console.log(`  Getting horoscope for ${req.params.sign}`);
    if (caseNeutralSign === 'aries')
        horoscopeText = 'The stars won\'t say exactly what will happen today, \
but they suggest you say goodbye to your friends and loved ones.';
    else if (caseNeutralSign === 'taurus')
        horoscopeText = 'The stars suggest you leave town until \
the whole thing blows over.';
    else if (caseNeutralSign === 'gemini')
        horoscopeText = 'The stars stand corrected: turns out your \
irrational fears are completely justified.';
    else if (caseNeutralSign === 'cancer')
        horoscopeText = 'The stars say something hilarious will happen to you \
today. Keep in mind that the stars have a really mean sense of humor.';
    else if (caseNeutralSign === 'leo')
        horoscopeText = 'The stars say your enemies will forgive you today. \
They\'ll still press charges, but it won\'t be anything personal.';
    else if (caseNeutralSign === 'virgo')
        horoscopeText = 'The stars say a steamroller figures prominently \
in your future. You shouldn\'t worry, as long as you drive a \
steamroller for a living.';
    else if (caseNeutralSign === 'libra')
        horoscopeText = 'The stars say to stand up for yourself - today \
is no time to back down. They recommend standing up to \
someone small and unarmed.';
    else if (caseNeutralSign === 'scorpio')
        horoscopeText = 'The stars say you should be grateful for all the \
wonderful friends in your life. All your friends are imaginary, \
so that\'s probably not a big deal.';
    else if (caseNeutralSign === 'sagittarius')
        horoscopeText = 'The stars say a financial windfall could be yours \
today. The stars also rolled their eyes and said, "Yeah, right."';
    else if (caseNeutralSign === 'capricorn')
        horoscopeText = 'The stars say you should treat yourself to a lavish \
dinner tonight. Their exact words: "As if it were your last meal."';
    else if (caseNeutralSign === 'aquarius')
        horoscopeText = 'The stars say you should make a generous, \
unexpected gift to someone you barely know today. It probably won\'t \
get you out of hot water with Human Resources, but it couldn\'t hurt.';
    else if (caseNeutralSign === 'pisces')
        horoscopeText = 'The stars say to approach a confrontation with \
kid gloves and everything will be fine...for your opponent, who\'s \
wearing brass knuckles. ';
    else
        horoscopeText = 'Sorry, you need to tell me your sign.';

    res.set({'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'})
        .json({'serviceName': serviceName,
            'horoscopeText': horoscopeText,
            'css': css});
};

handleCors = function(req, res) {
    res.header('Access-Control-Allow-Origin', req.header('Origin'));
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
}

app.route('/horoscope/:sign')
    .get(getHoroscope)
    .options(handleCors);

app.listen(port);
console.log(`Ominous astrological service running on port ${port}...`);