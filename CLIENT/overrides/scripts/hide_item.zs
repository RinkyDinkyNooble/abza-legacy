import mods.jeitweaker.Jei;

//Jei.hideIngredients(<item:minecraft:stone>);

val crimson_items = [
    <item:minecraft:stripped_crimson_hyphae>, <item:create:cut_crimsite_bricks>, <item:create:layered_crimsite>,
    <item:refurbished_furniture:crimson_mail_box>, <item:refurbished_furniture:crimson_desk>, <item:create:polished_cut_crimsite_stairs>,
    <item:minecraft:crimson_planks>, <item:create:small_crimsite_bricks>, <item:refurbished_furniture:crimson_light_ceiling_fan>,
    <item:minecraft:crimson_stairs>, <item:create:cut_crimsite_brick_slab>, <item:minecraft:crimson_hanging_sign>,
    <item:create:polished_cut_crimsite>, <item:minecraft:crimson_slab>, <item:refurbished_furniture:crimson_chair>,
    <item:refurbished_furniture:crimson_bath>, <item:create:crimson_window>, <item:minecraft:crimson_fence>,
    <item:minecraft:crimson_pressure_plate>, <item:minecraft:crimson_button>, <item:create:small_crimsite_brick_slab>,
    <item:create:cut_crimsite>, <item:refurbished_furniture:crimson_cutting_board>, <item:create:crimson_window_pane>,
    <item:refurbished_furniture:crimson_kitchen_cabinetry>, <item:minecraft:crimson_trapdoor>, <item:refurbished_furniture:crimson_kitchen_storage_cabinet>,
    <item:refurbished_furniture:crimson_lattice_fence>, <item:create:small_crimsite_brick_stairs>, <item:minecraft:crimson_fence_gate>,
    <item:refurbished_furniture:crimson_drawer>, <item:create:polished_cut_crimsite_wall>, <item:minecraft:stripped_crimson_stem>,
    <item:refurbished_furniture:crimson_dark_ceiling_fan>, <item:create:small_crimsite_brick_wall>, <item:refurbished_furniture:crimson_storage_jar>,
    <item:create:cut_crimsite_stairs>, <item:create:cut_crimsite_slab>, <item:minecraft:crimson_door>,
    <item:refurbished_furniture:crimson_kitchen_drawer>, <item:create:cut_crimsite_brick_stairs>, <item:minecraft:crimson_stem>,
    <item:refurbished_furniture:crimson_basin>, <item:minecraft:crimson_fungus>, <item:minecraft:crimson_roots>,
    <item:refurbished_furniture:crimson_kitchen_sink>, <item:refurbished_furniture:crimson_storage_cabinet>, <item:refurbished_furniture:crimson_crate>,
    <item:create:crimsite>, <item:minecraft:crimson_hyphae>, <item:refurbished_furniture:crimson_lattice_fence_gate>,
    <item:create:polished_cut_crimsite_slab>, <item:minecraft:crimson_nylium>, <item:minecraft:crimson_sign>,
    <item:create:cut_crimsite_wall>, <item:create:crimsite_pillar>, <item:create:cut_crimsite_brick_wall>,
    <item:farmersdelight:crimson_cabinet>, <item:refurbished_furniture:crimson_toilet>, <item:refurbished_furniture:crimson_table>
];

