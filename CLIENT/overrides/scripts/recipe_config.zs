// Villager Trades
villagerTrades.removeAllTrades(<profession:minecraft:farmer>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:armorer>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:butcher>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:cleric>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:fisherman>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:fletcher>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:leatherworker>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:librarian>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:mason>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:shepherd>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:toolsmith>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:weaponsmith>, 1);
villagerTrades.removeAllTrades(<profession:infectious:crafter>, 1);
villagerTrades.removeAllTrades(<profession:superbwarfare:armory>, 1);
villagerTrades.removeAllTrades(<profession:toughasnails:climatologist>, 1);
villagerTrades.removeAllTrades(<profession:infectious:undead_collector>, 1);
villagerTrades.removeAllWanderingTrades(1);
villagerTrades.removeAllWanderingTrades(2);

// Vaccine
craftingTable.remove(<item:minecraft:golden_apple>);
craftingTable.remove(<item:cure:vaccine>);
craftingTable.remove(<item:cure:syringe>);
craftingTable.remove(<item:cure:fox_weed_paste>);
craftingTable.addShaped("vaccine", <item:cure:vaccine>, [
    [<item:cure:fox_weed_paste>, <item:cure:fox_weed_paste>, <item:cure:fox_weed_paste>],
    [<item:cure:fox_weed_paste>, <item:cure:syringe>, <item:cure:fox_weed_paste>],
    [<item:cure:fox_weed_paste>, <item:cure:fox_weed_paste>, <item:cure:fox_weed_paste>]
]);

// String
craftingTable.addShapeless("wool_to_string", <item:minecraft:string> * 4, [<tag:items:minecraft:wool>]);

// Leather 
furnace.addJsonRecipe("rotten_flesh_to_leather", {
    ingredient: <item:minecraft:rotten_flesh>,
    result: <item:minecraft:leather>.registryName,
    experience: 0.1 as float,
    cookingtime: 200
});

