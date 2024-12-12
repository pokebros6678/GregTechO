ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    event.shapeless("ad_astra:energizer", "gtceu:ulv_charger_4x")

    event.shaped("ad_astra:nasa_workbench", [
        "ABA",
        "CDC",
        "FEF"
    ], {
        A: "gtceu:hv_robot_arm",
        B: "gtceu:hv_emitter",
        C: "minecraft:redstone_torch",
        D: "avaritia:compressed_crafting_table",
        E: "gtceu:steel_block",
        F: "gtceu:double_steel_plate"
    })

    gtr.arc_generator("gtocore:ice_shard")
        .itemInputs("minecraft:blue_ice")
        .itemOutputs("ad_astra:ice_shard")
        .EUt(30)
        .duration(200)

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "gtocore:heavy_duty_plate_1"
            },
            {
                "item": "gtocore:heavy_duty_plate_1"
            },
            {
                "item": "gtocore:heavy_duty_plate_1"
            },
            {
                "item": "gtocore:heavy_duty_plate_1"
            },
            {
                "item": "gtocore:heavy_duty_plate_1"
            },
            {
                "item": "gtocore:heavy_duty_plate_1"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_1_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "gtocore:heavy_duty_plate_2"
            },
            {
                "item": "gtocore:heavy_duty_plate_2"
            },
            {
                "item": "gtocore:heavy_duty_plate_2"
            },
            {
                "item": "gtocore:heavy_duty_plate_2"
            },
            {
                "item": "gtocore:heavy_duty_plate_2"
            },
            {
                "item": "gtocore:heavy_duty_plate_2"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_2_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "gtocore:heavy_duty_plate_3"
            },
            {
                "item": "gtocore:heavy_duty_plate_3"
            },
            {
                "item": "gtocore:heavy_duty_plate_3"
            },
            {
                "item": "gtocore:heavy_duty_plate_3"
            },
            {
                "item": "gtocore:heavy_duty_plate_3"
            },
            {
                "item": "gtocore:heavy_duty_plate_3"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:steel_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:steel_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_3_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "gtceu:dense_desh_plate"
            },
            {
                "item": "gtceu:dense_desh_plate"
            },
            {
                "item": "gtceu:dense_desh_plate"
            },
            {
                "item": "gtceu:dense_desh_plate"
            },
            {
                "item": "gtceu:dense_desh_plate"
            },
            {
                "item": "gtceu:dense_desh_plate"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:desh_tank"
            },
            {
                "item": "ad_astra:desh_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:desh_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:tier_4_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "gtceu:dense_ostrum_plate"
            },
            {
                "item": "gtceu:dense_ostrum_plate"
            },
            {
                "item": "gtceu:dense_ostrum_plate"
            },
            {
                "item": "gtceu:dense_ostrum_plate"
            },
            {
                "item": "gtceu:dense_ostrum_plate"
            },
            {
                "item": "gtceu:dense_ostrum_plate"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:ostrum_tank"
            },
            {
                "item": "ad_astra:ostrum_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:ostrum_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra_rocketed:tier_5_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {
                "item": "ad_astra:rocket_nose_cone"
            },
            {
                "item": "gtceu:dense_calorite_plate"
            },
            {
                "item": "gtceu:dense_calorite_plate"
            },
            {
                "item": "gtceu:dense_calorite_plate"
            },
            {
                "item": "gtceu:dense_calorite_plate"
            },
            {
                "item": "gtceu:dense_calorite_plate"
            },
            {
                "item": "gtceu:dense_calorite_plate"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:calorite_tank"
            },
            {
                "item": "ad_astra:calorite_tank"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:rocket_fin"
            },
            {
                "item": "ad_astra:calorite_engine"
            },
            {
                "item": "ad_astra:rocket_fin"
            }
        ],
        "result": {
            "count": 1,
            "id": "ad_astra_rocketed:tier_6_rocket"
        }
    })

    gtr.forming_press("gtocore:heavy_duty_plate_2")
        .itemInputs("gtocore:heavy_duty_plate_1", "gtceu:double_titanium_plate", "2x gtceu:double_damascus_steel_plate")
        .itemOutputs("gtocore:heavy_duty_plate_2")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtocore:rocket_nose_cone")
        .itemInputs("gtceu:stainless_steel_frame", "minecraft:lightning_rod", "16x #gtceu:circuits/hv", "gtceu:exquisite_glass_gem", "gtceu:computer_monitor_cover", "2x gtocore:heavy_duty_plate_1")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("ad_astra:rocket_nose_cone")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:fan")
        .itemInputs("2x ad_astra:steel_rod", "4x gtceu:stainless_steel_turbine_blade", "4x gtceu:stainless_steel_screw")
        .inputFluids("gtceu:soldering_alloy 576")
        .itemOutputs("ad_astra:fan")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:steel_tank")
        .itemInputs("4x gtceu:stainless_steel_fluid_cell", "gtceu:stainless_steel_small_fluid_pipe", "gtceu:hv_electric_pump", "16x gtceu:stainless_steel_foil")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("ad_astra:steel_tank")
        .EUt(120)
        .duration(200)

    gtr.assembler("gtocore:engine_frame")
        .itemInputs("gtceu:black_steel_frame", "2x gtceu:cobalt_normal_restrictive_item_pipe", "32x gtceu:steel_foil")
        .itemOutputs("ad_astra:engine_frame")
        .EUt(120)
        .duration(400)

    gtr.assembler("gtocore:steel_engine")
        .itemInputs("ad_astra:engine_frame", "gtceu:steel_pipe_casing", "ad_astra:fan", "ad_astra:steel_tank", "gtceu:hv_fluid_regulator", "16x #gtceu:circuits/ev", "gtceu:liquid_fuel_jetpack", "8x gtceu:stainless_steel_plate")
        .inputFluids("gtceu:steel 1296")
        .itemOutputs("ad_astra:steel_engine")
        .EUt(480)
        .duration(400)

    gtr.assembler("gtocore:rocket_fin")
        .itemInputs("gtocore:heavy_duty_plate_1", "gtceu:double_aluminium_bronze_plate", "gtceu:double_aluminium_plate", "gtceu:double_stainless_steel_plate")
        .inputFluids("gtceu:magnalium 1296")
        .itemOutputs("ad_astra:rocket_fin")
        .EUt(120)
        .duration(200)

    gtr.electric_blast_furnace("gtocore:desh_ingot")
        .itemInputs("gtceu:desh_dust", "gtceu:rhodium_dust")
        .inputFluids("gtceu:bismuth_bronze 144")
        .itemOutputs("ad_astra:desh_ingot")
        .EUt(1920)
        .duration(1600)
        .blastFurnaceTemp(4300)

    gtr.electric_blast_furnace("gtocore:ostrum_ingot")
        .itemInputs("gtceu:ostrum_dust", "gtceu:titanium_carbide_dust")
        .inputFluids("gtceu:samarium_iron_arsenic_oxide 144")
        .itemOutputs("ad_astra:ostrum_ingot")
        .EUt(1920)
        .duration(2400)
        .blastFurnaceTemp(5200)

    gtr.electric_blast_furnace("gtocore:calorite_ingot")
        .itemInputs("gtceu:naquadah_ingot", "gtceu:calorite_dust")
        .itemOutputs("ad_astra:calorite_ingot")
        .EUt(1920)
        .duration(3200)
        .blastFurnaceTemp(6100)

    gtr.assembler("gtocore:desh_tank")
        .itemInputs("4x gtceu:titanium_fluid_cell", "8x ad_astra:desh_fluid_pipe", "gtceu:ev_electric_pump", "8x gtceu:curved_vanadium_steel_plate", "4x gtceu:dense_desh_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("ad_astra:desh_tank")
        .EUt(480)
        .duration(200)

    gtr.assembler("gtocore:desh_engine")
        .itemInputs("gtceu:blue_steel_frame", "ad_astra:steel_engine", "2x gtceu:ev_field_generator", "16x #gtceu:circuits/iv", "gtceu:ev_fluid_regulator", "16x ad_astra:desh_fluid_pipe", "32x gtceu:curved_cobalt_brass_plate", "8x gtceu:dense_desh_plate")
        .inputFluids("gtceu:tungsten_steel 1296")
        .itemOutputs("ad_astra:desh_engine")
        .EUt(1920)
        .duration(400)

    gtr.assembler("gtocore:ostrum_tank")
        .itemInputs("4x gtceu:tungstensteel_fluid_cell", "8x ad_astra:ostrum_fluid_pipe", "gtceu:iv_electric_pump", "8x gtceu:curved_black_bronze_plate", "4x gtceu:dense_ostrum_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("ad_astra:ostrum_tank")
        .EUt(7680)
        .duration(200)

    gtr.assembler("gtocore:ostrum_engine")
        .itemInputs("gtceu:hsse_frame", "ad_astra:steel_engine", "2x gtceu:iv_field_generator", "16x #gtceu:circuits/luv", "gtceu:iv_fluid_regulator", "16x ad_astra:ostrum_fluid_pipe", "32x gtceu:curved_ultimet_plate", "8x gtceu:dense_ostrum_plate")
        .inputFluids("gtceu:rhodium_plated_palladium 1296")
        .itemOutputs("ad_astra:ostrum_engine")
        .EUt(7680)
        .duration(400)

    gtr.assembler("gtocore:calorite_tank")
        .itemInputs("4x gtceu:tungstensteel_fluid_cell", "8x gtceu:naquadah_normal_fluid_pipe", "gtceu:luv_electric_pump", "8x gtceu:curved_rhodium_plated_palladium_plate", "4x gtceu:dense_calorite_plate")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("ad_astra:calorite_tank")
        .EUt(30720)
        .duration(200)

    gtr.assembler("gtocore:calorite_engine")
        .itemInputs("gtceu:naquadah_frame", "ad_astra:steel_engine", "2x gtceu:luv_field_generator", "16x #gtceu:circuits/zpm", "gtceu:luv_fluid_regulator", "16x gtceu:naquadah_normal_fluid_pipe", "32x gtceu:curved_tungsten_carbide_plate", "8x gtceu:dense_calorite_plate")
        .inputFluids("gtceu:naquadah_alloy 1296")
        .itemOutputs("ad_astra:calorite_engine")
        .EUt(30720)
        .duration(400)

    gtr.assembly_line("gtocore:tier_7_rocket")
        .itemInputs("ad_astra:rocket_nose_cone", "gtceu:zpm_field_generator", "16x #gtceu:circuits/uv", "4x gtceu:zpm_emitter", "4x gtceu:zpm_fluid_regulator", "4x ad_astra:calorite_tank", "ad_astra:calorite_engine", "64x gtceu:curved_naquadah_alloy_plate", "8x ad_astra:ostrum_block", "32x gtceu:fall_king_block", "64x gtceu:dense_calorite_plate", "4x ad_astra:rocket_fin")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 4000", "gtceu:pcb_coolant 4000", "gtceu:indium_tin_barium_titanium_cuprate 1296")
        .itemOutputs("ad_astra_rocketed:tier_7_rocket")
        .EUt(122880)
        .duration(2400)
        .stationResearch(b => b.researchStack(Registries.getItemStack("ad_astra_rocketed:tier_6_rocket"))
            .dataStack(Registries.getItemStack("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(48))
})