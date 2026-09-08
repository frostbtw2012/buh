StartupEvents.registry('fluid', event => {

    event.create('terra:vermilion_fluid')
        .displayName('Vermilion Fluid')
        .noBlock()
        .type(type => type
            .renderType(0)
            .stillTexture('terra:block/vermilion_fluid')
            .flowingTexture('terra:block/vermilion_fluid')
        )
})