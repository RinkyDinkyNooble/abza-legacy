const getPosition = (position) => {
	return { x: Math.floor(position.x()), y: Math.floor(position.y()), z: Math.floor(position.z()) }
}

ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event
	event.register(
		Commands.literal("spawn")
			.requires(source => source.hasPermission(2))
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
