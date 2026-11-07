// The HUD day follows the world's day, so sleeping moves it on, the same as the Improved Mobs
// grace period and difficulty
function getCurrentDay(server) {
    return Math.floor(server.overworld().getDayTime() / 24000);
}

function sentPlayerDay(player) {
    player.sendData('day_sync', {
        day: getCurrentDay(player.server),
        survived: player.persistentData.getInt("days_survived") || 0
    });
}

let lastDayCount = null;
ServerEvents.tick(event => {
    const dayCount = getCurrentDay(event.server);
    if (lastDayCount == null || dayCount != lastDayCount) {
        lastDayCount = dayCount;
        event.server.players.forEach(player => {
            sentPlayerDay(player)
        });
    }
})

PlayerEvents.loggedIn(event => {
    const player = event.player;
    sentPlayerDay(player)
    const firstTime = player.persistentData.getInt("first_time") || 0;
    if (firstTime == 0) {
        diets.forEach(name => {
            event.server.runCommandSilent(`/diet set ${player.username} ${name} 0.45`);
        })
        player.persistentData.putInt("first_time", 1)
    }
})
