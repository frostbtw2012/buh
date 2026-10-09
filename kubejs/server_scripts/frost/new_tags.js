ServerEvents.tags('item', event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze','wrought_iron','steel','black_steel','red_steel','blue_steel']
    metals.forEach(metal => {
        event.add('c:triple_ingots', `tfc:metal/triple_ingot/${metal}`)
        event.add(`c:triple_ingots/${metal}`, `tfc:metal/triple_ingot/${metal}`)
        });
    })

ServerEvents.tags('item', event => {
    event.add('tfcthings:sharpenable', '#c:tools')
    event.add('tfcthings:sharpness_mining_tools', '#c:tools')
    event.add('tfcthings:sharpness_weapons', '#c:tools')
<<<<<<< HEAD
    event.add(`c:ingots/iron`, `#c:ingots/wrought_iron`)
  })

// ServerEvents.tags('fluid', event => {
//     event.add('tfc:usable_in_barrel', 'gtceu:creosote')
//     event.add('tfc:usable_in_wooden_bucket', 'gtceu:creosote')
//   })


ServerEvents.tags("item", event => {
    const metals = ['copper', 'bronze','bismuth_bronze','black_bronze','wrought_iron','steel','black_steel','red_steel','blue_steel']
    metals.forEach(metal => {
        event.add(
            "createvintageneoforged:custom_hammering_blocks",
            `tfc:metal/anvil/${metal}`
        )
    })})

=======
  })
>>>>>>> 6598dcc3a970f51874bb72da644ce8fde8184b4c
