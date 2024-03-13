'use strict';var woosq_ids=[],woosq_products=[];(function(a){a(function(){a('.woosq-btn, .woosq-link').each(function(){var b=a(this).attr('data-id'),c=a(this).attr('data-pid'),d=a(this).attr('data-product_id');typeof c!==typeof void 0&&c!==!1&&(b=c),typeof d!==typeof void 0&&d!==!1&&(b=d),-1===a.inArray(b,woosq_ids)&&(woosq_ids.push(b),woosq_products.push({src:woosq_vars.ajax_url+'?product_id='+b}))}),woosq_vars.quick_view>0&&setTimeout(function(){woosq_open(woosq_vars.quick_view)},1e3)}),a(document).on('click touch','[href*="#woosq-"]',function(d){var b=a(this),e=b.attr('href'),f=/#woosq-([0-9]+)/g,c=f.exec(e),g,h,i;c[1]!==void 0&&(g=c[1],h=b.attr('data-effect'),i=b.attr('data-context'),woosq_open(g,h,i),d.preventDefault())}),a(document).on('click touch','.woosq-btn, .woosq-link',function(h){var b,c,d,e,g,f;h.preventDefault(),b=a(this),c=b.attr('data-id'),d=b.attr('data-pid'),e=b.attr('data-product_id'),g=b.attr('data-effect'),f=b.attr('data-context'),typeof d!==typeof void 0&&d!==!1&&(c=d),typeof e!==typeof void 0&&e!==!1&&(c=e),woosq_open(c,g,f)}),a(document).on('added_to_cart',function(){woosq_vars.auto_close==='yes'&&(woosq_vars.view==='popup'&&a.magnificPopup.close(),woosq_close())}),a(document).on('woosq_loaded',function(){var b=a('#woosq-popup').find('.variations_form');b.each(function(){a(this).wc_variation_form()}),woosq_init_content('loaded'),a('#woosq-popup .woosq-redirect').length||(woosq_vars.cart_redirect==='yes'&&woosq_vars.cart_url!==''?a('#woosq-popup form').prepend('<input class="woosq-redirect" name="woosq-redirect" type="hidden" value="'+woosq_vars.cart_url+'"/>'):a('#woosq-popup form').prepend('<input class="woosq-redirect" name="woosq-redirect" type="hidden" value="'+window.location.href+'"/>'))}),a(window).on('resize',function(){woosq_init_content('resize')}),a(document).on('found_variation',function(b,f){var c,d,e;!a(b.target).closest('.woosb-product').length&&!a(b.target).closest('.woosg-product').length&&!a(b.target).closest('.woobt-product').length&&!a(b.target).closest('.woofs-product').length&&a(b.target).closest('#woosq-popup').length&&f.image_id!==void 0&&a('#woosq-popup .thumbnails .thumbnail').length>1&&(c=a('.thumbnail:not(.slick-cloned)[data-id="'+f.image_id+'"]'),c.length&&(d=a('#woosq-popup .thumbnails .thumbnail').index(c),e=a('#woosq-popup .thumbnails .images'),d>0&&e.hasClass('slick-initialized')&&setTimeout(function(){e.slick('slickGoTo',d-1)},100)))}),a(document).on('reset_data',function(b){a(b.target).closest('#woosq-popup').length&&a('#woosq-popup .thumbnails .thumbnail').length>1&&a('#woosq-popup .thumbnails .images').hasClass('slick-initialized')&&a('#woosq-popup .thumbnails .images').slick('slickGoTo',0)}),woosq_vars.hashchange==='yes'&&a(window).on('hashchange',function(){location.href.indexOf('#woosq')<0&&(woosq_vars.view==='popup'&&a.magnificPopup.close(),woosq_close())}),a(document).on('click touch','.woosq-overlay, .woosq-close',function(){woosq_close()})})(jQuery);function woosq_open(a,c,d){var e,f,b;jQuery('body').addClass('woosq-open'),woosq_vars.view==='sidebar'?(woosq_loading(),e={action:'woosq_quickview',product_id:a,nonce:woosq_vars.nonce},jQuery.post(woosq_vars.ajax_url,e,function(b){jQuery('.woosq-sidebar').html(b),woosq_loaded(),jQuery(document.body).trigger('woosq_loaded',[a])})):(-1===jQuery.inArray(a,woosq_ids)&&(woosq_ids.push(a),woosq_products.push({src:woosq_vars.ajax_url+'?product_id='+a})),f=woosq_get_key(woosq_products,'src',woosq_vars.ajax_url+'?product_id='+a),b='mfp-woosq',typeof d!==typeof void 0&&d!==!1&&(b=b+' mfp-woosq-'+d),typeof c!==typeof void 0&&c!==!1?b=b+' '+c:b=b+' '+woosq_vars.effect,jQuery.magnificPopup.open({items:woosq_products,type:'ajax',mainClass:b,removalDelay:160,overflowY:'scroll',fixedContentPos:!0,tClose:woosq_vars.close,gallery:{tPrev:woosq_vars.prev,tNext:woosq_vars.next,enabled:woosq_vars.next_prev==='yes'},ajax:{settings:{type:'GET',data:{action:'woosq_quickview',nonce:woosq_vars.nonce}}},callbacks:{open:function(){woosq_vars.hashchange==='yes'&&(location.href=location.href.split('#')[0]+'#woosq')},ajaxContentAdded:function(){jQuery(document.body).trigger('woosq_loaded',[a])},close:function(){woosq_vars.hashchange==='yes'&&location.hash&&history.go(-1)},afterClose:function(){jQuery(document.body).trigger('woosq_close',[a])}}},f)),jQuery(document.body).trigger('woosq_open',[a])}function woosq_close(){jQuery('body').removeClass('woosq-open'),jQuery(document.body).trigger('woosq_close')}function woosq_loading(){jQuery('.woosq-sidebar').addClass('woosq-loading')}function woosq_loaded(){jQuery('.woosq-sidebar').removeClass('woosq-loading')}function woosq_init_content(a){a==='loaded'&&(woosq_thumbnails_zoom(),woosq_thumbnails_slick(),woosq_related_slick()),woosq_vars.view==='sidebar'?woosq_vars.scrollbar==='yes'&&jQuery('.woosq-product').perfectScrollbar('destroy').perfectScrollbar({theme:'wpc'}):woosq_vars.scrollbar==='yes'&&(jQuery(window).width()<1024?(jQuery('.woosq-product .summary-content').perfectScrollbar('destroy'),jQuery('.woosq-product').perfectScrollbar('destroy').perfectScrollbar({theme:'wpc'})):(jQuery('.woosq-product').perfectScrollbar('destroy'),jQuery('.woosq-product .summary-content').perfectScrollbar('destroy').perfectScrollbar({theme:'wpc'})))}function woosq_get_key(b,c,d){for(var a=0;a<b.length;a++)if(b[a][c]===d)return a;return-1}function woosq_thumbnails_zoom(){woosq_vars.thumbnails_effect==='zoom'&&jQuery('#woosq-popup .thumbnails .images .thumbnail').each(function(){var a=jQuery(this),b=JSON.parse(woosq_vars.thumbnails_zoom_params);b.url=a.find('img').attr('data-src'),a.trigger('zoom.destroy'),a.zoom(b)})}function woosq_thumbnails_slick(){jQuery('#woosq-popup .thumbnails .images .thumbnail').length>1&&(jQuery('#woosq-popup .thumbnails .images').hasClass('slick-initialized')&&jQuery('#woosq-popup .thumbnails .images').slick('unslick'),jQuery('#woosq-popup .thumbnails .images').slick(JSON.parse(woosq_vars.thumbnails_slick_params)))}function woosq_related_slick(){jQuery('.woosq-related-products').hasClass('slick-initialized')&&jQuery('.woosq-related-products').slick('unslick'),jQuery('.woosq-related-product').length>1&&jQuery('.woosq-related-products').slick(JSON.parse(woosq_vars.related_slick_params))}