ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.fusion_reactor("gtocore:mithril_plasma")
        .duration(200)
        .fusionStartEU(600000000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .inputFluids("gtceu:berkelium 144", "gtceu:potassium 1152")
        .outputFluids("gtceu:mithril_plasma 144")

    gtr.fusion_reactor("gtocore:orichalcum_plasma")
        .duration(200)
        .fusionStartEU(600000000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .inputFluids("gtceu:einsteinium 144", "gtceu:sodium 1152")
        .outputFluids("gtceu:orichalcum_plasma 144")

    gtr.fusion_reactor("gtocore:silver_plasma")
        .inputFluids("gtceu:europium 16", "gtceu:arsenic 16")
        .outputFluids("gtceu:silver_plasma 16")
        .EUt(GTValues.VH[GTValues.ZPM])
        .duration(18)
        .fusionStartEU(480000000)

    gtr.fusion_reactor("gtocore:moscovium")
        .inputFluids("gtceu:calcium 32", "gtceu:curium 32")
        .outputFluids("gtceu:moscovium 32")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(128)
        .fusionStartEU(800000000)

    gtr.fusion_reactor("gtocore:livermorium")
        .inputFluids("gtceu:thorium 32", "gtceu:iron 32")
        .outputFluids("gtceu:livermorium 32")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(128)
        .fusionStartEU(800000000)

    gtr.fusion_reactor("gtocore:dubnium")
        .inputFluids("gtceu:europium 64", "gtceu:neon 250")
        .outputFluids("gtceu:dubnium 64")
        .EUt(GTValues.VH[GTValues.ZPM])
        .duration(128)
        .fusionStartEU(720000000)

    gtr.fusion_reactor("gtocore:seaborgium")
        .inputFluids("gtceu:calcium 64", "gtceu:plutonium 64")
        .outputFluids("gtceu:seaborgium 64")
        .EUt(GTValues.VH[GTValues.ZPM])
        .duration(128)
        .fusionStartEU(720000000)

    gtr.fusion_reactor("gtocore:tennessine")
        .inputFluids("gtceu:lead 16", "gtceu:bromine 16")
        .outputFluids("gtceu:tennessine 16")
        .EUt(GTValues.VH[GTValues.UV])
        .duration(64)
        .fusionStartEU(960000000)

    gtr.fusion_reactor("gtocore:taranium_rich_liquid_helium_4_plasma")
        .inputFluids("gtceu:taranium_enriched_liquid_helium_3 125", "gtceu:hydrogen 125")
        .outputFluids("gtceu:taranium_rich_liquid_helium_4_plasma 125")
        .EUt(GTValues.VH[GTValues.UHV])
        .duration(128)
        .fusionStartEU(1200000000)

    gtr.fusion_reactor("gtocore:vibranium_plasma")
        .inputFluids("gtceu:vibranium_unstable 16", "gtceu:adamantium 16")
        .outputFluids("gtceu:vibranium_plasma 16")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .fusionStartEU(1800000000)

    gtr.fusion_reactor("gtocore:hassium")
        .inputFluids("gtceu:scandium_titanium_50_mixture 32", "gtceu:radon 250")
        .outputFluids("gtceu:metastable_hassium_plasma 32")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(64)
        .fusionStartEU(960000000)

    gtr.fusion_reactor("gtocore:hot_oganesson")
        .inputFluids("gtceu:oganesson_breeding_base 16", "gtceu:dysprosium 16")
        .outputFluids("gtceu:hot_oganesson 125")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(64)
        .fusionStartEU(960000000)

    gtr.fusion_reactor("gtocore:awakened_draconium_plasma")
        .inputFluids("gtceu:draconium 125", "gtceu:quantum_chromo_dynamically_confined_matter 125")
        .outputFluids("gtceu:awakened_draconium_plasma 125")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(800)
        .fusionStartEU(2100000000)

    gtr.fusion_reactor("gtocore:infinity")
        .inputFluids("gtceu:crystal_matrix 2000", "gtceu:cosmic_neutronium 1000")
        .outputFluids("gtceu:infinity 64")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(4800)
        .fusionStartEU(2100000000)

    const particle_collider = [["gtceu:plutonium", "gtceu:curium"],
    ["gtceu:thorium", "gtceu:uranium"],
    ["gtceu:uranium", "gtceu:plutonium"],
    ["gtceu:protactinium", "gtceu:neptunium"],
    ["gtceu:americium", "gtceu:berkelium"],
    ["gtceu:curium", "gtceu:einsteinium"],
    ["gtceu:berkelium", "gtceu:californium"],
    ["gtceu:einsteinium", "gtceu:mendelevium"],
    ["gtceu:fermium", "gtceu:nobelium"],
    ["gtceu:mendelevium", "gtceu:lawrencium"],
    ["gtceu:californium", "gtceu:fermium"],
    ["gtceu:bismuth", "gtceu:astatine"],
    ["gtceu:meitnerium", "gtceu:roentgenium"],
    ["gtceu:darmstadtium", "gtceu:copernicium"],
    ["gtceu:roentgenium", "gtceu:nihonium"],
    ["gtceu:dubnium", "gtceu:bohrium"]]

    particle_collider.forEach((particle) => {
        gtr.super_particle_collider(particle[1] + "a")
            .inputFluids(particle[0] + " 4096", "gtceu:helium_plasma 4096")
            .outputFluids(particle[1] + " 4000")
            .EUt(GTValues.VA[GTValues.UV])
            .duration(200)
    })

    gtr.super_particle_collider("gtceu:positive_electron")
        .inputFluids("gtceu:phosphorus 200", "gtceu:lithium 200")
        .outputFluids("gtceu:positive_electron 100")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.super_particle_collider("gtceu:antiproton")
        .inputFluids("gtceu:liquid_hydrogen 1000", "gtceu:helium_plasma 200")
        .outputFluids("gtceu:antiproton 100")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.super_particle_collider("gtceu:antineutron")
        .inputFluids("gtceu:positive_electron 100", "gtceu:antiproton 100")
        .outputFluids("gtceu:antineutron 2")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    gtr.super_particle_collider("gtceu:antimatter")
        .inputFluids("gtceu:antihydrogen 2000", "gtceu:antineutron 2000")
        .outputFluids("gtceu:antimatter 100")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
})