(function(window){var svgSprite='<svg><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M512.34944 35.19488C242.81984 35.19488 24.32 253.67424 24.32 523.2256c0 269.54368 218.48064 488.0256 488.02944 488.0256 269.54496 0 488.0256-218.48064 488.0256-488.0256 0-269.55136-218.46016-488.03072-488.0256-488.03072z m0 910.08c-233.09952 0-422.0544-188.97536-422.0544-422.05056 0-233.08032 188.97536-422.0544 422.0544-422.0544C745.44512 101.16992 934.4 290.14528 934.4 523.2256c0 233.07392-188.97536 422.04928-422.05056 422.04928z m0 0"  ></path><path d="M377.10464 352.82944c0-18.41536 15.7504-33.36448 33.95072-33.36448 18.76992 0 33.97504 15.4752 33.97504 33.36448v340.74624c0 18.41536-15.7504 33.36448-33.97504 33.36448-18.75072 0-33.95072-15.4752-33.95072-33.36448V352.82944z m0 0M580.83968 352.82944c0-18.41536 15.7504-33.36448 33.95456-33.36448 18.76992 0 33.94944 15.4752 33.94944 33.36448v340.74624c0 18.41536-15.7248 33.36448-33.94944 33.36448-18.76992 0-33.95456-15.4752-33.95456-33.36448V352.82944z m0 0"  ></path></symbol><symbol id="icon-bofang" viewBox="0 0 1365 1024"><path d="M705.333333 964.266667c-63.066667 0-124.266667-12.4-181.866666-36.8-55.6-23.6-105.6-57.2-148.533334-100.133334-42.933333-42.933333-76.666667-92.933333-100.133333-148.533333-24.4-57.6-36.8-118.8-36.8-181.866667 0-63.066667 12.4-124.266667 36.8-181.866666 23.6-55.6 57.2-105.6 100.133333-148.533334s92.933333-76.666667 148.533334-100.133333c57.6-24.4 118.8-36.8 181.866666-36.8 63.066667 0 124.266667 12.4 181.866667 36.8 55.6 23.6 105.6 57.2 148.533333 100.133333s76.666667 92.933333 100.133334 148.533334c24.4 57.6 36.8 118.8 36.8 181.866666 0 63.066667-12.4 124.266667-36.8 181.866667-23.6 55.6-57.2 105.6-100.133334 148.533333s-92.933333 76.666667-148.533333 100.133334c-57.6 24.533333-118.8 36.8-181.866667 36.8z m0-868c-107.066667 0-207.6 41.733333-283.333333 117.333333-75.733333 75.733333-117.333333 176.266667-117.333333 283.333333s41.733333 207.6 117.333333 283.333334c75.733333 75.733333 176.266667 117.333333 283.333333 117.333333s207.6-41.733333 283.333334-117.333333 117.333333-176.266667 117.333333-283.333334-41.733333-207.6-117.333333-283.333333c-75.733333-75.6-176.266667-117.333333-283.333334-117.333333z" fill="" ></path><path d="M905.866667 476.8L573.6 284.933333c-15.6-8.933333-34.933333 2.266667-34.933333 20.266667v383.733333c0 18 19.466667 29.2 34.933333 20.266667L905.866667 517.333333c15.466667-9.066667 15.466667-31.6 0-40.533333z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)