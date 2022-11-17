console.log('MyInsights running, main.js connected, good way!');

function start() {
	queryCRMData();
}

function queryCRMData() {
var queryConfig = {
		object: "Account",
		fields: ["Name", "Phone", "sFax"],
		where: "",
		sort: [],
		limit: "10"
	};
    
	ds.queryRecord(queryConfig).then(
function (resp) {
console.log(resp);
			printToScreen(resp);
		}, function(err) {
console.log(err);
		}
	);
}
  
function printToScreen(jsonObj) {
var test = document.getElementById("test");
	test.innerHTML = JSON.stringify(jsonObj);
}
  
document.addEventListener("DOMContentLoaded", function(event) {
	start();
});			