val warped_items = [
    <item:refurbished_furniture:warped_chair>, <item:refurbished_furniture:warped_kitchen_drawer>, <item:refurbished_furniture:warped_drawer>,
    <item:refurbished_furniture:warped_storage_jar>, <item:minecraft:warped_sign>, <item:create:warped_window>,
    <item:refurbished_furniture:warped_table>, <item:farmersdelight:warped_cabinet>, <item:minecraft:stripped_warped_hyphae>,
    <item:refurbished_furniture:warped_dark_ceiling_fan>, <item:refurbished_furniture:warped_bath>, <item:refurbished_furniture:warped_desk>,
    <item:refurbished_furniture:warped_toilet>, <item:refurbished_furniture:warped_kitchen_cabinetry>, <item:refurbished_furniture:warped_lattice_fence_gate>,
    <item:refurbished_furniture:warped_kitchen_sink>, <item:minecraft:warped_hyphae>, <item:minecraft:stripped_warped_stem>,
    <item:minecraft:warped_fungus>, <item:refurbished_furniture:warped_mail_box>, <item:refurbished_furniture:warped_light_ceiling_fan>,
    <item:refurbished_furniture:warped_lattice_fence>, <item:minecraft:warped_slab>, <item:refurbished_furniture:warped_crate>,
    <item:refurbished_furniture:warped_kitchen_storage_cabinet>, <item:minecraft:warped_nylium>, <item:minecraft:warped_trapdoor>,
    <item:create:warped_window_pane>, <item:minecraft:warped_button>, <item:minecraft:warped_hanging_sign>,
    <item:refurbished_furniture:warped_basin>, <item:minecraft:warped_wart_block>, <item:minecraft:warped_pressure_plate>,
    <item:refurbished_furniture:warped_storage_cabinet>, <item:minecraft:warped_stairs>, <item:refurbished_furniture:warped_cutting_board>,
    <item:minecraft:warped_door>, <item:minecraft:warped_stem>, <item:minecraft:warped_fungus_on_a_stick>,
    <item:minecraft:warped_roots>, <item:minecraft:warped_planks>, <item:minecraft:warped_fence>,
    <item:minecraft:warped_fence_gate>, <item:minecraft:nether_quartz_ore>, <item:minecraft:nether_gold_ore>,
    <item:minecraft:nether_sprouts>, <item:minecraft:weeping_vines>, <item:minecraft:twisting_vines>
];

val shulker_items = [
    <item:minecraft:lime_shulker_box>, <item:minecraft:red_shulker_box>, <item:minecraft:black_shulker_box>,
    <item:minecraft:white_shulker_box>, <item:minecraft:shulker_box>, <item:minecraft:shulker_shell>,
    <item:minecraft:yellow_shulker_box>, <item:minecraft:brown_shulker_box>, <item:minecraft:magenta_shulker_box>,
    <item:minecraft:shulker_spawn_egg>, <item:minecraft:purple_shulker_box>, <item:minecraft:cyan_shulker_box>,
    <item:minecraft:green_shulker_box>, <item:minecraft:pink_shulker_box>, <item:minecraft:light_gray_shulker_box>,
    <item:minecraft:light_blue_shulker_box>, <item:minecraft:gray_shulker_box>, <item:minecraft:orange_shulker_box>,
    <item:minecraft:blue_shulker_box>
];

val candle_items = [
    <item:minecraft:green_candle>, <item:minecraft:candle>, <item:minecraft:cyan_candle>,
    <item:minecraft:magenta_candle>, <item:minecraft:blue_candle>, <item:minecraft:purple_candle>,
    <item:minecraft:brown_candle>, <item:minecraft:white_candle>, <item:minecraft:lime_candle>,
    <item:minecraft:light_gray_candle>, <item:minecraft:light_blue_candle>, <item:minecraft:yellow_candle>,
    <item:minecraft:gray_candle>, <item:minecraft:red_candle>, <item:minecraft:pink_candle>,
    <item:minecraft:orange_candle>, <item:minecraft:black_candle>
];

val banner_items = [
    <item:minecraft:light_blue_banner>, <item:minecraft:black_banner>, <item:minecraft:flower_banner_pattern>,
    <item:minecraft:magenta_banner>, <item:minecraft:lime_banner>, <item:minecraft:brown_banner>,
    <item:minecraft:purple_banner>, <item:minecraft:yellow_banner>, <item:minecraft:white_banner>,
    <item:minecraft:green_banner>, <item:minecraft:light_gray_banner>, <item:minecraft:piglin_banner_pattern>,
    <item:minecraft:orange_banner>, <item:minecraft:gray_banner>, <item:minecraft:pink_banner>,
    <item:minecraft:blue_banner>, <item:minecraft:cyan_banner>, <item:minecraft:red_banner>,
    <item:minecraft:mojang_banner_pattern>, <item:minecraft:globe_banner_pattern>, <item:minecraft:skull_banner_pattern>,
    <item:minecraft:creeper_banner_pattern>
];

