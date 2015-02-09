plugInterface = {
	notify: function(i,m){
		require("d56b1/c7e48/a239e").trigger("notify",i,m)
	},
	alert: function(t,b){
		require(["d56b1/c7e48/a239e","d56b1/adf9d/a28a5"],function(s,o){
			s.dispatch(new o(o.ALERT,t,b));
		});
	},
	confirm: function(t,b){//NO RETURN
		require(["d56b1/c7e48/a239e","d56b1/adf9d/a28a5"],function(s,o){
			s.dispatch(new o(o.CONFIRM,t,b));
		});
	}
}