ServerEvents.loaded(event => {
    event.server.runCommandSilent("disableportal nether true");
    event.server.runCommandSilent("disableportal end true");
    event.server.runCommandSilent("gamerule commandBlockOutput false");
    event.server.runCommandSilent("gamerule enableLootdrops false");
    event.server.runCommandSilent("gamerule puffish_skills:announceNewPoints false");
    event.server.runCommandSilent("gamerule canRestoreHearts false");
    event.server.runCommandSilent("gamerule announceAdvancements false");
});