val glazed_terracotta_items = [
    <item:minecraft:cyan_glazed_terracotta>, <item:minecraft:black_glazed_terracotta>, <item:minecraft:orange_glazed_terracotta>,
    <item:minecraft:blue_glazed_terracotta>, <item:minecraft:light_blue_glazed_terracotta>, <item:minecraft:pink_glazed_terracotta>,
    <item:minecraft:red_glazed_terracotta>, <item:minecraft:purple_glazed_terracotta>, <item:minecraft:gray_glazed_terracotta>,
    <item:minecraft:brown_glazed_terracotta>, <item:minecraft:white_glazed_terracotta>, <item:minecraft:yellow_glazed_terracotta>,
    <item:minecraft:lime_glazed_terracotta>, <item:minecraft:green_glazed_terracotta>, <item:minecraft:magenta_glazed_terracotta>,
    <item:minecraft:light_gray_glazed_terracotta>
];

val pottery_sherd_items = [
    <item:minecraft:skull_pottery_sherd>, <item:minecraft:angler_pottery_sherd>, <item:minecraft:miner_pottery_sherd>,
    <item:minecraft:howl_pottery_sherd>, <item:minecraft:heartbreak_pottery_sherd>, <item:minecraft:burn_pottery_sherd>,
    <item:minecraft:heart_pottery_sherd>, <item:minecraft:friend_pottery_sherd>, <item:minecraft:sheaf_pottery_sherd>,
    <item:minecraft:explorer_pottery_sherd>, <item:minecraft:plenty_pottery_sherd>, <item:minecraft:prize_pottery_sherd>,
    <item:minecraft:danger_pottery_sherd>, <item:minecraft:archer_pottery_sherd>, <item:minecraft:shelter_pottery_sherd>,
    <item:minecraft:arms_up_pottery_sherd>, <item:minecraft:snort_pottery_sherd>, <item:minecraft:blade_pottery_sherd>,
    <item:minecraft:mourner_pottery_sherd>, <item:minecraft:brewer_pottery_sherd>
];

val customnpcs_items = [
    <item:customnpcs:npcredstoneblock>, <item:customnpcs:npcwand>, <item:customnpcs:npcmounter>,
    <item:customnpcs:scripted_item>, <item:customnpcs:npccopyblock>, <item:customnpcs:npcsoulstonefilled>,
    <item:customnpcs:npcscripteddoortool>, <item:customnpcs:npcwaypoint>, <item:customnpcs:npcmailbox3>,
    <item:customnpcs:npcmailbox2>, <item:customnpcs:npcbuilderblock>, <item:customnpcs:nbt_book>,
    <item:customnpcs:npcteleporter>, <item:customnpcs:npccarpentybench>, <item:customnpcs:npcscripted>,
    <item:customnpcs:npcmovingpath>, <item:customnpcs:npcscripter>, <item:customnpcs:npcborder>,
    <item:customnpcs:npcmailbox>, <item:customnpcs:npcsoulstoneempty>, <item:customnpcs:npcmobcloner>
];

