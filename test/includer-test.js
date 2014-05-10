var vows = require("vows");
var assert = require("assert");
var fs = require("fs");


vows.describe("Including Files").addBatch({
	"when running the script": {
		topic: function() {
			process.chdir("test");
			return require("../src/includer.js");
		},
		"it will create an output directory": function() {
			assert.equal(fs.existsSync("output") && fs.lstatSync("output").isDirectory(), true);
		},
		"it will create the same number of output files and source files": function() {
			assert.equal(fs.readdirSync("output").length, fs.readdirSync("source").length);
		}
	}
}).export(module);
