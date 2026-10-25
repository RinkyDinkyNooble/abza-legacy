ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting("cure:syringe", [
        "      N",
        "    BN ",
        "   G B ",
        "IBG G  ",
        " IBG   ",
        "  IB   ",
        "   I   "
    ], {
        B: "minecraft:nether_brick",
        N: "create_crush_everything:netherite_shard",
        I: "create_new_age:overcharged_iron_sheet",
        G: "minecraft:glass"
    });
    event.recipes.create.mixing("cure:fox_weed", ["minecraft:fern", "minecraft:grass", "minecraft:seagrass", "minecraft:enchanted_golden_apple"]).heated();
    event.recipes.create.mixing("cure:fox_weed_paste", ["cure:fox_weed", Fluid.of("create:flowing_potion", "{Potion: 'minecraft:strong_regeneration'}")]).superheated();
});

const diets = ["fruits", "grains", "proteins", "sugars", "vegetables"];
const infection = "infectious:infection";
const immunity = "hordes:immunity";

function give_immunity(event, player) {
    event.server.runCommandSilent(
        `/effect give ${player.username} hordes:immunity infinite 0 true`
    );
    event.server.runCommandSilent(
        `/effect give ${player.username} minecraft:regeneration infinite 0 true`
    );
}

function give_clemency(event, player) {
    event.server.runCommandSilent(
        `/effect give ${player.username} toughasnails:climate_clemency 60 0 true`
    );
}

PlayerEvents.tick(event => {
    const player = event.player;
    const isInfected = player.hasEffect(infection);
    const isImmune = player.hasEffect(immunity);
    if (isImmune && isInfected) {
        player.removeEffect(infection);
    }
    if (player.persistentData.vaccinated  && !isImmune) {
        give_immunity(event, player);
    }
});

PlayerEvents.respawned(event => {
    const player = event.player

    if (player.persistentData.vaccinated) {
        give_immunity(event, player);
    }
    give_clemency(event, player);
    diets.forEach(name => {
        event.server.runCommandSilent(`/diet set ${player.username} ${name} 0.45`);
    })
})

ItemEvents.foodEaten("cure:vaccine", (event) => {
    const player = event.player

    if (!player.persistentData.vaccinated) {
        player.persistentData.vaccinated = true;
        give_immunity(event, player);
    }
});

ItemEvents.foodEaten("minecraft:golden_apple", (event) => {
    event.server.runCommandSilent(
        `/effect clear ${event.player.username} infectious:infection`
    );
});

ItemEvents.foodEaten("minecraft:enchanted_golden_apple", (event) => {
    event.server.runCommandSilent(
        `/effect clear ${event.player.username} infectious:infection`
    );
});

ItemEvents.foodEaten("infectious:antibiotics", (event) => {
    event.server.runCommandSilent(
        `/effect clear ${event.player.username} hordes:infected`
    );
});