val spawn_items = [
    <item:infectious:big_zombie_spawn_egg>, <item:mcsp:vdv_desert_spawn_item>, <item:infectious:bodyless_zombie_spawn_egg>,
    <item:minecraft:iron_golem_spawn_egg>, <item:minecraft:pufferfish_spawn_egg>, <item:mcsp:humvee_desert_standart_spawn_item>,
    <item:undead_revamp2:therabidus_spawn_egg>, <item:artifacts:mimic_spawn_egg>, <item:infectious:acid_zombie_spawn_egg>,
    <item:infectious:security_zombie_spawn_egg>, <item:minecraft:creeper_spawn_egg>, <item:undead_revamp2:theposessive_spawn_egg>,
    <item:infectious:pool_tube_zombie_spawn_egg>, <item:undead_revamp2:thebeartamer_spawn_egg>, <item:minecraft:zombie_horse_spawn_egg>,
    <item:infectious:zombified_boar_spawn_egg>, <item:infectious:pumpkin_zombie_spawn_egg>, <item:minecraft:pillager_spawn_egg>,
    <item:minecraft:ender_dragon_spawn_egg>, <item:infectious:crawling_zombie_spawn_egg>, <item:undead_revamp2:theswarmer_spawn_egg>,
    <item:infectious:claw_zombie_spawn_egg>, <item:undead_revamp2:thepregnant_spawn_egg>, <item:undead_revamp2:thesomnolence_spawn_egg>,
    <item:infectious:zombie_boxer_spawn_egg>, <item:minecraft:cow_spawn_egg>, <item:infectious:zombie_scientist_spawn_egg>,
    <item:infectious:zombified_wolf_spawn_egg>, <item:minecraft:silverfish_spawn_egg>, <item:infectious:pylon_zombie_spawn_egg>,
    <item:undead_revamp2:deadclogger_spawn_egg>, <item:infectious:sleepy_zombie_spawn_egg>, <item:infectious:construction_worker_zombie_spawn_egg>,
    <item:infectious:zombie_diver_spawn_egg>, <item:minecraft:zombie_spawn_egg>, <item:minecraft:evoker_spawn_egg>,
    <item:infectious:zombie_miner_spawn_egg>, <item:minecraft:dolphin_spawn_egg>, <item:minecraft:blaze_spawn_egg>,
    <item:infectious:zombie_lumberjack_spawn_egg>, <item:infectious:fire_fighter_zombie_spawn_egg>, <item:mcsp:humvee_standart_spawn_item>,
    <item:undead_revamp2:weakspot_spawn_egg>, <item:infectious:deep_sea_diver_zombie_spawn_egg>, <item:infectious:muddy_zombie_spawn_egg>,
    <item:undead_revamp2:invisiimmortal_spawn_egg>, <item:minecraft:camel_spawn_egg>, <item:minecraft:zoglin_spawn_egg>,
    <item:minecraft:polar_bear_spawn_egg>, <item:minecraft:squid_spawn_egg>, <item:undead_revamp2:flame_spawn_egg>,
    <item:minecraft:phantom_spawn_egg>, <item:infectious:iron_door_zombie_spawn_egg>, <item:infectious:zombie_batman_spawn_egg>,
    <item:mcsp:vdv_snow_spawn_item>, <item:undead_revamp2:theheavy_spawn_egg>, <item:infectious:zombie_girl_spawn_egg>,
    <item:infectious:zombie_hitler_spawn_egg>, <item:undead_revamp2:axestrom_spawn_egg>, <item:minecraft:salmon_spawn_egg>,
    <item:infectious:zombie_agent_spawn_egg>, <item:minecraft:ghast_spawn_egg>, <item:undead_revamp2:theimmortal_spawn_egg>,
    <item:minecraft:panda_spawn_egg>, <item:undead_revamp2:the_moonflower_spawn_egg>, <item:infectious:zombie_warrior_spawn_egg>,
    <item:minecraft:snow_golem_spawn_egg>, <item:infectious:muscular_zombie_spawn_egg>, <item:mcsp:humvee_les_standart_spawn_item>,
    <item:infectious:radioactive_zombie_spawn_egg>, <item:minecraft:stray_spawn_egg>, <item:infectious:barrel_zombie_spawn_egg>,
    <item:infectious:swat_zombie_spawn_egg>, <item:undead_revamp2:theordure_spawn_egg>, <item:minecraft:allay_spawn_egg>,
    <item:infectious:mecha_zombie_spawn_egg>, <item:infectious:zombie_head_spawn_egg>, <item:mcsp:vdv_standart_30mm_spawn_item>,
    <item:mcsp:m3a3_bradley_busk_iii_spawn_item>, <item:infectious:zombie_runner_spawn_egg>, <item:minecraft:wolf_spawn_egg>,
    <item:infectious:bucket_zombie_spawn_egg>, <item:infectious:zombie_on_stelts_spawn_egg>, <item:vvp:icon_spawn_item>,
    <item:minecraft:donkey_spawn_egg>, <item:undead_revamp2:smokesmitter_spawn_egg>, <item:infectious:doom_zombie_spawn_egg>,
    <item:undead_revamp2:propball_1_spawn_egg>, <item:minecraft:respawn_anchor>, <item:minecraft:trader_llama_spawn_egg>,
    <item:infectious:zombie_spiter_spawn_egg>, <item:minecraft:enderman_spawn_egg>, <item:infectious:brain_zombie_spawn_egg>,
    <item:mcsp:bmd_4_camo_spawn_item>, <item:infectious:zombie_fisherman_spawn_egg>, <item:infectious:old_zombie_spawn_egg>,
    <item:superbwarfare:senpai_spawn_egg>, <item:infectious:zombie_farmer_spawn_egg>, <item:infectious:zombie_clown_spawn_egg>,
    <item:minecraft:horse_spawn_egg>, <item:undead_revamp2:neocrorines_spawn_egg>, <item:undead_revamp2:coppertar_spawn_egg>,
    <item:infectious:giant_zombie_spawn_egg>, <item:infectious:tower_zombie_2_spawn_egg>, <item:minecraft:tropical_fish_spawn_egg>,
    <item:undead_revamp2:somnolencespawns>, <item:minecraft:pig_spawn_egg>, <item:undead_revamp2:theskeeper_spawn_egg>,
    <item:infectious:golden_zombie_spawn_egg>, <item:mcsp:vdv_desert_30mm_spawn_item>, <item:minecraft:ocelot_spawn_egg>,
    <item:infectious:zombie_dancer_spawn_egg>, <item:infectious:balloon_zombie_spawn_egg>, <item:infectious:franklin_zombie_spawn_egg>,
    <item:infectious:mutant_zombie_spawn_egg>, <item:minecraft:husk_spawn_egg>, <item:mcsp:m3a3_bradley_sand_spawn_item>,
    <item:minecraft:spider_spawn_egg>, <item:minecraft:llama_spawn_egg>, <item:infectious:angry_zombie_spawn_egg>,
    <item:infectious:hazmat_zombie_spawn_egg>, <item:minecraft:zombified_piglin_spawn_egg>, <item:undead_revamp2:slaveman_spawn_egg>,
    <item:minecraft:shulker_spawn_egg>, <item:infectious:zombie_cook_spawn_egg>, <item:infectious:ancient_zombie_spawn_egg>,
    <item:minecraft:zombie_villager_spawn_egg>, <item:undead_revamp2:clogger_spawn_egg>, <item:minecraft:wandering_trader_spawn_egg>,
    <item:minecraft:magma_cube_spawn_egg>, <item:minecraft:mooshroom_spawn_egg>, <item:minecraft:piglin_brute_spawn_egg>,
    <item:infectious:burned_zombie_spawn_egg>, <item:infectious:zombified_rex_spawn_egg>, <item:undead_revamp2:thebidy_spawn_egg>,
    <item:undead_revamp2:thesmoker_spawn_egg>, <item:mcsp:vdv_standart_spawn_item>, <item:infectious:disco_zombie_spawn_egg>,
    <item:minecraft:drowned_spawn_egg>, <item:minecraft:skeleton_horse_spawn_egg>, <item:infectious:zombie_doctor_spawn_egg>,
    <item:infectious:enchanted_zombie_spawn_egg>, <item:minecraft:parrot_spawn_egg>, <item:infectious:zombie_prisoner_spawn_egg>,
    <item:infectious:psycho_zombie_spawn_egg>, <item:minecraft:bat_spawn_egg>, <item:minecraft:glow_squid_spawn_egg>,
    <item:infectious:withered_zombie_spawn_egg>, <item:infectious:spore_zombie_spawn_egg>, <item:infectious:zombie_breeder_spawn_egg>,
    <item:minecraft:frog_spawn_egg>, <item:infectious:mummy_spawn_egg>, <item:infectious:fat_zombie_spawn_egg>,
    <item:minecraft:sheep_spawn_egg>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:slime_spawn_egg>,
    <item:minecraft:spawner>, <item:minecraft:cod_spawn_egg>, <item:infectious:baseball_bat_zombie_spawn_egg>,
    <item:infectious:zombified_bird_spawn_egg>, <item:infectious:maggot_zombie_spawn_egg>, <item:mcsp:sprut_spawn_item>,
    <item:infectious:beehive_zombie_spawn_egg>, <item:undead_revamp2:invisiblebidy_spawn_egg>, <item:mcsp:bmd_4_spawn_item>,
    <item:minecraft:endermite_spawn_egg>, <item:infectious:chained_zombie_spawn_egg>, <item:minecraft:piglin_spawn_egg>,
    <item:infectious:lootdrop_spawn_egg>, <item:undead_revamp2:sucker_spawn_egg>, <item:infectious:fungal_zombie_spawn_egg>,
    <item:infectious:zombie_archer_spawn_egg>, <item:infectious:zombie_painter_spawn_egg>, <item:undead_revamp2:crackleball_spawn_egg>,
    <item:mcsp:sprut_camo_spawn_item>, <item:infectious:armless_zombie_spawn_egg>, <item:infectious:zombified_spider_spawn_egg>,
    <item:undead_revamp2:bigsucker_spawn_egg>, <item:infectious:screamer_spawn_egg>, <item:minecraft:ravager_spawn_egg>,
    <item:minecraft:wither_spawn_egg>, <item:infectious:zombified_bear_spawn_egg>, <item:infectious:burning_zombie_spawn_egg>,
    <item:infectious:zombie_spawn_egg>, <item:undead_revamp2:thegliter_spawn_egg>, <item:undead_revamp2:thehorrorsdecoys_spawn_egg>,
    <item:undead_revamp2:thehorrors_spawn_egg>, <item:mcsp:m3a3_bradley_spawn_item>, <item:minecraft:frogspawn>,
    <item:infectious:robotic_zombie_spawn_egg>, <item:undead_revamp2:lechery_spawn_egg>, <item:undead_revamp2:invisiclogger_spawn_egg>,
    <item:minecraft:sniffer_spawn_egg>, <item:undead_revamp2:thelurker_spawn_egg>, <item:minecraft:strider_spawn_egg>,
    <item:infectious:blind_zombie_spawn_egg>, <item:infectious:door_zombie_spawn_egg>, <item:infectious:zombie_horseman_spawn_egg>,
    <item:minecraft:rabbit_spawn_egg>, <item:mcsp:m3a3_bradley_busk_iii_sand_spawn_item>, <item:mcsp:m3a3_bradley_busk_ii_spawn_item>,
    <item:infectious:football_player_zombie_spawn_egg>, <item:infectious:infectious_zombie_spawn_egg>, <item:infectious:tower_zombie_spawn_egg>,
    <item:undead_revamp2:thehunter_spawn_egg>, <item:minecraft:wither_skeleton_spawn_egg>, <item:infectious:zombie_police_spawn_egg>,
    <item:undead_revamp2:thebidyupside_spawn_egg>, <item:infectious:zombie_astronaut_spawn_egg>, <item:mcsp:humvee_iraq_spawn_item>,
    <item:minecraft:bee_spawn_egg>, <item:infectious:glitched_zombie_spawn_egg>, <item:undead_revamp2:thespectre_spawn_egg>,
    <item:undead_revamp2:invisilehcery_spawn_egg>, <item:minecraft:fox_spawn_egg>, <item:undead_revamp2:bomber_spawn_egg>,
    <item:infectious:zombie_bomber_spawn_egg>, <item:minecraft:skeleton_spawn_egg>, <item:minecraft:vex_spawn_egg>,
    <item:minecraft:mule_spawn_egg>, <item:infectious:zombie_climber_spawn_egg>, <item:undead_revamp2:thewolf_spawn_egg>,
    <item:minecraft:vindicator_spawn_egg>, <item:minecraft:warden_spawn_egg>, <item:minecraft:tadpole_spawn_egg>,
    <item:minecraft:cave_spider_spawn_egg>, <item:infectious:zombie_soldier_spawn_egg>, <item:infectious:frozen_zombie_spawn_egg>,
    <item:infectious:headless_zombie_spawn_egg>, <item:minecraft:axolotl_spawn_egg>, <item:undead_revamp2:thedungeon_spawn_egg>,
    <item:minecraft:hoglin_spawn_egg>, <item:infectious:firework_zombie_spawn_egg>, <item:infectious:zombified_chicken_spawn_egg>,
    <item:minecraft:cat_spawn_egg>, <item:minecraft:elder_guardian_spawn_egg>, <item:minecraft:guardian_spawn_egg>,
    <item:minecraft:witch_spawn_egg>, <item:minecraft:goat_spawn_egg>, <item:mcsp:m3a3_bradley_busk_ii_sand_spawn_item>,
    <item:undead_revamp2:thespitter_spawn_egg>, <item:infectious:beekeeper_zombie_spawn_egg>, <item:infectious:bouncer_zombie_spawn_egg>,
    <item:undead_revamp2:therod_spawn_egg>, <item:minecraft:villager_spawn_egg>, <item:infectious:mc_donalds_worker_zombie_spawn_egg>,
    <item:minecraft:turtle_spawn_egg>, <item:mcsp:vdv_snow_30mm_spawn_item>
];

