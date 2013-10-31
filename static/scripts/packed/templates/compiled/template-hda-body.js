(function(){var b=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["template-hda-body"]=b(function(j,v,t,o,C){this.compilerInfo=[4,">= 1.0.0"];t=this.merge(t,j.helpers);C=C||{};var u="",l,e="function",d=this.escapeExpression,s=this,c=t.blockHelperMissing;function r(G,F){var D="",E;D+='\n    <div class="dataset-summary">\n        ';if(E=t.body){E=E.call(G,{hash:{},data:F})}else{E=G.body;E=typeof E===e?E.apply(G):E}if(E||E===0){D+=E}D+='\n    </div>\n    <div class="dataset-actions clear">\n        <div class="left"></div>\n        <div class="right"></div>\n    </div>\n\n    ';return D}function q(G,F){var D="",E;D+='\n    <div class="dataset-summary">\n        ';E=t["if"].call(G,G.misc_blurb,{hash:{},inverse:s.noop,fn:s.program(4,p,F),data:F});if(E||E===0){D+=E}D+="\n\n        ";E=t["if"].call(G,G.data_type,{hash:{},inverse:s.noop,fn:s.program(6,n,F),data:F});if(E||E===0){D+=E}D+="\n\n        ";E=t["if"].call(G,G.metadata_dbkey,{hash:{},inverse:s.noop,fn:s.program(9,i,F),data:F});if(E||E===0){D+=E}D+="\n\n        ";E=t["if"].call(G,G.misc_info,{hash:{},inverse:s.noop,fn:s.program(12,A,F),data:F});if(E||E===0){D+=E}D+='\n    </div>\n\n    <div class="dataset-actions clear">\n        <div class="left"></div>\n        <div class="right"></div>\n    </div>\n\n    ';E=t.unless.call(G,G.deleted,{hash:{},inverse:s.noop,fn:s.program(14,z,F),data:F});if(E||E===0){D+=E}D+="\n\n    ";return D}function p(G,F){var D="",E;D+='\n        <div class="dataset-blurb">\n            <span class="value">';if(E=t.misc_blurb){E=E.call(G,{hash:{},data:F})}else{E=G.misc_blurb;E=typeof E===e?E.apply(G):E}D+=d(E)+"</span>\n        </div>\n        ";return D}function n(H,G){var D="",F,E;D+='\n        <div class="dataset-datatype">\n            <label class="prompt">';E={hash:{},inverse:s.noop,fn:s.program(7,m,G),data:G};if(F=t.local){F=F.call(H,E)}else{F=H.local;F=typeof F===e?F.apply(H):F}if(!t.local){F=c.call(H,F,E)}if(F||F===0){D+=F}D+='</label>\n            <span class="value">';if(F=t.data_type){F=F.call(H,{hash:{},data:G})}else{F=H.data_type;F=typeof F===e?F.apply(H):F}D+=d(F)+"</span>\n        </div>\n        ";return D}function m(E,D){return"format"}function i(H,G){var D="",F,E;D+='\n        <div class="dataset-dbkey">\n            <label class="prompt">';E={hash:{},inverse:s.noop,fn:s.program(10,B,G),data:G};if(F=t.local){F=F.call(H,E)}else{F=H.local;F=typeof F===e?F.apply(H):F}if(!t.local){F=c.call(H,F,E)}if(F||F===0){D+=F}D+='</label>\n            <span class="value">\n                ';if(F=t.metadata_dbkey){F=F.call(H,{hash:{},data:G})}else{F=H.metadata_dbkey;F=typeof F===e?F.apply(H):F}D+=d(F)+"\n            </span>\n        </div>\n        ";return D}function B(E,D){return"database"}function A(G,F){var D="",E;D+='\n        <div class="dataset-info">\n            <span class="value">';if(E=t.misc_info){E=E.call(G,{hash:{},data:F})}else{E=G.misc_info;E=typeof E===e?E.apply(G):E}D+=d(E)+"</span>\n        </div>\n        ";return D}function z(H,G){var D="",F,E;D+='\n    \n    <div class="tags-display">\n        <label class="prompt">';E={hash:{},inverse:s.noop,fn:s.program(15,y,G),data:G};if(F=t.local){F=F.call(H,E)}else{F=H.local;F=typeof F===e?F.apply(H):F}if(!t.local){F=c.call(H,F,E)}if(F||F===0){D+=F}D+='</label>\n        <div class="tags"></div>\n    </div>\n\n    \n    <div class="annotation-display">\n        <label class="prompt">';E={hash:{},inverse:s.noop,fn:s.program(17,x,G),data:G};if(F=t.local){F=F.call(H,E)}else{F=H.local;F=typeof F===e?F.apply(H):F}if(!t.local){F=c.call(H,F,E)}if(F||F===0){D+=F}D+='</label>\n        <div id="dataset-';if(F=t.id){F=F.call(H,{hash:{},data:G})}else{F=H.id;F=typeof F===e?F.apply(H):F}D+=d(F)+'-annotation" class="annotation editable-text"\n             title="';E={hash:{},inverse:s.noop,fn:s.program(19,w,G),data:G};if(F=t.local){F=F.call(H,E)}else{F=H.local;F=typeof F===e?F.apply(H):F}if(!t.local){F=c.call(H,F,E)}if(F||F===0){D+=F}D+='"></div>\n    </div>\n\n    <div class="dataset-display-applications">\n        ';F=t.each.call(H,H.display_apps,{hash:{},inverse:s.noop,fn:s.program(21,k,G),data:G});if(F||F===0){D+=F}D+="\n\n        ";F=t.each.call(H,H.display_types,{hash:{},inverse:s.noop,fn:s.program(21,k,G),data:G});if(F||F===0){D+=F}D+='\n    </div>\n\n    <div class="dataset-peek">\n    ';F=t["if"].call(H,H.peek,{hash:{},inverse:s.noop,fn:s.program(25,f,G),data:G});if(F||F===0){D+=F}D+="\n    </div>\n\n    ";return D}function y(E,D){return"Tags"}function x(E,D){return"Annotation"}function w(E,D){return"Edit dataset annotation"}function k(G,F){var D="",E;D+='\n        <div class="display-application">\n            <span class="display-application-location">';if(E=t.label){E=E.call(G,{hash:{},data:F})}else{E=G.label;E=typeof E===e?E.apply(G):E}D+=d(E)+'</span>\n            <span class="display-application-links">\n                ';E=t.each.call(G,G.links,{hash:{},inverse:s.noop,fn:s.program(22,h,F),data:F});if(E||E===0){D+=E}D+="\n            </span>\n        </div>\n        ";return D}function h(H,G){var D="",F,E;D+='\n                <a target="';if(F=t.target){F=F.call(H,{hash:{},data:G})}else{F=H.target;F=typeof F===e?F.apply(H):F}D+=d(F)+'" href="';if(F=t.href){F=F.call(H,{hash:{},data:G})}else{F=H.href;F=typeof F===e?F.apply(H):F}D+=d(F)+'">';E={hash:{},inverse:s.noop,fn:s.program(23,g,G),data:G};if(F=t.local){F=F.call(H,E)}else{F=H.local;F=typeof F===e?F.apply(H):F}if(!t.local){F=c.call(H,F,E)}if(F||F===0){D+=F}D+="</a>\n                ";return D}function g(F,E){var D;if(D=t.text){D=D.call(F,{hash:{},data:E})}else{D=F.text;D=typeof D===e?D.apply(F):D}return d(D)}function f(G,F){var D="",E;D+='\n        <pre class="peek">';if(E=t.peek){E=E.call(G,{hash:{},data:F})}else{E=G.peek;E=typeof E===e?E.apply(G):E}if(E||E===0){D+=E}D+="</pre>\n    ";return D}u+='<div class="dataset-body">\n    ';l=t["if"].call(v,v.body,{hash:{},inverse:s.program(3,q,C),fn:s.program(1,r,C),data:C});if(l||l===0){u+=l}u+="\n</div>";return u})})();