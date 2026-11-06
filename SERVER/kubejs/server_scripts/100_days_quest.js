const ticksPerDay = 24000;
const dayToId = {
    10: "0129695E4277ADFB",
    25: "244A838BF46E59B6",
    50: "24D978E6C95CF3E8",
    100: "5011B1919FD48ECB"
}

PlayerEvents.tick(event => {
    const player = event.player;
    const ticks = (player.persistentData.getInt("survived_ticks") || 0) + 1;
    if (ticks < ticksPerDay) {
        player.persistentData.putInt("survived_ticks", ticks);
        return;
    }
    player.persistentData.putInt("survived_ticks", 0);
    let survived = player.persistentData.getInt("days_survived") || 0;
    survived++;
    player.persistentData.putInt("days_survived", survived);
    sentPlayerDay(player);
    for (var day in dayToId) {
        if (day == survived) {
            const id = dayToId[day];
            event.server.runCommand(
                `ftbquests change_progress ${player.username} complete ${id}`
            );
            break;
        }
    }
});