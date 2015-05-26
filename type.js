var class2type = {};

// var toString = class2type.toString;

var arry = "Boolean Number String Function Array Date RegExp Object Error".split(" ");

arry.forEach(function(item, index) {
	class2type["[object " + item + "]"] = item.toLowerCase();
});

function type(obj) {
	if (obj === null) {
		return obj + "";
	}
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[toString.call(obj)] || "object" :
		typeof obj;
}