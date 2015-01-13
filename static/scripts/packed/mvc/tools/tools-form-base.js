define(["utils/utils","utils/deferred","mvc/ui/ui-portlet","mvc/ui/ui-misc","mvc/citation/citation-model","mvc/citation/citation-view","mvc/tools","mvc/tools/tools-template","mvc/tools/tools-content","mvc/tools/tools-section","mvc/tools/tools-tree"],function(g,h,f,k,i,a,d,c,e,j,b){return Backbone.View.extend({initialize:function(l){console.debug(l);var m=parent.Galaxy;if(m&&m.modal){this.modal=m.modal}else{this.modal=new k.Modal.View()}if(m&&m.currUser){this.is_admin=m.currUser.get("is_admin")}else{this.is_admin=false}this.options=l;this.container=this.options.container||"body";this.deferred=new h();this.setElement("<div/>");$(this.container).append(this.$el);this._buildForm()},reciept:function(l){$(this.container).empty();$(this.container).append(l)},highlight:function(m,n,l){var o=this.element_list[m];if(o){o.error(n||"Please verify this parameter.");if(!l){$(this.container).animate({scrollTop:o.$el.offset().top-20},500)}}},_buildForm:function(){var l=this;this.off("refresh");this.off("reset");this.field_list={};this.input_list={};this.element_list={};this.tree=new b(this);this.content=new e(this);var n=this.options;this._renderForm(n);this.tree.finalize();if(!this.workflow&&n.errors){var o=this.tree.matchResponse(n.errors);for(var m in o){this.highlight(m,o[m],true)}}this.on("refresh",function(){l.deferred.reset();l.deferred.execute(function(){l._updateModel()})});this.on("reset",function(){for(var p in this.element_list){this.element_list[p].reset()}})},_renderForm:function(u){var t=this;this.message=new k.Message();var q=new k.ButtonIcon({icon:"fa-info-circle",title:"Requirements",tooltip:"Display tool requirements",onclick:function(){if(!this.visible){this.visible=true;t.message.update({persistent:true,message:c.requirements(u),status:"info"})}else{this.visible=false;t.message.update({message:""})}}});if(!u.requirements||u.requirements.length==0){q.$el.hide()}var m=new k.ButtonMenu({icon:"fa-cubes",title:"Versions",tooltip:"Select another tool version"});if(u.versions&&u.versions.length>1){for(var o in u.versions){var r=u.versions[o];if(r!=u.version){m.addMenu({title:"Switch to "+r,version:r,icon:"fa-cube",onclick:function(){u.id=u.id.replace(u.version,this.version);u.version=this.version;t.deferred.reset();t.deferred.execute(function(){t._buildModel()})}})}}}else{m.$el.hide()}var p=new k.ButtonMenu({icon:"fa-caret-down",title:"Options",tooltip:"View available options"});if(u.biostar_url){p.addMenu({icon:"fa-question-circle",title:"Question?",tooltip:"Ask a question about this tool (Biostar)",onclick:function(){window.open(u.biostar_url+"/p/new/post/")}});p.addMenu({icon:"fa-search",title:"Search",tooltip:"Search help for this tool (Biostar)",onclick:function(){window.open(u.biostar_url+"/t/"+u.id+"/")}})}p.addMenu({icon:"fa-share",title:"Share",tooltip:"Share this tool",onclick:function(){prompt("Copy to clipboard: Ctrl+C, Enter",window.location.origin+galaxy_config.root+"root?tool_id="+u.id)}});if(this.is_admin){p.addMenu({icon:"fa-download",title:"Download",tooltip:"Download this tool",onclick:function(){window.location.href=galaxy_config.root+"api/tools/"+u.id+"/download"}})}this.section=new j.View(t,{inputs:u.inputs,cls:"ui-table-plain"});if(this.incompatible){this.$el.hide();$("#tool-form-classic").show();return}this.portlet=new f.View({icon:"fa-wrench",title:"<b>"+u.name+"</b> "+u.description+" (Galaxy Tool Version "+u.version+")",cls:"ui-portlet-slim",operations:{requirements:q,menu:p,versions:m},buttons:this.buttons});if(this.options.workflow){this.portlet.$content.css("padding","0px")}this.portlet.append(this.message.$el,true);this.portlet.append(this.section.$el);this.$el.empty();this.$el.append(this.portlet.$el);if(u.help!=""){this.$el.append(c.help(u.help))}if(u.citations){var s=$("<div/>");var l=new i.ToolCitationCollection();l.tool_id=u.id;var n=new a.CitationListView({el:s,collection:l});n.render();l.fetch();this.$el.append(s)}if(u.message){this.message.update({persistent:true,status:"warning",message:u.message})}}})});