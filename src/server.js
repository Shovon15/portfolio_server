const app = require("./app");
const { serverPort } = require("./secret");

app.listen(serverPort, async () => {
	console.log(`shovon portfolio server running on ${serverPort}`);
});
