ServerEvents.recipes(event => {
    event.recipes.tfc.pot(
        [],
        Fluid.of('terra:vermilion_fluid', 1000),
        500,
        500
    )
    .itemOutput('4x terra:vermilion_crystal');
});