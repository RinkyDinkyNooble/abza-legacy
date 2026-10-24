let gameTime = 0;
let timeChecked = false;
//const diets = ["fruits", "grains", "proteins", "sugars", "vegetables"];

function getCurrentDay() {
    return Math.floor(gameTime / 24000);
}

function sentPlayerDay(player) {
    player.sendData('day_sync', {
        day: getCurrentDay(),
        survived: player.persistentData.getInt("days_survived") || 0
    });
}

ServerEvents.tick(event => {
    if (timeChecked === false) {
        gameTime = event.server.persistentData.getInt("custom_game_time") || 0;
        timeChecked = true;
    }
    gameTime++;
    event.server.persistentData.putInt("custom_game_time", gameTime)
})

let lastDayCount = null;
ServerEvents.tick(event => {
    const dayCount = getCurrentDay();
    if (lastDayCount == null || dayCount > lastDayCount) {
        lastDayCount = dayCount;
        event.server.players.forEach(player => {
            sentPlayerDay(player)
        });
    }
})
/*
NetworkEvents.dataReceived("request_day", event => {
    sentPlayerDay(event.player)
})*/

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
