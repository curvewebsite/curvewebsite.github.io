/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/misc/textarea.js. */
(function(e){Drupal.behaviors.textarea={attach:function(t,a){e('.form-textarea-wrapper.resizable',t).once('textarea',function(){var n =null,t=e(this).addClass('resizable-textarea').find('textarea'),i=e('<div class="grippie"></div>').mousedown(r);i.insertAfter(t);function r(i){n =t.height()-i.pageY;t.css('opacity',0.25);e(document).mousemove(u).mouseup(a);return!1};function u(e){t.height(Math.max(32,n +e.pageY)+'px');return!1};function a(n){e(document).unbind('mousemove',u).unbind('mouseup',a);t.css('opacity',1)}})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/misc/textarea.js. */
/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/sites/all/modules/webform/js/webform.js. */
(function(r){'use strict';Drupal.behaviors.webform=Drupal.behaviors.webform||{};Drupal.behaviors.webform.attach=function(r){Drupal.webform.datepicker(r);if(Drupal.settings.webform&&Drupal.settings.webform.conditionals){Drupal.webform.conditional(r)}};Drupal.webform=Drupal.webform||{};Drupal.webform.datepicker=function(e){r('div.webform-datepicker').each(function(){var t=r(this),n=t.find('input.webform-calendar');if(n.length==0){return};var a=n[0].className.replace(/.*webform-calendar-start-(\d{4}-\d{2}-\d{2}).*/,'$1').split('-'),e=n[0].className.replace(/.*webform-calendar-end-(\d{4}-\d{2}-\d{2}).*/,'$1').split('-'),u=n[0].className.replace(/.*webform-calendar-day-(\d).*/,'$1');a=new Date(a[0],a[1]-1,a[2]);e=new Date(e[0],e[1]-1,e[2]);if(a>e){var l=a;a=e;e=l};var o=a.getFullYear(),i=e.getFullYear();n.datepicker({dateFormat:'yy-mm-dd',yearRange:o+':'+i,firstDay:parseInt(u),minDate:a,maxDate:e,onSelect:function(r,e){var a=r.split('-');t.find('select.year, input.year').val(+a[0]).trigger('change');t.find('select.month').val(+a[1]).trigger('change');t.find('select.day').val(+a[2]).trigger('change')},beforeShow:function(e,a){var n=t.find('select.year, input.year').val(),l=t.find('select.month').val(),u=t.find('select.day').val(),f=new Date();n=n?n:f.getFullYear();l=l?l:f.getMonth()+1;u=u?u:f.getDate();n=(n<o||n>i)?o:n;r(e).val(n+'-'+l+'-'+u)}});n.click(function(e){r(this).focus();e.preventDefault()})})};Drupal.webform.conditional=function(e){r.each(Drupal.settings.webform.conditionals,function(e,a){var t=r('.'+e+':not(.webform-conditional-processed)');t.each(function(e,n){var o=r(n);o.addClass('webform-conditional-processed');o.bind('change',{'settings':a},Drupal.webform.conditionalCheck);Drupal.webform.doConditions(t,a)})})};Drupal.webform.conditionalCheck=function(e){var a=r(e.target).closest('.webform-component'),n=a.closest('form'),o=a.attr('class').match(/webform-component--[^ ]+/)[0],t=e.data.settings;if(t.sourceMap[o]){Drupal.webform.doConditions(n,t)}};Drupal.webform.doConditions=function(e,a){var t,n;function f(r){t=-1;n=[];u(r)};function u(r){n[++t]={results:[],andor:r,}};function l(r){n[t]['results'].push(r)};function i(){var e=n[t];t=Math.max(0,t-1);var o=e['results'],a=r.map(o,function(r){return r?r:null});return e['andor']==='or'?a.length>0:a.length===o.length};var o=[];r.each(a.ruleGroups,function(t,n){var c=a.ruleGroups[t];f(c['andor']);r.each(c['rules'],function(r,t){switch(t['source_type']){case'component':var n=t['source'];var o=e.find('.'+n)[0],f=a.values[n]?a.values[n]:null;l(window['Drupal']['webform'][t.callback](o,f,t['value']));break;case'conditional_start':u(t['andor']);break;case'conditional_end':l(i());break}});var p=i();r.each(c['actions'],function(a,t){var n =e.find('.'+t['target']),i=t['invert']?!p:p;switch(t['action']){case'show':if(i!=Drupal.webform.isVisible(n)){var d=i?n.find('.webform-conditional-disabled').removeClass('webform-conditional-disabled'):n.find(':input').addClass('webform-conditional-disabled');d.webformProp('disabled',!i);n.toggleClass('webform-conditional-hidden',!i);if(i){n.show()}
else{n.hide();o[t['target']]='hide'};if(n.is('tr')){Drupal.webform.restripeTable(n.closest('table').first())}};break;case'require':var l=n.find('.form-required, .form-optional').first();if(i!=l.hasClass('form-required')){var m=n.find('input:text,textarea,input[type=\'email\'],select,input:radio,input:file');Drupal.detachBehaviors(l);m.webformProp('required',i).toggleClass('required',i);if(i){l.replaceWith('<span class="form-required" title="'+Drupal.t('This field is required.')+'">*</span>')}
else{l.replaceWith('<span class="form-optional"></span>')};Drupal.attachBehaviors(l)};break;case'set':var b=o[t['target']];var f=n.find('input:text,textarea,input[type=\'email\']'),c=n.find('select,select option,input:radio,input:checkbox'),u=n.filter('.webform-component-markup');if(i){var s=r.map(t['argument'].split(','),r.trim);c.webformVal(s);f.val([t['argument']]);u.html(t['argument'])}
else{u.each(function(){var a=r(this),e=a.data('webform-markup');if(e!==undefined){a.html(e)}})};if(!b){c.webformProp('disabled',i);f.webformProp('readonly',i);o[t['target']]=i?'set':!1};break}})})};Drupal.webform.stopEvent=function(){return!1};Drupal.webform.conditionalOperatorStringEqual=function(e,a,t){var n=!1,o=Drupal.webform.stringValue(e,a);r.each(o,function(r,e){if(e.toLowerCase()===t.toLowerCase()){n=!0;return!1}});return n};Drupal.webform.conditionalOperatorStringNotEqual=function(e,a,t){var n=!1,o=Drupal.webform.stringValue(e,a);r.each(o,function(r,e){if(e.toLowerCase()===t.toLowerCase()){n=!0}});return!n};Drupal.webform.conditionalOperatorStringContains=function(e,a,t){var n=!1,o=Drupal.webform.stringValue(e,a);r.each(o,function(r,e){if(e.toLowerCase().indexOf(t.toLowerCase())>-1){n=!0;return!1}});return n};Drupal.webform.conditionalOperatorStringDoesNotContain=function(e,a,t){var n=!1,o=Drupal.webform.stringValue(e,a);r.each(o,function(r,e){if(e.toLowerCase().indexOf(t.toLowerCase())>-1){n=!0}});return!n};Drupal.webform.conditionalOperatorStringBeginsWith=function(e,a,t){var n=!1,o=Drupal.webform.stringValue(e,a);r.each(o,function(r,e){if(e.toLowerCase().indexOf(t.toLowerCase())===0){n=!0;return!1}});return n};Drupal.webform.conditionalOperatorStringEndsWith=function(e,a,t){var n=!1,o=Drupal.webform.stringValue(e,a);r.each(o,function(r,e){if(e.toLowerCase().lastIndexOf(t.toLowerCase())===e.length-t.length){n=!0;return!1}});return n};Drupal.webform.conditionalOperatorStringEmpty=function(e,a,t){var o=Drupal.webform.stringValue(e,a),n=!0;r.each(o,function(r,e){if(e!==''){n=!1;return!1}});return n};Drupal.webform.conditionalOperatorStringNotEmpty=function(r,e,a){return!Drupal.webform.conditionalOperatorStringEmpty(r,e,a)};Drupal.webform.conditionalOperatorSelectGreaterThan=function(r,e,a){var t=Drupal.webform.stringValue(r,e);return Drupal.webform.compare_select(t[0],a,r)>0};Drupal.webform.conditionalOperatorSelectGreaterThanEqual=function(r,e,a){var n=Drupal.webform.stringValue(r,e),t=Drupal.webform.compare_select(n[0],a,r);return t>0||t===0};Drupal.webform.conditionalOperatorSelectLessThan=function(r,e,a){var t=Drupal.webform.stringValue(r,e);return Drupal.webform.compare_select(t[0],a,r)<0};Drupal.webform.conditionalOperatorSelectLessThanEqual=function(r,e,a){var n=Drupal.webform.stringValue(r,e),t=Drupal.webform.compare_select(n[0],a,r);return t<0||t===0};Drupal.webform.conditionalOperatorNumericEqual=function(r,e,a){var t=Drupal.webform.stringValue(r,e),n=0.000001;return t[0]===''?!1:(Math.abs(parseFloat(t[0])-parseFloat(a))<n)};Drupal.webform.conditionalOperatorNumericNotEqual=function(r,e,a){var t=Drupal.webform.stringValue(r,e),n=0.000001;return t[0]===''?!0:(Math.abs(parseFloat(t[0])-parseFloat(a))>=n)};Drupal.webform.conditionalOperatorNumericGreaterThan=function(r,e,a){var t=Drupal.webform.stringValue(r,e);return parseFloat(t[0])>parseFloat(a)};Drupal.webform.conditionalOperatorNumericGreaterThanEqual=function(r,e,a){return Drupal.webform.conditionalOperatorNumericGreaterThan(r,e,a)||Drupal.webform.conditionalOperatorNumericEqual(r,e,a)};Drupal.webform.conditionalOperatorNumericLessThan=function(r,e,a){var t=Drupal.webform.stringValue(r,e);return parseFloat(t[0])<parseFloat(a)};Drupal.webform.conditionalOperatorNumericLessThanEqual=function(r,e,a){return Drupal.webform.conditionalOperatorNumericLessThan(r,e,a)||Drupal.webform.conditionalOperatorNumericEqual(r,e,a)};Drupal.webform.conditionalOperatorDateEqual=function(r,e,a){var t=Drupal.webform.dateValue(r,e);return t===a};Drupal.webform.conditionalOperatorDateNotEqual=function(r,e,a){return!Drupal.webform.conditionalOperatorDateEqual(r,e,a)};Drupal.webform.conditionalOperatorDateBefore=function(r,e,a){var t=Drupal.webform.dateValue(r,e);return(t!==!1)&&t<a};Drupal.webform.conditionalOperatorDateBeforeEqual=function(r,e,a){var t=Drupal.webform.dateValue(r,e);return(t!==!1)&&(t<a||t===a)};Drupal.webform.conditionalOperatorDateAfter=function(r,e,a){var t=Drupal.webform.dateValue(r,e);return(t!==!1)&&t>a};Drupal.webform.conditionalOperatorDateAfterEqual=function(r,e,a){var t=Drupal.webform.dateValue(r,e);return(t!==!1)&&(t>a||t===a)};Drupal.webform.conditionalOperatorTimeEqual=function(r,e,a){var t=Drupal.webform.timeValue(r,e);return t===a};Drupal.webform.conditionalOperatorTimeNotEqual=function(r,e,a){return!Drupal.webform.conditionalOperatorTimeEqual(r,e,a)};Drupal.webform.conditionalOperatorTimeBefore=function(r,e,a){var t=Drupal.webform.timeValue(r,e);return(t!==!1)&&(t<a)};Drupal.webform.conditionalOperatorTimeBeforeEqual=function(r,e,a){var t=Drupal.webform.timeValue(r,e);return(t!==!1)&&(t<a||t===a)};Drupal.webform.conditionalOperatorTimeAfter=function(r,e,a){var t=Drupal.webform.timeValue(r,e);return(t!==!1)&&(t>a)};Drupal.webform.conditionalOperatorTimeAfterEqual=function(r,e,a){var t=Drupal.webform.timeValue(r,e);return(t!==!1)&&(t>a||t===a)};Drupal.webform.compare_select=function(e,a,t){var n=[];r('option,input:radio,input:checkbox',t).each(function(){n.push(r(this).val())});var i=n.indexOf(e),o=n.indexOf(a);return(i<0||o<0)?null:i-o};Drupal.webform.isVisible=function(r){return r.hasClass('webform-component-hidden')?!r.find('input').first().hasClass('webform-conditional-disabled'):r.closest('.webform-conditional-hidden').length==0};Drupal.webform.stringValue=function(e,a){var t=[];if(e){var o=r(e);if(Drupal.webform.isVisible(o)){o.find('input[type=checkbox]:checked,input[type=radio]:checked').each(function(){t.push(this.value)});if(!t.length){var n=o.find('select').val();if(n){if(r.isArray(n)){t=n}
else{t.push(n)}}};if(!t.length){o.find('input:not([type=checkbox],[type=radio]),textarea').each(function(){t.push(this.value)})}}}
else{switch(r.type(a)){case'array':t=a;break;case'string':t.push(a);break}};return t};Drupal.webform.dateValue=function(e,a){var o=!1;if(e){var t=r(e);if(Drupal.webform.isVisible(t)){var i=t.find('[name*=day]').val(),n=t.find('[name*=month]').val(),l=t.find('[name*=year]').val();if(n){n--};if(l!==''&&n!==''&&i!==''){o=Date.UTC(l,n,i)/1000}}}
else{if(r.type(a)==='array'&&a.length){a=a[0]};if(r.type(a)==='string'){a=a.split('-')};if(a.length===3){o=Date.UTC(a[0],a[1],a[2])/1000}};return o};Drupal.webform.timeValue=function(e,a){var i=!1;if(e){var o=r(e);if(Drupal.webform.isVisible(o)){var t=o.find('[name*=hour]').val(),n=o.find('[name*=minute]').val(),l=o.find('[name*=ampm]:checked').val();t=(t==='')?t:parseInt(t);n=(n==='')?n:parseInt(n);if(t!==''){t=(t<12&&l=='pm')?t+12:t;t=(t===12&&l=='am')?0:t};if(t!==''&&n!==''){i=Date.UTC(1970,0,1,t,n)/1000}}}
else{if(r.type(a)==='array'&&a.length){a=a[0]};if(r.type(a)==='string'){a=a.split(':')};if(a.length>=2){i=Date.UTC(1970,0,1,a[0],a[1])/1000}};return i};r.fn.webformProp=r.fn.webformProp||function(e,a){if(a){return r.fn.prop?this.prop(e,!0):this.attr(e,!0)}
else{return r.fn.prop?this.prop(e,!1):this.removeAttr(e)}};r.fn.webformVal=function(e){this.each(function(){var a=r(this),n=a.val(),t=r.inArray(a.val(),e)!=-1;if(this.nodeName=='OPTION'){a.webformProp('selected',t?n:!1)}
else{a.val(t?[n]:!1)}});return this};Drupal.webform.restripeTable=function(e){r('> tbody > tr, > tr',e).filter(':visible:odd').filter('.odd').removeClass('odd').addClass('even').end().end().filter(':visible:even').filter('.even').removeClass('even').addClass('odd')}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/sites/all/modules/webform/js/webform.js. */
/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/sites/all/themes/curve_omega/js/jquery.matchHeight.js. */
(function(t){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],t)}
else if(typeof module!=='undefined'&&module.exports){module.exports=t(require('jquery'))}
else{t(jQuery)}})(function(t){var a=-1,n=-1,i=function(t){return parseFloat(t)||0},s=function(e){var a=1,o=t(e),n=null,r=[];o.each(function(){var e=t(this),s=e.offset().top-i(e.css('margin-top')),o=r.length>0?r[r.length-1]:null;if(o===null){r.push(e)}
else{if(Math.floor(Math.abs(n-s))<=a){r[r.length-1]=o.add(e)}
else{r.push(e)}};n=s});return r},r=function(e){var i={byRow:!0,property:'height',target:null,remove:!1};if(typeof e==='object'){return t.extend(i,e)};if(typeof e==='boolean'){i.byRow=e}
else if(e==='remove'){i.remove=!0};return i},e=t.fn.matchHeight=function(i){var n=r(i);if(n.remove){var o=this;this.css(n.property,'');t.each(e._groups,function(t,e){e.elements=e.elements.not(o)});return this};if(this.length<=1&&!n.target){return this};e._groups.push({elements:this,options:n});e._apply(this,n);return this};e.version='master';e._groups=[];e._throttle=80;e._maintainScroll=!1;e._beforeUpdate=null;e._afterUpdate=null;e._rows=s;e._parse=i;e._parseOptions=r;e._apply=function(n,l){var o=r(l),a=t(n),c=[a],f=t(window).scrollTop(),p=t('html').outerHeight(!0),h=a.parents().filter(':hidden');h.each(function(){var e=t(this);e.data('style-cache',e.attr('style'))});h.css('display','block');if(o.byRow&&!o.target){a.each(function(){var i=t(this),e=i.css('display');if(e!=='inline-block'&&e!=='flex'&&e!=='inline-flex'){e='block'};i.data('style-cache',i.attr('style'));i.css({'display':e,'padding-top':'0','padding-bottom':'0','margin-top':'0','margin-bottom':'0','border-top-width':'0','border-bottom-width':'0','height':'100px','overflow':'hidden'})});c=s(a);a.each(function(){var e=t(this);e.attr('style',e.data('style-cache')||'')})};t.each(c,function(e,n){var a=t(n),r=0;if(!o.target){if(o.byRow&&a.length<=1){a.css(o.property,'');return};a.each(function(){var e=t(this),n=e.attr('style'),i=e.css('display');if(i!=='inline-block'&&i!=='flex'&&i!=='inline-flex'){i='block'};var a={'display':i};a[o.property]='';e.css(a);if(e.outerHeight(!1)>r){r=e.outerHeight(!1)};if(n){e.attr('style',n)}
else{e.css('display','')}})}
else{r=o.target.outerHeight(!1)};a.each(function(){var e=t(this),n=0;if(o.target &&e.is(o.target)){return};if(e.css('box-sizing')!=='border-box'){n+=i(e.css('border-top-width'))+i(e.css('border-bottom-width'));n+=i(e.css('padding-top'))+i(e.css('padding-bottom'))};e.css(o.property,(r-n)+'px')})});h.each(function(){var e=t(this);e.attr('style',e.data('style-cache')||null)});if(e._maintainScroll){t(window).scrollTop((f/p)*t('html').outerHeight(!0))};return this};e._applyDataApi=function(){var e={};t('[data-match-height], [data-mh]').each(function(){var r=t(this),i=r.attr('data-mh')||r.attr('data-match-height');if(i in e){e[i]=e[i].add(r)}
else{e[i]=r}});t.each(e,function(){this.matchHeight(!0)})};var o=function(i){if(e._beforeUpdate){e._beforeUpdate(i,e._groups)};t.each(e._groups,function(){e._apply(this.elements,this.options)});if(e._afterUpdate){e._afterUpdate(i,e._groups)}};e._update=function(i,r){if(r&&r.type==='resize'){var s=t(window).width();if(s===a){return};a=s};if(!i){o(r)}
else if(n===-1){n=setTimeout(function(){o(r);n=-1},e._throttle)}};t(e._applyDataApi);t(window).bind('load',function(t){e._update(!1,t)});t(window).bind('resize orientationchange',function(t){e._update(!0,t)})});;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/sites/all/themes/curve_omega/js/jquery.matchHeight.js. */
/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/sites/all/themes/curve_omega/js/jquery.ba-throttle-debounce.min.js. */
(function(t,i){var e=t.jQuery||t.Cowboy||(t.Cowboy={}),n;e.throttle=n=function(f,n,t,o){var u,a=0;if(typeof n!=='boolean'){o=t;t=n;n=i};function r(){var d=this,r=+new Date()-a,g=arguments;function e(){a=+new Date();t.apply(d,g)};function c(){u=i};if(o&&!u){e()};u&&clearTimeout(u);if(o===i&&r>f){e()}
else{if(n!==!0){u=setTimeout(o?c:e,o===i?f-r:f)}}};if(e.guid){r.guid=t.guid=t.guid||e.guid++};return r};e.debounce=function(t,e,u){return u===i?n(t,e,!1):n(t,u,e!==!1)}})(this);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/sites/all/themes/curve_omega/js/jquery.ba-throttle-debounce.min.js. */
!function(){"use strict";function a(b){if(!(this instanceof a))return new a(b);if(!b)throw new Error("No DOM elements passed into Touche");return this.nodes=b,this}var b="ontouchstart"in window||"msmaxtouchpoints"in window.navigator;if(a.prototype.on=function(a,c){var d,e,f=this.nodes,g=f.length;if(b&&"click"===a&&(d=!0),e=function(a,b,c){var e,f=function(){!e&&(e=!0)&&c.apply(this,arguments)};a.addEventListener(b,f,!1),d&&a.addEventListener("touchend",f,!1)},g)for(;g--;)e(f[g],a,c);else e(f,a,c);return this},window.Touche=a,window.jQuery&&b){var c=jQuery.fn.on;jQuery.fn.on=function(){var a=arguments[0];return arguments[0]="click"===a?"touchend":a,c.apply(this,arguments),this}}}();;/**/
/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/sites/all/themes/curve_omega/js/curve-omega.behaviors.js. */
(function(t){Drupal.behaviors.curveOmegamatchviewportheight={attach:function(i,e){last_time_2=+new Date();viewportTop=t(window).scrollTop();windowHeight=t(window).height();viewportBottom=windowHeight+viewportTop;if(t('.parallax').length){t('.parallax, .parallax--blur').height(t(window).height());if(t(window).width()<=600){t('#main-content').height(t(window).height())}
else{t('#main-content').height(t(window).height()-50)};function o(){return'ontouchstart' in window||'onmsgesturechange' in window};function n(i){var e=+new Date();if(!o()){viewportTop=t(window).scrollTop();windowHeight=t(window).height();viewportBottom=windowHeight+viewportTop;if(t(window).width()>=600&&viewportTop<=windowHeight){t('[data-parallax="true"]').each(function(){distance=viewportTop*t(this).attr('data-speed');if(t(this).attr('data-direction')==='up'){sym='-'}
else{sym=''};t(this).css('transform','translate3d(0, '+sym+distance+'px,0)')});t('[data-blur="true"]').each(function(){distance=100/windowHeight*viewportTop/100*4;t(this).css('opacity',distance)});t('.parallax__wrapper').each(function(){distance=1-(100/windowHeight*viewportTop/100*2);t(this).css('opacity',distance);if(distance<=0){t(this).css('display','none')}
else{t(this).css('display','block')}});t('[data-push-left="true"]').each(function(){distance=100/windowHeight*viewportTop*10;t(this).css('left',distance)});t('[data-push-right="true"]').each(function(){distance=100/windowHeight*viewportTop*10;t(this).css('right',distance)})}
else{t('[data-push-left="true"]').each(function(){distance=100/windowHeight*viewportTop*10;t(this).css('left','auto')});t('[data-push-right="true"]').each(function(){distance=100/windowHeight*viewportTop*10;t(this).css('right','auto')});t('.parallax__wrapper').each(function(){t(this).css('opacity','1');t(this).css('display','block')});t('[data-parallax="true"]').each(function(){t(this).css('transform','none')})}};last_time_2=e};function a(){requestAnimationFrame(a);n()};t(window).scroll(t.throttle(2000,a));t(window).resize(function(){t('.parallax, .parallax--blur').height(t(window).height());if(t(window).width()<=600){t('#main-content').height(t(window).height())}
else{t('#main-content').height(t(window).height()-50)}})}}};Drupal.behaviors.curveOmegaMatchHeights={attach:function(i,e){t('.case-study').matchHeight();t('.blog-article').matchHeight();t('.view-mode-summary_card').matchHeight()}};Drupal.behaviors.curveOmegaLockscreen={attach:function(i,e){t('#drawer-toggle').change(function(){if(t('#drawer-toggle').is(':checked')){t('#page-wrapper').addClass('open')}
else{t('#page-wrapper').removeClass('open')}})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/sites/all/themes/curve_omega/js/curve-omega.behaviors.js. */