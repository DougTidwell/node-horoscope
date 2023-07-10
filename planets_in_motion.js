// planets_in_motion.js - Planets in motion horoscope service
const express = require('express');
app = express();
port = process.env.PORT || 3000;

const serviceName = 'Planetary Motion';
const css = 'color: purple;';
let horoscopeText;

getHoroscope = function(req, res){
    const sign = req.params.sign.toLowerCase();

    console.log(`  Getting horoscope for ${sign}`);
    if (sign === 'aries')
        horoscopeText = 'With the moon in the dining room of Cassiopeia, \
avoid making any financial decisions today.';
    else if (sign === 'taurus')
        horoscopeText = 'Despite Orion roaming the meadows of Capricorn, \
the pen remains mightier than the sword. Still, the stars say you should \
definitely not go to work without your sword.';
    else if (sign === 'gemini')
        horoscopeText = 'Even though Saturn is retrograde, don\'t be afraid \
to rock the boat today. Unless you\'re actually in a boat, in which case \
you should just sit down and shut up.';
    else if (sign === 'cancer')
        horoscopeText = 'As Libra scampers through the tulip fields of Zeus, \
the stars suggest you ignore all the warning signs and have a great day.';
    else if (sign === 'leo')
        horoscopeText = 'You wouldn\'t think it was possible with the Pleiades \
in the powder room of Sagittarius, but it\'s happening today anyway. \
Good luck with that.';
    else if (sign === 'virgo')
        horoscopeText = 'Neptune, relaxing in a hammock at Cygnus\'s place, \
casually mentioned he knows what you did last summer.';
    else if (sign === 'libra')
        horoscopeText = 'Hercules has nothing to do with the stars, but \
he stopped by to suggest you stay in bed with the covers pulled up \
to your ears until Pisces enters the back yard of Jupiter.';
    else if (sign === 'scorpio')
        horoscopeText = 'While Venus enjoys a mimosa on Bacchus\'s front porch, \
the stars say this is a perfect time to save money on car insurance.';
    else if (sign === 'sagittarius')
        horoscopeText = 'As long as Taurus is swimming laps in the pool of \
Olympus, the stars aren\'t giving back your passport.';
    else if (sign === 'capricorn')
        horoscopeText = 'Mercury said to tell you not to call the cops, or else. \
The stars assume you know what that\'s all about.';
    else if (sign === 'aquarius')
        horoscopeText = 'Yes, you\'re an Aquarius, the water sign and all that, \
but the stars emphatically said not to get on any boat of any size \
until Mars starts wearing age-appropriate bathing suits.';
    else if (sign === 'pisces')
        horoscopeText = 'Leda, enjoying some well-deserved downtime in the \
guest house of Scorpio, says the wolf at your door would probably \
make a great pet.';
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
console.log(`Planetary Motion astrological service running on \
port ${port}...`);