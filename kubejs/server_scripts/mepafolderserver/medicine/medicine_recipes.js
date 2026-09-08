ServerEvents.recipes(event => {
    event.custom({
        type: 'tfc:advanced_shapeless_crafting',
        ingredients: [
            {
                item: 'terra:medicine_base'
            },
            {
                tag: 'terra:medicine_reagents'
            },
            {
                type: 'tfc:and',
                children: [
                    {
                        tag: 'c:foods/flour'
                    },
                    {
                        type: 'tfc:not_rotten'
                    }
                ]
            }
        ],
        primary_ingredient: {
            item: 'terra:medicine_base'
        },
        remainder: {
            modifiers: []
        },
        result: {
            modifiers: [],
            stack: {
                count: 4,
                id: 'terra:medicine'
            }
        }
    })
})