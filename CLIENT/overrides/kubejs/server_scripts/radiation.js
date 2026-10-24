const NEGATIVE = [
  'minecraft:wither',
  'minecraft:blindness',
  'minecraft:nausea',
  'minecraft:mining_fatigue',
  'minecraft:poison'
]

function hasFullSet(player) {
  return (
    player.headArmorItem.id === 'infectious:hazmat_suit_helmet' &&
    player.chestArmorItem.id === 'infectious:hazmat_suit_chestplate' &&
    player.legsArmorItem.id === 'infectious:hazmat_suit_leggings' &&
    player.feetArmorItem.id === 'infectious:hazmat_suit_boots'
  )
}

PlayerEvents.tick(event => {
  const player = event.player
  if (!player) return
  if (hasFullSet(player)) NEGATIVE.forEach(e => player.removeEffect(e))
})

EntityEvents.hurt(event => {
  const entity = event.entity
  if (!entity.player) return
  if (!hasFullSet(entity)) return

  const source = event.source

  if (String(source).includes('(wither)')) {
    event.cancel()
  }
})

