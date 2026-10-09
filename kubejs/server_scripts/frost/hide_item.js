ServerEvents.recipes(event => {
    event.remove({ mod: 'greate' })
	event.remove({mod: 'gtceu',not: {id: 'gtceu:coke_oven/log_to_charcoal'}})
})

const keep = [
    'greate:andesite_alloy_cogwheel',
	'greate:steel_cogwheel',
	'greate:aluminium_cogwheel',
	'greate:stainless_steel_cogwheel',
	'greate:titanium_cogwheel',
	'greate:large_andesite_alloy_cogwheel',
	'greate:large_steel_cogwheel',
	'greate:large_aluminium_cogwheel',
	'greate:large_stainless_steel_cogwheel',
	'greate:large_titanium_cogwheel',
	'greate:andesite_alloy_gearbox',
	'greate:steel_gearbox',
	'greate:aluminium_gearbox',
	'greate:stainless_steel_gearbox',
	'greate:titanium_gearbox',
	'greate:andesite_alloy_vertical_gearbox',
	'greate:steel_vertical_gearbox',
	'greate:aluminium_vertical_gearbox',
	'greate:stainless_steel_vertical_gearbox',
	'greate:titanium_vertical_gearbox',
	'gtceu:coke_oven_hatch',
	'gtceu:coke_oven',
	'gtceu:coke_oven_bricks',
	'gtceu:compressed_coke_clay',
	'gtceu:coke_oven_brick',
	'gtceu:bronze_drum',
	'gtceu:steel_drum',
	'gtceu:aluminium_drum',
	'gtceu:stainless_steel_drum',
	'gtceu:titanium_drum',
	'gtceu:wood_crate',
	'gtceu:bronze_crate',
	'gtceu:steel_crate',
	'gtceu:aluminium_crate',
	'gtceu:stainless_steel_crate',
	'gtceu:titanium_crate',
	'gtceu:basic_tape',
	'gtceu:treated_wood_plate',
	'gtceu:treated_wood_planks',
	'gtceu:creosote_bucket',
	'greate:andesite_alloy_shaft',
	'greate:steel_shaft',
	'greate:aluminium_shaft',
	'greate:stainless_steel_shaft',
	'greate:titanium_shaft',
	'gtceu:steel_alloy',
	'gtceu:aluminium_alloy',
	'gtceu:stainless_steel_alloy',
	'gtceu:titanium_alloy',
]

RecipeViewerEvents.removeEntries('item', event => {
    Ingredient.of('@greate').itemIds.forEach(id => {
        if (!keep.includes(id)) {
            event.remove(id)
        }
    })
	Ingredient.of('@gtceu').itemIds.forEach(id => {
        if (!keep.includes(id)) {
            event.remove(id)
        }
    })
})

RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove(/^greate:/)
	event.remove(/^(?!gtceu:creosote$)gtceu:/)
})