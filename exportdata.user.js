// ==UserScript==
// @name         Export Shapes Data
// @namespace    https://shapes.inc/export/data
// @version      1.0
// @description  Exports your Shapes configuration data and memories.
// @author       kilgorezer
// @match        https://shapes.inc/export/data
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shapes.inc
// @grant        none
// ==/UserScript==

(function() {(async ()=>{
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
		(await (await fetch("https://shapes.inc/api/shapes?category=self")).json()).forEach(async ({username})=>{ // For each self-made shape,
			data[username] = await export_data(username); // Export data.
		});
		return data;
	}
	async function export_recent_shapes() {
		var data = {};
		(await (await fetch("https://shapes.inc/api/shapes?category=recent")).json()).forEach(async ({username})=>{ // For each recent shape,
			data[username] = await export_data(username); // Export data.
		});
		return data;
	}
	async function export_all_data() {
		var data = {}
		data.shapes = await export_my_shapes();
		data.recent = await export_recent_shapes();
		data.user = await (await fetch("https://shapes.inc/api/users")).json();
		data.info = await (await fetch("https://shapes.inc/api/auth/me")).json();
		return data;
	}
	var a = document.createElement('a');
	a.href = URL.createObjectURL(new Blob([JSON.stringify(await export_all_data())], { type: 'application/json' }));
	a.download = 'mydata.json';
	a.style.display = 'none';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	setTimeout(()=>(location.href='/'), 800);
})();})();
