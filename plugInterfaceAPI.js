plugInterface = {
	_e: require("d56b1/c7e48/a239e"),
	_o: require("d56b1/adf9d/a28a5"),
	chat: function(t,m,n,b,i){
		if(!m){return}
		if(typeof m !== "string"){m = m.html();}
		$("#chat-messages").append("<div class=\"cm message\" ><div class=\"badge-box "+(!b ? "no-badge" : "")+"\"><i class=\""+(!b ? "" : "bdg")+" "+(!b ? "" : b)+"\"></i></div><div class=\"msg\"><div class=\"from\">"+(i ? ("<i class=\"icon "+i+"\"></i>") : "")+"<span class=\"un clickable\">"+n+"</span><span class=\"timestamp\" style=\"display: inline;\">"+(new Date().getHours()%12)+":"+(new Date().getMinutes()<10?"0":"")+new Date().getMinutes()+(new Date().getHours()%12>0?"pm":"am")+"</span></div><div class=\"text\">"+m+"</div></div></div>");
		
	},
	notify: function(i,m){
		require("d56b1/c7e48/a239e").trigger("notify",i,m);
	},
	alert: function(t,b){
		plugInterface._e.dispatch(new _o(_o.ALERT,t,b));
	},
	confirm: function(t,b){//NO RETURN
		plugInterface._e.dispatch(new _o(_o.CONFIRM,t,b));
	},
	showUserProfile: function(){
		plugInterface._e.trigger("show:user", "profile")
	},
	showDashboard: function(){
		plugInterface._e.trigger("show:dashboard");
	},
	hideDashboard: function(){
		plugInterface._e.trigger("hide:dashboard");
	},
	redrawAudience: function(){
		plugInterface._e.trigger("audience:redraw");
	}
	
	//.trigger("show:dashboard", !0)
	
}