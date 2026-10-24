const addToolTip = (event, itemId, tip) => {
    event.addAdvanced(itemId, (item, advanced, text) => {
        text.add(tip);
    });
}

const explorationTooltip = "Can be found through exploration.";

ItemEvents.tooltip(event => {
    event.addAdvanced("cure:vaccine", (item, advanced, text) => {
        text.clear()
        text.add(Text.gold("Vaccine"))
        text.add("Cures all infections permenantly.")
    });
    addToolTip(event, "minecraft:totem_of_undying", explorationTooltip);
    addToolTip(event, "minecraft:ghast_tear", explorationTooltip);
    addToolTip(event, "minecraft:nether_wart", explorationTooltip);
    addToolTip(event, "minecraft:golden_apple", "Cures a fatal infection.");
    addToolTip(event, "minecraft:enchanted_golden_apple", "Cures a fatal infection.");
});