// Saddle
craftingTable.addShaped("saddle", <item:minecraft:saddle>, [
    [<item:minecraft:leather>, <item:minecraft:leather>, <item:minecraft:leather>],
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// Morphine
craftingTable.remove(<item:firstaid:morphine>);
craftingTable.addShaped("morphine", <item:firstaid:morphine>, [
    [<item:minecraft:potion>.withTag({Potion: "minecraft:water"}), <item:farmersdelight:milk_bottle>, <item:minecraft:air>], 
    [<item:minecraft:honey_bottle>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// Medical Kit
craftingTable.remove(<item:infectious:medikit>);
craftingTable.remove(<item:infectious:bandage>);
craftingTable.remove(<item:superbwarfare:medical_kit>);
craftingTable.addShaped("medical_kit", <item:superbwarfare:medical_kit>, [
    [<item:firstaid:plaster>, <item:firstaid:bandage>, <item:firstaid:plaster>], 
    [<item:firstaid:bandage>, <item:firstaid:bandage>, <item:firstaid:bandage>], 
    [<item:firstaid:plaster>, <item:firstaid:bandage>, <item:firstaid:plaster>]
]);

// Vein Finder
craftingTable.remove(<item:createoreexcavation:vein_finder>);
craftingTable.addShaped("vein_finder", <item:createoreexcavation:vein_finder>, [
    [<item:minecraft:air>, <item:create:electron_tube>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:observer>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]
]);

// Gun Powder
craftingTable.addShapeless("gunpowder", <item:minecraft:gunpowder> * 16, [<item:minecraft:charcoal>, <item:refurbished_furniture:sea_salt>]);

// Rotten Flesh
craftingTable.addShapeless("rotten_flesh", <item:minecraft:rotten_flesh> * 8, [<item:infectious:maggot>, <item:infectious:intestine>, <item:infectious:rotten_brain>]);

// Hazmat Suit
craftingTable.addShaped("hazmat_suit_helmet", <item:infectious:hazmat_suit_helmet>, [
    [<item:create:brass_sheet>, <item:minecraft:yellow_dye>, <item:create:brass_sheet>], 
    [<item:create:brass_sheet>, <item:minecraft:leather_helmet>, <item:create:brass_sheet>], 
    [<item:create_crush_everything:netherite_shard>, <item:create:brass_sheet>, <item:create_crush_everything:netherite_shard>]
]);
craftingTable.addShaped("hazmat_suit_chestplate", <item:infectious:hazmat_suit_chestplate>, [
    [<item:create:brass_sheet>, <item:create:brass_sheet>, <item:create:brass_sheet>], 
    [<item:create:brass_sheet>, <item:minecraft:leather_chestplate>, <item:create:brass_sheet>], 
    [<item:create_crush_everything:netherite_shard>, <item:minecraft:yellow_dye>, <item:create_crush_everything:netherite_shard>]
]);
craftingTable.addShaped("hazmat_suit_leggings", <item:infectious:hazmat_suit_leggings>, [
    [<item:create_crush_everything:netherite_shard>, <item:create:brass_sheet>, <item:create_crush_everything:netherite_shard>], 
    [<item:create:brass_sheet>, <item:minecraft:leather_leggings>, <item:create:brass_sheet>], 
    [<item:create:brass_sheet>, <item:minecraft:yellow_dye>, <item:create:brass_sheet>]
]);
craftingTable.addShaped("hazmat_suit_boots", <item:infectious:hazmat_suit_boots>, [
    [<item:create_crush_everything:netherite_shard>, <item:minecraft:air>, <item:create_crush_everything:netherite_shard>], 
    [<item:minecraft:black_dye>, <item:minecraft:air>, <item:minecraft:black_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// S.W.A.T Armor Set
craftingTable.addShaped("swat_helmet", <item:infectious:swatarmor_helmet>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:netherite_helmet>, <item:minecraft:black_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.addShaped("swat_chestplate", <item:infectious:swatarmor_chestplate>, [
    [<item:minecraft:black_dye>, <item:minecraft:air>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:netherite_chestplate>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>]
]);
craftingTable.addShaped("swat_leggings", <item:infectious:swatarmor_leggings>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:netherite_leggings>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:air>, <item:minecraft:black_dye>]
]);
craftingTable.addShaped("swat_boots", <item:infectious:swatarmor_boots>, [
    [<item:minecraft:black_dye>, <item:minecraft:air>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:netherite_boots>, <item:minecraft:black_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.addShaped("swat_shield", <item:infectious:swat_shield>, [
    [<item:minecraft:black_dye>, <item:minecraft:iron_ingot>, <item:minecraft:black_dye>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:shield>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:black_dye>, <item:minecraft:iron_ingot>, <item:minecraft:black_dye>]
]);

// Security Armor Set
craftingTable.addShaped("security_helmet", <item:infectious:security_armor_helmet>, [
    [<item:minecraft:black_dye>, <item:minecraft:iron_ingot>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:iron_helmet>, <item:minecraft:black_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.addShaped("security_chestplate", <item:infectious:security_armor_chestplate>, [
    [<item:minecraft:black_dye>, <item:minecraft:air>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:iron_chestplate>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:iron_ingot>, <item:minecraft:black_dye>]
]);
craftingTable.addShaped("security_leggings", <item:infectious:security_armor_leggings>, [
    [<item:minecraft:black_dye>, <item:minecraft:iron_ingot>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:iron_leggings>, <item:minecraft:black_dye>], 
    [<item:minecraft:black_dye>, <item:minecraft:air>, <item:minecraft:black_dye>]
]);
craftingTable.addShaped("security_boots", <item:infectious:security_armor_boots>, [
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>], 
    [<item:minecraft:black_dye>, <item:minecraft:iron_boots>, <item:minecraft:black_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// Soldier Armor Set
craftingTable.addShaped("soldier_helmet", <item:infectious:soldier_armor_helmet>, [
    [<item:minecraft:brown_dye>, <item:minecraft:iron_ingot>, <item:minecraft:brown_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:netherite_helmet>, <item:minecraft:green_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.addShaped("soldier_chestplate", <item:infectious:soldier_armor_chestplate>, [
    [<item:minecraft:brown_dye>, <item:minecraft:air>, <item:minecraft:brown_dye>], 
    [<item:minecraft:brown_dye>, <item:minecraft:netherite_chestplate>, <item:minecraft:brown_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:iron_ingot>, <item:minecraft:green_dye>]
]);
craftingTable.addShaped("soldier_leggings", <item:infectious:soldier_armor_leggings>, [
    [<item:minecraft:brown_dye>, <item:minecraft:iron_ingot>, <item:minecraft:brown_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:netherite_leggings>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:air>, <item:minecraft:green_dye>]
]);
craftingTable.addShaped("soldier_boots", <item:infectious:soldier_armor_boots>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:green_dye>, <item:minecraft:netherite_boots>, <item:minecraft:green_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// MCSP Armor Sets 
craftingTable.remove(<item:mcsp:airframe_helmet>);
craftingTable.addShaped("airframe_helmet", <item:mcsp:airframe_helmet>, [
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:leather_helmet>, <item:minecraft:green_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.remove(<item:mcsp:vest_cpc>);
craftingTable.addShaped("vest_cpc", <item:mcsp:vest_cpc>, [
    [<item:minecraft:green_dye>, <item:minecraft:air>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:leather_chestplate>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>]
]);
craftingTable.remove(<item:mcsp:opscore_helmet>);
craftingTable.addShaped("opscore_helmet", <item:mcsp:opscore_helmet>, [
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:diamond_helmet>, <item:minecraft:green_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.remove(<item:mcsp:opscore2_helmet>);
craftingTable.addShaped("opscore2_helmet", <item:mcsp:opscore2_helmet>, [
    [<item:minecraft:green_dye>, <item:minecraft:gray_dye>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:diamond_helmet>, <item:minecraft:green_dye>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.remove(<item:mcsp:helmettor_helmet>);
craftingTable.addShaped("helmettor_helmet", <item:mcsp:helmettor_helmet>, [
    [<item:minecraft:green_dye>, <item:minecraft:gray_dye>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:diamond_helmet>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>]
]);
craftingTable.remove(<item:mcsp:vest_avs>);
craftingTable.addShaped("vest_avs", <item:mcsp:vest_avs>, [
    [<item:minecraft:gray_dye>, <item:minecraft:air>, <item:minecraft:gray_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:iron_chestplate>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>]
]);
craftingTable.remove(<item:mcsp:vest_cpc2>);
craftingTable.addShaped("vest_cpc2", <item:mcsp:vest_cpc2>, [
    [<item:minecraft:green_dye>, <item:minecraft:air>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:iron_chestplate>, <item:minecraft:green_dye>], 
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>]
]);

// Jetpack
craftingTable.addShaped("jetpack_chestplate", <item:infectious:jetpack_chestplate>, [
    [<item:create_new_age:overcharged_iron_sheet>, <item:refinedstorage:quartz_enriched_iron>, <item:create_new_age:overcharged_iron_sheet>], 
    [<item:minecraft:redstone>, <item:refinedstorage:quartz_enriched_iron>, <item:minecraft:redstone>], 
    [<item:minecraft:firework_rocket>, <item:minecraft:air>, <item:minecraft:firework_rocket>]
]);

// Ancient CPU
craftingTable.remove(<item:superbwarfare:ancient_cpu>);
craftingTable.addShaped("ancient_cpu", <item:superbwarfare:ancient_cpu>, [
    [<item:minecraft:amethyst_shard>, <item:create_new_age:overcharged_diamond>, <item:minecraft:amethyst_shard>], 
    [<item:create_new_age:overcharged_golden_sheet>, <item:tan__a_curios_expansion:regulation_circuit>, <item:create_new_age:overcharged_golden_sheet>], 
    [<item:create_new_age:copper_wire>, <item:create_new_age:copper_circuit>, <item:create_new_age:copper_wire>]
]);

// XP Tome 
craftingTable.remove(<item:xpbook:xp_tome>);
craftingTable.addShapeless("xp_tome", <item:xpbook:xp_tome>, [<item:minecraft:book>, <item:minecraft:experience_bottle>]);

// Powder Snow
craftingTable.addShaped("powder_snow_bucket", <item:minecraft:powder_snow_bucket>, [
    [<item:minecraft:air>, <item:minecraft:snowball>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:blue_ice>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:bucket>, <item:minecraft:air>]
]);