val misc_items = [
    <item:ftbquests:stage_barrier>, <item:ftbquests:barrier>, <item:minecraft:barrier>,
    <item:creategoggles:golden_backtank_placeable>, <item:creategoggles:iron_backtank_placeable>, <item:creategoggles:leather_backtank_placeable>,
    <item:creategoggles:chainmail_backtank_placeable>, <item:create:netherite_backtank_placeable>, <item:create:copper_backtank_placeable>,
    <item:creategoggles:diamond_backtank_placeable>, <item:ftbquests:screen_3>, <item:ftbquests:screen_1>, <item:ftbquests:screen_7>,
    <item:ftbquests:screen_5>, <item:ftbquests:task_screen_configurator>, <item:ftbquests:custom_icon>, <item:ftbquests:loot_crate_opener>,
    <item:ftbquests:book>, <item:ftbquests:missing_item>, <item:ftbquests:detector>, <item:ftbquests:lootcrate>
];

val creative_items = [
    <item:refinedstorage:yellow_creative_controller>, <item:refinedstorage:black_creative_controller>, <item:create:creative_fluid_tank>,
    <item:superbwarfare:creative_charging_station>, <item:refinedstorage:white_creative_controller>, <item:refinedstorage:creative_portable_grid>,
    <item:refinedstorage:creative_storage_disk>, <item:refinedstorage:creative_controller>, <item:refinedstorage:brown_creative_controller>,
    <item:refinedstorage:pink_creative_controller>, <item:create:creative_motor>, <item:refinedstorage:creative_fluid_storage_disk>,
    <item:refinedstorage:purple_creative_controller>, <item:create:creative_crate>, <item:refinedstorage:light_gray_creative_controller>,
    <item:superbwarfare:creative_ammo_box>, <item:superbwarfare:creative_superb_item_interface>, <item:refinedstorage:creative_wireless_grid>,
    <item:refinedstorage:creative_fluid_storage_block>, <item:create_connected:creative_fluid_vessel>, <item:create:creative_blaze_cake>,
    <item:refinedstorage:red_creative_controller>, <item:refinedstorage:magenta_creative_controller>, <item:refinedstorage:lime_creative_controller>,
    <item:refinedstorage:green_creative_controller>, <item:refinedstorage:gray_creative_controller>, <item:refinedstorage:orange_creative_controller>,
    <item:refinedstorage:creative_wireless_fluid_grid>, <item:refinedstorage:blue_creative_controller>, <item:refinedstorage:creative_wireless_crafting_monitor>,
    <item:refinedstorage:creative_storage_block>, <item:refinedstorage:cyan_creative_controller>, <item:infectious:zombie_horde_trigger_item>,
    <item:create:handheld_worldshaper>, <item:create_connected:creative_fluid_vessel>
];

