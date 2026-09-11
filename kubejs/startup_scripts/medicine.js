global.medicineUse = (level, player, hand) => {
    return true
}

global.medicineFinishUsing = (itemstack, level, entity) => {

    let data = itemstack.get('minecraft:custom_data')

    if (!data) {
        itemstack.shrink(1)
        return itemstack
    }

    let tag = data.getUnsafe()

    let effect = tag.getString('effect')
    let duration = tag.getLong('duration')
    let amplifier = tag.getByte('amplifier')

    if (
        !effect ||
        duration <= 0 ||
        amplifier < 0
    ) {
        itemstack.shrink(1)
        return itemstack
    }

    try {
        entity.potionEffects.add(
            effect,
            duration,
            amplifier
        )
    } catch (e) {
        console.log('Medicine effect error: ' + e)
    }

    itemstack.shrink(1)

    return itemstack
}