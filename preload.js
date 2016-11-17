var preserveContext = function() {
	var nativeAdd = document.addEventListener;
	document.addEventListener = function(event) {
		if (event.type != 'contextmenu') {
			nativeAdd.apply(this, arguments);
    }
	};
};

var script = document.createElement('script');
script.textContent = '(' + preserveContext + ')()';
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);

