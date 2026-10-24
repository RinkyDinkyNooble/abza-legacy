const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const secondsToTicks = (seconds) => {
  return Math.round(seconds * 20); 
}

const createVein = (event, veinDetails) => {

  event.recipes.createoreexcavation
    .vein(veinDetails.text, veinDetails.itemId)
    .placement(veinDetails.spacing, veinDetails.separation, randomInt(6000000, 7000000))
    .id(veinDetails.veinId)
    .priority(veinDetails.priority);

  event.recipes.createoreexcavation
    .drilling(veinDetails.itemId, veinDetails.veinId, veinDetails.drillingSpeed)
    .id(veinDetails.drillingId);
}

ServerEvents.recipes(event => {
  
  event.recipes.createoreexcavation
    .vein("Lava", "minecraft:lava_bucket")
		.placement(4, 1, randomInt(6000000, 7000000))
    .alwaysInfinite()
    .id("minecraft:liquid_vein_type/lava");
	event.recipes.createoreexcavation
    .extracting('minecraft:lava 100', "minecraft:liquid_vein_type/lava", secondsToTicks(60))
    .id("minecraft:lava_vein");

  createVein(event, {
    "spacing": 4,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/coal",
    "priority": 0,
    "text": "Coal",
    "itemId": "minecraft:coal",
    "drillingSpeed": secondsToTicks(5),
    "drillingId": "minecraft:coal_vein"
  });

  createVein(event, {
    "spacing": 4,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/andesite",
    "priority": 1,
    "text": "Andesite",
    "itemId": "minecraft:andesite",
    "drillingSpeed": secondsToTicks(10),
    "drillingId": "minecraft:andesite_vein"
  });

  createVein(event, {
    "spacing": 4,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/iron",
    "priority": 2,
    "text": "Raw Iron",
    "itemId": "minecraft:raw_iron",
    "drillingSpeed": secondsToTicks(15),
    "drillingId": "minecraft:raw_iron_vein"
  });

  createVein(event, {
    "spacing": 4,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/copper",
    "priority": 3,
    "text": "Raw Copper",
    "itemId": "minecraft:raw_copper",
    "drillingSpeed": secondsToTicks(15),
    "drillingId": "minecraft:raw_copper_vein"
  });

  createVein(event, {
    "spacing": 4,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/zinc",
    "priority": 4,
    "text": "Raw Zinc",
    "itemId": "create:raw_zinc",
    "drillingSpeed": secondsToTicks(15),
    "drillingId": "minecraft:raw_zinc_vein"
  });

  createVein(event, {
    "spacing": 6,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/gold",
    "priority": 5,
    "text": "Raw Gold",
    "itemId": "minecraft:raw_gold",
    "drillingSpeed": secondsToTicks(30),
    "drillingId": "minecraft:raw_gold_vein"
  });

  createVein(event, {
    "spacing": 6,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/quartz",
    "priority": 6,
    "text": "Quartz",
    "itemId": "minecraft:quartz",
    "drillingSpeed": secondsToTicks(30),
    "drillingId": "minecraft:quartz_vein"
  });
  
  createVein(event, {
    "spacing": 6,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/redstone",
    "priority": 7,
    "text": "Raw Redstone",
    "itemId": "createoreexcavation:raw_redstone",
    "drillingSpeed": secondsToTicks(30),
    "drillingId": "createoreexcavation:raw_redstone_vein"
  });

  createVein(event, {
    "spacing": 6,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/emerald",
    "priority": 8,
    "text": "Raw Emerald",
    "itemId": "createoreexcavation:raw_emerald",
    "drillingSpeed": secondsToTicks(45),
    "drillingId": "createoreexcavation:raw_emerald_vein"
  });

  createVein(event, {
    "spacing": 8,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/diamond",
    "priority": 9,
    "text": "Raw Diamond",
    "itemId": "createoreexcavation:raw_diamond",
    "drillingSpeed": secondsToTicks(60),
    "drillingId": "createoreexcavation:raw_diamond_vein"
  });

  createVein(event, {
    "spacing": 10,
    "separation": 1,
    "veinId": "minecraft:ore_vein_type/netherite_scrap",
    "priority": 10,
    "text": "Ancient Debris",
    "itemId": "minecraft:netherite_scrap",
    "drillingSpeed": secondsToTicks(120),
    "drillingId": "minecraft:netherite_scrap_vein"
  });

  createVein(event, {
    "spacing": 6,
    "separation": 1,
    "veinId": "superbwarfare:ore_vein_type/scheelite",
    "priority": 11,
    "text": "Raw Scheelite",
    "itemId": "superbwarfare:scheelite",
    "drillingSpeed": secondsToTicks(30),
    "drillingId": "superbwarfare:scheelite_vein"
  });

  createVein(event, {
    "spacing": 6,
    "separation": 1,
    "veinId": "superbwarfare:ore_vein_type/galena",
    "priority": 12,
    "text": "Raw Galena",
    "itemId": "superbwarfare:galena",
    "drillingSpeed": secondsToTicks(30),
    "drillingId": "superbwarfare:galena_vein"
  });

  createVein(event, {
    "spacing": 8,
    "separation": 1,
    "veinId": "create_new_age:ore_vein_type/thorium",
    "priority": 13,
    "text": "Thorium",
    "itemId": "create_new_age:thorium",
    "drillingSpeed": secondsToTicks(50),
    "drillingId": "create_new_age:thorium_vein"
  });
});