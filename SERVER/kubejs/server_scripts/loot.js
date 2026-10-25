const addLoot = (event, lootTable, lootArray) => {
    const removedLoot = event.addLootTableModifier(lootTable).modifyLoot(Ingredient.all, (itemStack) => {
        itemStack.setCount(0);
        return itemStack;
    });
    removedLoot.addLoot.apply(removedLoot, lootArray);
}

const generateLootArray = (object) => {
    let finalArray = [];
    for (let [id, details] of Object.entries(object)) {
        details["counts"].forEach((count, index) => {
            if (details.nbts && details.nbts[index]) {
                finalArray.push(
                    LootEntry.of(id, count, details["nbts"][index]).when(chance => {
                        chance.randomChance(details["chances"][index])
                    })
                )
            } else {
                finalArray.push(
                    LootEntry.of(id, count).when(chance => {
                        chance.randomChance(details["chances"][index])
                    })
                )
            }
        })
    }
    return finalArray;
}

const dye_loot = {
    "minecraft:white_dye": { counts: [1, 2, 4], chances: [0.7, 0.4, 0.2], nbts: [] },
    "minecraft:orange_dye": { counts: [1, 2, 4], chances: [0.6, 0.35, 0.15], nbts: [] },
    "minecraft:magenta_dye": { counts: [1, 2, 4], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:light_blue_dye": { counts: [1, 2, 4], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:yellow_dye": { counts: [1, 2, 4], chances: [0.6, 0.35, 0.15], nbts: [] },
    "minecraft:lime_dye": { counts: [1, 2, 4], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:pink_dye": { counts: [1, 2, 4], chances: [0.4, 0.25, 0.1], nbts: [] },
    "minecraft:gray_dye": { counts: [1, 2, 4], chances: [0.4, 0.25, 0.1], nbts: [] },
    "minecraft:light_gray_dye": { counts: [1, 2, 4], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:cyan_dye": { counts: [1, 2, 4], chances: [0.3, 0.2, 0.08], nbts: [] },
    "minecraft:purple_dye": { counts: [1, 2, 4], chances: [0.35, 0.2, 0.1], nbts: [] },
    "minecraft:blue_dye": { counts: [1, 2, 4], chances: [0.4, 0.25, 0.1], nbts: [] },
    "minecraft:brown_dye": { counts: [1, 2, 4], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:green_dye": { counts: [1, 2, 4], chances: [0.4, 0.25, 0.1], nbts: [] },
    "minecraft:red_dye": { counts: [1, 2, 4], chances: [0.6, 0.35, 0.15], nbts: [] },
    "minecraft:black_dye": { counts: [1, 2, 4], chances: [0.5, 0.3, 0.1], nbts: [] }
}

const block_loot = {
  "minecraft:oak_log": { counts: [8, 16, 32, 64], chances: [0.45, 0.30, 0.18, 0.08], nbts: [] },
  "minecraft:sand": { counts: [8, 16, 32, 64], chances: [0.50, 0.32, 0.20, 0.10], nbts: [] },
  "minecraft:cobblestone": { counts: [8, 16, 32, 64], chances: [0.55, 0.35, 0.22, 0.12], nbts: [] },
  "minecraft:dirt": { counts: [8, 16, 32, 64], chances: [0.52, 0.34, 0.21, 0.11], nbts: [] },
  "minecraft:obsidian": { counts: [8, 16, 32, 64], chances: [0.20, 0.12, 0.06, 0.02], nbts: [] }
}

const generalLoot = {
    "minecraft:stick": { counts: [1, 2, 3], chances: [0.8, 0.5, 0.2], nbts: [] },
    "minecraft:arrow": { counts: [1, 2, 5], chances: [0.6, 0.4, 0.15], nbts: [] },
    "minecraft:iron_nugget": { counts: [1, 4, 8], chances: [0.5, 0.25, 0.1], nbts: [] },
    "minecraft:gold_nugget": { counts: [1, 2, 6], chances: [0.4, 0.3, 0.05], nbts: [] },
    "minecraft:leather": { counts: [1, 2, 3, 5], chances: [0.5, 0.3, 0.2, 0.05], nbts: [] },
    "minecraft:feather": { counts: [1, 2, 4, 8], chances: [0.7, 0.5, 0.3, 0.1], nbts: [] },
    "minecraft:rabbit_hide": { counts: [1, 2, 3], chances: [0.6, 0.3, 0.1], nbts: [] },
    "minecraft:bone": { counts: [1, 2, 4], chances: [0.4, 0.25, 0.1], nbts: [] },
    "minecraft:flint": { counts: [1, 3, 5], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:coal": { counts: [1, 2, 6], chances: [0.6, 0.4, 0.15], nbts: [] },
    "minecraft:string": { counts: [1, 2, 3, 5], chances: [0.7, 0.5, 0.3, 0.1], nbts: [] },
    "minecraft:clay_ball": { counts: [1, 3, 6], chances: [0.5, 0.3, 0.05], nbts: [] },
    "minecraft:slime_ball": { counts: [1, 2], chances: [0.1, 0.05], nbts: [] },
    "minecraft:gunpowder": { counts: [1, 2, 4], chances: [0.4, 0.2, 0.1], nbts: [] },
    "create:zinc_nugget": { counts: [1, 3, 5], chances: [0.35, 0.2, 0.08], nbts: [] },
    "create:copper_nugget": { counts: [1, 4, 8], chances: [0.45, 0.25, 0.1], nbts: [] },
    "create:brass_nugget": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.05], nbts: [] },
    "create_crush_everything:diamond_shard": { counts: [1], chances: [0.09], nbts: [] },
    "minecraft:redstone": { counts: [1, 2, 4], chances: [0.4, 0.2, 0.08], nbts: [] },
    "minecraft:torch": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.05], nbts: [] },
    "minecraft:paper": { counts: [1, 3, 5], chances: [0.8, 0.5, 0.25], nbts: [] },
    "minecraft:experience_bottle": { counts: [1, 2], chances: [0.12, 0.06], nbts: [] },
    "minecraft:quartz": { counts: [1, 2, 4, 8], chances: [0.18, 0.12, 0.07, 0.03], nbts: [] },
    "minecraft:charcoal": { counts: [1, 2, 4], chances: [0.25, 0.12, 0.05], nbts: [] },
    "create_new_age:copper_wire": { counts: [1, 2, 3], chances: [0.15, 0.08, 0.03], nbts: [] },
    "create:shaft": { counts: [1, 2, 4], chances: [0.2, 0.1, 0.04], nbts: [] },
    "create:andesite_casing": { counts: [1, 2], chances: [0.12, 0.05], nbts: [] },
    "create:cogwheel": { counts: [1, 2, 3], chances: [0.18, 0.09, 0.03], nbts: [] },
    "parcool:zipline_rope": { counts: [1, 2], chances: [0.2, 0.1], nbts: [] }
}

const combatLoot = {
    "superbwarfare:handgun_ammo": { counts: [8, 16, 32], chances: [0.5, 0.3, 0.1], nbts: [] },
    "superbwarfare:shotgun_ammo": { counts: [4, 8, 16], chances: [0.4, 0.2, 0.08], nbts: [] },
    "superbwarfare:rifle_ammo": { counts: [10, 20, 40], chances: [0.45, 0.25, 0.09], nbts: [] },
    "superbwarfare:sniper_ammo": { counts: [2, 4, 8], chances: [0.3, 0.15, 0.05], nbts: [] },
    "superbwarfare:heavy_ammo": { counts: [2, 4, 8], chances: [0.25, 0.12, 0.04], nbts: [] },
    "superbwarfare:rpg_rocket_standard": { counts: [1, 2], chances: [0.12, 0.05], nbts: [] },
    "superbwarfare:rpg_rocket_tbg": { counts: [1], chances: [0.06], nbts: [] },
    "superbwarfare:hand_grenade": { counts: [1, 2], chances: [0.18, 0.07], nbts: [] },
    "superbwarfare:rgo_grenade": { counts: [1], chances: [0.09], nbts: [] },
    "superbwarfare:c4_bomb": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:ptkm_1r": { counts: [1], chances: [0.03], nbts: [] },
    "superbwarfare:tm_62": { counts: [1], chances: [0.03], nbts: [] },
    "superbwarfare:claymore_mine": { counts: [1], chances: [0.03], nbts: [] },
    "superbwarfare:lunge_mine": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:m18_smoke_grenade": { counts: [1, 2], chances: [0.15, 0.06], nbts: [] },
    "superbwarfare:javelin_missile": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:mortar_shell": { counts: [1, 2], chances: [0.08, 0.03], nbts: [] },
    "superbwarfare:small_shell": { counts: [2, 4], chances: [0.18, 0.07], nbts: [] },
    "superbwarfare:small_rocket": { counts: [1, 2], chances: [0.12, 0.05], nbts: [] },
    "superbwarfare:handgun_ammo_box": { counts: [1], chances: [0.08], nbts: [] },
    "superbwarfare:shotgun_ammo_box": { counts: [1], chances: [0.07], nbts: [] },
    "superbwarfare:rifle_ammo_box": { counts: [1], chances: [0.09], nbts: [] },
    "superbwarfare:sniper_ammo_box": { counts: [1], chances: [0.05], nbts: [] },
}

const perkLoot = {
    "superbwarfare:ap_bullet": { counts: [1], chances: [0.05], nbts: [] },
    "superbwarfare:jhp_bullet": { counts: [1], chances: [0.05], nbts: [] },
    "superbwarfare:he_bullet": { counts: [1], chances: [0.05], nbts: [] },
    "superbwarfare:silver_bullet": { counts: [1], chances: [0.08], nbts: [] },
    "superbwarfare:poisonous_bullet": { counts: [1], chances: [0.08], nbts: [] },
    "superbwarfare:beast_bullet": { counts: [1], chances: [0.08], nbts: [] },
    "superbwarfare:longer_wire": { counts: [1], chances: [0.03], nbts: [] },
    "superbwarfare:incendiary_bullet": { counts: [1], chances: [0.03], nbts: [] },
    "superbwarfare:cupid_arrow": { counts: [1], chances: [0.03], nbts: [] },
    "superbwarfare:micro_missile": { counts: [1], chances: [0.03], nbts: [] },
    "superbwarfare:riot_bullet": { counts: [1], chances: [0.03], nbts: [] },
    "superbwarfare:phase_penetrating_bullet": { counts: [1], chances: [0.03], nbts: [] },
    "superbwarfare:heal_clip": { counts: [1], chances: [0.08], nbts: [] },
    "superbwarfare:fourth_times_charm": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:subsistence": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:regeneration": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:turbo_charger": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:powerful_attraction": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:kill_clip": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:gutshot_straight": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:killing_tally": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:head_seeker": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:monster_hunter": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:volt_overload": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:desperado": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:magnificent_howl": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:firefly": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:fair_means": { counts: [1], chances: [0.04], nbts: [] },
    "superbwarfare:vorpal_weapon": { counts: [1], chances: [0.04], nbts: [] },
}

const blueprintLoot = {
    "superbwarfare:annihilator_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:mosin_nagant_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:m_60_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:m_2_hb_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:hpj_11_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:mk_14_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:aurelia_sceptre_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:m_1911_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:minigun_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:trachelium_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:m_98b_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:javelin_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:ntw_20_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:glock_17_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:rpk_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:taser_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:m_79_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:sks_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:ak_47_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:devotion_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:mk_42_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:awm_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:vector_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:k_98_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:aa_12_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:secondary_cataclysm_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:mp_5_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:ak_12_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:insidious_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:hunting_rifle_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:marlin_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:hk_416_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:m_870_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:glock_18_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:mp_443_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:mle_1934_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:qbz_95_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:m_4_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:rpg_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:bocek_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:svd_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:qbz_191_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:bl_132_blueprint": { counts: [1], chances: [0.02], nbts: [] },
    "superbwarfare:sentinel_blueprint": { counts: [1], chances: [0.02], nbts: [] }
}

const basicGunLoot = {
    "superbwarfare:taser": { counts: [1], chances: [0.5], nbts: [{ Energy: 3000, GunData: { Ammo: 1 } }] },
    "superbwarfare:glock_18": { counts: [1], chances: [0.25], nbts: [{ GunData: { Ammo: 3 } }] },
    "superbwarfare:mp_443": { counts: [1], chances: [0.12], nbts: [{ GunData: { Ammo: 13 } }] },
    "superbwarfare:m_1911": { counts: [1], chances: [0.06], nbts: [{ GunData: { Ammo: 5 } }] },
    "superbwarfare:trachelium": { counts: [1], chances: [0.03], nbts: [{ Attachments: { Barrel: 2, Grip: 1, Scope: 2, Stock: 2 }, GunData: { Ammo: 6 } }] },
    "superbwarfare:bocek": { counts: [1], chances: [0.01], nbts: [{ GunData: { Ammo: 1 } }] },
    "superbwarfare:homemade_shotgun": { counts: [1], chances: [0.12], nbts: [{ GunData: { Ammo: 2 } }] }
}

const advancedGunLoot = {
    "superbwarfare:mp_5": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:marlin": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:ak_47": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:hunting_rifle": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:m_4": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:hk_416": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:ak_12": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:sks": { counts: [1], chances: [0.01], nbts: [] }
}

const legendaryGunLoot = {
    "superbwarfare:vector": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:mosin_nagant": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:k_98": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:svd": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:qbz_95": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:qbz_191": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:aa_12": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:m_60": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:rpg": { counts: [1], chances: [0.01], nbts: [] }
}

const ultraLegendaryGunLoot = {
    "superbwarfare:insidious": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:mk_14": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:awm": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:m_98b": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:sentinel": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:ntw_20": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:devotion": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:rpk": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:m_2_hb": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:rpg": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:minigun": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:javelin": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:m_79": { counts: [1], chances: [0.01], nbts: [] },
    "superbwarfare:secondary_cataclysm": { counts: [1], chances: [0.01], nbts: [] }
}

const ingredientFoodLoot = {
    "minecraft:wheat_seeds": { counts: [1, 2, 4], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:melon_seeds": { counts: [1, 2, 4], chances: [0.4, 0.2, 0.05], nbts: [] },
    "minecraft:pumpkin_seeds": { counts: [1, 2, 4], chances: [0.4, 0.2, 0.05], nbts: [] },
    "minecraft:beetroot_seeds": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "minecraft:carrot": { counts: [1, 2, 3], chances: [0.25, 0.1, 0.03], nbts: [] },
    "minecraft:potato": { counts: [1, 2, 3], chances: [0.25, 0.1, 0.03], nbts: [] },
    "minecraft:sweet_berries": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "minecraft:cocoa_beans": { counts: [1, 2, 4], chances: [0.2, 0.1, 0.03], nbts: [] },
    "farmersdelight:tomato_seeds": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "farmersdelight:cabbage_seeds": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "minecraft:sugar_cane": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "minecraft:brown_mushroom": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "minecraft:red_mushroom": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "minecraft:bamboo": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "minecraft:kelp": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "farmersdelight:onion": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "farmersdelight:rice_panicle": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.04], nbts: [] },
    "minecraft:egg": { counts: [1, 2], chances: [0.5, 0.2], nbts: [] }
}

