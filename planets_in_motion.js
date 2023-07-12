// planets_in_motion.js - Planets in motion horoscope service

const express = require('express');
let app = express();
let port = process.env.PORT || 3000;

const { handleCors } = require("./handleCors");

const serviceName = 'Planetary Motion';
const css = 'color: purple;';
let horoscopeText;

let getHoroscope = function(req, res){
    const caseNeutralSign = req.params.sign.toLowerCase();

    console.log(`  Getting horoscope for ${caseNeutralSign}`);
    if (caseNeutralSign === 'aries')
        horoscopeText = 'With the moon in the dining room of Cassiopeia, \
avoid making any financial decisions today.';
    else if (caseNeutralSign === 'taurus')
        horoscopeText = 'Despite Orion roaming the meadows of Capricorn, \
the pen remains mightier than the sword. Still, the stars say you should \
definitely not go to work without your sword.';
    else if (caseNeutralSign === 'gemini')
        horoscopeText = 'Even though Saturn is retrograde, don\'t be afraid \
to rock the boat today. Unless you\'re actually in a boat, in which case \
you should just sit down and shut up.';
    else if (caseNeutralSign === 'cancer')
        horoscopeText = 'As Libra scampers through the tulip fields of Zeus, \
the stars suggest you ignore all the warning signs and have a great day.';
    else if (caseNeutralSign === 'leo')
        horoscopeText = 'You wouldn\'t think it was possible with the Pleiades \
in the powder room of Sagittarius, but it\'s happening today anyway. \
Good luck with that.';
    else if (caseNeutralSign === 'virgo')
        horoscopeText = 'Neptune, relaxing in a hammock at Cygnus\'s place, \
casually mentioned he knows what you did last summer.';
    else if (caseNeutralSign === 'libra')
        horoscopeText = 'Hercules has nothing to do with the stars, but \
he stopped by to suggest you stay in bed with the covers pulled up \
to your ears until Pisces enters the back yard of Jupiter.';
    else if (caseNeutralSign === 'scorpio')
        horoscopeText = 'While Venus enjoys a mimosa on Bacchus\'s front porch, \
the stars say this is a perfect time to save money on car insurance.';
    else if (caseNeutralSign === 'sagittarius')
        horoscopeText = 'As long as Taurus is swimming laps in the pool of \
Olympus, the stars aren\'t giving back your passport.';
    else if (caseNeutralSign === 'capricorn')
        horoscopeText = 'Mercury said to tell you not to call the cops, or else. \
The stars assume you know what that\'s all about.';
    else if (caseNeutralSign === 'aquarius')
        horoscopeText = 'Yes, you\'re an Aquarius, the water sign and all that, \
but the stars emphatically said not to get on any boat of any size \
until Mars starts wearing age-appropriate bathing suits.';
    else if (caseNeutralSign === 'pisces')
        horoscopeText = 'Leda, enjoying some well-deserved downtime in the \
guest house of Scorpio, says the wolf at your door would probably \
make a great pet.';
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
console.log(`Planetary Motion astrological service running on port ${port}...`);