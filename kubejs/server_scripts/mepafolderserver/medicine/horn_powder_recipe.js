ServerEvents.recipes(event => {

    event.recipes.tfc.quern(
        '4x terra:horn_powder',
        '#terra:horns'
    )

    event.recipes.create.milling(
        '4x terra:horn_powder',
        Ingredient.of('#terra:horns')
    )

    event.recipes.create.crushing(
        '6x terra:horn_powder',
        Ingredient.of('#terra:horns')
    )

})