if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.util')) {
goog.provide('lt.objs.langs.julia.util');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.cache');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.auto_complete');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
lt.objs.langs.julia.util.cursor = (function() {
var cursor = null;
var cursor__1 = (function (editor){return cursor.call(null,editor,"start");
});
var cursor__2 = (function (editor,pos){var cursor__$1 = lt.objs.editor.__GT_cursor.call(null,editor,pos);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor__$1) + 1),new cljs.core.Keyword(null,"col","col",1014002930),(new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cursor__$1) + 1)], null);
});
cursor = function(editor,pos){
switch(arguments.length){
case 1:
return cursor__1.call(this,editor);
case 2:
return cursor__2.call(this,editor,pos);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$1 = cursor__1;
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
return cursor;
})()
;
lt.objs.langs.julia.util.module = (function module__$1(editor){return cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741));
});
lt.objs.langs.julia.util.html_string = (function html_string(dom){var el = document.createElement("div");el.appendChild(dom);
return el.innerHTML;
});
lt.objs.langs.julia.util.inner_text = (function inner_text(dom){var children = dom.childNodes;if((children.length > 0))
{return cljs.core.nth.call(null,children,0).wholeText;
} else
{return "";
}
});
lt.objs.langs.julia.util.get_scripts = (function get_scripts(dom){var scripts = (cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([HTMLScriptElement,SVGScriptElement], true).call(null,cljs.core.type.call(null,dom)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom], null):dom.querySelectorAll("script"));return cljs.core.map.call(null,lt.objs.langs.julia.util.inner_text,cljs.core.filter.call(null,((function (scripts){
return (function (p1__8477_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"text/javascript",null], null), null),p1__8477_SHARP_.type);
});})(scripts))
,scripts));
});
lt.objs.langs.julia.util.eval_scripts = (function eval_scripts(scripts){var seq__8482 = cljs.core.seq.call(null,scripts);var chunk__8483 = null;var count__8484 = 0;var i__8485 = 0;while(true){
if((i__8485 < count__8484))
{var script = cljs.core._nth.call(null,chunk__8483,i__8485);window.eval(script);
{
var G__8501 = seq__8482;
var G__8502 = chunk__8483;
var G__8503 = count__8484;
var G__8504 = (i__8485 + 1);
seq__8482 = G__8501;
chunk__8483 = G__8502;
count__8484 = G__8503;
i__8485 = G__8504;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8482);if(temp__4092__auto__)
{var seq__8482__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8482__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8482__$1);{
var G__8505 = cljs.core.chunk_rest.call(null,seq__8482__$1);
var G__8506 = c__7119__auto__;
var G__8507 = cljs.core.count.call(null,c__7119__auto__);
var G__8508 = 0;
seq__8482 = G__8505;
chunk__8483 = G__8506;
count__8484 = G__8507;
i__8485 = G__8508;
continue;
}
} else
{var script = cljs.core.first.call(null,seq__8482__$1);window.eval(script);
{
var G__8509 = cljs.core.next.call(null,seq__8482__$1);
var G__8510 = null;
var G__8511 = 0;
var G__8512 = 0;
seq__8482 = G__8509;
chunk__8483 = G__8510;
count__8484 = G__8511;
i__8485 = G__8512;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.objs.langs.julia.util.into_div = (function into_div(dom){var div = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null));div.appendChild(dom);
return div;
});
lt.objs.langs.julia.util.parse_div = (function parse_div(html){return lt.objs.langs.julia.util.into_div.call(null,crate.core.raw.call(null,html));
});
lt.objs.langs.julia.util.all_links = (function all_links(dom){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,dom.getElementsByTagName("a"));
});
lt.objs.langs.julia.util.url_pattern = (cljs.core.truth_(lt.objs.platform.win_QMARK_.call(null))?/^\s*((?:\w+:)[\/\\][A-Za-z0-9_ \\/\/\.]*?\.jl)(?::([0-9]+))?\s*$/:/^\s*(\/[A-Za-z0-9_ \\/\/\.]*?\.jl)(?::([0-9]+))?\s*$/);
lt.objs.langs.julia.util.process_link_BANG_ = (function process_link_BANG_(link,editor){var vec__8487 = cljs.core.re_find.call(null,lt.objs.langs.julia.util.url_pattern,link.text);var _ = cljs.core.nth.call(null,vec__8487,0,null);var file = cljs.core.nth.call(null,vec__8487,1,null);var line = cljs.core.nth.call(null,vec__8487,2,null);if(cljs.core.truth_(file))
{link.href = "javascript:void(0);";
return link.onclick = ((function (vec__8487,_,file,line){
return (function (){return lt.object.raise.call(null,lt.objs.jump_stack.jump_stack,new cljs.core.Keyword(null,"jump-stack.push!","jump-stack.push!",4063822260),editor,file,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(cljs.core.truth_(line)?(parseInt(line) - 1):0),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
});})(vec__8487,_,file,line))
;
} else
{return null;
}
});
lt.objs.langs.julia.util.process_links_BANG_ = (function process_links_BANG_(dom,editor){cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__8488_SHARP_){return lt.objs.langs.julia.util.process_link_BANG_.call(null,p1__8488_SHARP_,editor);
}),lt.objs.langs.julia.util.all_links.call(null,dom)));
return dom;
});
lt.objs.langs.julia.util.get_error_line = (function get_error_line(link){var vec__8490 = cljs.core.re_find.call(null,lt.objs.langs.julia.util.url_pattern,link.text);var _ = cljs.core.nth.call(null,vec__8490,0,null);var file = cljs.core.nth.call(null,vec__8490,1,null);var line = cljs.core.nth.call(null,vec__8490,2,null);if(cljs.core.truth_((function (){var and__6359__auto__ = file;if(cljs.core.truth_(and__6359__auto__))
{return line;
} else
{return and__6359__auto__;
}
})()))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),file,new cljs.core.Keyword(null,"line","line",1017226086),parseInt(line)], null);
} else
{return null;
}
});
lt.objs.langs.julia.util.get_error_lines = (function get_error_lines(dom){return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,lt.objs.langs.julia.util.get_error_line,lt.objs.langs.julia.util.all_links.call(null,dom)));
});
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.light-lines')) {
goog.provide('lt.objs.langs.julia.light_lines');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.cache');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.auto_complete');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
lt.objs.langs.julia.light_lines.lines = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
lt.objs.langs.julia.light_lines.clear_object = cljs.core.atom.call(null,null);
lt.objs.langs.julia.light_lines.editor_for_file = (function editor_for_file(file){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8145_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8145_SHARP_))),file);
}),lt.objs.editor.pool.get_all.call(null)));
});
lt.objs.langs.julia.light_lines.toggle_background = (function toggle_background(ed,handle,class$,toggle){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var ed__$1 = temp__4092__auto__;return (cljs.core.truth_(toggle)?lt.objs.editor._PLUS_line_class:lt.objs.editor._line_class).call(null,ed__$1,handle,new cljs.core.Keyword(null,"background","background",3976677536),class$);
} else
{return null;
}
});
lt.objs.langs.julia.light_lines.update = (function update(){cljs.core.swap_BANG_.call(null,lt.objs.langs.julia.light_lines.lines,(function (p1__8146_SHARP_){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__8149){var map__8150 = p__8149;var map__8150__$1 = ((cljs.core.seq_QMARK_.call(null,map__8150))?cljs.core.apply.call(null,cljs.core.hash_map,map__8150):map__8150);var l = map__8150__$1;var class$ = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var line = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle))
{return l;
} else
{var temp__4090__auto__ = lt.objs.langs.julia.light_lines.editor_for_file.call(null,file);if(cljs.core.truth_(temp__4090__auto__))
{var ed = temp__4090__auto__;var handle__$1 = lt.objs.editor.line_handle.call(null,ed,(line - 1));var class$__$1 = (function (){var or__6371__auto__ = class$;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"error","error",1110689146);
}
})();lt.objs.langs.julia.light_lines.toggle_background.call(null,ed,handle__$1,new cljs.core.Keyword(null,"light-line","light-line",758926781),true);
lt.objs.langs.julia.light_lines.toggle_background.call(null,ed,handle__$1,class$__$1,true);
return cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"handle","handle",4084294042),handle__$1,new cljs.core.Keyword(null,"ed","ed",1013907473),ed);
} else
{return l;
}
}
}),p1__8146_SHARP_));
}));
return null;
});
lt.objs.langs.julia.light_lines.add = (function add(new$){cljs.core.swap_BANG_.call(null,lt.objs.langs.julia.light_lines.lines,cljs.core.concat,new$);
return lt.objs.langs.julia.light_lines.update.call(null);
});
lt.objs.langs.julia.light_lines.clear = (function clear(){var seq__8159_8177 = cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.langs.julia.light_lines.lines));var chunk__8161_8178 = null;var count__8162_8179 = 0;var i__8163_8180 = 0;while(true){
if((i__8163_8180 < count__8162_8179))
{var map__8165_8181 = cljs.core._nth.call(null,chunk__8161_8178,i__8163_8180);var map__8165_8182__$1 = ((cljs.core.seq_QMARK_.call(null,map__8165_8181))?cljs.core.apply.call(null,cljs.core.hash_map,map__8165_8181):map__8165_8181);var ed_8183 = cljs.core.get.call(null,map__8165_8182__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_8184 = cljs.core.get.call(null,map__8165_8182__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_8185 = cljs.core.get.call(null,map__8165_8182__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var file_8186 = cljs.core.get.call(null,map__8165_8182__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle_8185))
{lt.objs.langs.julia.light_lines.toggle_background.call(null,ed_8183,handle_8185,(function (){var or__6371__auto__ = class_8184;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"error","error",1110689146);
}
})(),false);
{
var G__8187 = seq__8159_8177;
var G__8188 = chunk__8161_8178;
var G__8189 = count__8162_8179;
var G__8190 = (i__8163_8180 + 1);
seq__8159_8177 = G__8187;
chunk__8161_8178 = G__8188;
count__8162_8179 = G__8189;
i__8163_8180 = G__8190;
continue;
}
} else
{{
var G__8191 = seq__8159_8177;
var G__8192 = chunk__8161_8178;
var G__8193 = count__8162_8179;
var G__8194 = (i__8163_8180 + 1);
seq__8159_8177 = G__8191;
chunk__8161_8178 = G__8192;
count__8162_8179 = G__8193;
i__8163_8180 = G__8194;
continue;
}
}
} else
{var temp__4092__auto___8195 = cljs.core.seq.call(null,seq__8159_8177);if(temp__4092__auto___8195)
{var seq__8159_8196__$1 = temp__4092__auto___8195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8159_8196__$1))
{var c__7119__auto___8197 = cljs.core.chunk_first.call(null,seq__8159_8196__$1);{
var G__8198 = cljs.core.chunk_rest.call(null,seq__8159_8196__$1);
var G__8199 = c__7119__auto___8197;
var G__8200 = cljs.core.count.call(null,c__7119__auto___8197);
var G__8201 = 0;
seq__8159_8177 = G__8198;
chunk__8161_8178 = G__8199;
count__8162_8179 = G__8200;
i__8163_8180 = G__8201;
continue;
}
} else
{var map__8166_8202 = cljs.core.first.call(null,seq__8159_8196__$1);var map__8166_8203__$1 = ((cljs.core.seq_QMARK_.call(null,map__8166_8202))?cljs.core.apply.call(null,cljs.core.hash_map,map__8166_8202):map__8166_8202);var ed_8204 = cljs.core.get.call(null,map__8166_8203__$1,new cljs.core.Keyword(null,"ed","ed",1013907473));var class_8205 = cljs.core.get.call(null,map__8166_8203__$1,new cljs.core.Keyword(null,"class","class",1108647146));var handle_8206 = cljs.core.get.call(null,map__8166_8203__$1,new cljs.core.Keyword(null,"handle","handle",4084294042));var file_8207 = cljs.core.get.call(null,map__8166_8203__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_(handle_8206))
{lt.objs.langs.julia.light_lines.toggle_background.call(null,ed_8204,handle_8206,(function (){var or__6371__auto__ = class_8205;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"error","error",1110689146);
}
})(),false);
{
var G__8208 = cljs.core.next.call(null,seq__8159_8196__$1);
var G__8209 = null;
var G__8210 = 0;
var G__8211 = 0;
seq__8159_8177 = G__8208;
chunk__8161_8178 = G__8209;
count__8162_8179 = G__8210;
i__8163_8180 = G__8211;
continue;
}
} else
{{
var G__8212 = cljs.core.next.call(null,seq__8159_8196__$1);
var G__8213 = null;
var G__8214 = 0;
var G__8215 = 0;
seq__8159_8177 = G__8212;
chunk__8161_8178 = G__8213;
count__8162_8179 = G__8214;
i__8163_8180 = G__8215;
continue;
}
}
}
} else
{}
}
break;
}
return cljs.core.reset_BANG_.call(null,lt.objs.langs.julia.light_lines.lines,cljs.core.PersistentVector.EMPTY);
});
lt.objs.langs.julia.light_lines.__BEH__clear_lights = (function __BEH__clear_lights(this$){if(cljs.core._EQ_.call(null,this$,cljs.core.deref.call(null,lt.objs.langs.julia.light_lines.clear_object)))
{return lt.objs.langs.julia.light_lines.clear.call(null);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.light-lines","clear-lights","lt.objs.langs.julia.light-lines/clear-lights",2655764476),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.light_lines.__BEH__clear_lights,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.objs.langs.julia.light_lines.listen = (function listen(ex){cljs.core.reset_BANG_.call(null,lt.objs.langs.julia.light_lines.clear_object,ex);
return lt.object.add_behavior_BANG_.call(null,ex,new cljs.core.Keyword("lt.objs.langs.julia.light-lines","clear-lights","lt.objs.langs.julia.light-lines/clear-lights",2655764476));
});
lt.objs.langs.julia.light_lines.__BEH__highlight_lines = (function __BEH__highlight_lines(editor){return lt.objs.langs.julia.light_lines.update.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.light-lines","highlight-lines","lt.objs.langs.julia.light-lines/highlight-lines",3792145201),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.light_lines.__BEH__highlight_lines,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia')) {
goog.provide('lt.objs.langs.julia');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.cache');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.auto_complete');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.langs.julia.light_lines');
goog.require('lt.objs.langs.julia.light_lines');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
lt.objs.langs.julia.__BEH__editor_commands = (function __BEH__editor_commands(editor,res){lt.objs.notifos.done_working.call(null);
var pred__8052 = cljs.core._EQ_;var expr__8053 = res.call(null,new cljs.core.Keyword(null,"cmd","cmd",1014002860));if(cljs.core.truth_(pred__8052.call(null,"result",expr__8053)))
{lt.objs.notifos.done_working.call(null,"");
var val = (cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469)))?crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res)):new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var scripts = (cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469)))?lt.objs.langs.julia.util.get_scripts.call(null,val):null);lt.object.raise.call(null,editor,(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"under","under",1125332554)))?new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758):new cljs.core.Keyword(null,"editor.result","editor.result",4030217008)),val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(res) - 1),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(res) - 1)], null));
if(cljs.core.truth_(scripts))
{return lt.objs.langs.julia.util.eval_scripts.call(null,scripts);
} else
{return null;
}
} else
{if(cljs.core.truth_(pred__8052.call(null,"error",expr__8053)))
{lt.objs.notifos.done_working.call(null,"");
var dom = lt.objs.langs.julia.util.parse_div.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var line = (new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(res) - 1);lt.objs.langs.julia.util.process_links_BANG_.call(null,dom,editor);
lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),dom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(res) - 1),new cljs.core.Keyword(null,"line","line",1017226086),line], null));
lt.objs.langs.julia.light_lines.clear.call(null);
lt.objs.langs.julia.light_lines.add.call(null,lt.objs.langs.julia.util.get_error_lines.call(null,dom));
var ex = cljs.core.get.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.editor.line_handle.call(null,editor,line),new cljs.core.Keyword(null,"inline","inline",4124874251)], null));return lt.objs.langs.julia.light_lines.listen.call(null,ex);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8053)].join('')));
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","editor-commands","lt.objs.langs.julia/editor-commands",2182382655),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__editor_commands,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.julia.editor-command","editor.eval.julia.editor-command",3039903843),null], null), null));
lt.objs.langs.julia.__BEH__commands = (function __BEH__commands(editor,res){var pred__8058 = cljs.core._EQ_;var expr__8059 = res.call(null,new cljs.core.Keyword(null,"cmd","cmd",1014002860));if(cljs.core.truth_(pred__8058.call(null,"popup",expr__8059)))
{return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),res.call(null,new cljs.core.Keyword(null,"header","header",4087600639)),new cljs.core.Keyword(null,"body","body",1016933652),res.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),new cljs.core.Keyword(null,"buttons","buttons",1255256819),res.call(null,new cljs.core.Keyword(null,"buttons","buttons",1255256819))], null));
} else
{if(cljs.core.truth_(pred__8058.call(null,"print",expr__8059)))
{return lt.objs.console.log.call(null,res.call(null,new cljs.core.Keyword(null,"value","value",1125876963)),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"error","error",1110689146)))?"error":null));
} else
{if(cljs.core.truth_(pred__8058.call(null,"done",expr__8059)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659))))
{return lt.objs.notifos.done_working.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)));
} else
{return lt.objs.notifos.done_working.call(null);
}
} else
{if(cljs.core.truth_(pred__8058.call(null,"notify",expr__8059)))
{return lt.objs.notifos.set_msg_BANG_.call(null,res.call(null,new cljs.core.Keyword(null,"msg","msg",1014012659)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),res.call(null,new cljs.core.Keyword(null,"class","class",1108647146))], null));
} else
{if(cljs.core.truth_(pred__8058.call(null,"console",expr__8059)))
{if(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469))))
{var val = crate.core.raw.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));var scripts = lt.objs.langs.julia.util.get_scripts.call(null,val);lt.objs.console.verbatim.call(null,val);
return lt.objs.langs.julia.util.eval_scripts.call(null,scripts);
} else
{return lt.objs.console.log.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(res));
}
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8059)].join('')));
}
}
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","commands","lt.objs.langs.julia/commands",666378463),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__commands,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.julia.command","editor.eval.julia.command",3568027511),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-lang","lt.objs.langs.julia/julia-lang",1798349361),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"julia.lang","julia.lang",1405919445),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia","commands","lt.objs.langs.julia/commands",666378463)], null));
lt.objs.langs.julia.julia = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-lang","lt.objs.langs.julia/julia-lang",1798349361));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.interrupt-clients","editor.interrupt-clients",3910900175),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Interrupt the current client",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var seq__8061_8079 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));var chunk__8062_8080 = null;var count__8063_8081 = 0;var i__8064_8082 = 0;while(true){
if((i__8064_8082 < count__8063_8081))
{var proc_8083 = cljs.core._nth.call(null,chunk__8062_8080,i__8064_8082);proc_8083.kill("SIGINT");
{
var G__8084 = seq__8061_8079;
var G__8085 = chunk__8062_8080;
var G__8086 = count__8063_8081;
var G__8087 = (i__8064_8082 + 1);
seq__8061_8079 = G__8084;
chunk__8062_8080 = G__8085;
count__8063_8081 = G__8086;
i__8064_8082 = G__8087;
continue;
}
} else
{var temp__4092__auto___8088__$1 = cljs.core.seq.call(null,seq__8061_8079);if(temp__4092__auto___8088__$1)
{var seq__8061_8089__$1 = temp__4092__auto___8088__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8061_8089__$1))
{var c__7119__auto___8090 = cljs.core.chunk_first.call(null,seq__8061_8089__$1);{
var G__8091 = cljs.core.chunk_rest.call(null,seq__8061_8089__$1);
var G__8092 = c__7119__auto___8090;
var G__8093 = cljs.core.count.call(null,c__7119__auto___8090);
var G__8094 = 0;
seq__8061_8079 = G__8091;
chunk__8062_8080 = G__8092;
count__8063_8081 = G__8093;
i__8064_8082 = G__8094;
continue;
}
} else
{var proc_8095 = cljs.core.first.call(null,seq__8061_8089__$1);proc_8095.kill("SIGINT");
{
var G__8096 = cljs.core.next.call(null,seq__8061_8089__$1);
var G__8097 = null;
var G__8098 = 0;
var G__8099 = 0;
seq__8061_8079 = G__8096;
chunk__8062_8080 = G__8097;
count__8063_8081 = G__8098;
i__8064_8082 = G__8099;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.notifos.done_working.call(null);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.kill-clients","editor.kill-clients",916643052),new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Kill the current client",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var seq__8065_8100 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.map.call(null,cljs.core.deref,cljs.core.vals.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)))))));var chunk__8066_8101 = null;var count__8067_8102 = 0;var i__8068_8103 = 0;while(true){
if((i__8068_8103 < count__8067_8102))
{var proc_8104 = cljs.core._nth.call(null,chunk__8066_8101,i__8068_8103);proc_8104.kill();
{
var G__8105 = seq__8065_8100;
var G__8106 = chunk__8066_8101;
var G__8107 = count__8067_8102;
var G__8108 = (i__8068_8103 + 1);
seq__8065_8100 = G__8105;
chunk__8066_8101 = G__8106;
count__8067_8102 = G__8107;
i__8068_8103 = G__8108;
continue;
}
} else
{var temp__4092__auto___8109__$1 = cljs.core.seq.call(null,seq__8065_8100);if(temp__4092__auto___8109__$1)
{var seq__8065_8110__$1 = temp__4092__auto___8109__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8065_8110__$1))
{var c__7119__auto___8111 = cljs.core.chunk_first.call(null,seq__8065_8110__$1);{
var G__8112 = cljs.core.chunk_rest.call(null,seq__8065_8110__$1);
var G__8113 = c__7119__auto___8111;
var G__8114 = cljs.core.count.call(null,c__7119__auto___8111);
var G__8115 = 0;
seq__8065_8100 = G__8112;
chunk__8066_8101 = G__8113;
count__8067_8102 = G__8114;
i__8068_8103 = G__8115;
continue;
}
} else
{var proc_8116 = cljs.core.first.call(null,seq__8065_8110__$1);proc_8116.kill();
{
var G__8117 = cljs.core.next.call(null,seq__8065_8110__$1);
var G__8118 = null;
var G__8119 = 0;
var G__8120 = 0;
seq__8065_8100 = G__8117;
chunk__8066_8101 = G__8118;
count__8067_8102 = G__8119;
i__8068_8103 = G__8120;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.notifos.done_working.call(null);
} else
{return null;
}
})], null));
lt.objs.langs.julia.__BEH__julia_path = (function __BEH__julia_path(this$,exe){return lt.object.merge_BANG_.call(null,lt.objs.langs.julia.julia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),exe], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia","julia-path","lt.objs.langs.julia/julia-path",1798520688),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.__BEH__julia_path,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Set the path to the Julia executable",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"path","path",1017337751)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.proc')) {
goog.provide('lt.objs.langs.julia.proc');
goog.require('cljs.core');
goog.require('lt.objs.langs.julia');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.langs.julia');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.langs.julia');
lt.objs.langs.julia.proc.__BEH__proc_out = (function __BEH__proc_out(this$,data){if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"connected","connected",4729661051))))
{return null;
} else
{var out = data.toString();lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
if(cljs.core._EQ_.call(null,out,"connected"))
{if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"notify","notify",4269181627))))
{lt.objs.notifos.done_working.call(null,"Connected to Julia");
} else
{}
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connected","connected",4729661051),true,new cljs.core.Keyword(null,"just-connected","just-connected",2130151130),true], null));
} else
{return null;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-out","lt.objs.langs.julia.proc/proc-out",3354081193),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__proc_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.objs.langs.julia.proc.__BEH__proc_error = (function __BEH__proc_error(this$,data){if(cljs.core.truth_(cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"connected","connected",4729661051))))
{return null;
} else
{var out = data.toString();return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-error","lt.objs.langs.julia.proc/proc-error",3670223651),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__proc_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.objs.langs.julia.proc.__BEH__proc_exit = (function __BEH__proc_exit(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.objs.notifos.done_working.call(null,"");
if(cljs.core.truth_(new cljs.core.Keyword(null,"complain","complain",4709422171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Couldn't connect to Julia",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Close"], null)], null)], null));
} else
{}
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-exit","lt.objs.langs.julia.proc/proc-exit",3482355335),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__proc_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.objs.langs.julia.proc.__BEH__pipe_out = (function __BEH__pipe_out(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"just-connected","just-connected",2130151130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"just-connected","just-connected",2130151130),false], null));
} else
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633)], null),cljs.core.str,data);
}
var out = cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633));if(cljs.core._EQ_.call(null,cljs.core.last.call(null,out),"\n"))
{lt.objs.console.log.call(null,out);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633),""], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-out","lt.objs.langs.julia.proc/pipe-out",2913224961),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__pipe_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.objs.langs.julia.proc.__BEH__pipe_err = (function __BEH__pipe_err(this$,data){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106)], null),cljs.core.str,data);
var out = cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106));if(cljs.core._EQ_.call(null,cljs.core.last.call(null,out),"\n"))
{lt.objs.console.log.call(null,out,"error");
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106),""], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-err","lt.objs.langs.julia.proc/pipe-err",2913231640),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__pipe_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.objs.langs.julia.proc.__BEH__flush = (function __BEH__flush(this$){var temp__4092__auto___8702 = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633)));if(cljs.core.truth_(temp__4092__auto___8702))
{var out_8703 = temp__4092__auto___8702;lt.objs.console.log.call(null,out_8703);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out-buffer","out-buffer",4159311633),""], null));
} else
{}
var temp__4092__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,this$).call(null,new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106)));if(cljs.core.truth_(temp__4092__auto__))
{var out = temp__4092__auto__;lt.objs.console.log.call(null,out);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err-buffer","err-buffer",3766222106),""], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","flush","lt.objs.langs.julia.proc/flush",4458423382),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__flush,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null,new cljs.core.Keyword(null,"proc.err","proc.err",4302073407),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-out","lt.objs.langs.julia.proc/proc-out",3354081193),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-error","lt.objs.langs.julia.proc/proc-error",3670223651),new cljs.core.Keyword("lt.objs.langs.julia.proc","proc-exit","lt.objs.langs.julia.proc/proc-exit",3482355335),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-out","lt.objs.langs.julia.proc/pipe-out",2913224961),new cljs.core.Keyword("lt.objs.langs.julia.proc","pipe-err","lt.objs.langs.julia.proc/pipe-err",2913231640),new cljs.core.Keyword("lt.objs.langs.julia.proc","flush","lt.objs.langs.julia.proc/flush",4458423382)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return null;
}));
lt.objs.langs.julia.proc.init = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"jl","init.jl");
lt.objs.langs.julia.proc.julia_path = (function julia_path(){var or__6371__auto__ = cljs.core.deref.call(null,lt.objs.langs.julia.julia).call(null,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return "julia";
}
});
/**
* @param {...*} var_args
*/
lt.objs.langs.julia.proc.connect = (function() { 
var connect__delegate = function (p__8699){var map__8701 = p__8699;var map__8701__$1 = ((cljs.core.seq_QMARK_.call(null,map__8701))?cljs.core.apply.call(null,cljs.core.hash_map,map__8701):map__8701);var complain = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"complain","complain",4709422171),true);var notify = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"notify","notify",4269181627),false);if(cljs.core.truth_(notify))
{lt.objs.notifos.working.call(null,"Spinning up a Julia client...");
} else
{}
var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connecting-notifier","lt.objs.langs.julia.proc/connecting-notifier",4154824301),client);lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",4269181627),notify,new cljs.core.Keyword(null,"complain","complain",4709422171),complain], null));
lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),lt.objs.langs.julia.proc.julia_path.call(null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.langs.julia.proc.init,lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc","proc",1017353928),cljs.core.first.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-global-client","julia.set-global-client",3983623463),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
lt.objs.langs.julia.proc.set_default_client.call(null,client);
return client;
};
var connect = function (var_args){
var p__8699 = null;if (arguments.length > 0) {
  p__8699 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return connect__delegate.call(this,p__8699);};
connect.cljs$lang$maxFixedArity = 0;
connect.cljs$lang$applyTo = (function (arglist__8704){
var p__8699 = cljs.core.seq(arglist__8704);
return connect__delegate(p__8699);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
lt.objs.langs.julia.proc.connect_manual = (function connect_manual(){var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"julia.client","julia.client",3830708594));lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect Julia to Light Table",new cljs.core.Keyword(null,"body","body",1016933652),[cljs.core.str("@async Jewel.server("),cljs.core.str(lt.objs.clients.tcp.port),cljs.core.str(", "),cljs.core.str(lt.objs.clients.__GT_id.call(null,client)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null));
lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"julia.set-default-client","julia.set-default-client",1406462921),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"only","only",1017320222),lt.objs.langs.julia.julia);
lt.objs.langs.julia.proc.set_default_client.call(null,client);
return client;
});
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Julia (manual)",new cljs.core.Keyword(null,"desc","desc",1016984067),"Manually connect to Julia.",new cljs.core.Keyword(null,"connect","connect",1965255772),lt.objs.langs.julia.proc.connect_manual], null));
lt.objs.langs.julia.proc.wait_until = (function wait_until(cond,callback){if(cljs.core.truth_(cond.call(null)))
{return callback.call(null);
} else
{return setTimeout((function (){return wait_until.call(null,cond,callback);
}),100);
}
});
lt.objs.langs.julia.proc.when_connect = (function when_connect(cb){return lt.objs.langs.julia.proc.wait_until.call(null,(function (){return cljs.core.not_EQ_.call(null,lt.objs.clients.tcp.port,0);
}),cb);
});
lt.objs.langs.julia.proc.__BEH__connect_on_startup = (function __BEH__connect_on_startup(){return lt.objs.langs.julia.proc.when_connect.call(null,(function (){return lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.eval","editor.julia.eval",4568286884),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),lt.objs.langs.julia.julia,new cljs.core.Keyword(null,"create","create",3956577390),(function (){return lt.objs.langs.julia.proc.connect.call(null,new cljs.core.Keyword(null,"notify","notify",4269181627),true);
})], null));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connect-on-startup","lt.objs.langs.julia.proc/connect-on-startup",4556282532),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__connect_on_startup,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Spin up a client when Light Table starts",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.objs.langs.julia.proc.default_client_STAR_ = null;
lt.objs.langs.julia.proc.default_client = (function default_client(){var temp__4092__auto__ = lt.objs.langs.julia.proc.default_client_STAR_;if(cljs.core.truth_(temp__4092__auto__))
{var client = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{return client;
} else
{return null;
}
} else
{return null;
}
});
lt.objs.langs.julia.proc.set_default_client = (function set_default_client(client){if(cljs.core.truth_(lt.objs.langs.julia.proc.default_client.call(null)))
{return null;
} else
{return lt.objs.langs.julia.proc.default_client_STAR_ = client;
}
});
lt.objs.langs.julia.proc.connect_default_client = (function connect_default_client(editor){if(cljs.core.truth_(new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))))
{return null;
} else
{var temp__4092__auto__ = lt.objs.langs.julia.proc.default_client.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var client = temp__4092__auto__;lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",3951159101),new cljs.core.Keyword(null,"default","default",2558708147)], null),cljs.core.constantly.call(null,client));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"set-client","set-client",2248164104),client);
} else
{return null;
}
}
});
lt.objs.langs.julia.proc.__BEH__connect_on_open = (function __BEH__connect_on_open(editor){return lt.objs.langs.julia.proc.connect_default_client.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.proc","connect-on-open","lt.objs.langs.julia.proc/connect-on-open",3288500199),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.proc.__BEH__connect_on_open,new cljs.core.Keyword(null,"desc","desc",1016984067),"Julia: Automatically connect editors to the default Julia client",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
}
if(!lt.util.load.provided_QMARK_('crate.binding')) {
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8229 = cljs.core.seq.call(null,self__.watches);var chunk__8230 = null;var count__8231 = 0;var i__8232 = 0;while(true){
if((i__8232 < count__8231))
{var vec__8233 = cljs.core._nth.call(null,chunk__8230,i__8232);var key__$1 = cljs.core.nth.call(null,vec__8233,0,null);var f = cljs.core.nth.call(null,vec__8233,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8308 = seq__8229;
var G__8309 = chunk__8230;
var G__8310 = count__8231;
var G__8311 = (i__8232 + 1);
seq__8229 = G__8308;
chunk__8230 = G__8309;
count__8231 = G__8310;
i__8232 = G__8311;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8229);if(temp__4092__auto__)
{var seq__8229__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8229__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8229__$1);{
var G__8312 = cljs.core.chunk_rest.call(null,seq__8229__$1);
var G__8313 = c__7119__auto__;
var G__8314 = cljs.core.count.call(null,c__7119__auto__);
var G__8315 = 0;
seq__8229 = G__8312;
chunk__8230 = G__8313;
count__8231 = G__8314;
i__8232 = G__8315;
continue;
}
} else
{var vec__8234 = cljs.core.first.call(null,seq__8229__$1);var key__$1 = cljs.core.nth.call(null,vec__8234,0,null);var f = cljs.core.nth.call(null,vec__8234,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8316 = cljs.core.next.call(null,seq__8229__$1);
var G__8317 = null;
var G__8318 = 0;
var G__8319 = 0;
seq__8229 = G__8316;
chunk__8230 = G__8317;
count__8231 = G__8318;
i__8232 = G__8319;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8236 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8236,0,null);var path__$2 = cljs.core.nth.call(null,vec__8236,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__8236,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__8236,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__8320__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8320 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8320__delegate.call(this,sa,f,x,y,z,more);};
G__8320.cljs$lang$maxFixedArity = 5;
G__8320.cljs$lang$applyTo = (function (arglist__8321){
var sa = cljs.core.first(arglist__8321);
arglist__8321 = cljs.core.next(arglist__8321);
var f = cljs.core.first(arglist__8321);
arglist__8321 = cljs.core.next(arglist__8321);
var x = cljs.core.first(arglist__8321);
arglist__8321 = cljs.core.next(arglist__8321);
var y = cljs.core.first(arglist__8321);
arglist__8321 = cljs.core.next(arglist__8321);
var z = cljs.core.first(arglist__8321);
var more = cljs.core.rest(arglist__8321);
return G__8320__delegate(sa,f,x,y,z,more);
});
G__8320.cljs$core$IFn$_invoke$arity$variadic = G__8320__delegate;
return G__8320;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj8238 = {};return obj8238;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__6359__auto__ = this$;if(and__6359__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__6359__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__6998__auto__ = (((this$ == null))?null:this$);return (function (){var or__6371__auto__ = (crate.binding._depend[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (crate.binding._depend["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__6359__auto__ = this$;if(and__6359__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__6359__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__6998__auto__ = (((this$ == null))?null:this$);return (function (){var or__6371__auto__ = (crate.binding._compute[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (crate.binding._compute["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,((function (this$__$1){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
});})(this$__$1))
);
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8239 = cljs.core.seq.call(null,self__.watches);var chunk__8240 = null;var count__8241 = 0;var i__8242 = 0;while(true){
if((i__8242 < count__8241))
{var vec__8243 = cljs.core._nth.call(null,chunk__8240,i__8242);var key__$1 = cljs.core.nth.call(null,vec__8243,0,null);var f = cljs.core.nth.call(null,vec__8243,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8322 = seq__8239;
var G__8323 = chunk__8240;
var G__8324 = count__8241;
var G__8325 = (i__8242 + 1);
seq__8239 = G__8322;
chunk__8240 = G__8323;
count__8241 = G__8324;
i__8242 = G__8325;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8239);if(temp__4092__auto__)
{var seq__8239__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8239__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8239__$1);{
var G__8326 = cljs.core.chunk_rest.call(null,seq__8239__$1);
var G__8327 = c__7119__auto__;
var G__8328 = cljs.core.count.call(null,c__7119__auto__);
var G__8329 = 0;
seq__8239 = G__8326;
chunk__8240 = G__8327;
count__8241 = G__8328;
i__8242 = G__8329;
continue;
}
} else
{var vec__8244 = cljs.core.first.call(null,seq__8239__$1);var key__$1 = cljs.core.nth.call(null,vec__8244,0,null);var f = cljs.core.nth.call(null,vec__8244,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8330 = cljs.core.next.call(null,seq__8239__$1);
var G__8331 = null;
var G__8332 = 0;
var G__8333 = 0;
seq__8239 = G__8330;
chunk__8240 = G__8331;
count__8241 = G__8332;
i__8242 = G__8333;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__8249_8334 = cljs.core.seq.call(null,atms);var chunk__8250_8335 = null;var count__8251_8336 = 0;var i__8252_8337 = 0;while(true){
if((i__8252_8337 < count__8251_8336))
{var atm_8338 = cljs.core._nth.call(null,chunk__8250_8335,i__8252_8337);crate.binding._depend.call(null,neue,atm_8338);
{
var G__8339 = seq__8249_8334;
var G__8340 = chunk__8250_8335;
var G__8341 = count__8251_8336;
var G__8342 = (i__8252_8337 + 1);
seq__8249_8334 = G__8339;
chunk__8250_8335 = G__8340;
count__8251_8336 = G__8341;
i__8252_8337 = G__8342;
continue;
}
} else
{var temp__4092__auto___8343 = cljs.core.seq.call(null,seq__8249_8334);if(temp__4092__auto___8343)
{var seq__8249_8344__$1 = temp__4092__auto___8343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8249_8344__$1))
{var c__7119__auto___8345 = cljs.core.chunk_first.call(null,seq__8249_8344__$1);{
var G__8346 = cljs.core.chunk_rest.call(null,seq__8249_8344__$1);
var G__8347 = c__7119__auto___8345;
var G__8348 = cljs.core.count.call(null,c__7119__auto___8345);
var G__8349 = 0;
seq__8249_8334 = G__8346;
chunk__8250_8335 = G__8347;
count__8251_8336 = G__8348;
i__8252_8337 = G__8349;
continue;
}
} else
{var atm_8350 = cljs.core.first.call(null,seq__8249_8344__$1);crate.binding._depend.call(null,neue,atm_8350);
{
var G__8351 = cljs.core.next.call(null,seq__8249_8344__$1);
var G__8352 = null;
var G__8353 = 0;
var G__8354 = 0;
seq__8249_8334 = G__8351;
chunk__8250_8335 = G__8352;
count__8251_8336 = G__8353;
i__8252_8337 = G__8354;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj8254 = {};return obj8254;
})();
crate.binding.bindable = (function (){var obj8256 = {};return obj8256;
})();
crate.binding._value = (function _value(this$){if((function (){var and__6359__auto__ = this$;if(and__6359__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__6359__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__6998__auto__ = (((this$ == null))?null:this$);return (function (){var or__6371__auto__ = (crate.binding._value[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (crate.binding._value["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__6359__auto__ = this$;if(and__6359__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__6359__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__6998__auto__ = (((this$ == null))?null:this$);return (function (){var or__6371__auto__ = (crate.binding._on_change[goog.typeOf(x__6998__auto__)]);if(or__6371__auto__)
{return or__6371__auto__;
} else
{var or__6371__auto____$1 = (crate.binding._on_change["_"]);if(or__6371__auto____$1)
{return or__6371__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8257 = cljs.core.seq.call(null,self__.watches);var chunk__8258 = null;var count__8259 = 0;var i__8260 = 0;while(true){
if((i__8260 < count__8259))
{var vec__8261 = cljs.core._nth.call(null,chunk__8258,i__8260);var key = cljs.core.nth.call(null,vec__8261,0,null);var f = cljs.core.nth.call(null,vec__8261,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8355 = seq__8257;
var G__8356 = chunk__8258;
var G__8357 = count__8259;
var G__8358 = (i__8260 + 1);
seq__8257 = G__8355;
chunk__8258 = G__8356;
count__8259 = G__8357;
i__8260 = G__8358;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8257);if(temp__4092__auto__)
{var seq__8257__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8257__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8257__$1);{
var G__8359 = cljs.core.chunk_rest.call(null,seq__8257__$1);
var G__8360 = c__7119__auto__;
var G__8361 = cljs.core.count.call(null,c__7119__auto__);
var G__8362 = 0;
seq__8257 = G__8359;
chunk__8258 = G__8360;
count__8259 = G__8361;
i__8260 = G__8362;
continue;
}
} else
{var vec__8262 = cljs.core.first.call(null,seq__8257__$1);var key = cljs.core.nth.call(null,vec__8262,0,null);var f = cljs.core.nth.call(null,vec__8262,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8363 = cljs.core.next.call(null,seq__8257__$1);
var G__8364 = null;
var G__8365 = 0;
var G__8366 = 0;
seq__8257 = G__8363;
chunk__8258 = G__8364;
count__8259 = G__8365;
i__8260 = G__8366;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__6938__auto__,writer__6939__auto__,opt__6940__auto__){return cljs.core._write.call(null,writer__6939__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__8263){var vec__8264 = p__8263;var event = cljs.core.nth.call(null,vec__8264,0,null);var el = cljs.core.nth.call(null,vec__8264,1,null);var v = cljs.core.nth.call(null,vec__8264,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__6371__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__8367){
var bc = cljs.core.first(arglist__8367);
var segs = cljs.core.rest(arglist__8367);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8273_8368 = cljs.core.seq.call(null,added);var chunk__8274_8369 = null;var count__8275_8370 = 0;var i__8276_8371 = 0;while(true){
if((i__8276_8371 < count__8275_8370))
{var a_8372 = cljs.core._nth.call(null,chunk__8274_8369,i__8276_8371);crate.binding.bc_add.call(null,bc,a_8372,a_8372);
{
var G__8373 = seq__8273_8368;
var G__8374 = chunk__8274_8369;
var G__8375 = count__8275_8370;
var G__8376 = (i__8276_8371 + 1);
seq__8273_8368 = G__8373;
chunk__8274_8369 = G__8374;
count__8275_8370 = G__8375;
i__8276_8371 = G__8376;
continue;
}
} else
{var temp__4092__auto___8377 = cljs.core.seq.call(null,seq__8273_8368);if(temp__4092__auto___8377)
{var seq__8273_8378__$1 = temp__4092__auto___8377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8273_8378__$1))
{var c__7119__auto___8379 = cljs.core.chunk_first.call(null,seq__8273_8378__$1);{
var G__8380 = cljs.core.chunk_rest.call(null,seq__8273_8378__$1);
var G__8381 = c__7119__auto___8379;
var G__8382 = cljs.core.count.call(null,c__7119__auto___8379);
var G__8383 = 0;
seq__8273_8368 = G__8380;
chunk__8274_8369 = G__8381;
count__8275_8370 = G__8382;
i__8276_8371 = G__8383;
continue;
}
} else
{var a_8384 = cljs.core.first.call(null,seq__8273_8378__$1);crate.binding.bc_add.call(null,bc,a_8384,a_8384);
{
var G__8385 = cljs.core.next.call(null,seq__8273_8378__$1);
var G__8386 = null;
var G__8387 = 0;
var G__8388 = 0;
seq__8273_8368 = G__8385;
chunk__8274_8369 = G__8386;
count__8275_8370 = G__8387;
i__8276_8371 = G__8388;
continue;
}
}
} else
{}
}
break;
}
var seq__8277 = cljs.core.seq.call(null,removed);var chunk__8278 = null;var count__8279 = 0;var i__8280 = 0;while(true){
if((i__8280 < count__8279))
{var r = cljs.core._nth.call(null,chunk__8278,i__8280);crate.binding.bc_remove.call(null,bc,r);
{
var G__8389 = seq__8277;
var G__8390 = chunk__8278;
var G__8391 = count__8279;
var G__8392 = (i__8280 + 1);
seq__8277 = G__8389;
chunk__8278 = G__8390;
count__8279 = G__8391;
i__8280 = G__8392;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8277);if(temp__4092__auto__)
{var seq__8277__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8277__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8277__$1);{
var G__8393 = cljs.core.chunk_rest.call(null,seq__8277__$1);
var G__8394 = c__7119__auto__;
var G__8395 = cljs.core.count.call(null,c__7119__auto__);
var G__8396 = 0;
seq__8277 = G__8393;
chunk__8278 = G__8394;
count__8279 = G__8395;
i__8280 = G__8396;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8277__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8397 = cljs.core.next.call(null,seq__8277__$1);
var G__8398 = null;
var G__8399 = 0;
var G__8400 = 0;
seq__8277 = G__8397;
chunk__8278 = G__8398;
count__8279 = G__8399;
i__8280 = G__8400;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__8281){var vec__8284 = p__8281;var path = cljs.core.nth.call(null,vec__8284,0,null);var opts = cljs.core.nth.call(null,vec__8284,1,null);var vec__8285 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8285,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8285,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__8285,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8284,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__8285,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__8284,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8281 = null;if (arguments.length > 1) {
  p__8281 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8281);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8401){
var atm = cljs.core.first(arglist__8401);
var p__8281 = cljs.core.rest(arglist__8401);
return bound_coll__delegate(atm,p__8281);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8286){var vec__8288 = p__8286;var opts = cljs.core.nth.call(null,vec__8288,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__8288,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__8288,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8286 = null;if (arguments.length > 2) {
  p__8286 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8286);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8402){
var as = cljs.core.first(arglist__8402);
arglist__8402 = cljs.core.next(arglist__8402);
var atm = cljs.core.first(arglist__8402);
var p__8286 = cljs.core.rest(arglist__8402);
return map_bound__delegate(as,atm,p__8286);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8290 = b;if(G__8290)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8290.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8290.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8290);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8290);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8292 = b;if(G__8292)
{var bit__7021__auto__ = null;if(cljs.core.truth_((function (){var or__6371__auto__ = bit__7021__auto__;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return G__8292.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8292.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8292);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8292);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8294 = atm;if(G__8294)
{var bit__7021__auto__ = (G__8294.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7021__auto__) || (G__8294.cljs$core$IDeref$))
{return true;
} else
{if((!G__8294.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8294);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8294);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__8295){var vec__8297 = p__8295;var func = cljs.core.nth.call(null,vec__8297,0,null);var func__$1 = (function (){var or__6371__auto__ = func;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8295 = null;if (arguments.length > 1) {
  p__8295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8295);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8403){
var atm = cljs.core.first(arglist__8403);
var p__8295 = cljs.core.rest(arglist__8403);
return bound__delegate(atm,p__8295);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.stats')) {
goog.provide('lt.objs.langs.julia.stats');
goog.require('cljs.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.cache');
lt.objs.langs.julia.stats.http = require("http");
lt.objs.langs.julia.stats.hit = (function hit(page){return lt.objs.langs.julia.stats.http.get(page);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.stats","metrics","lt.objs.langs.julia.stats/metrics",1111343317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (){return lt.objs.langs.julia.stats.hit.call(null,[cljs.core.str("http://mikeinn.es/hit?id="),cljs.core.str(cljs.core.deref.call(null,lt.objs.cache.settings).call(null,new cljs.core.Keyword(null,"uid","uid",1014020034)))].join(''));
}),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.patch')) {
goog.provide('lt.objs.langs.julia.patch');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.eval');
goog.require('lt.objs.eval');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.langs.julia.util');
lt.objs.langs.julia.patch.__GT_inline_exception = (function __GT_inline_exception(this$,info){var e__7853__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,lt.objs.eval.__GT_exception_class)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),lt.objs.eval.__GT_spacing.call(null,lt.objs.editor.line.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(info))))], null),((typeof new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)], null))], null));var seq__8410_8426 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7853__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"click","click",1108654330));
});})(e__7853__auto__))
,new cljs.core.Keyword(null,"contextmenu","contextmenu",911789824),((function (e__7853__auto__){
return (function (e){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"menu!","menu!",1117686292),e);
});})(e__7853__auto__))
,new cljs.core.Keyword(null,"dblclick","dblclick",3463991820),((function (e__7853__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"double-click","double-click",956590078));
});})(e__7853__auto__))
], null)));var chunk__8411_8427 = null;var count__8412_8428 = 0;var i__8413_8429 = 0;while(true){
if((i__8413_8429 < count__8412_8428))
{var vec__8414_8430 = cljs.core._nth.call(null,chunk__8411_8427,i__8413_8429);var ev__7854__auto___8431 = cljs.core.nth.call(null,vec__8414_8430,0,null);var func__7855__auto___8432 = cljs.core.nth.call(null,vec__8414_8430,1,null);lt.util.dom.on.call(null,e__7853__auto__,ev__7854__auto___8431,func__7855__auto___8432);
{
var G__8433 = seq__8410_8426;
var G__8434 = chunk__8411_8427;
var G__8435 = count__8412_8428;
var G__8436 = (i__8413_8429 + 1);
seq__8410_8426 = G__8433;
chunk__8411_8427 = G__8434;
count__8412_8428 = G__8435;
i__8413_8429 = G__8436;
continue;
}
} else
{var temp__4092__auto___8437 = cljs.core.seq.call(null,seq__8410_8426);if(temp__4092__auto___8437)
{var seq__8410_8438__$1 = temp__4092__auto___8437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8410_8438__$1))
{var c__7119__auto___8439 = cljs.core.chunk_first.call(null,seq__8410_8438__$1);{
var G__8440 = cljs.core.chunk_rest.call(null,seq__8410_8438__$1);
var G__8441 = c__7119__auto___8439;
var G__8442 = cljs.core.count.call(null,c__7119__auto___8439);
var G__8443 = 0;
seq__8410_8426 = G__8440;
chunk__8411_8427 = G__8441;
count__8412_8428 = G__8442;
i__8413_8429 = G__8443;
continue;
}
} else
{var vec__8415_8444 = cljs.core.first.call(null,seq__8410_8438__$1);var ev__7854__auto___8445 = cljs.core.nth.call(null,vec__8415_8444,0,null);var func__7855__auto___8446 = cljs.core.nth.call(null,vec__8415_8444,1,null);lt.util.dom.on.call(null,e__7853__auto__,ev__7854__auto___8445,func__7855__auto___8446);
{
var G__8447 = cljs.core.next.call(null,seq__8410_8438__$1);
var G__8448 = null;
var G__8449 = 0;
var G__8450 = 0;
seq__8410_8426 = G__8447;
chunk__8411_8427 = G__8448;
count__8412_8428 = G__8449;
i__8413_8429 = G__8450;
continue;
}
}
} else
{}
}
break;
}
return e__7853__auto__;
});
lt.objs.eval.__GT_inline_exception = lt.objs.langs.julia.patch.__GT_inline_exception;
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.eval')) {
goog.provide('lt.objs.langs.julia.eval');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.cache');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.auto_complete');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
lt.objs.langs.julia.eval.__BEH__eval__DOT__one = (function __BEH__eval__DOT__one(editor){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.notifos.working.call(null,"Running...");
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"start","start",1123661780),lt.objs.langs.julia.util.cursor.call(null,editor,"start"),new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.langs.julia.util.cursor.call(null,editor,"end"),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","eval.one","lt.objs.langs.julia.eval/eval.one",4466424305),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.objs.langs.julia.eval.__BEH__eval__DOT__all = (function __BEH__eval__DOT__all(editor){var client = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null));lt.objs.notifos.working.call(null,"Loading file...");
return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.eval.julia","editor.eval.julia",3010658330),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"all","all",1014000915),true,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.eval","eval.all","lt.objs.langs.julia.eval/eval.all",4466413240),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.eval.__BEH__eval__DOT__all,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.completions')) {
goog.provide('lt.objs.langs.julia.completions');
goog.require('cljs.core');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
lt.objs.langs.julia.completions.__BEH__trigger_update_hints = (function __BEH__trigger_update_hints(editor,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(cljs.core.deref.call(null,default_client)))
{return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.hints","editor.julia.hints",3827979880),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.proc.connect], null)),new cljs.core.Keyword(null,"editor.julia.hints","editor.julia.hints",3827979880),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","trigger-update-hints","lt.objs.langs.julia.completions/trigger-update-hints",2864848773),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__trigger_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.julia.hints.trigger-update","editor.julia.hints.trigger-update",1239387112),null,new cljs.core.Keyword(null,"input","input",1114262332),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.objs.langs.julia.completions.__BEH__use_local_hints = (function __BEH__use_local_hints(editor,hints,token){lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.julia.hints.trigger-update","editor.julia.hints.trigger-update",1239387112));
return cljs.core.concat.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","hints","lt.objs.langs.julia.completions/hints",1982368662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),hints);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","use-local-hints","lt.objs.langs.julia.completions/use-local-hints",2093633438),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__use_local_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.objs.langs.julia.completions.process_hint = (function process_hint(hint){if(typeof hint === 'string')
{return {"completion": hint};
} else
{return cljs.core.clj__GT_js.call(null,hint);
}
});
lt.objs.langs.julia.completions.__BEH__update_hints = (function __BEH__update_hints(editor,p__8122){var map__8124 = p__8122;var map__8124__$1 = ((cljs.core.seq_QMARK_.call(null,map__8124))?cljs.core.apply.call(null,cljs.core.hash_map,map__8124):map__8124);var res = map__8124__$1;var pattern = cljs.core.get.call(null,map__8124__$1,new cljs.core.Keyword(null,"pattern","pattern",4517781250));var notextual = cljs.core.get.call(null,map__8124__$1,new cljs.core.Keyword(null,"notextual","notextual",2817977764));var hints = cljs.core.get.call(null,map__8124__$1,new cljs.core.Keyword(null,"hints","hints",1113187902));lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token-pattern","token-pattern",4483347246),(cljs.core.truth_(pattern)?(new RegExp([cljs.core.str(pattern),cljs.core.str("$")].join(''))):null)], null));
var pos = lt.objs.editor.__GT_cursor.call(null,editor);var token = lt.plugins.auto_complete.get_token.call(null,editor,pos);lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.completions","hints","lt.objs.langs.julia.completions/hints",1982368662),cljs.core.remove.call(null,((function (pos,token,map__8124,map__8124__$1,res,pattern,notextual,hints){
return (function (p1__8121_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),p1__8121_SHARP_.completion);
});})(pos,token,map__8124,map__8124__$1,res,pattern,notextual,hints))
,cljs.core.map.call(null,lt.objs.langs.julia.completions.process_hint,hints))], null));
return lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.completions","update-hints","lt.objs.langs.julia.completions/update-hints",4122081658),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.completions.__BEH__update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.julia.hints.update","editor.julia.hints.update",3510718003),null], null), null));
lt.objs.langs.julia.completions._get_token = lt.plugins.auto_complete.get_token;
lt.plugins.auto_complete.get_token = (function (ed,pos){var temp__4090__auto__ = cljs.core.deref.call(null,ed).call(null,new cljs.core.Keyword(null,"token-pattern","token-pattern",4483347246));if(cljs.core.truth_(temp__4090__auto__))
{var pattern = temp__4090__auto__;var line = lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)).substring(0,new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos));var match = cljs.core.re_find.call(null,pattern,line);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",1123661780),(cljs.core.count.call(null,line) - cljs.core.count.call(null,match)),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"string","string",4416885635),match], null);
} else
{return lt.objs.langs.julia.completions._get_token.call(null,ed,pos);
}
});
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.module')) {
goog.provide('lt.objs.langs.julia.module');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
lt.objs.langs.julia.module.__GT_module_str = (function __GT_module_str(p__8582){var map__8584 = p__8582;var map__8584__$1 = ((cljs.core.seq_QMARK_.call(null,map__8584))?cljs.core.apply.call(null,cljs.core.hash_map,map__8584):map__8584);var module = cljs.core.get.call(null,map__8584__$1,new cljs.core.Keyword(null,"module","module",4240087518));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.module","span.module",4591083778),[cljs.core.str(module),cljs.core.str("\t")].join('')], null);
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","statusbar.module","lt.objs.langs.julia.module/statusbar.module",830137210),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","update-module-status","lt.objs.langs.julia.module/update-module-status",2710240756),null], null), null),new cljs.core.Keyword(null,"module","module",4240087518),"Main",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.objs.langs.julia.module.__GT_module_str),"");
}));
lt.objs.langs.julia.module.statusbar_module = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","statusbar.module","lt.objs.langs.julia.module/statusbar.module",830137210));
lt.objs.statusbar.add_statusbar_item.call(null,lt.objs.langs.julia.module.statusbar_module);
lt.objs.langs.julia.module.__GT_module = (function __GT_module(editor){return new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));
});
lt.objs.langs.julia.module.__BEH__update_module_statusbar = (function __BEH__update_module_statusbar(editor){return lt.object.merge_BANG_.call(null,lt.objs.langs.julia.module.statusbar_module,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.module.__GT_module.call(null,editor)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","update-module-statusbar","lt.objs.langs.julia.module/update-module-statusbar",1924546253),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__update_module_statusbar,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"module-update","module-update",2454986428),null], null), null));
lt.objs.langs.julia.module.__BEH__get_module = (function __BEH__get_module(editor){var temp__4092__auto__ = lt.objs.langs.julia.proc.default_client.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var client = temp__4092__auto__;return lt.objs.clients.send.call(null,client,new cljs.core.Keyword(null,"editor.julia.module.update","editor.julia.module.update",3704946727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","get-module","lt.objs.langs.julia.module/get-module",2880297552),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__get_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"save","save",1017427183),null], null), null));
lt.objs.langs.julia.module.__BEH__update_module = (function __BEH__update_module(editor,module){lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.langs.julia.module","module","lt.objs.langs.julia.module/module",3266506741),module], null));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"module-update","module-update",2454986428));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.module","update-module","lt.objs.langs.julia.module/update-module",849755505),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.module.__BEH__update_module,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.julia.module.update","editor.julia.module.update",3704946727),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.langs.julia.doc')) {
goog.provide('lt.objs.langs.julia.doc');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.cache');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.plugins.auto_complete');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.langs.julia.proc');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.cache');
goog.require('lt.objs.langs.julia.util');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.plugins.doc');
goog.require('lt.objs.editor');
goog.require('lt.plugins.doc');
lt.objs.langs.julia.doc.__BEH__doc = (function __BEH__doc(editor){lt.objs.notifos.working.call(null,"Loading docs...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.doc.connect], null)),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.doc","doc","lt.objs.langs.julia.doc/doc",1422122211),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.doc.__BEH__doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null));
lt.objs.langs.julia.doc.__BEH__methods = (function __BEH__methods(editor){lt.objs.notifos.working.call(null,"Loading methods...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),lt.objs.langs.julia.doc.connect], null)),new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.langs.julia.util.cursor.call(null,editor),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"module","module",4240087518),lt.objs.langs.julia.util.module.call(null,editor),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"methods","methods",1969438500)], null),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.doc","methods","lt.objs.langs.julia.doc/methods",2648121929),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.doc.__BEH__methods,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.methods","editor.methods",4183274403),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.methods.toggle","editor.methods.toggle",3152358179),new cljs.core.Keyword(null,"desc","desc",1016984067),"Docs: Toggle methods at cursor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var loc = lt.objs.editor.__GT_cursor.call(null,ed);var temp__4090__auto__ = lt.plugins.doc.doc_on_line_QMARK_.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));if(cljs.core.truth_(temp__4090__auto__))
{var cur = temp__4090__auto__;return lt.plugins.doc.remove_BANG_.call(null,ed,cur);
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.methods","editor.methods",4183274403));
}
} else
{return null;
}
})], null));
lt.objs.langs.julia.doc.__BEH__show_doc = (function __BEH__show_doc(editor,res){return lt.plugins.doc.inline_doc.call(null,editor,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-doc","div.inline-doc",3323486451),(cljs.core.truth_(res.call(null,new cljs.core.Keyword(null,"html","html",1017117469)))?lt.objs.langs.julia.util.process_links_BANG_.call(null,lt.objs.langs.julia.util.parse_div.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(res)),editor):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),res.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882))], null))], null)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(res));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.julia.doc","show-doc","lt.objs.langs.julia.doc/show-doc",730818451),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.julia.doc.__BEH__show_doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.julia.doc","editor.julia.doc",2098391892),null], null), null));
}

//# sourceMappingURL=jewel_compiled.js.map