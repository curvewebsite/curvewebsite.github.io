/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/misc/jquery.once.js. */
(function(n){var e={},r=0;n.fn.once=function(i,o){if(typeof i!='string'){if(!(i in e)){e[i]=++r};if(!o){o=i};i='jquery-once-'+e[i]};var t=i+'-processed',s=this.not('.'+t).addClass(t);return n.isFunction(o)?s.each(o):s};n.fn.removeOnce=function(e,r){var o=e+'-processed',i=this.filter('.'+o).removeClass(o);return n.isFunction(r)?i.each(r):i}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/misc/jquery.once.js. */
/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/misc/drupal.js. */
;var Drupal=Drupal||{'settings':{},'behaviors':{},'locale':{}};jQuery.noConflict();(function(t){var e=t.fn.init;t.fn.init=function(t,r,n){if(t&&typeof t==='string'){var a=t.indexOf('#');if(a>=0){var o=t.indexOf('<');if(o>a){throw'Syntax error, unrecognized expression: '+t}}};return e.call(this,t,r,n)};t.fn.init.prototype=e.prototype;Drupal.attachBehaviors=function(e,r){e=e||document;r=r||Drupal.settings;t.each(Drupal.behaviors,function(){if(t.isFunction(this.attach)){this.attach(e,r)}})};Drupal.detachBehaviors=function(e,r,n){e=e||document;r=r||Drupal.settings;n=n||'unload';t.each(Drupal.behaviors,function(){if(t.isFunction(this.detach)){this.detach(e,r,n)}})};Drupal.checkPlain=function(t){var e,n,r={'&':'&amp;','"':'&quot;','<':'&lt;','>':'&gt;'};t=String(t);for(e in r){if(r.hasOwnProperty(e)){n=new RegExp(e,'g');t=t.replace(n,r[e])}};return t};Drupal.formatString=function(t,e){for(var r in e){if(e.hasOwnProperty(r)){switch(r.charAt(0)){case'@':e[r]=Drupal.checkPlain(e[r]);break;case'!':break;default:e[r]=Drupal.theme('placeholder',e[r]);break}}};return Drupal.stringReplace(t,e,null)};Drupal.stringReplace=function(e,n,r){if(e.length===0){return e};if(!t.isArray(r)){r=[];for(var u in n){if(n.hasOwnProperty(u)){r.push(u)}};r.sort(function(t,e){return t.length-e.length})};if(r.length===0){return e};var l=r.pop(),a=e.split(l);if(r.length){for(var o=0;o<a.length;o++){a[o]=Drupal.stringReplace(a[o],n,r.slice(0))}};return a.join(n[l])};Drupal.t=function(t,r,e){e=e||{};e.context=e.context||'';if(Drupal.locale.strings&&Drupal.locale.strings[e.context]&&Drupal.locale.strings[e.context][t]){t=Drupal.locale.strings[e.context][t]};if(r){t=Drupal.formatString(t,r)};return t};Drupal.formatPlural=function(t,r,n,e,o){e=e||{};e['@count']=t;var a=Drupal.locale.pluralFormula?Drupal.locale.pluralFormula(e['@count']):((e['@count']==1)?0:1);if(a==0){return Drupal.t(r,e,o)}
else if(a==1){return Drupal.t(n,e,o)}
else{e['@count['+a+']']=e['@count'];delete e['@count'];return Drupal.t(n.replace('@count','@count['+a+']'),e,o)}};Drupal.absoluteUrl=function(t){var r=document.createElement('a');try{t=decodeURIComponent(t)}catch(e){};r.setAttribute('href',t);return r.cloneNode(!1).href};Drupal.urlIsLocal=function(t){var e=Drupal.absoluteUrl(t),a=location.protocol;if(a==='http:'&&e.indexOf('https:')===0){a='https:'};var r=a+'//'+location.host+Drupal.settings.basePath.slice(0,-1);try{e=decodeURIComponent(e)}catch(n){};try{r=decodeURIComponent(r)}catch(n){};return e===r||e.indexOf(r+'/')===0};Drupal.theme=function(t){var e=Array.prototype.slice.apply(arguments,[1]);return(Drupal.theme[t]||Drupal.theme.prototype[t]).apply(this,e)};Drupal.freezeHeight=function(){Drupal.unfreezeHeight();t('<div id="freeze-height"></div>').css({position:'absolute',top:'0px',left:'0px',width:'1px',height:t('body').css('height')}).appendTo('body')};Drupal.unfreezeHeight=function(){t('#freeze-height').remove()};Drupal.encodePath=function(t,e){e=e||location.href;return encodeURIComponent(t).replace(/%2F/g,'/')};Drupal.getSelection=function(t){if(typeof t.selectionStart!='number'&&document.selection){var e=document.selection.createRange(),r=e.duplicate();r.moveToElementText(t);r.setEndPoint('EndToEnd',e);var n=r.text.length-e.text.length,a=n+e.text.length;return{'start':n,'end':a}};return{'start':t.selectionStart,'end':t.selectionEnd}};Drupal.beforeUnloadCalled=!1;t(window).bind('beforeunload pagehide',function(){Drupal.beforeUnloadCalled=!0});Drupal.displayAjaxError=function(t){if(!Drupal.beforeUnloadCalled){alert(t)}};Drupal.ajaxError=function(e,r,n){var u,l,i,a,s,p;if(e.status){u='\n'+Drupal.t('An AJAX HTTP error occurred.')+'\n'+Drupal.t('HTTP Result Code: !status',{'!status':e.status})}
else{u='\n'+Drupal.t('An AJAX HTTP request terminated abnormally.')};u+='\n'+Drupal.t('Debugging information follows.');i='\n'+Drupal.t('Path: !uri',{'!uri':r});l='';try{l='\n'+Drupal.t('StatusText: !statusText',{'!statusText':t.trim(e.statusText)})}catch(o){};a='';try{a='\n'+Drupal.t('ResponseText: !responseText',{'!responseText':t.trim(e.responseText)})}catch(o){};a=a.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,'');a=a.replace(/[\n]+\s+/g,'\n');s=e.status==0?('\n'+Drupal.t('ReadyState: !readyState',{'!readyState':e.readyState})):'';n=n?('\n'+Drupal.t('CustomMessage: !customMessage',{'!customMessage':n})):'';p=u+i+l+n+a+s;return p};t('html').addClass('js');document.cookie='has_js=1; path=/';t(function(){if(jQuery.support.positionFixed===undefined){var e=t('<div style="position:fixed; top:10px" />').appendTo(document.body);jQuery.support.positionFixed=e[0].offsetTop===10;e.remove()}});t(function(){Drupal.attachBehaviors(document,Drupal.settings)});Drupal.theme.prototype={placeholder:function(t){return'<em class="placeholder">'+Drupal.checkPlain(t)+'</em>'}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/misc/drupal.js. */
/* Source and licensing information for the line(s) below can be found at https://www.curveagency.com/sites/all/themes/omega/omega/js/no-js.js. */
(function(s){s('html').removeClass('no-js')})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.curveagency.com/sites/all/themes/omega/omega/js/no-js.js. */
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;/**/