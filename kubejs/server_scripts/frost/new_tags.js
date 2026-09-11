ServerEvents.tags('item', event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze','wrought_iron','steel','black_steel','red_steel','blue_steel']
    metals.forEach(metal => {
        event.add('c:triple_ingots', `tfc:metal/triple_ingot/${metal}`)
        event.add(`c:triple_ingots/${metal}`, `tfc:metal/triple_ingot/${metal}`)
        });
    })

ServerEvents.tags('item', event => {
    event.remove('gtceu:mineable/pickaxe_or_wrench', 'gtceu:coke_oven')
    event.remove('gtceu:mineable/pickaxe_or_wrench', 'gtceu:coke_oven_hatch')
    event.remove('gtceu:mineable/pickaxe_or_wrench', 'gtceu:wood_crate')
    event.remove('gtceu:mineable/pickaxe_or_wrench', 'gtceu:bronze_crate')
    event.remove('gtceu:mineable/pickaxe_or_wrench', 'gtceu:steel_crate')
    event.remove('gtceu:mineable/pickaxe_or_wrench', 'gtceu:aluminium_crate')
    event.remove('gtceu:mineable/pickaxe_or_wrench', 'gtceu:stainless_steel_crate')
    event.remove('gtceu:mineable/pickaxe_or_wrench', 'gtceu:titanium_crate')
  })

ServerEvents.tags('item', event => {
    event.add('tfcthings:sharpenable', '#c:tools')
    event.add('tfcthings:sharpness_mining_tools', '#c:tools')
    event.add('tfcthings:sharpness_weapons', '#c:tools')
    event.add('terra:removed', `#c:hot_ingots`)
    event.add('terra:removed', `#c:small_dusts`)
  })

ServerEvents.tags('fluid', event => {
    event.add('terra:removed', `gtceu:potion`)
    event.add('terra:removed', `gtceu`)
    event.add('terra:removed', `#c:liquid`)
  })

ServerEvents.tags('item', event => {
    const metals = ['andesite_alloy', 'steel','aluminium','stainless_steel','titanium','tungsten_steel','rhodium_plated_palladium','naquadah_alloy','darmstadtium','neutronium']
    metals.forEach(metal => {
        event.add('terra:removed', `greate:${metal}_crushing_wheel`)
        event.add('terra:removed', `greate:${metal}_encased_fan`)
        event.add('terra:removed', `greate:${metal}_mechanical_press`)
        event.add('terra:removed', `greate:${metal}_mechanical_mixer`)
        event.add('terra:removed', `greate:${metal}_millstone`)
        event.add('terra:removed', `greate:${metal}_mechanical_saw`)
        event.add('terra:removed', `greate:${metal}_mechanical_pump`)
        });
    })

ServerEvents.tags('item', event => {
    const metals = ['tungsten_steel','rhodium_plated_palladium','naquadah_alloy','darmstadtium','neutronium']
    metals.forEach(metal => {
        event.add('terra:removed', `greate:${metal}_cogwheel`)
        event.add('terra:removed', `greate:large_${metal}_cogwheel`)
        event.add('terra:removed', `greate:${metal}_gearbox`)
        event.add('terra:removed', `greate:${metal}_vertical_gearbox`)
        });
    })

ServerEvents.tags("item", event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze','wrought_iron','steel','black_steel','red_steel','blue_steel']
    metals.forEach(metal => {
        event.add(
            "createvintageneoforged:custom_hammering_blocks",
            `tfc:metal/anvil/${metal}`
        )
    })})
