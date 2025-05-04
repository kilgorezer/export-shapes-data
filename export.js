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
        const recentShapes = await (await fetch("https://shapes.inc/api/shapes?category=self")).json();
                const promises = recentShapes.map(async ({ username }) => {
                const userData = await export_data(username);
                return [username, userData]; // Return a key-value pair
        });

        const results = await Promise.all(promises);
        const data = Object.fromEntries(results); // Convert the array of key-value pairs back to an object
        return data;
}
async function export_recent_shapes() {
        const recentShapes = await (await fetch("https://shapes.inc/api/shapes?category=recent")).json();
                const promises = recentShapes.map(async ({ username }) => {
                const userData = await export_data(username);
                return [username, userData]; // Return a key-value pair
        });

        const results = await Promise.all(promises);
        const data = Object.fromEntries(results); // Convert the array of key-value pairs back to an object
        return data;
}
async function export_all_data() {
	var data = {}
	data.shapes = await export_my_shapes(); // Export your shapes
	data.recent = await export_recent_shapes(); // Export recent shapes
	data.user = await (await fetch("https://shapes.inc/api/users")).json(); // Export user info
	data.user.discord_info = {};
	data.user.discord_user = {};
	data.info = await (await fetch("https://shapes.inc/api/auth/me")).json(); // Export auth data
	return data;
}
