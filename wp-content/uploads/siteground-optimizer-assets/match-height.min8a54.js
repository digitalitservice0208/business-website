(function(a){var e=-1,d=-1,c=function(a){return parseFloat(a)||0},h=function(e){var d=null,b=[];return a(e).each(function(){var e=a(this),f=e.offset().top-c(e.css("margin-top")),g=0<b.length?b[b.length-1]:null;null===g?b.push(e):1>=Math.floor(Math.abs(d-f))?b[b.length-1]=g.add(e):b.push(e),d=f}),b},f=function(b){var c={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof b?a.extend(c,b):("boolean"==typeof b?c.byRow=b:"remove"===b&&(c.remove=!0),c)},b=a.fn.matchHeight=function(c){if(c=f(c),c.remove){var d=this;return this.css(c.property,""),a.each(b._groups,function(b,a){a.elements=a.elements.not(d)}),this}return 1>=this.length&&!c.target?this:(b._groups.push({elements:this,options:c}),b._apply(this,c),this)},g;b._groups=[],b._throttle=80,b._maintainScroll=!1,b._beforeUpdate=null,b._afterUpdate=null,b._apply=function(j,m){var d=f(m),e=a(j),i=[e],k=a(window).scrollTop(),l=a("html").outerHeight(!0),g=e.parents().filter(":hidden");return g.each(function(){var b=a(this);b.data("style-cache",b.attr("style"))}),g.css("display","block"),d.byRow&&!d.target&&(e.each(function(){var b=a(this),c=b.css("display");"inline-block"!==c&&"inline-flex"!==c&&(c="block"),b.data("style-cache",b.attr("style")),b.css({display:c,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),i=h(e),e.each(function(){var b=a(this);b.attr("style",b.data("style-cache")||"")})),a.each(i,function(g,f){var b=a(f),e=0;if(d.target)e=d.target.outerHeight(!1);else{if(d.byRow&&1>=b.length){b.css(d.property,"");return}b.each(function(){var c=a(this),b=c.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block"),b={display:b},b[d.property]="",c.css(b),c.outerHeight(!1)>e&&(e=c.outerHeight(!1)),c.css("display","")})}b.each(function(){var b=a(this),f=0;d.target&&b.is(d.target)||("border-box"!==b.css("box-sizing")&&(f+=c(b.css("border-top-width"))+c(b.css("border-bottom-width")),f+=c(b.css("padding-top"))+c(b.css("padding-bottom"))),b.css(d.property,e-f+"px"))})}),g.each(function(){var b=a(this);b.attr("style",b.data("style-cache")||null)}),b._maintainScroll&&a(window).scrollTop(k/l*a("html").outerHeight(!0)),this},b._applyDataApi=function(){var b={};a("[data-match-height], [data-mh]").each(function(){var c=a(this),d=c.attr("data-mh")||c.attr("data-match-height");b[d]=d in b?b[d].add(c):c}),a.each(b,function(){this.matchHeight(!0)})},g=function(c){b._beforeUpdate&&b._beforeUpdate(c,b._groups),a.each(b._groups,function(){b._apply(this.elements,this.options)}),b._afterUpdate&&b._afterUpdate(c,b._groups)},b._update=function(h,c){if(c&&"resize"===c.type){var f=a(window).width();if(f===e)return;e=f}h?-1===d&&(d=setTimeout(function(){g(c),d=-1},b._throttle)):g(c)},a(b._applyDataApi),a(window).bind("load",function(a){b._update(!1,a)}),a(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery)