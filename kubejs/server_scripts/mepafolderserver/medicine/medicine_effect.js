ItemEvents.crafted('terra:medicine', event => {

    let reagent = null

    for (let i = 0; i < event.inventory.containerSize; i++) {
        let item = event.inventory.getItem(i)

        if (
            !item.isEmpty() &&
            item.item.tags.toArray().some(tag => tag.toString() === 'terra:medicine_reagents')
        ) {
            reagent = item
            break
        }
    }

    if (!reagent) {
        return
    }

    let id = reagent.id

    let effect = null
    let duration = 0
    let amplifier = 0

    if (id === 'tfc:food/garlic') {
        effect = 'minecraft:resistance'
        duration = 600
    }

    else if (id === 'tfc:food/squash') {
        effect = 'minecraft:strength'
        duration = 300
        amplifier = 1
    }

    else if (id === 'tfc:food/cattail_root') {
        effect = 'minecraft:regeneration'
        duration = 100
        amplifier = 1
    }

    else if (id === 'tfc:food/taro_root') {
        effect = 'minecraft:regeneration'
        duration = 100
        amplifier = 1
    }

    else if (id === 'tfc:food/cassava') {
        effect = 'minecraft:regeneration'
        duration = 300
    }

    else if (id === 'tfc:food/cooked_cassava') {
        effect = 'minecraft:regeneration'
        duration = 300
    }

    else if (id === 'tfc:food/shellfish') {
        effect = 'minecraft:water_breathing'
        duration = 1200
    }

    else if (id === 'tfc:food/cooked_shellfish') {
        effect = 'minecraft:water_breathing'
        duration = 1200
    }

    else if (id === 'ktfcc:mugwort_leaves') {
        effect = 'minecraft:instant_health'
        duration = 1
    }

    else if (id === 'butchercraft:eyeball') {
        effect = 'minecraft:night_vision'
        duration = 2400
    }

    else if (id === 'butchercraft:cooked_eyeball') {
        effect = 'minecraft:night_vision'
        duration = 2400
    }

    else if (reagent.item.tags.toArray().some(tag => tag.toString() === 'tfc:gem_powders')) {
        effect = 'brewery:mining'
        duration = 1200
    }

    else if (id === 'tfc:groundcover/clam') {
        effect = 'minecraft:dolphins_grace'
        duration = 600
    }

    else if (id === 'starcatcher:clam') {
        effect = 'minecraft:dolphins_grace'
        duration = 600
    }

    else if (id === 'tfcvolcanoes:mineral/powder/arcanite') {
        effect = 'hexcasting:enlarge_grid'
        duration = 600
    }

    else if (id === 'tfcvolcanoes:mineral/powder/seletine') {
        effect = 'minecraft:instant_damage'
        duration = 1
        amplifier = 2
    }

    else if (id === 'tfcvolcanoes:mineral/powder/petrified_wood') {
        effect = 'minecraft:absorption'
        duration = 1200
    }

    else if (id === 'firmalife:blue_mold') {
        effect = 'kaleidoscope_cookery:vigor'
        duration = 2400
    }

    else if (reagent.item.tags.toArray().some(tag => tag.toString() === 'tfc:foods/sweeteners')) {
        effect = 'farm_and_charm:sustenance'
        duration = 2400
    }

    else if (id === 'tfc:powder/salt') {
        effect = 'tfc:thirst'
        duration = 600
    }

    else if (id === 'tfcvolcanoes:mineral/powder/jet') {
        effect = 'minecraft:blindness'
        duration = 600
    }

    if (!effect) {
        return
    }

    event.item.set(
        'minecraft:custom_data',
        {
            effect: effect,
            duration: duration,
            amplifier: amplifier
        }
    )

})