const ticksPerDay = 24000;
const dayToId = {
    10: "0129695E4277ADFB", 
    25: "244A838BF46E59B6",
    50: "24D978E6C95CF3E8",
    100: "5011B1919FD48ECB"
}

ServerEvents.tick(event => {
    if (event.server.tickCount % ticksPerDay === 0) {
        event.server.players.forEach(player => {
            let survived = player.persistentData.getInt("days_survived") || 0;
            survived++;
            player.persistentData.putInt("days_survived", survived);
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
    }
});