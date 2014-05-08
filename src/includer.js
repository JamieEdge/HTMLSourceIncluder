var fs = require("fs");

if (!fs.existsSync("source")) {
	console.log("error: Could not find 'source' directory.");
	process.exit(1);
}

if (!fs.existsSync("include")) {
	console.log("error: Could not find 'include' directory.");
	process.exit(1);
}

var source = fs.readdirSync("source");
var include = fs.readdirSync("include");

var include_cache = new Object();

if (!fs.existsSync("output") || !fs.lstatSync("output").isDirectory()) {
	fs.mkdirSync("output");
}

source.forEach(function(source_file) {
	var source_path = "source/" + source_file;

	if (!fs.lstatSync(source_path).isFile()) {
		return;
	}
	
	var source_content = fs.readFileSync(source_path).toString();
	
	var output_content = source_content.replace(/<!-- INCLUDE (.+) -->/g, function(content, include_filename) {
		var include_path = "include/" + include_filename;
		
		if (!include_cache.hasOwnProperty(include_filename)) {
			if (!fs.existsSync(include_path) || !fs.lstatSync(include_path).isFile()) {
				console.log("error: " + source_file + ": include '" + include_path + "' could not be found");
				process.exit(1);
			}
			
			include_cache[include_filename] = fs.readFileSync(include_path).toString();
		}
		
		return include_cache[include_filename];
	});
	
	fs.writeFile("output/" + source_file, output_content);
});
