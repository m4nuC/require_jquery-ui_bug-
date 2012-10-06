requirejs.config({
    paths: {
    	jquery : './jquery',
        jqueryui: './jqueryui/'
    }, 
    shim : {
    	jqueryui : {
    		deps : ['jquery']
    	}
    }
});

require(['jquery','jqueryui/resizable'], function($){

	$('#resizable-AMD').resizable({ handles: "e, w" });

	$('#resizable-not-AMD').resizable({ handles: "e, w" });

})