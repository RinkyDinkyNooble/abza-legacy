let currentDay = 0
let days_survived = 0

NetworkEvents.dataReceived('day_sync', event => {
    currentDay = event.data.day
    days_survived = event.data.survived
    Client.player.paint({
        current_day_text: {
            type: 'text',
            text: `Day ${currentDay}`,
            x: 12,
            y: 25,
            color: '#FFFFFF',
            scale: 1,
            draw: 'hud'
        },
        days_survived_text: {
            type: 'text',
            text: `Survived: ${days_survived}`,
            x: 12,
            y: 35,
            color: '#25fa08',
            scale: 1,
            draw: 'hud'
        }
    })
})