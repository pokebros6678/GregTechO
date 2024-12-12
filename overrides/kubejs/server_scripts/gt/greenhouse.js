ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    const trees = [
        ["minecraft:oak_sapling", "minecraft:oak_log"],
        ["minecraft:spruce_sapling", "minecraft:spruce_log"],
        ["minecraft:birch_sapling", "minecraft:birch_log"],
        ["minecraft:jungle_sapling", "minecraft:jungle_log"],
        ["minecraft:acacia_sapling", "minecraft:acacia_log"],
        ["minecraft:dark_oak_sapling", "minecraft:dark_oak_log"],
        ["minecraft:mangrove_propagule", "minecraft:mangrove_log"],
        ["minecraft:cherry_sapling", "minecraft:cherry_log"],
    ]
    const plants = [
        ["minecraft:pumpkin_seeds", "minecraft:pumpkin", 6],
        ["minecraft:beetroot_seeds", "minecraft:beetroot", 16],
        ["minecraft:sweet_berries", "minecraft:sweet_berries", 16],
        ["minecraft:glow_berries", "minecraft:glow_berries", 8],
        ["minecraft:wheat_seeds", "minecraft:wheat", 16],
        ["minecraft:melon_seeds", "minecraft:melon", 6],
        ["minecraft:carrot", "minecraft:carrot", 12],
        ["minecraft:sugar_cane", "minecraft:sugar_cane", 12],
        ["minecraft:kelp", "minecraft:kelp", 12],
        ["minecraft:cactus", "minecraft:cactus", 12],
        ["minecraft:potato", "minecraft:potato", 12],
        ["minecraft:cocoa_beans", "minecraft:cocoa_beans", 12],
        ["minecraft:brown_mushroom", "minecraft:brown_mushroom", 12],
        ["minecraft:red_mushroom", "minecraft:red_mushroom", 12],
        ["minecraft:nether_wart", "minecraft:nether_wart", 12],
        ["minecraft:bamboo", "minecraft:bamboo", 16],
        ["minecraft:vine", "minecraft:vine", 16],
        ["minecraft:sea_pickle", "minecraft:sea_pickle", 16],
        ["minecraft:dandelion", "minecraft:dandelion", 8],
        ["minecraft:poppy", "minecraft:poppy", 8],
        ["minecraft:blue_orchid", "minecraft:blue_orchid", 8],
        ["minecraft:allium", "minecraft:allium", 8],
        ["minecraft:azure_bluet", "minecraft:azure_bluet", 8],
        ["minecraft:red_tulip", "minecraft:red_tulip", 8],
        ["minecraft:orange_tulip", "minecraft:orange_tulip", 8],
        ["minecraft:white_tulip", "minecraft:white_tulip", 8],
        ["minecraft:pink_tulip", "minecraft:pink_tulip", 8],
        ["minecraft:oxeye_daisy", "minecraft:oxeye_daisy", 8],
        ["minecraft:lily_of_the_valley", "minecraft:lily_of_the_valley", 8],
        ["minecraft:torchflower", "minecraft:torchflower", 8],
        ["minecraft:wither_rose", "minecraft:wither_rose", 8],
        ["minecraft:spore_blossom", "minecraft:spore_blossom", 8],
        ["minecraft:sunflower", "minecraft:sunflower", 8],
        ["minecraft:lilac", "minecraft:lilac", 8],
        ["minecraft:pink_petals", "minecraft:pink_petals", 8],
        ["minecraft:rose_bush", "minecraft:rose_bush", 8],
        ["minecraft:peony", "minecraft:peony", 8],
        ["minecraft:pitcher_plant", "minecraft:pitcher_plant", 8],
        ["minecraft:grass", "minecraft:grass", 24],
        ["minecraft:fern", "minecraft:fern", 16],
        ["minecraft:tall_grass", "minecraft:tall_grass", 12],
        ["minecraft:large_fern", "minecraft:large_fern", 8],
    ]

    trees.forEach((woodType) => {
        gtr.greenhouse(woodType[0])
            .notConsumable(woodType[0])
            .inputFluids("water 1000")
            .itemOutputs(`64x ${woodType[1]}`, `6x ${woodType[0]}`)
            .duration(900)
            .EUt(30)
            .circuit(1)

        gtr.greenhouse(`${woodType[0]}_fertiliser`)
            .notConsumable(woodType[0])
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(
                `64x ${woodType[1]}`,
                `64x ${woodType[1]}`,
                `12x ${woodType[0]}`
            )
            .duration(300)
            .EUt(60)
            .circuit(2)
    })

    plants.forEach((seedType) => {
        gtr.greenhouse(seedType[0])
            .notConsumable(seedType[0])
            .inputFluids("water 1000")
            .itemOutputs(`${seedType[2]}x ${seedType[1]}`)
            .duration(600)
            .EUt(30)
            .circuit(1)

        gtr.greenhouse(seedType[0] + "_fertilizer")
            .notConsumable(seedType[0])
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(`${2 * seedType[2]}x ${seedType[1]}`)
            .duration(200)
            .EUt(60)
            .circuit(2)
    })
    gtr.greenhouse("gtocore:rubber_wood")
        .notConsumable("gtceu:rubber_sapling")
        .inputFluids("water 1000")
        .itemOutputs("16x gtceu:rubber_log", "3x gtceu:rubber_sapling", "4x gtceu:sticky_resin")
        .duration(1200)
        .EUt(480)
        .circuit(1)

    gtr.greenhouse("gtocore:rubber_wood_fertiliser")
        .notConsumable("gtceu:rubber_sapling")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("32x gtceu:rubber_log", "6x gtceu:rubber_sapling", "8x gtceu:sticky_resin")
        .duration(400)
        .EUt(960)
        .circuit(2)

    gtr.greenhouse("gtocore:barnarda_c_log")
        .notConsumable("64x gtocore:barnarda_c_leaves")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("gtceu:unknowwater 1000")
        .itemOutputs("16x gtocore:barnarda_c_log")
        .duration(600)
        .EUt(30)
        .circuit(1)

    gtr.greenhouse("gtocore:barnarda_c_log_fertiliser")
        .notConsumable("64x gtocore:barnarda_c_leaves")
        .itemInputs("16x gtceu:fertilizer")
        .inputFluids("gtceu:unknowwater 1000")
        .itemOutputs("32x gtocore:barnarda_c_log")
        .duration(200)
        .EUt(60)
        .circuit(2)
})