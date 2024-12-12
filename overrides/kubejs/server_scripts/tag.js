//priority: 100
const tiers = [["ulv", 0], ["lv", 1], ["mv", 2], ["hv", 3], ["ev", 4], ["iv", 5], ["luv", 6], ["zpm", 7], ["uv", 8], ["uhv", 9], ["uev", 10], ["uiv", 11], ["uxv", 12], ["opv", 13], ["max", 14]]
ServerEvents.tags("item", event => {
    const space_suit_items = ["ad_astra:netherite_space_suit_items",
        "ad_astra:freeze_resistant_armor",
        "ad_astra:heat_resistant_armor",
        "ad_astra:space_suit_items"]
    space_suit_items.forEach(ssitem => {
        event.add(ssitem, ["gtceu:quarktech_chestplate",
            "gtceu:quarktech_leggings",
            "gtceu:quarktech_boots",
            "gtceu:advanced_quarktech_chestplate",
            "gtceu:quarktech_helmet",
            "avaritia:infinity_helmet",
            "avaritia:infinity_chestplate",
            "avaritia:infinity_pants",
            "avaritia:infinity_boots",
            "kubejs:space_fermium_helmet",
            "kubejs:space_fermium_chestplate",
            "kubejs:space_fermium_leggings",
            "kubejs:space_fermium_boots",
            "kubejs:magneto_hydro_dynamically_con_strained_star_matter_helmet",
            "kubejs:magneto_hydro_dynamically_con_strained_star_matter_chestplate",
            "kubejs:magneto_hydro_dynamically_con_strained_star_matter_leggings",
            "kubejs:magneto_hydro_dynamically_con_strained_star_matter_boots"])
    })
})

ServerEvents.tags("fluid", event => {
    event.removeAll("ad_astra:tier_1_rocket_fuel")
    event.removeAll("ad_astra:tier_2_rocket_fuel")
    event.removeAll("ad_astra:tier_3_rocket_fuel")
    event.removeAll("ad_astra:tier_4_rocket_fuel")
    event.removeAll("ad_astra_rocketed:tier_5_rocket_fuel")
    event.removeAll("ad_astra_rocketed:tier_6_rocket_fuel")
    event.removeAll("ad_astra_rocketed:tier_7_rocket_fuel")
    event.remove("forge:oxygen", "ad_astra:oxygen")
    event.remove("forge:hydrogen", "ad_astra:hydrogen")
    event.remove("forge:oil", "ad_astra:oil")
    event.add("ad_astra:tier_1_rocket_fuel", "gtceu:rocket_fuel")
    event.add("ad_astra:tier_2_rocket_fuel", "gtceu:rocket_fuel_rp_1")
    event.add("ad_astra:tier_3_rocket_fuel", "gtceu:dense_hydrazine_fuel_mixture")
    event.add("ad_astra:tier_4_rocket_fuel", "gtceu:rocket_fuel_cn3h7o3")
    event.add("ad_astra_rocketed:tier_5_rocket_fuel", "gtceu:rocket_fuel_h8n4c2o4")
    event.add("ad_astra_rocketed:tier_6_rocket_fuel", "ad_astra:cryo_fuel")
    event.add("ad_astra_rocketed:tier_7_rocket_fuel", "gtceu:stellar_energy_rocket_fuel")
})

ServerEvents.entityLootTables(event => {
    event.addEntity("ad_astra:glacian_ram", l => {
        l.addPool(p => {
            p.addItem("gtocore:glacio_spirit").weight(1)
            p.addItem("ad_astra:ice_shard").weight(999)
        })
    })
})

ServerEvents.blockLootTables(event => {
    event.addBlock("minecraft:grass", b => {
        b.addPool(p => {
            p.addItem("gtocore:plant_fiber").randomChance(0.05)
        })
    })
})