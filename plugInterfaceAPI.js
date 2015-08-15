var plugInterface = {
	_e: require("a804c/d3c3d/f4ad2"),
	_o: "",//require("f06e2/d391a/b2a65"),
	_chattypes: {
		"":"",
		alert:"c42e3b;",
		system:"c42e3b;",
		error:"c42e3b;",
		info:"009cdd;",
		//success:"90ad2f;",
		success:"73E232;",
		valid:"90ad2f;",
		warn:"ffdd6f",
		staff:"ac76ff"
	},
	chat: function(t,m,n,b,i,c){
		if(!m){return}
		if(typeof m !== "string"){m = m.html();}
		$("#chat-messages").append("<div class=\"cm message\" style=\"border-left:3px solid #"+this._chattypes[t]+"\"><div class=\"badge-box "+(!b ? "no-badge" : "")+"\"><i class=\""+(!b ? "" : "bdg")+" "+(!b ? "" : b)+"\"></i></div><div class=\"msg\"><div class=\"from\">"+(i ? ("<i class=\"icon "+i+"\"></i>") : "")+"<span class=\"un clickable\" style=\"color:#"+(c ? c : this._chattypes[t])+"\">"+n+"</span><span class=\"timestamp\" style=\"display: inline;\">"+(new Date().getHours()%12)+":"+(new Date().getMinutes()<10?"0":"")+new Date().getMinutes()+(new Date().getHours()%12>0?"pm":"am")+"</span></div><div class=\"text\">"+m+"</div></div></div>");
		$("#chat-messages").scrollTop($("#chat-messages")[0].scrollHeight);
	},
	notify: function(i,m){
		_e.trigger("notify",i,m);
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