ItemEvents.modification(event => {

  /*
  event.modify('minecraft:diamond_sword', item => {
    item.attackDamage = 10.0
    item.attackSpeed = -2.0
  })*/


    event.modify('infectious:soldier_armor_helmet', item => {
        item.armorProtection = 8
        item.armorToughness = 6
        item.armorKnockbackResistance = 0.8
    })

    event.modify('infectious:soldier_armor_chestplate', item => {
        item.armorProtection = 18
        item.armorToughness = 6
        item.armorKnockbackResistance = 0.8
    })

    event.modify('infectious:soldier_armor_leggings', item => {
        item.armorProtection = 12
        item.armorToughness = 6
        item.armorKnockbackResistance = 0.8
    })

    event.modify('infectious:soldier_armor_boots', item => {
        item.armorProtection = 8
        item.armorToughness = 6
        item.armorKnockbackResistance = 0.8
    })


    event.modify('infectious:swatarmor_helmet', item => {
        item.armorKnockbackResistance = 0.9
    })

    event.modify('infectious:swatarmor_chestplate', item => {
        item.armorKnockbackResistance = 0.9
    })

    event.modify('infectious:swatarmor_leggings', item => {
        item.armorKnockbackResistance = 0.9
    })

    event.modify('infectious:swatarmor_boots', item => {
        item.armorKnockbackResistance = 0.9
    })

})