const rawMeatLoot = {
    "minecraft:beef": { counts: [1, 2, 3], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:chicken": { counts: [1, 2, 3], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:porkchop": { counts: [1, 2, 3], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:mutton": { counts: [1, 2, 3], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:rabbit": { counts: [1, 2, 3], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:cod": { counts: [1, 2, 3], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:salmon": { counts: [1, 2, 3], chances: [0.5, 0.3, 0.1], nbts: [] },
    "minecraft:tropical_fish": { counts: [1, 2, 3], chances: [0.4, 0.2, 0.05], nbts: [] },
    "minecraft:pufferfish": { counts: [1, 2], chances: [0.3, 0.1], nbts: [] }
}

const drinksLoot = {
    "farmersdelight:milk_bottle": { counts: [1], chances: [0.5], nbts: [] },
    "minecraft:honey_bottle": { counts: [1], chances: [0.5], nbts: [] },
    "toughasnails:purified_water_bottle": { counts: [1], chances: [0.5], nbts: [] },
    "toughasnails:dirty_water_bottle": { counts: [1], chances: [0.3], nbts: [] },
    "minecraft:glass_bottle": { counts: [1], chances: [0.5], nbts: [] }
}

const valuableLoot = {
    "minecraft:emerald": { counts: [1], chances: [0.00], nbts: [] },
    "minecraft:diamond": { counts: [1], chances: [0.09], nbts: [] },
    "minecraft:netherite_scrap": { counts: [1], chances: [0.05], nbts: [] },
    "minecraft:iron_ingot": { counts: [1, 2, 4], chances: [0.4, 0.2, 0.08], nbts: [] },
    "minecraft:gold_ingot": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.05], nbts: [] },
    "minecraft:copper_ingot": { counts: [1, 2, 4], chances: [0.25, 0.12, 0.05], nbts: [] },
    "minecraft:lapis_lazuli": { counts: [1, 2, 4, 8], chances: [0.25, 0.12, 0.05, 0.02], nbts: [] },
    "minecraft:quartz": { counts: [1, 2, 4, 8], chances: [0.18, 0.12, 0.07, 0.03], nbts: [] },
    "minecraft:amethyst_shard": { counts: [1, 2], chances: [0.15, 0.05], nbts: [] },
    "superbwarfare:steel_ingot": { counts: [1, 2, 4], chances: [0.2, 0.1, 0.04], nbts: [] },
    "superbwarfare:tungsten_ingot": { counts: [1, 2], chances: [0.1, 0.03], nbts: [] },
    "superbwarfare:lead_ingot": { counts: [1, 2, 4], chances: [0.15, 0.07, 0.03], nbts: [] },
    "superbwarfare:silver_ingot": { counts: [1, 2], chances: [0.1, 0.03], nbts: [] },
    "create:rose_quartz": { counts: [1, 2, 3], chances: [0.3, 0.1, 0.05], nbts: [] },
    "create:brass_ingot": { counts: [1, 2, 4], chances: [0.2, 0.1, 0.04], nbts: [] },
    "create:zinc_ingot": { counts: [1, 2, 4], chances: [0.2, 0.1, 0.04], nbts: [] },
    "minecraft:ghast_tear": { counts: [1], chances: [0.01], nbts: [] },
    "minecraft:totem_of_undying": { counts: [1], chances: [0.05], nbts: [] },
    "create:andesite_alloy": { counts: [1, 2, 4], chances: [0.15, 0.07, 0.03], nbts: [] },
    "minecraft:nether_wart": { counts: [1, 2, 4], chances: [0.2, 0.1, 0.04], nbts: [] },
    "minecraft:netherite_upgrade_smithing_template": { counts: [1], chances: [0.05], nbts: [] },
    "create_new_age:overcharged_iron": { counts: [1, 2, 3, 4, 5], chances: [0.5, 0.3, 0.1, 0.05, 0.01], nbts: [] }
}

const medicalLoot = {
    "minecraft:golden_apple": { counts: [1, 2, 3], chances: [0.25, 0.13, 0.01], nbts: [] },
    "minecraft:enchanted_golden_apple": { counts: [1], chances: [0.1], nbts: [] },
    "firstaid:bandage": { counts: [1, 2, 3, 4, 5], chances: [0.5, 0.3, 0.1, 0.05, 0.01], nbts: [] },
    "firstaid:plaster": { counts: [1, 2, 3, 4, 5], chances: [0.5, 0.3, 0.1, 0.05, 0.01], nbts: [] },
    "firstaid:morphine": { counts: [1, 2, 3, 4], chances: [0.5, 0.4, 0.3, 0.2], nbts: [] }
}

const libraryLoot = {
    "minecraft:book": { counts: [1, 2, 3, 4, 5], chances: [0.8, 0.6, 0.4, 0.2, 0.1], nbts: [] },
    "minecraft:writable_book": { counts: [1], chances: [0.33], nbts: [] },
    "xpbook:xp_tome": { counts: [1], chances: [0.35], nbts: [] }
}

const labLoot = {
    "refinedstorage:security_card": { counts: [1], chances: [0.2], nbts: [] },
    "refinedstorage:advanced_processor": { counts: [1, 2], chances: [0.15, 0.05], nbts: [] },
    "refinedstorage:network_card": { counts: [1], chances: [0.1], nbts: [] },
    "refinedstorage:1k_storage_disk": { counts: [1], chances: [0.1], nbts: [] },
    "refinedstorage:cable": { counts: [1, 2, 4], chances: [0.3, 0.15, 0.05], nbts: [] },
    "minecraft:phantom_membrane": { counts: [1, 2, 4], chances: [0.5, 0.1, 0.05], nbts: [] },
    "minecraft:basalt": { counts: [1, 2, 3, 4, 5], chances: [0.5, 0.25, 0.125, 0.05, 0.01], nbts: [] },
    "minecraft:spider_eye": { counts: [1, 2, 3], chances: [0.5, 0.25, 0.125], nbts: [] },
    "minecraft:soul_sand": { counts: [1, 2], chances: [0.5, 0.25], nbts: [] },
    "minecraft:end_stone": { counts: [1, 2, 3, 4, 5], chances: [0.5, 0.25, 0.125, 0.05, 0.01], nbts: [] },
    "minecraft:ancient_debris": { counts: [1, 2, 3], chances: [0.45, 0.15, 0.02], nbts: [] },
    "minecraft:end_crystal": { counts: [1, 2, 3], chances: [0.25, 0.125, 0.01], nbts: [] },
    "minecraft:beacon": { counts: [1], chances: [0.2], nbts: [] }
}

const trinket_loot = {
    "nameless_trinkets:four_leaf_clover": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:gods_crown": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:spider_legs": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:experience_magnet": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:lucky_rock": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:pocket_lightning_rod": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:nelumbo": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:unknown_fragment": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:experience_battery": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:fate_emerald": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:ultimate_dust": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:blindfold": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:fractured_nullstone": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:scarab_amulet": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:sigil_of_baphomet": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:true_heart_of_the_sea": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:callus": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:rage_mind": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:dragons_eye": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:creeper_sense": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:broken_magnet": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:puffer_fish_liver": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:glowing_dust": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:light_gloves": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:explosion_proof_jacket": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:tick": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:miners_soul": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:ice_cube": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:mysterious_trinket": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:fragile_cloud": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:ghast_eye": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:electric_paddle": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:super_magnet": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:wooden_stick": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:speed_force": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:reforger": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:dark_nelumbo": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:gills": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:amphibious_hands": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:sleeping_pills": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:fertilizer": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:tear_of_the_sea": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:broken_ankh": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:what_magnet": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:missing_page": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:moon_stone": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:ethereal_wings": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:blaze_nucleus": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:vampire_blood": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:dubious_dust": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:cracked_crown": { counts: [1], chances: [0.01], nbts: [] },
    "nameless_trinkets:reverse_card": { counts: [1], chances: [0.01], nbts: [] }
}

const artifacts_loot = {
    "artifacts:cloud_in_a_bottle": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:pocket_piston": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:charm_of_sinking": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:shock_pendant": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:cross_necklace": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:aqua_dashers": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:chorus_totem": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:running_shoes": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:cowboy_hat": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:universal_attractor": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:anglers_hat": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:power_glove": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:steadfast_spikes": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:superstitious_hat": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:plastic_drinking_hat": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:golden_hook": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:onion_ring": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:everlasting_beef": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:pickaxe_heater": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:digging_claws": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:fire_gauntlet": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:villager_hat": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:kitty_slippers": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:antidote_vessel": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:crystal_heart": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:rooted_boots": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:obsidian_skull": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:snorkel": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:feral_claws": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:panic_necklace": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:novelty_drinking_hat": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:scarf_of_invisibility": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:flame_pendant": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:flippers": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:helium_flamingo": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:lucky_scarf": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:night_vision_goggles": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:whoopee_cushion": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:vampiric_glove": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:umbrella": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:snowshoes": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:eternal_steak": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:thorn_pendant": { counts: [1], chances: [0.01], nbts: [] },
    "artifacts:bunny_hoppers": { counts: [1], chances: [0.01], nbts: [] }
}

const lootTables = {
    "minecraft:chests/buried_treasure": Object.assign({}, generalLoot, block_loot),
    "minecraft:chests/desert_pyramid": Object.assign({}, generalLoot, combatLoot),
    "minecraft:chests/end_city_treasure": Object.assign({}, combatLoot, perkLoot, block_loot, blueprintLoot),
    "minecraft:chests/igloo_chest": Object.assign({}, generalLoot, perkLoot, blueprintLoot),
    "minecraft:chests/jungle_temple": Object.assign({}, generalLoot, combatLoot, perkLoot, blueprintLoot),
    "minecraft:chests/jungle_temple_dispenser": Object.assign({}, combatLoot, basicGunLoot, block_loot),
    "minecraft:chests/pillager_outpost": Object.assign({}, combatLoot, advancedGunLoot, block_loot),
    "minecraft:chests/shipwreck_supply": Object.assign({}, generalLoot, basicGunLoot, blueprintLoot),
    "minecraft:chests/shipwreck_treasure": Object.assign({}, generalLoot, advancedGunLoot, blueprintLoot),
    "minecraft:chests/simple_dungeon": Object.assign({}, generalLoot, combatLoot, legendaryGunLoot, blueprintLoot),
    "minecraft:chests/spawn_bonus_chest": Object.assign({}, generalLoot, combatLoot, legendaryGunLoot, ultraLegendaryGunLoot),
    "minecraft:chests/stronghold_corridor": Object.assign({}, combatLoot, legendaryGunLoot, blueprintLoot),
    "minecraft:chests/stronghold_crossing": Object.assign({}, combatLoot, ultraLegendaryGunLoot, blueprintLoot),
    "minecraft:chests/stronghold_library": Object.assign({}, ingredientFoodLoot, rawMeatLoot, drinksLoot),
    "minecraft:chests/underwater_ruin_big": Object.assign({}, ingredientFoodLoot),
    "minecraft:chests/underwater_ruin_small": Object.assign({}, rawMeatLoot),
    "minecraft:chests/woodland_mansion": Object.assign({}, ingredientFoodLoot, generalLoot),
    "minecraft:chests/village/village_armorer": Object.assign({}, valuableLoot, trinket_loot, artifacts_loot),
    "minecraft:chests/village/village_butcher": Object.assign({}, valuableLoot, generalLoot),
    "minecraft:chests/village/village_cartographer": Object.assign({}, medicalLoot),
    "minecraft:chests/village/village_desert_house": Object.assign({}, medicalLoot, combatLoot),
    "minecraft:chests/village/village_fisher": Object.assign({}, medicalLoot, generalLoot),
    "minecraft:chests/village/village_fletcher": Object.assign({}, libraryLoot, trinket_loot, artifacts_loot),
    "minecraft:chests/village/village_mason": Object.assign({}, libraryLoot, generalLoot),
    "minecraft:chests/village/village_plains_house": Object.assign({}, drinksLoot),
    "minecraft:chests/village/village_savanna_house": Object.assign({}, labLoot, dye_loot, blueprintLoot),
    "minecraft:chests/village/village_shepherd": Object.assign({}, labLoot, generalLoot),
    "minecraft:chests/village/village_snowy_house": Object.assign({}, labLoot, valuableLoot, blueprintLoot)
}

LootJS.modifiers(event => {
    for (let [lootTable, details] of Object.entries(lootTables)) {
        addLoot(event, lootTable, generateLootArray(details));
    }

    event.addLootTableModifier("minecraft:chests/village/village_fletcher")
        .addLoot(
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:protection", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:fire_protection", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:feather_falling", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:blast_protection", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:projectile_protection", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:respiration", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:aqua_affinity", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:thorns", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:depth_strider", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:frost_walker", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:soul_speed", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:swift_sneak", lvl: 1 }] }).when(c => c.randomChance(0.1)),

            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:sharpness", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:smite", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:bane_of_arthropods", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:knockback", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:fire_aspect", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:looting", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:sweeping", lvl: 1 }] }).when(c => c.randomChance(0.1)),

            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:efficiency", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:silk_touch", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:unbreaking", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:fortune", lvl: 1 }] }).when(c => c.randomChance(0.1)),

            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:power", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:punch", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:flame", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:infinity", lvl: 1 }] }).when(c => c.randomChance(0.1)),

            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:luck_of_the_sea", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:lure", lvl: 1 }] }).when(c => c.randomChance(0.1)),

            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:loyalty", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:impaling", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:riptide", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:channeling", lvl: 1 }] }).when(c => c.randomChance(0.1)),

            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:multishot", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:quick_charge", lvl: 1 }] }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:piercing", lvl: 1 }] }).when(c => c.randomChance(0.1)),

            LootEntry.of("minecraft:enchanted_book", 1, { StoredEnchantments: [{ id: "minecraft:mending", lvl: 1 }] }).when(c => c.randomChance(0.1))
        );
    event.addLootTableModifier("minecraft:chests/village/village_savanna_house")
        .addLoot(
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:water" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:awkward" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:night_vision" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:invisibility" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:leaping" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:fire_resistance" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:swiftness" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:slowness" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:turtle_master" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:water_breathing" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:healing" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:harming" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:poison" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:regeneration" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:strength" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:weakness" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:luck" }).when(c => c.randomChance(0.1)),
            LootEntry.of("minecraft:potion", 1, { Potion: "minecraft:slow_falling" }).when(c => c.randomChance(0.1))
        );
})