val undead_revamp2_inducers = [
    <item:undead_revamp2:spurceinducer>, <item:undead_revamp2:deepslateinducerinactive>,
    <item:undead_revamp2:cherryblossominducer>, <item:undead_revamp2:oakinducerinactive>,
    <item:undead_revamp2:savannainducer>, <item:undead_revamp2:inducerstone>,
    <item:undead_revamp2:deepslateinducer>, <item:undead_revamp2:inducerstoneinactive>,
    <item:undead_revamp2:mangroveinducer>, <item:undead_revamp2:oakinducer>,
    <item:undead_revamp2:darkoakinducerinactive>, <item:undead_revamp2:birchinducer>,
    <item:undead_revamp2:darkoakinducer>, <item:undead_revamp2:jungleinducer>,
    <item:undead_revamp2:basaltecheste>, <item:undead_revamp2:altarnom>, 
    <item:undead_revamp2:blacpetalblock>, <item:undead_revamp2:windtext>,
    <item:undead_revamp2:bostroxore>, <item:undead_revamp2:rawbostrox>,
    <item:undead_revamp2:rareimmortalsummonblock>, <item:undead_revamp2:arapholia>
];

val undead_revamp2_dripstone = [
    <item:undead_revamp2:chiseleddripstonepillartop>, <item:undead_revamp2:chiseled_dripstonepillar>,
    <item:undead_revamp2:chiseleddripstoneblock>, <item:undead_revamp2:chiseleddripstonepillarbottom>,
    <item:infectious:butchers_table>, <item:infectious:blueprint_workbench>
];

val items = [
    crimson_items, warped_items, shulker_items, candle_items, banner_items, 
    glazed_terracotta_items, pottery_sherd_items, customnpcs_items,
    spawn_items, misc_items, creative_items, undead_revamp2_inducers,
    undead_revamp2_dripstone
];

for item_table in items {
    for item in item_table {
        Jei.hideIngredients(item);
    }
}