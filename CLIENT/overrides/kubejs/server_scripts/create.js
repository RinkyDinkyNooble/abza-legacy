ServerEvents.recipes(event => {
    event.remove({ id: 'create_new_age:crushing/radioactive_thorium' })

    event.recipes.create.crushing(
        [
            Item.of('create_new_age:radioactive_thorium').withChance(1.00),
            Item.of('minecraft:iron_nugget').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.25)
        ],
        'create_new_age:thorium'
    )

    event.recipes.create.mixing(
        [Item.of('minecraft:netherrack')],
        ['minecraft:cobblestone', 'minecraft:nether_wart']
    )

    event.remove({ id: 'refinedstorage:cover' })
    event.remove({ id: 'refinedstorage:hollow_cover' })
})
