/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/misc/jquery.once.js. */
(function(n){var e={},r=0;n.fn.once=function(i,o){if(typeof i!='string'){if(!(i in e)){e[i]=++r};if(!o){o=i};i='jquery-once-'+e[i]};var t=i+'-processed',s=this.not('.'+t).addClass(t);return n.isFunction(o)?s.each(o):s};n.fn.removeOnce=function(e,r){var o=e+'-processed',i=this.filter('.'+o).removeClass(o);return n.isFunction(r)?i.each(r):i}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/misc/jquery.once.js. */
/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/misc/drupal.js. */
;var Drupal=Drupal||{'settings':{},'behaviors':{},'locale':{}};jQuery.noConflict();(function(t){var e=t.fn.init;t.fn.init=function(t,r,a){if(t&&typeof t==='string'){var n=t.indexOf('#');if(n>=0){var o=t.indexOf('<');if(o>n){throw'Syntax error, unrecognized expression: '+t}}};return e.call(this,t,r,a)};t.fn.init.prototype=e.prototype;Drupal.attachBehaviors=function(e,r){e=e||document;r=r||Drupal.settings;t.each(Drupal.behaviors,function(){if(t.isFunction(this.attach)){this.attach(e,r)}})};Drupal.detachBehaviors=function(e,r,a){e=e||document;r=r||Drupal.settings;a=a||'unload';t.each(Drupal.behaviors,function(){if(t.isFunction(this.detach)){this.detach(e,r,a)}})};Drupal.checkPlain=function(t){var e,a,r={'&':'&amp;','"':'&quot;','<':'&lt;','>':'&gt;'};t=String(t);for(e in r){if(r.hasOwnProperty(e)){a=new RegExp(e,'g');t=t.replace(a,r[e])}};return t};Drupal.formatString=function(t,e){for(var r in e){switch(r.charAt(0)){case'@':e[r]=Drupal.checkPlain(e[r]);break;case'!':break;case'%':default:e[r]=Drupal.theme('placeholder',e[r]);break};t=t.replace(r,e[r])};return t};Drupal.t=function(t,r,e){e=e||{};e.context=e.context||'';if(Drupal.locale.strings&&Drupal.locale.strings[e.context]&&Drupal.locale.strings[e.context][t]){t=Drupal.locale.strings[e.context][t]};if(r){t=Drupal.formatString(t,r)};return t};Drupal.formatPlural=function(t,r,a,e,o){var e=e||{};e['@count']=t;var n=Drupal.locale.pluralFormula?Drupal.locale.pluralFormula(e['@count']):((e['@count']==1)?0:1);if(n==0){return Drupal.t(r,e,o)}
else if(n==1){return Drupal.t(a,e,o)}
else{e['@count['+n+']']=e['@count'];delete e['@count'];return Drupal.t(a.replace('@count','@count['+n+']'),e,o)}};Drupal.absoluteUrl=function(t){var r=document.createElement('a');try{t=decodeURIComponent(t)}catch(e){};r.setAttribute('href',t);return r.cloneNode(!1).href};Drupal.urlIsLocal=function(t){var e=Drupal.absoluteUrl(t),n=location.protocol;if(n==='http:'&&e.indexOf('https:')===0){n='https:'};var r=n+'//'+location.host+Drupal.settings.basePath.slice(0,-1);try{e=decodeURIComponent(e)}catch(a){};try{r=decodeURIComponent(r)}catch(a){};return e===r||e.indexOf(r+'/')===0};Drupal.theme=function(t){var e=Array.prototype.slice.apply(arguments,[1]);return(Drupal.theme[t]||Drupal.theme.prototype[t]).apply(this,e)};Drupal.freezeHeight=function(){Drupal.unfreezeHeight();t('<div id="freeze-height"></div>').css({position:'absolute',top:'0px',left:'0px',width:'1px',height:t('body').css('height')}).appendTo('body')};Drupal.unfreezeHeight=function(){t('#freeze-height').remove()};Drupal.encodePath=function(t,e){e=e||location.href;return encodeURIComponent(t).replace(/%2F/g,'/')};Drupal.getSelection=function(t){if(typeof t.selectionStart!='number'&&document.selection){var e=document.selection.createRange(),r=e.duplicate();r.moveToElementText(t);r.setEndPoint('EndToEnd',e);var a=r.text.length-e.text.length,n=a+e.text.length;return{'start':a,'end':n}};return{'start':t.selectionStart,'end':t.selectionEnd}};Drupal.ajaxError=function(e,a,r){var u,l,i,n,s,c;if(e.status){u='\n'+Drupal.t('An AJAX HTTP error occurred.')+'\n'+Drupal.t('HTTP Result Code: !status',{'!status':e.status})}
else{u='\n'+Drupal.t('An AJAX HTTP request terminated abnormally.')};u+='\n'+Drupal.t('Debugging information follows.');i='\n'+Drupal.t('Path: !uri',{'!uri':a});l='';try{l='\n'+Drupal.t('StatusText: !statusText',{'!statusText':t.trim(e.statusText)})}catch(o){};n='';try{n='\n'+Drupal.t('ResponseText: !responseText',{'!responseText':t.trim(e.responseText)})}catch(o){};n=n.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,'');n=n.replace(/[\n]+\s+/g,'\n');s=e.status==0?('\n'+Drupal.t('ReadyState: !readyState',{'!readyState':e.readyState})):'';r=r?('\n'+Drupal.t('CustomMessage: !customMessage',{'!customMessage':r})):'';c=u+i+l+r+n+s;return c};t('html').addClass('js');document.cookie='has_js=1; path=/';t(function(){if(jQuery.support.positionFixed===undefined){var e=t('<div style="position:fixed; top:10px" />').appendTo(document.body);jQuery.support.positionFixed=e[0].offsetTop===10;e.remove()}});t(function(){Drupal.attachBehaviors(document,Drupal.settings)});Drupal.theme.prototype={placeholder:function(t){return'<em class="placeholder">'+Drupal.checkPlain(t)+'</em>'}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/misc/drupal.js. */
/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/sites/all/themes/omega/omega/js/no-js.js. */
(function(s){s('html').removeClass('no-js')})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/sites/all/themes/omega/omega/js/no-js.js. */
/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/sites/all/modules/google_analytics/googleanalytics.js. */
(function(e){Drupal.googleanalytics={};e(document).ready(function(){e(document.body).bind("mousedown keyup touchstart",function(t){e(t.target).closest("a,area").each(function(){if(Drupal.googleanalytics.isInternal(this.href)){if(e(this).is(".colorbox")&&(Drupal.settings.googleanalytics.trackColorbox)){}
else if(Drupal.settings.googleanalytics.trackDownload&&Drupal.googleanalytics.isDownload(this.href)){ga("send",{"hitType":"event","eventCategory":"Downloads","eventAction":Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),"eventLabel":Drupal.googleanalytics.getPageUrl(this.href),"transport":"beacon"})}
else if(Drupal.googleanalytics.isInternalSpecial(this.href)){ga("send",{"hitType":"pageview","page":Drupal.googleanalytics.getPageUrl(this.href),"transport":"beacon"})}}
else{if(Drupal.settings.googleanalytics.trackMailto&&e(this).is("a[href^='mailto:'],area[href^='mailto:']")){ga("send",{"hitType":"event","eventCategory":"Mails","eventAction":"Click","eventLabel":this.href.substring(7),"transport":"beacon"})}
else if(Drupal.settings.googleanalytics.trackOutbound&&this.href.match(/^\w+:\/\//i)){if(Drupal.settings.googleanalytics.trackDomainMode!==2||(Drupal.settings.googleanalytics.trackDomainMode===2&&!Drupal.googleanalytics.isCrossDomain(this.hostname,Drupal.settings.googleanalytics.trackCrossDomains))){ga("send",{"hitType":"event","eventCategory":"Outbound links","eventAction":"Click","eventLabel":this.href,"transport":"beacon"})}}}})});if(Drupal.settings.googleanalytics.trackUrlFragments){window.onhashchange=function(){ga("send",{"hitType":"pageview","page":location.pathname+location.search+location.hash})}};if(Drupal.settings.googleanalytics.trackColorbox){e(document).bind("cbox_complete",function(){var t=e.colorbox.element().attr("href");if(t){ga("send",{"hitType":"pageview","page":Drupal.googleanalytics.getPageUrl(t)})}})}});Drupal.googleanalytics.isCrossDomain=function(t,a){if(!a){return!1}
else{return e.inArray(t,a)>-1?!0:!1}};Drupal.googleanalytics.isDownload=function(e){var t=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([\?#].*)?$","i");return t.test(e)};Drupal.googleanalytics.isInternal=function(e){var t=new RegExp("^(https?):\/\/"+window.location.host,"i");return t.test(e)};Drupal.googleanalytics.isInternalSpecial=function(e){var t=new RegExp("(\/go\/.*)$","i");return t.test(e)};Drupal.googleanalytics.getPageUrl=function(e){var t=new RegExp("^(https?):\/\/"+window.location.host,"i");return e.replace(t,"")};Drupal.googleanalytics.getDownloadExtension=function(e){var a=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([\?#].*)?$","i"),t=a.exec(e);return(t===null)?"":t[1]}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/sites/all/modules/google_analytics/googleanalytics.js. */
