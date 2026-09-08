// ServerEvents.recipes(event => {
//   event.recipes.create.sequenced_assembly(
//       // Outputs:
//       [
//         CreateItem.of('16x create:track', 16), 
//       ],
//       // Input:
//       '#minecraft:slabs', 

//       [
//         // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
//         // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
//         event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel',]),
//         event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel',]),
//         event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget',]),
//       ]
//     )
//     .transitionalItem('create:incomplete_track') // Set the transitional item
// })