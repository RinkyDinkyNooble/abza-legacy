const getPosition = (position) => {
  return { x: Math.floor(position.x()), y: Math.floor(position.y()), z: Math.floor(position.z()) }
}

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
  event.register(
    Commands.literal("spawn")
      .then(Commands.argument("entity", Arguments.RESOURCE_LOCATION.create(event))
        .then(Commands.argument("nbt", Arguments.NBT_TAG.create(event))
          .executes(ctx => {
            const nbt = Arguments.NBT_TAG.getResult(ctx, "nbt")
            const entity = Arguments.RESOURCE_LOCATION.getResult(ctx, "entity")
            const p = getPosition(ctx.source.position)
            Utils.server.runCommandSilent(`/setblock ${p.x} ${p.y} ${p.z} air`)
            Utils.server.runCommandSilent(`/summon ${entity} ${p.x} ${p.y} ${p.z} ${nbt}`)
            return 1
          })
        )
      )
  )
})

/* ArgumentTypeWrappers
ROTATION
VEC2_CENTERED
FLOAT
PARTICLE
INT_RANGE
BLOCK_STATE
NBT_TAG
NBT_PATH
ANGLE
ITEM_PREDICATE
BLOCK_POS_LOADED
printAll
BLOCK_POS
MESSAGE
ITEM_SLOT
ENTITY
BLOCK_PREDICATE
DIMENSION
VEC2
COLOR
VEC3
ITEM_STACK
SWIZZLE
OBJECTIVE
DOUBLE
ENTITIES
UUID
INTEGER
LONG
WORD
VEC3_CENTERED
TIME
GREEDY_STRING
NBT_COMPOUND
BOOLEAN
PLAYER
RESOURCE_LOCATION
FLOAT_RANGE
PLAYERS
GAME_PROFILE
COLUMN_POS
STRING
COMPONENT
ENTITY_ANCHOR
*/