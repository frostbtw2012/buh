ServerEvents.tags('item', event => {

    event.add('terra:medicine_reagents', [
        'tfc:food/garlic',
        'tfc:food/squash',
        'tfc:food/cattail_root',
        'tfc:food/taro_root',
        'tfc:food/cassava',
        'tfc:food/cooked_cassava',
        'tfc:food/shellfish',
        'tfc:food/cooked_shellfish',
        'ktfcc:mugwort_leaves',
        'butchercraft:eyeball',
        'butchercraft:cooked_eyeball',
        'tfc:groundcover/clam',
        'starcatcher:clam',
        'tfcvolcanoes:mineral/powder/arcanite',
        'tfcvolcanoes:mineral/powder/seletine',
        'tfcvolcanoes:mineral/powder/petrified_wood',
        'firmalife:blue_mold',
        'tfc:powder/salt',
        'tfcvolcanoes:mineral/powder/jet'
    ])

    event.add('terra:medicine_reagents', '#tfc:gem_powders')
    event.add('terra:medicine_reagents', '#tfc:foods/sweeteners')

})