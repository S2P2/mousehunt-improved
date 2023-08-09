export default function getTradableItems(valueKey = 'all') {
  const tradableItems = [
    {
        "name": "2015 Charm",
        "item_id": 1629,
        "type": "2015_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/4013e10b98f4eb7cf3e90e82dee12a6c.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a45de4babc789b76a66271c8a3d95087.gif?cv=2",
        "truncated_name": "2015 Charm"
    },
    {
        "name": "2016 Charm",
        "item_id": 2009,
        "type": "2016_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/d2e1e1fe85cf8e7b971c6f6de3960538.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/fc47995bc0b43ac569a4cfe3bac4b06e.gif?cv=2",
        "truncated_name": "2016 Charm"
    },
    {
        "name": "2017 Charm",
        "item_id": 2262,
        "type": "2017_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/752f0e29150a900547dec5d3d26c2cde.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/ac4ef50a58b9ec574f36c641995fefb6.gif?cv=2",
        "truncated_name": "2017 Charm"
    },
    {
        "name": "2018 Charm",
        "item_id": 2539,
        "type": "2018_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/eca56f86a33a6ae1ab0e44a0db9c29d1.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/33a66ec028bf1d093bdef516d889512a.gif?cv=2",
        "truncated_name": "2018 Charm"
    },
    {
        "name": "2019 Charm",
        "item_id": 2734,
        "type": "2019_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/ae75a0197a9d71023fdb3e064f8ccce8.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/df638c200e7524a5ad3bd2ceda731cf5.gif?cv=2",
        "truncated_name": "2019 Charm"
    },
    {
        "name": "2020 Charm",
        "item_id": 2957,
        "type": "2020_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/b5c4d4bb2052cd050176ae6ea1429715.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/927ec3ef36c94c470ac6c58fe3246811.gif?cv=2",
        "truncated_name": "2020 Charm"
    },
    {
        "name": "2021 Charm",
        "item_id": 3153,
        "type": "2021_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/ca09c6ede8bf302bd650201a2054a08d.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/f0059ceb4aaafea65ef43bfa48047879.gif?cv=2",
        "truncated_name": "2021 Charm"
    },
    {
        "name": "2022 Charm",
        "item_id": 3366,
        "type": "2022_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/952786d90f68b3f27ddca274acf3926a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/9797108e0ca7bf5535706501023cf873.gif?cv=2",
        "truncated_name": "2022 Charm"
    },
    {
        "name": "2023 Charm",
        "item_id": 3527,
        "type": "2023_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/04f2d7f261985bb3295eca7fc751996c.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/8cd7d1ad0186c244d7adaca4d8bef458.gif?cv=2",
        "truncated_name": "2023 Charm"
    },
    {
        "name": "Adorned Empyrean Jewel",
        "item_id": 3075,
        "type": "floating_trap_upgrade_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/2f116b49f7aebb66942a4785c86ec984.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/964b5aeaac26714cac2ffa7194e55176.gif?cv=2",
        "truncated_name": "Adorned Empyrean ..."
    },
    {
        "name": "Airship Charm",
        "item_id": 1474,
        "type": "airship_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/058246b573cb09d82bf4c1ba562a9764.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/2b33a9bc6f40c547e693173ce0851002.gif?cv=2",
        "truncated_name": "Airship Charm"
    },
    {
        "name": "Ancient Amulet",
        "item_id": 922,
        "type": "ancient_amulet_collectible",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/collectibles/3a000e89a158ec94ede0a9db3415c999.jpg?cv=2",
        "truncated_name": "Ancient Amulet"
    },
    {
        "name": "Ancient String Cheese",
        "item_id": 2343,
        "type": "ancient_string_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/1338dc9d75327c0c84f2eba401caded2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/5cb84d2e781edafc6419b8cab67f92ce.gif?cv=2",
        "truncated_name": "Ancient String Ch..."
    },
    {
        "name": "Animatronic Bird",
        "item_id": 2219,
        "type": "droid_bird_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/a6daf326f639ef94cbde88c13fda5945.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/d802a3d866b3b8671375df63ff6755e4.gif?cv=2",
        "truncated_name": "Animatronic Bird"
    },
    {
        "name": "Antiskele Charm",
        "item_id": 495,
        "type": "anti_skele_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/c9e2e0ff242a15efd576ada74ccdd0c2.gif?cv=2",
        "truncated_name": "Antiskele Charm"
    },
    {
        "name": "Ascended Elder's Glasses",
        "item_id": 2119,
        "type": "ascended_elder_glasses_collectible",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/collectibles/6d484e53cddcb6dc0f631e9f7978a2fc.jpg?cv=2",
        "truncated_name": "Ascended Elder's ..."
    },
    {
        "name": "Beanster Cheese",
        "item_id": 3592,
        "type": "beanster_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/77e4a557aa708cf1f4d0bdbc9d3ee834.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/aaf9cbf2869757ca7400f0a6f9a87de4.gif?cv=2",
        "truncated_name": "Beanster Cheese"
    },
    {
        "name": "Blue Double Dewdrop Powder",
        "item_id": 1108,
        "type": "blue_double_dewdrop_powder_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/ba18d12d170ebaf9ad51a0f3525abae5.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/e226fb45581e9547ca5f7552f30340ba.gif?cv=2",
        "truncated_name": "Blue Double Dewdr..."
    },
    {
        "name": "Blue Double Sponge Charm",
        "item_id": 1130,
        "type": "double_sponge_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/664ec09b4450c449762b2dd205dac3e5.gif?cv=2",
        "truncated_name": "Blue Double Spong..."
    },
    {
        "name": "Bonefort Cheese",
        "item_id": 3306,
        "type": "cauldron_tier_2_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/1902af5fd288b2e05ef2c9c88805cc84.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/f3f138fc851cf4edd68a910f5734dd66.gif?cv=2",
        "truncated_name": "Bonefort Cheese"
    },
    {
        "name": "Bottled Wind",
        "item_id": 3070,
        "type": "bottled_wind_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/b570c98fa56f3a44e771d37bf7e25a08.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/607906109bf7264d14293ac8eed9ba11.gif?cv=2",
        "truncated_name": "Bottled Wind"
    },
    {
        "name": "Brain Bits",
        "item_id": 1222,
        "type": "brain_bit_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/bf7c857afed7d1e7ba2999fd0cef9be7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/066e5213ce916dcea7f980073247dc40.gif?cv=2",
        "truncated_name": "Brain Bits"
    },
    {
        "name": "Brain Charm",
        "item_id": 1236,
        "type": "brain_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/6a737aa52ccb923dc930c31156fba278.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/5f8a10d514e1ee2eb9dc833cc5107213.gif?cv=2",
        "truncated_name": "Brain Charm"
    },
    {
        "name": "Brilliant Water Jet Charm",
        "item_id": 3259,
        "type": "brilliant_water_jet_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/defa81272b955e0843733491554c33aa.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/28bf70cb1b284df503cd8775eedc2a7c.gif?cv=2",
        "truncated_name": "Brilliant Water J..."
    },
    {
        "name": "Calcified Rift Mist",
        "item_id": 1538,
        "type": "calcified_rift_mist_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/c0f2a953125c30bb4e5502a051bfcf03.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/4433101e5ae8be61eb4c1a2b477840cf.gif?cv=2",
        "truncated_name": "Calcified Rift Mist"
    },
    {
        "name": "Candy Charm",
        "item_id": 1575,
        "type": "candy_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/73a9a843cdab9897864c6ee97c85d6c1.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/cfff059b5bbfda3f097998c96600c275.gif?cv=2",
        "truncated_name": "Candy Charm"
    },
    {
        "name": "Candy Corn Cheese",
        "item_id": 397,
        "type": "treat_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/bd9425c0c9487409a13d1be4619be7d7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/99c2a28643063758adc3b5a417869af7.gif?cv=2",
        "truncated_name": "Candy Corn Cheese"
    },
    {
        "name": "Champion's Fire",
        "item_id": 2900,
        "type": "rift_gauntlet_fuel_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/6622efd1db7028b30f48b15771138720.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/6dde323134f98f0c1ec6de4dae0b832d.gif?cv=2",
        "truncated_name": "Champion's Fire"
    },
    {
        "name": "Charmbit",
        "item_id": 489,
        "type": "charmbit_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/20cc89851d1da6ea007720313b3d5f06.gif?cv=2",
        "truncated_name": "Charmbit"
    },
    {
        "name": "Cherry Charm",
        "item_id": 1648,
        "type": "cherry_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/605aba83d0caec4aacbc5b01da51fbb5.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/15c896a3ae49b833a8536920e48ce111.gif?cv=2",
        "truncated_name": "Cherry Charm"
    },
    {
        "name": "Chrome Celestial Dissonance Upgrade Kit",
        "item_id": 3022,
        "type": "chrome_celestial_dissonance_kit_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/774956b61c8257618f828e54b374a5ce.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/154521581e56c186a3196edeaa724146.gif?cv=2",
        "truncated_name": "Chrome Celestial ..."
    },
    {
        "name": "Chrome Charm",
        "item_id": 803,
        "type": "chrome_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/7d9f0e220db8280b84b8bffe39cd803e.gif?cv=2",
        "truncated_name": "Chrome Charm"
    },
    {
        "name": "Chrome Circlet of Pursuing Upgrade Kit",
        "item_id": 3602,
        "type": "chrome_floating_arcane_upgraded_kit_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/f61815ba6ee02c13747184627bdc28e0.gif?cv=2",
        "truncated_name": "Chrome Circlet of..."
    },
    {
        "name": "Chrome MonstroBot Upgrade Kit",
        "item_id": 1109,
        "type": "chrome_monstrobot_upgrade_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/2aca0b82196593a418b81b73001217d6.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/1ffc8416b5d93af312a61852a48635a4.gif?cv=2",
        "truncated_name": "Chrome MonstroBot..."
    },
    {
        "name": "Chrome Oasis Upgrade Kit",
        "item_id": 1464,
        "type": "chrome_oasis_upgrade_kit_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/200fbd80afb46c1c6755c4638b36cd00.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/13208af5f8a448d48c5f2d487e0b5a27.gif?cv=2",
        "truncated_name": "Chrome Oasis Upgr..."
    },
    {
        "name": "Chrome School of Sharks Upgrade Kit",
        "item_id": 3250,
        "type": "chrome_school_of_sharks_kit_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/729c031693993f4618ab7ed67823f41d.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/ed731b6788d1c093733f49e79bb6c540.gif?cv=2",
        "truncated_name": "Chrome School of ..."
    },
    {
        "name": "Chrome Sphynx Wrath Upgrade Kit",
        "item_id": 1827,
        "type": "chrome_sphynx_upgrade_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/d3b3b00d39d978d258666d72bfd82824.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/c6183cd623acaeda0e0cbcca94006f33.gif?cv=2",
        "truncated_name": "Chrome Sphynx Wra..."
    },
    {
        "name": "Chrome Storm Wrought Ballista Upgrade Kit",
        "item_id": 2644,
        "type": "chrome_storm_ballista_upgrade_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/94959428eb9b3330ed12e5639dc0be57.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/80abeff291d3d5dd9a2bca2362674b15.gif?cv=2",
        "truncated_name": "Chrome Storm Wrou..."
    },
    {
        "name": "Chrome Temporal Turbine Upgrade Kit",
        "item_id": 2386,
        "type": "chrome_temporal_turbine_upgrade_kit_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/d0d23d1a2e971379c769363c3a09f765.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/2db836c9c88a5f2fa866ddc1d372de7e.gif?cv=2",
        "truncated_name": "Chrome Temporal T..."
    },
    {
        "name": "Chrome Thought Obliterator Upgrade Kit",
        "item_id": 3416,
        "type": "chrome_thought_obliterator_kit_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/3fca3987d770c2e272732ada9fd41a84.gif?cv=2",
        "truncated_name": "Chrome Thought Ob..."
    },
    {
        "name": "Clockapult of Winter Past Blueprint",
        "item_id": 440,
        "type": "clock_winter_past_skin",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/3c9dd08e1126770150aaf5d5d7718da5.gif?cv=2",
        "truncated_name": "Clockapult of Win..."
    },
    {
        "name": "Cloud Cheesecake",
        "item_id": 3089,
        "type": "sky_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/cc862646ed49a6d7bed008bd76d7af82.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/935f840dbea4d7be71323b9a148cca62.gif?cv=2",
        "truncated_name": "Cloud Cheesecake"
    },
    {
        "name": "Cloud Cruiser Airship Balloon",
        "item_id": 3050,
        "type": "airship_balloon_cloud_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/484a929816b3306c10653e05a70b3f7a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/2a8ab5854a005d7a0b190a4016bea2bf.gif?cv=2",
        "truncated_name": "Cloud Cruiser Air..."
    },
    {
        "name": "Cloud Cruiser Airship Hull",
        "item_id": 3057,
        "type": "airship_hull_cloud_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/42251e37a3fba298c20b4b16cdee905a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/ef53b3cae4e48723b3707ea4e358f267.gif?cv=2",
        "truncated_name": "Cloud Cruiser Air..."
    },
    {
        "name": "Cloud Cruiser Airship Sail",
        "item_id": 3064,
        "type": "airship_sail_cloud_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/a35e5ccc96662afdf630545ff0e2f450.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/89a6bdcaddfad8275fa2dbdf9e25e3cf.gif?cv=2",
        "truncated_name": "Cloud Cruiser Air..."
    },
    {
        "name": "Compass Magnet Charm",
        "item_id": 2139,
        "type": "compass_magnet_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/797019d6807d1df81268f7f8ad1807fe.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/2604e78cc33e4de3c31763e89918b1e9.gif?cv=2",
        "truncated_name": "Compass Magnet Charm"
    },
    {
        "name": "Condensed Creativity",
        "item_id": 3447,
        "type": "condensed_creativity_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/4f5d55c1eff77474c7363f0e52d03e49.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/33a74fb409cc5bdb78a8a0aa5dd2384a.gif?cv=2",
        "truncated_name": "Condensed Creativity"
    },
    {
        "name": "Corrupt Trident",
        "item_id": 1508,
        "type": "corrupt_trident_collectible",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/collectibles/1b0bfb831bc9716f64dcaa21e08fc7c1.jpg?cv=2",
        "truncated_name": "Corrupt Trident"
    },
    {
        "name": "Creepy Coffin Trap",
        "item_id": 2699,
        "type": "creepy_coffin_weapon",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/weapons/1ea1ac9fe508060ddf59a5b616b37550.jpg?cv=2",
        "truncated_name": "Creepy Coffin Trap"
    },
    {
        "name": "Crescent Cheese",
        "item_id": 2226,
        "type": "crescent_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/1f43bc0c4acead3965fa6519dd064fc3.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/47d6974374823780e48855d149d3d145.gif?cv=2",
        "truncated_name": "Crescent Cheese"
    },
    {
        "name": "Crucible Cloning Charm",
        "item_id": 2140,
        "type": "crucible_boost_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/1ca52718d695749c982842d32f989870.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/82de8fafdae1d4c05d00296c3bb7f795.gif?cv=2",
        "truncated_name": "Crucible Cloning ..."
    },
    {
        "name": "Cupcake Charm",
        "item_id": 1688,
        "type": "cupcake_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/083e08a4c389451066c03b594e1a712e.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/b14a66c3efb50651cac2af48f695f3ee.gif?cv=2",
        "truncated_name": "Cupcake Charm"
    },
    {
        "name": "Cyclone Stone",
        "item_id": 3077,
        "type": "sky_scrambler_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/d4024a3f33595a0f5c4e642729eba429.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/d75e8a13aa1241466942b9ef855c8412.gif?cv=2",
        "truncated_name": "Cyclone Stone"
    },
    {
        "name": "Desert Horseshoe",
        "item_id": 517,
        "type": "desert_horseshoe_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/e5d8cf2c0053fb4818194882ff219363.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/1bf35b9296bb64e248a25ce0670baf87.gif?cv=2",
        "truncated_name": "Desert Horseshoe"
    },
    {
        "name": "Diamond Boost Charm",
        "item_id": 1735,
        "type": "diamond_boost_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/c6434610044cf1ab05f2327c5b39de61.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/629d4f0e352dedf0218884e556196854.gif?cv=2",
        "truncated_name": "Diamond Boost Charm"
    },
    {
        "name": "Divine Orb",
        "item_id": 493,
        "type": "perfect_orb",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/da4d4d2ba258ff4953322c609dead570.gif?cv=2",
        "truncated_name": "Divine Orb"
    },
    {
        "name": "Dragonbane Charm",
        "item_id": 424,
        "type": "dragonbane_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/db28098dc5308641096abbc5f1e049ba.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/ed769e7028c58725e151c5cf2732ec70.gif?cv=2",
        "truncated_name": "Dragonbane Charm"
    },
    {
        "name": "Dreaded Charm",
        "item_id": 700,
        "type": "dreaded_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/fc77c3347caff2f05faee41c498ceb88.gif?cv=2",
        "truncated_name": "Dreaded Charm"
    },
    {
        "name": "Drill Charge",
        "item_id": 888,
        "type": "drill_charge_stat_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/e305c5fe904855162acf43ae13144a48.gif?cv=2",
        "truncated_name": "Drill Charge"
    },
    {
        "name": "Ember Charm",
        "item_id": 2631,
        "type": "ember_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/8d39733786ed52d567f00f194b0c454e.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/92da4f1c247715f41d57d9937c172c93.gif?cv=2",
        "truncated_name": "Ember Charm"
    },
    {
        "name": "EMP400 Charm",
        "item_id": 1475,
        "type": "emp400_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/46c95fc2bb16f4e6eac149a78fa054c5.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/e359c1a6a4ae015b77b43aad0ad19fc4.gif?cv=2",
        "truncated_name": "EMP400 Charm"
    },
    {
        "name": "Empowered Anchor Charm",
        "item_id": 423,
        "type": "anchor_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/be6749a947b746fbece2754d9bd02f74.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/555bb67ba245aaf2b05db070d2b4cfcb.gif?cv=2",
        "truncated_name": "Empowered Anchor ..."
    },
    {
        "name": "Empowered Brie",
        "item_id": 1966,
        "type": "toxic_brie_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/ee870c7463f44524952b8f97650415f1_v2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/49c910ede95d469581d8f10e616d3570_v2.gif?cv=2",
        "truncated_name": "Empowered Brie"
    },
    {
        "name": "Empowered SUPER|brie+",
        "item_id": 1967,
        "type": "toxic_super_brie_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/ab8649ec743e5b982e5f502d6c3bd4fc_v2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/590c2b2eba6c1be0ccbd35797ff62be4_v2.gif?cv=2",
        "truncated_name": "Empowered SUPER|b..."
    },
    {
        "name": "Empyrean Airship Balloon",
        "item_id": 3279,
        "type": "airship_balloon_empyrean_stat_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/9d5d981c7904a86e0ab86418822fe129.gif?cv=2",
        "truncated_name": "Empyrean Airship ..."
    },
    {
        "name": "Empyrean Airship Hull",
        "item_id": 3280,
        "type": "airship_hull_empyrean_stat_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/0d97f641bfe5e3d6cd8673d386c186f2.gif?cv=2",
        "truncated_name": "Empyrean Airship ..."
    },
    {
        "name": "Empyrean Airship Sail",
        "item_id": 3281,
        "type": "airship_sail_empyrean_stat_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/b8b31f4c9f8a83787bb7d1b7b39c962d.gif?cv=2",
        "truncated_name": "Empyrean Airship ..."
    },
    {
        "name": "Enerchi Charm",
        "item_id": 2081,
        "type": "rift_furoma_energy_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/44873dda24b3c7a3d230b609f2407722.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/63f73949217ef09ad8b36e76e463b109.gif?cv=2",
        "truncated_name": "Enerchi Charm"
    },
    {
        "name": "Enigmatic Core",
        "item_id": 1893,
        "type": "enigmatic_core_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/3753c04f484bb33461ce843b89e16fee.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/01faeb8f32630c74eb442bed12425a94.gif?cv=2",
        "truncated_name": "Enigmatic Core"
    },
    {
        "name": "Enriched Cavern Soil",
        "item_id": 2132,
        "type": "enriched_cavern_soil_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/059471a4cd9f697472373dcf7bcadd2c.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/dc5e10cc4330ee79f9fece1ba25179f9.gif?cv=2",
        "truncated_name": "Enriched Cavern Soil"
    },
    {
        "name": "Essence of Destruction",
        "item_id": 518,
        "type": "essence_of_destruction_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/d31e4f2b31fb92231ac19a35ecfa2735.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/c19b0d2de195a624056eb70d58181836.gif?cv=2",
        "truncated_name": "Essence of Destru..."
    },
    {
        "name": "Extra Coarse Salt",
        "item_id": 1110,
        "type": "extra_coarse_salt_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/61e56104a0aa352825782b8c04dcee1a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/3e3f65c021435a62f50f8c95ba4d731f.gif?cv=2",
        "truncated_name": "Extra Coarse Salt"
    },
    {
        "name": "Extra Sweet Cupcake Charm",
        "item_id": 2038,
        "type": "extra_sweet_cupcake_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/d05822b5561b46aa47af1baeb423cd34.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/313711b0d4c20580442fff5b5c084715.gif?cv=2",
        "truncated_name": "Extra Sweet Cupca..."
    },
    {
        "name": "Extreme Dragonbane Charm",
        "item_id": 2816,
        "type": "extrme_dragonbane_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/536806dc491e4d0423f0df6a2249fbb7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/66ddc666ee0e792e04293dc105e81a44.gif?cv=2",
        "truncated_name": "Extreme Dragonban..."
    },
    {
        "name": "Extreme Polluted Charm",
        "item_id": 1341,
        "type": "extreme_polluted_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/dbfc7623ca28daa6b9349fceb5cc4bb2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/aa84b1f4176b044be8a5151480737f7b.gif?cv=2",
        "truncated_name": "Extreme Polluted ..."
    },
    {
        "name": "Extreme Queso Pump Charm",
        "item_id": 2868,
        "type": "extreme_wild_tonic_remote_pumping_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/94bfa01b229a4b535d955ab7caef5a14.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/dfbf1bb7c6d27609dd5c326e67de5543.gif?cv=2",
        "truncated_name": "Extreme Queso Pum..."
    },
    {
        "name": "Extreme Regal Charm",
        "item_id": 2542,
        "type": "extreme_regal_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/7f84eccb4fb788f1218a3d9349ea2459.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/ed2ebac6e5f824fe78ad8e24a6230eaf.gif?cv=2",
        "truncated_name": "Extreme Regal Charm"
    },
    {
        "name": "Extreme Snowball Charm",
        "item_id": 2523,
        "type": "extreme_snowball_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/b4801a2b10d83ff0577d4a687cba24ac.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/4054a55b9416f00e57274dbfb4c760ab.gif?cv=2",
        "truncated_name": "Extreme Snowball ..."
    },
    {
        "name": "Extreme Spooky Charm",
        "item_id": 2701,
        "type": "extreme_spooky_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/4e2b06fbf787fbeb06352c28e9040e1e.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/c2db461214c3ea9a89219f4efa910a3b.gif?cv=2",
        "truncated_name": "Extreme Spooky Charm"
    },
    {
        "name": "Extreme Spore Charm",
        "item_id": 3435,
        "type": "extreme_spore_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/d5fec8ea5771d922173cd676d7f7ada9.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/fa8e4082e918eec9a7515c974abb526c.gif?cv=2",
        "truncated_name": "Extreme Spore Charm"
    },
    {
        "name": "Extreme Wealth Charm",
        "item_id": 2141,
        "type": "extreme_gold_bonus_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/1e189aec943b434524cf96a40f9e2acb.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/2a0b146eacbef51a5a1e4b739561bfc7.gif?cv=2",
        "truncated_name": "Extreme Wealth Charm"
    },
    {
        "name": "Factory Repair Charm",
        "item_id": 2780,
        "type": "birthday_factory_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/6e71fe0489fb0d81f9d1b23bb8435bf4.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/d7d1a1d046aa2d62889c9076f10c2471.gif?cv=2",
        "truncated_name": "Factory Repair Charm"
    },
    {
        "name": "Festive Anchor Charm",
        "item_id": 2248,
        "type": "festive_anchor_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/ccc1e0f5b87f1fac609fde7ebf619095.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a5c737927a0cb5dfe25534dab81291ca.gif?cv=2",
        "truncated_name": "Festive Anchor Charm"
    },
    {
        "name": "Festive Jingle Bell",
        "item_id": 3354,
        "type": "jingle_bell_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/9da72c3f1efbc55d923ac3c7848c9156.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/307e16efe0d46199eb5cca700243fb9b.gif?cv=2",
        "truncated_name": "Festive Jingle Bell"
    },
    {
        "name": "Festive Spirit",
        "item_id": 3521,
        "type": "festive_spirit_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/6289a6916377e1d9a9d89f6e10eadc05.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/9a6c47833a784a0da3c41abfb44af897.gif?cv=2",
        "truncated_name": "Festive Spirit"
    },
    {
        "name": "Festive Summoning Bell",
        "item_id": 2509,
        "type": "golem_instant_return_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/6da67c89d4113ae02ec1ef02f9048f81.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/04d7022e42fa2dc21c7645ab06e1740d.gif?cv=2",
        "truncated_name": "Festive Summoning..."
    },
    {
        "name": "Fire Bowl Fuel",
        "item_id": 2437,
        "type": "tiki_fuel_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/36072cff45a2e63c47114f5960a63733.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/e2c9b45ab75c2d0197f4eb6ebe4b4c22.gif?cv=2",
        "truncated_name": "Fire Bowl Fuel"
    },
    {
        "name": "Flameshard",
        "item_id": 519,
        "type": "flameshard_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/5264012e27bbb8d7d63191c40235d559.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/a1f714bbf9c23aa53e89d83b22b31161.gif?cv=2",
        "truncated_name": "Flameshard"
    },
    {
        "name": "Flawed Orb",
        "item_id": 491,
        "type": "flawed_orb_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/d3cc688be2acfc6d4abf3c2baa8ea4e4.gif?cv=2",
        "truncated_name": "Flawed Orb"
    },
    {
        "name": "Flawless Orb",
        "item_id": 492,
        "type": "flawless_orb_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/a64bcfe3d5ac35d5f760b0835c9a24fb.gif?cv=2",
        "truncated_name": "Flawless Orb"
    },
    {
        "name": "Fluffy DeathBot Blueprint",
        "item_id": 416,
        "type": "fluffy_deathbot_skin_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/a82f01fdf94860f6cbc8f9103a4b58cd.gif?cv=2",
        "truncated_name": "Fluffy DeathBot B..."
    },
    {
        "name": "Forgotten Charm",
        "item_id": 426,
        "type": "forgotten_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/ca5d535e935af2896aab0dec7302c035.gif?cv=2",
        "truncated_name": "Forgotten Charm"
    },
    {
        "name": "Fort Rox Portal Console",
        "item_id": 2296,
        "type": "fort_rox_portal_console_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/35257df916d0dc65540ddd6c7e6f3215.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/60733729a1faf00537be603d96454919.gif?cv=2",
        "truncated_name": "Fort Rox Portal C..."
    },
    {
        "name": "Fort Rox Portal Core",
        "item_id": 2297,
        "type": "fort_rox_portal_core_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/2b42c5c77d804604a334908549e090c2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/580d938252e2b660b438cd8d1aec64be.gif?cv=2",
        "truncated_name": "Fort Rox Portal Core"
    },
    {
        "name": "Frozen Sealed Bottle",
        "item_id": 902,
        "type": "frozen_sealed_bottle_message_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/message_items/54d8383b07f25998ddfb18cd94a89f0b.jpg?cv=2",
        "truncated_name": "Frozen Sealed Bottle"
    },
    {
        "name": "Ful'Mina's Tooth",
        "item_id": 2435,
        "type": "fulmina_tooth_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/4e309aadd9e8fd433249b75c45d953c7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/16e1b9f5196d896445eda1f92180c4ef.gif?cv=2",
        "truncated_name": "Ful'Mina's Tooth"
    },
    {
        "name": "Gargantua Charm",
        "item_id": 1835,
        "type": "gargantua_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/ba1a5783d9ffeee354c7af3917bdd37b.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/8c05ac76b481f884c224d35d7d941f12.gif?cv=2",
        "truncated_name": "Gargantua Charm"
    },
    {
        "name": "Gauntlet String Cheese",
        "item_id": 2906,
        "type": "gauntlet_string_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/68d4a42a128bde41febaf5453bdb7481.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/b0aafa6415e1a5e7da24cdf53eb8fb28.gif?cv=2",
        "truncated_name": "Gauntlet String C..."
    },
    {
        "name": "Gemstone Boost Charm",
        "item_id": 1736,
        "type": "gemstone_boost_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/9807a71af3f44c5939b9f5d150c269ed.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/4619a6111be857298655a5f2c51c7f81.gif?cv=2",
        "truncated_name": "Gemstone Boost Charm"
    },
    {
        "name": "Geyser Smolder Stone",
        "item_id": 2840,
        "type": "physical_geyser_trap_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/d9e49c728a60992e07a576fb228153d4.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/90b6d9d438d3389d8d9b185ab526f510.gif?cv=2",
        "truncated_name": "Geyser Smolder Stone"
    },
    {
        "name": "Ghoulgonzola Cheese",
        "item_id": 398,
        "type": "trick_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/e3291fabd4f135f5d705b12a2492e6d7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/9855eef798f58ba8437bc9e6c8bf74bf.gif?cv=2",
        "truncated_name": "Ghoulgonzola Cheese"
    },
    {
        "name": "Giant's Golden Key",
        "item_id": 3586,
        "type": "giant_golden_key_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/e9cba6922945c08a0144ae9b9cb77f48.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/6e5fcb3f28404e72eeca3b6aaf2d1659.gif?cv=2",
        "truncated_name": "Giant's Golden Key"
    },
    {
        "name": "Gilded Charm",
        "item_id": 2174,
        "type": "gilded_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/16470b79c5c6124b20ad045640ba1786.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/d42008c11a26f207776d2604c593e1c4.gif?cv=2",
        "truncated_name": "Gilded Charm"
    },
    {
        "name": "Glazed Pecan Pecorino Cheese",
        "item_id": 2733,
        "type": "glazed_pecan_pecorino_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/f62431db3491332357f9e29139dce361.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/e787e4a5381c442dbfba79aa23761b77.gif?cv=2",
        "truncated_name": "Glazed Pecan Peco..."
    },
    {
        "name": "Gloomy Charm",
        "item_id": 3309,
        "type": "gloomy_greenwood_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/58a204a2c2d646e96ab73cd623a63418.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/26307fb1ef1b2e7f9076b9f6b3a2849a.gif?cv=2",
        "truncated_name": "Gloomy Charm"
    },
    {
        "name": "Glowing Gruyere Cheese",
        "item_id": 1733,
        "type": "glowing_gruyere_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/c27572b8faa4f0694416f5355bfc0645.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/d681f93fa679e6672da52fb5eb910e74.gif?cv=2",
        "truncated_name": "Glowing Gruyere C..."
    },
    {
        "name": "Gnarled Charm",
        "item_id": 1649,
        "type": "gnarled_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/7cef28b48509ce7aa895547ab673e5d7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a5dd6b4acd930e562c047ee1ef3513a8.gif?cv=2",
        "truncated_name": "Gnarled Charm"
    },
    {
        "name": "Golden Anchor Charm",
        "item_id": 1836,
        "type": "golden_anchor_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/c052d85c965ff85d1fc0dcd7301f2750.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/0ff60fbdcb829e5a6771f648fa4c9719.gif?cv=2",
        "truncated_name": "Golden Anchor Charm"
    },
    {
        "name": "Golden Goose",
        "item_id": 3588,
        "type": "golden_goose_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/59dd72093a93e9f3af2ea146f24b6d63.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/534d2621cf8a8dc97a80dfae40167060.gif?cv=2",
        "truncated_name": "Golden Goose"
    },
    {
        "name": "Golden Goose Feather",
        "item_id": 3587,
        "type": "golden_goose_feather_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/0705d0b6a4e0abd12492cac9aa4b8c8a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/2c15dade559e1e88efd7f59cd3dee291.gif?cv=2",
        "truncated_name": "Golden Goose Feather"
    },
    {
        "name": "Golem Guardian Charm",
        "item_id": 2735,
        "type": "snow_golem_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/7d6b4167dc6794129d804c92066a5fa1.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/f36574023f14f1fd9756141563ec5e79.gif?cv=2",
        "truncated_name": "Golem Guardian Charm"
    },
    {
        "name": "Grubling Bonanza Charm",
        "item_id": 1131,
        "type": "grubling_bonanza_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a9fd46f6ff5cc7ad0fb3c0f1c30dd112.gif?cv=2",
        "truncated_name": "Grubling Bonanza ..."
    },
    {
        "name": "Grungy DeathBot Blueprint",
        "item_id": 417,
        "type": "grungy_deathbot_skin_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/4ebf43f876918a9a5f98721f17c4d292.gif?cv=2",
        "truncated_name": "Grungy DeathBot B..."
    },
    {
        "name": "Heatproof Mage Cloth",
        "item_id": 521,
        "type": "heatproof_mage_cloth_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/95a772504d42917adf21b6fe87beb0ed.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/e0946dd901ca59d79dcf71172c3908ef.gif?cv=2",
        "truncated_name": "Heatproof Mage Cloth"
    },
    {
        "name": "Heavy Gold",
        "item_id": 1828,
        "type": "heavy_gold_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/80736e75c572059fdf2f6a93e5f1e619.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/debb763462136b7062b455bec9dcd437.gif?cv=2",
        "truncated_name": "Heavy Gold"
    },
    {
        "name": "Icy RhinoBot Blueprint",
        "item_id": 441,
        "type": "icy_rhinobo_skin_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/c91fdfc76d88e14f8bfa6efccda9e9c2.gif?cv=2",
        "truncated_name": "Icy RhinoBot Blue..."
    },
    {
        "name": "Insidious Incense",
        "item_id": 3485,
        "type": "insidious_incense_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/c8576ae27b0bc255f17d7dbaaccc1432.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/5e6e9335ad0aec488f293e7463913f4e.gif?cv=2",
        "truncated_name": "Insidious Incense"
    },
    {
        "name": "Kalor'ignis Rib",
        "item_id": 2833,
        "type": "draconic_geyser_trap_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/d0618677ec47feb3810ef33a59568b39.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/fc66cd7a58ee0739571dfdfcd7c6a77c.gif?cv=2",
        "truncated_name": "Kalor'ignis Rib"
    },
    {
        "name": "Lantern Oil Charm",
        "item_id": 2142,
        "type": "lantern_oil_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/089df35a6e5a6a1b26b02cafde8ee772.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/b210f8c687ccf4272a1288ea099c74b3.gif?cv=2",
        "truncated_name": "Lantern Oil Charm"
    },
    {
        "name": "Let It Snow Charm",
        "item_id": 2526,
        "type": "let_it_snow_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/18ef6da0ddee55bb02c368941b7816c7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/56ecf2144d887279a4d115722e69e068.gif?cv=2",
        "truncated_name": "Let It Snow Charm"
    },
    {
        "name": "Living Grove Mould",
        "item_id": 2861,
        "type": "living_grove_mould_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/d969c09843ed5b454db2ec7d6375c1d1.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/e4215f831b37afba41c812e3d28d0219.gif?cv=2",
        "truncated_name": "Living Grove Mould"
    },
    {
        "name": "Lucky Valentine Charm",
        "item_id": 2275,
        "type": "lucky_valentine_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/387b30d80db35159985af1604cdf0f3a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/1ded441714b166009d10da083b23ba7b.gif?cv=2",
        "truncated_name": "Lucky Valentine C..."
    },
    {
        "name": "Magic Nest Dust",
        "item_id": 2839,
        "type": "magic_cork_dust_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/064127d4a56d4bc22901fed58ea9e58f.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/b78390f0ad05d7f3a929722e81db935c.gif?cv=2",
        "truncated_name": "Magic Nest Dust"
    },
    {
        "name": "Magical Eggsweeper Fertilizer",
        "item_id": 2808,
        "type": "eggstreme_eggscavation_upgrade_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/c5aa16d4da233681fdec04e6e2400bb7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/6832df7c1026a245f6d1dd1b28c230a9.gif?cv=2",
        "truncated_name": "Magical Eggsweepe..."
    },
    {
        "name": "Magical Holiday Hat",
        "item_id": 2510,
        "type": "golem_magical_hat_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/ed307b99b4304d9448c1a01e82090d29.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/93bc279e2b9a58fd09c8f3f178ba069a.gif?cv=2",
        "truncated_name": "Magical Holiday Hat"
    },
    {
        "name": "Magical Rancid Radioactive Blue Cheese",
        "item_id": 2369,
        "type": "magical_radioactive_blue_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/0327cdc32d11e124fa2fb5bfbc8ac182.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/761fc246c44cc3b491ff5e065ecfdfdc.gif?cv=2",
        "truncated_name": "Magical Rancid Ra..."
    },
    {
        "name": "Magical String Cheese",
        "item_id": 1426,
        "type": "magical_string_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/15204ebe1c85adbb51fb32a6ad9c83db.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/e513ef0cbeec29c9c5e44e4db39df7d1.gif?cv=2",
        "truncated_name": "Magical String Ch..."
    },
    {
        "name": "Magnetic Charm Chunk",
        "item_id": 2133,
        "type": "magnetic_charm_chunk_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/6c8028b667a0f0790d2dd305fbe7eba0.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/b1b9c142339c5fb668cec96d5f34dbc1.gif?cv=2",
        "truncated_name": "Magnetic Charm Chunk"
    },
    {
        "name": "Maki Cheese",
        "item_id": 103,
        "type": "maki_cheese",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/deb32201d566af39ee2ad9db8523c2a5.gif?cv=2",
        "truncated_name": "Maki Cheese"
    },
    {
        "name": "Maki String Cheese",
        "item_id": 2080,
        "type": "maki_string_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/08f965d4a49a9e4916879c9b5a80fc3d.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/ed400195402dcc2b18553dd5721b116c.gif?cv=2",
        "truncated_name": "Maki String Cheese"
    },
    {
        "name": "Mini Maelstrom",
        "item_id": 1829,
        "type": "mini_maelstrom_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/e6a4408fd81af048de6317ef4ed425f9.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/df3e60e387d7f064ace14455169166c2.gif?cv=2",
        "truncated_name": "Mini Maelstrom"
    },
    {
        "name": "Mining Charm",
        "item_id": 682,
        "type": "drilling_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/531ca3dc8e0beb5939e609319f2ede13.gif?cv=2",
        "truncated_name": "Mining Charm"
    },
    {
        "name": "Minuscule Photo Album",
        "item_id": 1198,
        "type": "minuscule_photo_album_message_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/message_items/d57441bab9674b23d24e9e5e54bfc7a2.jpg?cv=2",
        "truncated_name": "Minuscule Photo A..."
    },
    {
        "name": "Moon Cheese",
        "item_id": 105,
        "type": "moon_cheese",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/8d7e368b93f5f08fe417f471cc0cc855.gif?cv=2",
        "truncated_name": "Moon Cheese"
    },
    {
        "name": "Nightlight Charm",
        "item_id": 2396,
        "type": "nightlight_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/de8f19d7051ed9894ef087efe9825874.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/7c438f9cfdb525b244738764ffc45050.gif?cv=2",
        "truncated_name": "Nightlight Charm"
    },
    {
        "name": "Nightshade Farming Charm",
        "item_id": 1737,
        "type": "nightshade_boost_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/069bbed4e9cfee4b1bb8b558838e190b.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/603ec1897d867903720ff973d0d47cd9.gif?cv=2",
        "truncated_name": "Nightshade Farmin..."
    },
    {
        "name": "Ninja Ambush Blueprint",
        "item_id": 418,
        "type": "ninja_ambush_skin_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/a56db87abbf199332a0d728d63eb40f2.gif?cv=2",
        "truncated_name": "Ninja Ambush Blue..."
    },
    {
        "name": "Oasis Bead",
        "item_id": 522,
        "type": "oasis_bead_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/d39efddbc098d0ddba1030ac4b39cffa.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/bd1c0d10123b5fde7ad75c34be3067f1.gif?cv=2",
        "truncated_name": "Oasis Bead"
    },
    {
        "name": "Oxygen Burst Charm",
        "item_id": 1837,
        "type": "oxygen_burst_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/f7c80b7e820bd3373f967c54bc4588b7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/e4bf3b52052b986d9a7707371b4ff541.gif?cv=2",
        "truncated_name": "Oxygen Burst Charm"
    },
    {
        "name": "Pirate Airship Balloon",
        "item_id": 3053,
        "type": "airship_balloon_pirate_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/b662b31d0e5b8f332d95d1ad4996c33f.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/171cc0836694ec8817d64670e32fb731.gif?cv=2",
        "truncated_name": "Pirate Airship Ba..."
    },
    {
        "name": "Pirate Airship Hull",
        "item_id": 3060,
        "type": "airship_hull_pirate_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/02b670d64f2d24b982070341250eeb75.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/5b789dfb29ef7cdc8c91f648968f9bf3.gif?cv=2",
        "truncated_name": "Pirate Airship Hull"
    },
    {
        "name": "Pirate Airship Sail",
        "item_id": 3067,
        "type": "airship_sail_pirate_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/9ae0396153f5f7499dcae136531f4b4f.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/c08491148a6248cf8eab86b86e6b59a8.gif?cv=2",
        "truncated_name": "Pirate Airship Sail"
    },
    {
        "name": "Polluted Charm",
        "item_id": 1342,
        "type": "polluted_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/a97493f1278ebde61a5cf09ef6ef5354.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/fbf765d0ed368310092f4b0905d574e8.gif?cv=2",
        "truncated_name": "Polluted Charm"
    },
    {
        "name": "Portal Rekindling Key",
        "item_id": 2336,
        "type": "rift_portal_warmer_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/8773f3c6287bed54e72243f5ec15340b.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/3adb1b99b7d8afe4fc6824d3b785a51d.gif?cv=2",
        "truncated_name": "Portal Rekindling..."
    },
    {
        "name": "Portal Scrambler",
        "item_id": 2338,
        "type": "rift_scramble_portals_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/0c7f259c4b3defe7af42ca34aa7285bb.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/61e4557721b07d36916048791fa23cb9.gif?cv=2",
        "truncated_name": "Portal Scrambler"
    },
    {
        "name": "Powdered Bleach",
        "item_id": 1466,
        "type": "powdered_bleach_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/bfa6fddf29c2f0411d02a23ff387fe35.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/f0df2e8950e0387e66d0d4db6a60d970.gif?cv=2",
        "truncated_name": "Powdered Bleach"
    },
    {
        "name": "Predatory Processor",
        "item_id": 1506,
        "type": "predatory_processor_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/635bd69524b778bb9bcc52676036f71d.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/f64b5f1f33e4d3d467f75b126e9252ea.gif?cv=2",
        "truncated_name": "Predatory Processor"
    },
    {
        "name": "Prospector's Charm",
        "item_id": 496,
        "type": "mining_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/f7399c5331d89cc6a8b6b17f560d24b4_v2.gif?cv=2",
        "truncated_name": "Prospector's Charm"
    },
    {
        "name": "Quantum Quartz",
        "item_id": 2337,
        "type": "rift_quantum_quartz_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/8d83506d8a5ad7c98bcd992cab4d553a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/0128a6603be3d9e29f3f56945b70963a.gif?cv=2",
        "truncated_name": "Quantum Quartz"
    },
    {
        "name": "Queso Pump Charm",
        "item_id": 2632,
        "type": "remote_pumping_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/27dc9ad6e52bd1b4fb67061ffa243b36.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/e32937f9a10699d50101c0872973270c.gif?cv=2",
        "truncated_name": "Queso Pump Charm"
    },
    {
        "name": "Queso Thermal Spring",
        "item_id": 2838,
        "type": "hydro_geyser_trap_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/209ca347c42ff56071ddd50f087a5bb8.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/56827bb77944314d84e3feeca605994b.gif?cv=2",
        "truncated_name": "Queso Thermal Spring"
    },
    {
        "name": "Radioactive Blue Cheese",
        "item_id": 108,
        "type": "radioactive_blue_cheese",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/cc2d5da1d144f54479c038c0c2f9836e.gif?cv=2",
        "truncated_name": "Radioactive Blue ..."
    },
    {
        "name": "Rainbow Spore Charm",
        "item_id": 3480,
        "type": "rainbow_spore_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/0b6c886b586aca06a7a0109fd0a32ad1.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/ae8a740783924e7dcc92d976799b821e.gif?cv=2",
        "truncated_name": "Rainbow Spore Charm"
    },
    {
        "name": "Rancid Radioactive Blue Cheese",
        "item_id": 1340,
        "type": "super_radioactive_blue_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/08e4b27b3043710812c5b3a1cd00bc66.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/2a7c0f6c65bc54f3bef2a02ab56c948b.gif?cv=2",
        "truncated_name": "Rancid Radioactiv..."
    },
    {
        "name": "Rare Cupcake Sprinkles",
        "item_id": 2036,
        "type": "cupcake_sprinkles_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/ac40f94103a4a7e28dc6b63313983ae3.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/b63fdfcedf113ae1e91b1855b56e3db8.gif?cv=2",
        "truncated_name": "Rare Cupcake Spri..."
    },
    {
        "name": "Rare Map Dust",
        "item_id": 926,
        "type": "rare_map_dust_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/458789350947048fd501508b8bdc88b1.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/e0e5e2cc32a48c47c46bf89379c123f8.gif?cv=2",
        "truncated_name": "Rare Map Dust"
    },
    {
        "name": "Reactive Reagent",
        "item_id": 3296,
        "type": "cauldron_instant_finish_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/ff427767e5a41f611bfc0350bc98e184.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/48dfb0552bfe3efa7ec647e3ddaa5511.gif?cv=2",
        "truncated_name": "Reactive Reagent"
    },
    {
        "name": "Reality Restitch Charm",
        "item_id": 2583,
        "type": "restitched_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/4fb5f1a8bbb8dc56dc120e01f800532e.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/5d2e4cf850efa4837fc94b9d02a90d2a.gif?cv=2",
        "truncated_name": "Reality Restitch ..."
    },
    {
        "name": "Really, Really Shiny Precious Gold",
        "item_id": 1903,
        "type": "minotaur_base_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/806df5a4fb90e322c56c5a339c213761.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/9cf40e96994a3c3dc09f34304372f490.gif?cv=2",
        "truncated_name": "Really, Really Sh..."
    },
    {
        "name": "Red Double Dewdrop Powder",
        "item_id": 1111,
        "type": "red_double_dewdrop_powder_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/5cb4ef575d737d6f7daa4a49dc0c785d.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/1dcbae1feedd583faadd3def321011a2.gif?cv=2",
        "truncated_name": "Red Double Dewdro..."
    },
    {
        "name": "Red Double Sponge Charm",
        "item_id": 1132,
        "type": "red_double_sponge_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/ee8d0311cdac7e36ac153c70cb8a85e9.gif?cv=2",
        "truncated_name": "Red Double Sponge..."
    },
    {
        "name": "Regal Charm",
        "item_id": 1252,
        "type": "regal_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/2fcd6e3c79505092b3b743443e8f5499.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/c4b2b1961b9f59c4d254c90779a06504.gif?cv=2",
        "truncated_name": "Regal Charm"
    },
    {
        "name": "Richard's Sky Yacht Airship Balloon",
        "item_id": 3051,
        "type": "airship_balloon_deluxe_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/1b6bc6b096dc7ef4b89285deb5b8aeca.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/e7995da95153f271a9f805ccf091209d.gif?cv=2",
        "truncated_name": "Richard's Sky Yac..."
    },
    {
        "name": "Richard's Sky Yacht Airship Hull",
        "item_id": 3058,
        "type": "airship_hull_deluxe_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/55cb35289290d4965916c25c3bd7a3a8.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/4a6f8e097cd8f835d5e10910f2225783.gif?cv=2",
        "truncated_name": "Richard's Sky Yac..."
    },
    {
        "name": "Richard's Sky Yacht Airship Sail",
        "item_id": 3065,
        "type": "airship_sail_deluxe_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/2c220e5dc8616ba48a9d559480ab35cc.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/fa3cfc16fa247962aefb02c2df50571b.gif?cv=2",
        "truncated_name": "Richard's Sky Yac..."
    },
    {
        "name": "Rift 2020 Charm",
        "item_id": 2958,
        "type": "rift_2020_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/f191ba3b64b71805ce39dc07a929ae14.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a9f49230533b45cc3307c6ab78e2ce20.gif?cv=2",
        "truncated_name": "Rift 2020 Charm"
    },
    {
        "name": "Rift 2021 Charm",
        "item_id": 3154,
        "type": "rift_2021_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/187584b2344e1e01cec0476e450f2064.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/31d8bc78d3cf0d8bea9a0594c819a307.gif?cv=2",
        "truncated_name": "Rift 2021 Charm"
    },
    {
        "name": "Rift 2022 Charm",
        "item_id": 3367,
        "type": "rift_2022_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/a868a65bb8ad72ee2462a9afd0f912d7.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/32c2181b43faa9576995f87e768ff866.gif?cv=2",
        "truncated_name": "Rift 2022 Charm"
    },
    {
        "name": "Rift 2023 Charm",
        "item_id": 3528,
        "type": "rift_2023_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/d7876e6c552abaf58ee261edf9b67f44.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/c33340dc8d5bdc0631ffacc1336ae6d8.gif?cv=2",
        "truncated_name": "Rift 2023 Charm"
    },
    {
        "name": "Rift Airship Charm",
        "item_id": 2397,
        "type": "rift_airship_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/a966bd896cf41166e8d842af18467eb4.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/623a319c3d96b43e79b61dec072bdc06.gif?cv=2",
        "truncated_name": "Rift Airship Charm"
    },
    {
        "name": "Rift Antiskele Charm",
        "item_id": 2322,
        "type": "rift_anti_skele_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/741ab1ecdef7c54809ea1ce72f159666.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/7218005f9062e881a6a2991ba58db829.gif?cv=2",
        "truncated_name": "Rift Antiskele Charm"
    },
    {
        "name": "Rift Charm",
        "item_id": 1430,
        "type": "rift_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/f3bc54225ed23bd74fcc7e2ef2cae422.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/78dc60695a186f1496f69f0dc699c627.gif?cv=2",
        "truncated_name": "Rift Charm"
    },
    {
        "name": "Rift Cherries",
        "item_id": 1639,
        "type": "rift_cherries_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/c8243a4a461896af902d46502fdf9a70.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/7c2148bf37a5e4e9ca9b5aa99b3d9d9a.gif?cv=2",
        "truncated_name": "Rift Cherries"
    },
    {
        "name": "Rift Chrome Charm",
        "item_id": 3026,
        "type": "rift_chrome_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/09d25f056ff9f38a91c6d704d8d33ba2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/6b2a2292a5bb36384a0d1dc22ccd761a.gif?cv=2",
        "truncated_name": "Rift Chrome Charm"
    },
    {
        "name": "Rift Curd",
        "item_id": 1418,
        "type": "rift_cheese_curd_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/310a67f7bee1640e399ffd3ad8740389.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/c66e12e9a3a37f1e16c1b607136fde29.gif?cv=2",
        "truncated_name": "Rift Curd"
    },
    {
        "name": "Rift Extreme Luck Charm",
        "item_id": 2363,
        "type": "rift_extreme_luck_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/7ea25dc11c6d0fba366fe30265ad5f9c.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/092769085f7cb3cefe6b75d5b7a62081.gif?cv=2",
        "truncated_name": "Rift Extreme Luck..."
    },
    {
        "name": "Rift Extreme Power Charm",
        "item_id": 2907,
        "type": "rift_extreme_power_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/6581f8e4b56d689227e1d557730d66f4.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/24287bd361f91ecea361b3f4c5c375cf.gif?cv=2",
        "truncated_name": "Rift Extreme Powe..."
    },
    {
        "name": "Rift Extreme Snowball Charm",
        "item_id": 2959,
        "type": "rift_extreme_snowball_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/9554d6f771f923fc8e897d4dfac41dc4.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/367126bef58f03ce1ff71fa6b6500c3b.gif?cv=2",
        "truncated_name": "Rift Extreme Snow..."
    },
    {
        "name": "Rift Luck Charm",
        "item_id": 2346,
        "type": "rift_luck_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/dc318acf79919053d8173aaedc7da39b.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/72e2bb86e853bc66ef6c8f12f046c436.gif?cv=2",
        "truncated_name": "Rift Luck Charm"
    },
    {
        "name": "Rift Power Charm",
        "item_id": 1552,
        "type": "rift_power_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/cf58f577ec86005ccdc5f9eb62562452.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/6d45fc2924b5713268f6f5326c42fdfe.gif?cv=2",
        "truncated_name": "Rift Power Charm"
    },
    {
        "name": "Rift Rainbow Spore Charm",
        "item_id": 3486,
        "type": "rift_rainbow_spore_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/b35701e0fd6e96c56095e95b5832e39a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/8c4803a06b91628e97d7cefeebb4275a.gif?cv=2",
        "truncated_name": "Rift Rainbow Spor..."
    },
    {
        "name": "Rift Snowball Charm",
        "item_id": 2960,
        "type": "rift_snowball_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/cc84ac85c7d5a983678117c0dd07093e.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/dd97c49345410bb5ddb3d32b4e244b25.gif?cv=2",
        "truncated_name": "Rift Snowball Charm"
    },
    {
        "name": "Rift Spooky Charm",
        "item_id": 2917,
        "type": "rift_spooky_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/9fd717d467184a6ddfa4359ba3ec9a4d.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/6c736b0696694bb04d853a0135b14eb7.gif?cv=2",
        "truncated_name": "Rift Spooky Charm"
    },
    {
        "name": "Rift Super Luck Charm",
        "item_id": 2347,
        "type": "rift_super_luck_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/0575c5cb9534f10a3b5231132a43a7ad.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/b180d6b179b11e90a7a4f4b960bbcb65.gif?cv=2",
        "truncated_name": "Rift Super Luck C..."
    },
    {
        "name": "Rift Super Power Charm",
        "item_id": 2908,
        "type": "rift_super_power_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/1b11d44154ffebd7bd136bf541c134e8.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/d613c11b2c00e96231111b31c6a51deb.gif?cv=2",
        "truncated_name": "Rift Super Power ..."
    },
    {
        "name": "Rift Super Snowball Charm",
        "item_id": 2961,
        "type": "rift_super_snowball_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/f42a78168e62dec01ad8c1797ac807b2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/88bee27363469659431215bfcd575b20.gif?cv=2",
        "truncated_name": "Rift Super Snowba..."
    },
    {
        "name": "Rift Super Vacuum Charm",
        "item_id": 1841,
        "type": "super_rift_vacuum_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/26eb99afa927d2090a5318493d4f8eae.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a8857b31040f508bf0c1b9f506afc95a.gif?cv=2",
        "truncated_name": "Rift Super Vacuum..."
    },
    {
        "name": "Rift Tarnished Charm",
        "item_id": 3027,
        "type": "rift_tarnished_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/f161c5b0a35ef28af3f8266f5415ccd2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a4d6ded2f1891aa5c337e78807d2830b.gif?cv=2",
        "truncated_name": "Rift Tarnished Charm"
    },
    {
        "name": "Rift Ultimate Snowball Charm",
        "item_id": 2962,
        "type": "rift_ultimate_snowball_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/d146188720460c85253c8c3a64b9740c.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/7fa23bd1c52a60a424694f211549eb27.gif?cv=2",
        "truncated_name": "Rift Ultimate Sno..."
    },
    {
        "name": "Rift Wealth Charm",
        "item_id": 2364,
        "type": "rift_gold_bonus_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/6441a7625f5b9a88f30cd2c88903e951.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/b9c7b17709c1f9daa3406ffb33ed1dd0.gif?cv=2",
        "truncated_name": "Rift Wealth Charm"
    },
    {
        "name": "Rift-torn Roots",
        "item_id": 1640,
        "type": "rift_torn_roots_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/bffc5e77073c0f99e3c2b5f16ee845a5.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/701a5aafa869668787a491a5cfb6c5f0.gif?cv=2",
        "truncated_name": "Rift-torn Roots"
    },
    {
        "name": "Rotten Charm",
        "item_id": 497,
        "type": "staling_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/d20c6683d16fed01b12364641193bd29.gif?cv=2",
        "truncated_name": "Rotten Charm"
    },
    {
        "name": "Runny Cheese",
        "item_id": 907,
        "type": "runny_cheese",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/43a071a1600e1198c3b5b09a4cfa0d22.gif?cv=2",
        "truncated_name": "Runny Cheese"
    },
    {
        "name": "Safeguard Charm",
        "item_id": 1133,
        "type": "safeguard_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/6016dd81a9841055b0d2209041df7e7c.gif?cv=2",
        "truncated_name": "Safeguard Charm"
    },
    {
        "name": "Sandblasted Metal",
        "item_id": 524,
        "type": "sandblasted_metal_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/fbdaf48f1a314f4b8cbcfa996a86a9e2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/d267c126c4c60638747cb0a89e07eb12.gif?cv=2",
        "truncated_name": "Sandblasted Metal"
    },
    {
        "name": "Sap-filled Thorns",
        "item_id": 1642,
        "type": "wicked_thorns_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/643d1e5defe90efc61339ac4e7885161.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/35d643f7acf35a138ea237426812f53e.gif?cv=2",
        "truncated_name": "Sap-filled Thorns"
    },
    {
        "name": "Scientist's Charm",
        "item_id": 428,
        "type": "lab_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/9b889fbc0365b435cfecab96b1bf3c72.gif?cv=2",
        "truncated_name": "Scientist's Charm"
    },
    {
        "name": "Sheriff's Badge Charm",
        "item_id": 1179,
        "type": "sheriff_badge_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/6d37dcdde934871c96e0739381b37636.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/ef5952a00bc456f99f262f0e51c27e45.gif?cv=2",
        "truncated_name": "Sheriff's Badge C..."
    },
    {
        "name": "Shielding Charm",
        "item_id": 1819,
        "type": "shielding_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/26e1b70960e285a117e31a36590d9d32.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/eda7a194a7ac77cf889d31892ee472d4.gif?cv=2",
        "truncated_name": "Shielding Charm"
    },
    {
        "name": "Shortcut Charm",
        "item_id": 1577,
        "type": "shortcut_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/3db1c91012a4c20b77efeea13a4d0b05.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/744c1f5d581f9f11aa9d253053f9fc19.gif?cv=2",
        "truncated_name": "Shortcut Charm"
    },
    {
        "name": "Shrink Ray Trap",
        "item_id": 483,
        "type": "shrink_ray_weapon",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/weapons/452c0a7a3943f217ab3e78e306d94fc1.jpg?cv=2",
        "truncated_name": "Shrink Ray Trap"
    },
    {
        "name": "Silver Bolt",
        "item_id": 2222,
        "type": "silver_bolt_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/b9be730eb5bc9e9dd3e6d9c2143511f2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/8c10f677ddd1a2b2315cb6f3bb041ee4.gif?cv=2",
        "truncated_name": "Silver Bolt"
    },
    {
        "name": "Simple Orb",
        "item_id": 494,
        "type": "simple_orb_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/2ba59ce524756109ad0f9824f1d5345e.gif?cv=2",
        "truncated_name": "Simple Orb"
    },
    {
        "name": "Small Power Charm",
        "item_id": 2472,
        "type": "weak_power_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/5ebd1d354d440307a0d2f9d57b579d6b.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/797c882174fbb68e6caf7b06d0579c50.gif?cv=2",
        "truncated_name": "Small Power Charm"
    },
    {
        "name": "Smart Water Jet Charm",
        "item_id": 1838,
        "type": "smart_water_jet_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/c4e14751d420a86d68f25cf9863ca121.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/6b897c436ac61161d2234db23d480a75.gif?cv=2",
        "truncated_name": "Smart Water Jet C..."
    },
    {
        "name": "Snowball Charm",
        "item_id": 1290,
        "type": "snowball_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/0b499d03d61150a12c52a8e749c7dd79.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/5858998c0c1a0a26e32d8e1f56df9910.gif?cv=2",
        "truncated_name": "Snowball Charm"
    },
    {
        "name": "Snowball Showdown Dust",
        "item_id": 2724,
        "type": "snowball_showdown_upgrade_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/bed8f0b5f1c7e40882dc773af089ca53.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/ea94a0b084242eaddcf305f6e672e8f0.gif?cv=2",
        "truncated_name": "Snowball Showdown..."
    },
    {
        "name": "Soap Charm",
        "item_id": 1343,
        "type": "soap_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/de2406521be37346efac8108f1ef15b2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/2cbe52a797614757f3aa0d93bc958602.gif?cv=2",
        "truncated_name": "Soap Charm"
    },
    {
        "name": "Speedy Coggy Colby",
        "item_id": 3188,
        "type": "speed_coggy_colby_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/4d607a8667349945fa63a6a7d9f97b28.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/63b25a326addb5ac3aec72abde98fa11.gif?cv=2",
        "truncated_name": "Speedy Coggy Colby"
    },
    {
        "name": "Sphynx Crystal",
        "item_id": 526,
        "type": "sphynx_crystal_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/f80fe73313dc4f87b95125255987b2bd.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/98558bf78823ceb7e3c6317d832caea6.gif?cv=2",
        "truncated_name": "Sphynx Crystal"
    },
    {
        "name": "Spiked Anchor Charm",
        "item_id": 1839,
        "type": "spiked_anchor_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/f0a3859e52d98561e172904f03f3b5f1.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/eafcbaef0f9630c9f943a11d46102580.gif?cv=2",
        "truncated_name": "Spiked Anchor Charm"
    },
    {
        "name": "Spiked Metal",
        "item_id": 1831,
        "type": "spiked_metal_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/255213d36f651220b7e556a57fa38a79.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/e6e5058c6fea0e4d78e2e2c653a1eaa2.gif?cv=2",
        "truncated_name": "Spiked Metal"
    },
    {
        "name": "Spooky Charm",
        "item_id": 701,
        "type": "spooky_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/72d40b9364771836e7e20e3754746412.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/ee95cb1752d4ddba8e1187b90cbc0769.gif?cv=2",
        "truncated_name": "Spooky Charm"
    },
    {
        "name": "Spooky Shuffle Dust",
        "item_id": 2696,
        "type": "spooky_shuffle_upgrade_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/94b6d2447d0c88b0a9ade53506035a1f.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/5976e5f1405ea7433062bd666421fc19.gif?cv=2",
        "truncated_name": "Spooky Shuffle Dust"
    },
    {
        "name": "Spore Charm",
        "item_id": 1738,
        "type": "spore_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/1c90261a556d8b2fd4ac076c3bf1e389_v2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/81f16bc4d4d67c896d5ebe982ea77bc6_v2.gif?cv=2",
        "truncated_name": "Spore Charm"
    },
    {
        "name": "Sprinkly Sweet Cupcake Charm",
        "item_id": 2286,
        "type": "sprinkley_sweet_cupcake_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/1d87469ccdf25cdf28b5e7c8ab34671c.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/3a7f7eae711190d6062ce5144b54ef88.gif?cv=2",
        "truncated_name": "Sprinkly Sweet Cu..."
    },
    {
        "name": "Stagnant Charm",
        "item_id": 1652,
        "type": "wicked_gnarly_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/e5d9a2a225a0e84dfb9526f963e8331a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a7311899d7e2ecf8ea092775c9adbee9.gif?cv=2",
        "truncated_name": "Stagnant Charm"
    },
    {
        "name": "Stalemate Charm",
        "item_id": 2869,
        "type": "stalemate_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/71d150030ffedff157d7bef8d6912545.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a5732cf91fae29189011e126c27d83cd.gif?cv=2",
        "truncated_name": "Stalemate Charm"
    },
    {
        "name": "Stormy Clamembert Potion",
        "item_id": 3481,
        "type": "stormy_clamembert_potion",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/potions/transparent_thumb/5cb02e024838b54eaf361d246d54309d.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/potions/196c5390c05e1b4069fed1d7108cf422.jpg?cv=2",
        "truncated_name": "Stormy Clamembert..."
    },
    {
        "name": "Sunrise Cheese",
        "item_id": 2290,
        "type": "fort_rox_lair_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/034a25f3160aaad22ded80021108610c.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/4c799b92180e3b8fa3ff9536ece133e9.gif?cv=2",
        "truncated_name": "Sunrise Cheese"
    },
    {
        "name": "Super Brain Charm",
        "item_id": 1578,
        "type": "super_brain_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/b02f72535ddf87cf2997f4281990fed2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/dd93a3a05c3c44fec9ac41eba1c75efa.gif?cv=2",
        "truncated_name": "Super Brain Charm"
    },
    {
        "name": "Super Cactus Charm",
        "item_id": 1476,
        "type": "super_cactus_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/8c6aa089a449dfeb17ecb1ef797593b6.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/8a9460af1954b6c90d934db88a5f1fbe.gif?cv=2",
        "truncated_name": "Super Cactus Charm"
    },
    {
        "name": "Super Dragonbane Charm",
        "item_id": 2651,
        "type": "super_dragonbane_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/1f99bd9f91761ca9f4ad9961c342bc77.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/55cda402afdaf3dc872a9c24ae4ddfde.gif?cv=2",
        "truncated_name": "Super Dragonbane ..."
    },
    {
        "name": "Super Enerchi Charm",
        "item_id": 2398,
        "type": "rift_super_furoma_energy_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/fa480b7150d2880833d12845ffada68a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/ede7c3654694de6c2a62b7b5a9c6c5a0.gif?cv=2",
        "truncated_name": "Super Enerchi Charm"
    },
    {
        "name": "Super Lantern Oil Charm",
        "item_id": 2652,
        "type": "super_lantern_oil_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/a21f6b9ca870d8720e3d405c60ba9972.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/607474ba27ac583464861c70883c28fe.gif?cv=2",
        "truncated_name": "Super Lantern Oil..."
    },
    {
        "name": "Super Nightshade Farming Charm",
        "item_id": 2143,
        "type": "super_nightshade_farming_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/d6bc0ed40d76af3e238a10959f8e7971.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/a65dcae9fa59a3f399aa3a8085244771.gif?cv=2",
        "truncated_name": "Super Nightshade ..."
    },
    {
        "name": "Super Polluted Charm",
        "item_id": 1344,
        "type": "super_polluted_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/2eff642761f6661cdceba6ccc019b3cc.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/96805199b48158d1ceda81d5dcc79fb8.gif?cv=2",
        "truncated_name": "Super Polluted Charm"
    },
    {
        "name": "Super Queso Pump Charm",
        "item_id": 2653,
        "type": "wild_tonic_remote_pumping_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/090322c1954d03637a7645eaf0e8a5d8.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/3bc109ba1e09cae08818c179f329a21c.gif?cv=2",
        "truncated_name": "Super Queso Pump ..."
    },
    {
        "name": "Super Regal Charm",
        "item_id": 1982,
        "type": "super_regal_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/92f770b71528bbe785032a50dc80dc59.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/4f299b7b6a0a7a814851ab1e4374cc48.gif?cv=2",
        "truncated_name": "Super Regal Charm"
    },
    {
        "name": "Super Rotten Charm",
        "item_id": 498,
        "type": "super_staling_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/e9f1d5f0bb9d29b9db313cd837bb8028.gif?cv=2",
        "truncated_name": "Super Rotten Charm"
    },
    {
        "name": "Super Salt Charm",
        "item_id": 1134,
        "type": "super_salt_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/32c1800deb4166bad64723019df63b9f.gif?cv=2",
        "truncated_name": "Super Salt Charm"
    },
    {
        "name": "Super Snowball Charm",
        "item_id": 2527,
        "type": "super_snowball_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/6dffadb371a031814d3c61ecd399e6bd.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/f7f1895b2e98d52c2cf3f70ba62b131e.gif?cv=2",
        "truncated_name": "Super Snowball Charm"
    },
    {
        "name": "Super Soap Charm",
        "item_id": 1477,
        "type": "super_soap_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/04313887a503d495a6d4dc8e9ddc978a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/96784228f4fab8f753107f01df06e76f.gif?cv=2",
        "truncated_name": "Super Soap Charm"
    },
    {
        "name": "Super Spooky Charm",
        "item_id": 1576,
        "type": "extra_spooky_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/ec3651c91d218fb95d777bb0e897620c.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/4488a2ec6804c529c3b918b83eb1c254.gif?cv=2",
        "truncated_name": "Super Spooky Charm"
    },
    {
        "name": "Super Spore Charm",
        "item_id": 1739,
        "type": "super_spore_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/605423d006d71b0a8008f149dc08e816_v2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/85d5224a23ddd0ebae63c8abc5bab54f_v2.gif?cv=2",
        "truncated_name": "Super Spore Charm"
    },
    {
        "name": "Super Warpath Cavalry Charm",
        "item_id": 541,
        "type": "super_flame_march_cavalry_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/953bdd83b2e820546b6b5257dadbcf6b.gif?cv=2",
        "truncated_name": "Super Warpath Cav..."
    },
    {
        "name": "Super Warpath Mage Charm",
        "item_id": 542,
        "type": "super_flame_march_mage_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/399e4f272b1ed00819f1ad779968d623.gif?cv=2",
        "truncated_name": "Super Warpath Mag..."
    },
    {
        "name": "Super Wax Charm",
        "item_id": 2870,
        "type": "super_wax_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/222c34494796b4b29ce0751402b4531b.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/9693ce65b202ec78df86322d32b1efc2.gif?cv=2",
        "truncated_name": "Super Wax Charm"
    },
    {
        "name": "Super Wealth Charm",
        "item_id": 1840,
        "type": "super_gold_bonus_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/c7a124e77993cbc28d6aab75a8c0afe4.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/b5bac9278bb1029d889a91906af391ae.gif?cv=2",
        "truncated_name": "Super Wealth Charm"
    },
    {
        "name": "SUPER|brie+",
        "item_id": 114,
        "type": "super_brie_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/3a23203e08a847b23f7786b322b36f7a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/d3bb758c09c44c926736bbdaf22ee219.gif?cv=2",
        "truncated_name": "SUPER|brie+"
    },
    {
        "name": "Tarnished Charm",
        "item_id": 804,
        "type": "tarnished_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/6323545f24d4a4995900542e47a6f832.gif?cv=2",
        "truncated_name": "Tarnished Charm"
    },
    {
        "name": "Temporal Shadow Plate",
        "item_id": 1908,
        "type": "temporal_plate_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/8a0b6ebd07c8576f7d4458d198fc0e96.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/5891c271d0cbc648b9ac6c0f23bca8f1.gif?cv=2",
        "truncated_name": "Temporal Shadow P..."
    },
    {
        "name": "Thermal Chisel",
        "item_id": 2841,
        "type": "tactical_geyser_trap_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/180ffc5a84b80a5fc0f954244dfcca34.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/b5b64391b15d9c8197f0eb190cd7e235.gif?cv=2",
        "truncated_name": "Thermal Chisel"
    },
    {
        "name": "Tiki Base Blueprints",
        "item_id": 474,
        "type": "tiki_base_blueprints_crafting_item",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/bdf99350d85d75a86e3c34c300143fa3.gif?cv=2",
        "truncated_name": "Tiki Base Blueprints"
    },
    {
        "name": "Timesplit Charm",
        "item_id": 2348,
        "type": "temporal_fusion_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/12a6ff259aaebbd75166568af9ec035e.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/6216e879109bff9abc69c64bcd30d95a.gif?cv=2",
        "truncated_name": "Timesplit Charm"
    },
    {
        "name": "Timesplit Rune",
        "item_id": 2340,
        "type": "temporal_rune_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/817a5d8a4a8977d5fd2d6bfa8cfa3ffa.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/d7f159d1329c78e901d8cdea0b9aff40.gif?cv=2",
        "truncated_name": "Timesplit Rune"
    },
    {
        "name": "Torch Charm",
        "item_id": 2180,
        "type": "athlete_torch_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/e66f3e46003bad98788c100c292f6019.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/407aede6753c6409ce6d6e50b046a363.gif?cv=2",
        "truncated_name": "Torch Charm"
    },
    {
        "name": "Tower Mana",
        "item_id": 2220,
        "type": "fort_rox_tower_mana_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/51ccc7b902f622369aa80f960ca309d2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/400a9583806460402d8464acf8a7f729.gif?cv=2",
        "truncated_name": "Tower Mana"
    },
    {
        "name": "Ultimate Anchor Charm",
        "item_id": 1846,
        "type": "ultimate_anchoring_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/08ca54bc43a24a5088c60611c9a0a3c6.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/30cbfe008d3659bf3eb427b3aadea792.gif?cv=2",
        "truncated_name": "Ultimate Anchor C..."
    },
    {
        "name": "Ultimate Dragonbane Charm",
        "item_id": 3310,
        "type": "ultimate_dragonbane_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/6e472084b3597092873cc61253617148.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/5566a33bd1b81f26597d26e79f427543.gif?cv=2",
        "truncated_name": "Ultimate Dragonba..."
    },
    {
        "name": "Ultimate Polluted Charm",
        "item_id": 1345,
        "type": "ultimate_polluted_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/bd6d87fa35bc79da59dbbd2dc4b9fbdb.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/c5ff3b8d0cbc63863af29b7be1812d3c.gif?cv=2",
        "truncated_name": "Ultimate Polluted..."
    },
    {
        "name": "Ultimate Snowball Charm",
        "item_id": 2528,
        "type": "ultimate_snowball_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/af0baec9535fd37211f19122fc0fd861.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/1de178388a13a51c9fbc21a05ddc5150.gif?cv=2",
        "truncated_name": "Ultimate Snowball..."
    },
    {
        "name": "Ultimate Spooky Charm",
        "item_id": 1237,
        "type": "ultimate_spooky_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/f68916f4904776a184811ec45b6f9acc.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/7fc6db53bf6212a472c52c32a70d558e.gif?cv=2",
        "truncated_name": "Ultimate Spooky C..."
    },
    {
        "name": "Ultimate Spore Charm",
        "item_id": 1740,
        "type": "ultimate_spore_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/42b86e4d8e027af8bbd6f064e24eba2d_v2.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/3834bbc73c42cd94751d1cd811b77c68_v2.gif?cv=2",
        "truncated_name": "Ultimate Spore Charm"
    },
    {
        "name": "Ultimate Wealth Charm",
        "item_id": 2399,
        "type": "ultimate_gold_bonus_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/e250d8d308d6be8846855890c77da5cf.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/632a003d8ff98645ab4957fb88faf48c.gif?cv=2",
        "truncated_name": "Ultimate Wealth C..."
    },
    {
        "name": "Undead Emmental",
        "item_id": 590,
        "type": "undead_emmental_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/216b37ba840c73e337cd55afd6181f0e.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/639a56b5f5241b08197c625ba99afe5f.gif?cv=2",
        "truncated_name": "Undead Emmental"
    },
    {
        "name": "Undead String Emmental",
        "item_id": 2321,
        "type": "string_undead_emmental_cheese",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/bait/transparent_thumb/e16c0f01f5f42c3b3aee029da4e10a7a.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/bait/b1986ee4f9560604498a563085c2cf10.gif?cv=2",
        "truncated_name": "Undead String Emm..."
    },
    {
        "name": "Unstable Charm",
        "item_id": 1478,
        "type": "unstable_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/2f967ea0890b03323ec7805ed540e2bf.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/b7fc9865c625420a77177ce4909ae0f4.gif?cv=2",
        "truncated_name": "Unstable Charm"
    },
    {
        "name": "Valentine Charm",
        "item_id": 501,
        "type": "valentine_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/12af1cc309de59bf4f7187572b3b1409.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/b1dad39869d728adffef0acd2dec0fba.gif?cv=2",
        "truncated_name": "Valentine Charm"
    },
    {
        "name": "Warpath Cavalry Charm",
        "item_id": 535,
        "type": "flame_march_cavalry_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/1eaebff31897d864db004a6d374b33aa.gif?cv=2",
        "truncated_name": "Warpath Cavalry C..."
    },
    {
        "name": "Warpath Mage Charm",
        "item_id": 537,
        "type": "flame_march_mage_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/17842efb8f3e9970badf629e1ba07c29.gif?cv=2",
        "truncated_name": "Warpath Mage Charm"
    },
    {
        "name": "Warpath Portal Console",
        "item_id": 2422,
        "type": "warpath_portal_console_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/c2d00b882a921eaba1e9776199e3388c.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/af802e1270a3af75ad8beac1be17a1b5.gif?cv=2",
        "truncated_name": "Warpath Portal Co..."
    },
    {
        "name": "Warpath Portal Core",
        "item_id": 2423,
        "type": "warpath_portal_core_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/711499c1595d9d1cf62a39a32e686d18.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/406db27067c1d29f57fcd1da4068b1a5.gif?cv=2",
        "truncated_name": "Warpath Portal Core"
    },
    {
        "name": "Wild Tonic",
        "item_id": 2619,
        "type": "wild_tonic_stat_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/stats/transparent_thumb/b6b9f97a1ee3692fdff0b5a206adf7e1.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/stats/7c20334fc4eae4951931b1339cb6db21.gif?cv=2",
        "truncated_name": "Wild Tonic"
    },
    {
        "name": "Winter Builder Charm",
        "item_id": 1590,
        "type": "winter_builder_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/6ea74e26118b00592126f7588417df9d.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/443844c26d9e834b9b5096f84769b66a.gif?cv=2",
        "truncated_name": "Winter Builder Charm"
    },
    {
        "name": "Winter Charm",
        "item_id": 755,
        "type": "festive_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/572219ffa04034304dc50915ba17589b.gif?cv=2",
        "truncated_name": "Winter Charm"
    },
    {
        "name": "Winter Hoarder Charm",
        "item_id": 1591,
        "type": "winter_hoarder_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/b12857789106c1a2e12930b187168d7b.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/53b39853ae53a601f35f97ba70c76ef1.gif?cv=2",
        "truncated_name": "Winter Hoarder Charm"
    },
    {
        "name": "Winter Miser Charm",
        "item_id": 1592,
        "type": "winter_miser_trinket",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/trinkets/transparent_thumb/d2db83e7894ce685c7c91cbdf553ea59.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/fa56328a46d5d0ba23621cfebd467c5b.gif?cv=2",
        "truncated_name": "Winter Miser Charm"
    },
    {
        "name": "Yellow Double Dewdrop Powder",
        "item_id": 1113,
        "type": "yellow_double_dewdrop_powder_crafting_item",
        "thumbnail_transparent": "https://www.mousehuntgame.com/images/items/crafting_items/transparent_thumb/83ed45cfd9e2dd8b91034348f2afe972.png?cv=2",
        "thumbnail": "https://www.mousehuntgame.com/images/items/crafting_items/thumbnails/0841201f125a53c6d8b329f8b0020924.gif?cv=2",
        "truncated_name": "Yellow Double Dew..."
    },
    {
        "name": "Yellow Double Sponge Charm",
        "item_id": 1135,
        "type": "yellow_double_sponge_trinket",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/trinkets/0bcb0d59f193a30af81e092511d9081d.gif?cv=2",
        "truncated_name": "Yellow Double Spo..."
    },
    {
        "name": "Zugzwang's Left Sock",
        "item_id": 382,
        "type": "zugzwang_sock_collectible",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/collectibles/e30638c2f1820353b4f8413b715e163e.jpg?cv=2",
        "truncated_name": "Zugzwang's Left Sock"
    },
    {
        "name": "Zugzwang's Leftover Rock",
        "item_id": 999,
        "type": "zugzwangs_leftover_rock",
        "thumbnail_transparent": null,
        "thumbnail": "https://www.mousehuntgame.com/images/items/collectibles/9c6a81bf7fa475502ccbcbdc5b083038.jpg?cv=2",
        "truncated_name": "Zugzwang's Leftov..."
    }
  ];

  if ('all' === valueKey) {
    return tradableItems;
  }

  let returnItems = [];
  tradableItems.forEach((item) => {
    returnItems.push({
      name: item.name,
      value: item[valueKey],
    });
  });

  return returnItems;
}