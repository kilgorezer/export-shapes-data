async function export_data(username) {
	var data = {};
	data.bot = await (await fetch(`https://shapes.inc/api/shapes/username/${username}`)).json(); // Export shape info
	var id = data.bot.id;
	data.memories = await (await fetch(`https://shapes.inc/api/memory/${id}?page=1&limit=2048`)).json(); // Mass export the most recent 2048 memories
	data.knowledge = await (await fetch(`https://shapes.inc/api/shapes/${id}/story`)).json(); // Export the knowledge base
	data.training = await (await fetch(`https://shapes.inc/api/shapes/${id}/training`)).json(); // Export the training data
	data.user = await (await fetch(`https://shapes.inc/api/shapes/${id}/user`)).json(); // Export the user-specific data
	return data;
}
async function export_my_shapes() {
	var data = {};
	(await (await fetch("https://shapes.inc/api/shapes?category=self")).json()).forEach(async ({username})=>{
		data[username] = await export_data(username);
	});
	return data;
}
