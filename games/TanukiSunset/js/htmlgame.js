(function(){var o,n,a,t,i,l,c,e;n=null!=(e=window.location!==window.parent.location?null!=location.ancestorOrigins?location.ancestorOrigins[0]:document.referrer:document.location.href)&&null!=(a=e.match(/\/\/([^\/]+)/))?a[1]:void 0,c=null!=(t=window.location.href)&&null!=(i=t.match(/\/html\/(\d+)/))?i[1]:void 0,!!(null!=(l=document.location.href)?l.match(/^https?:\/\/commondatastorage\.googleapis\.com\/itchio\//):void 0)||(!n||"itch.io"===n||n.match(/\.itch\.io$/)),null!=navigator.sendBeacon&&((o=new FormData).append("domain",n||"unknown-domain"),c&&o.append("upload_id",c),navigator.sendBeacon("https://itch.io/html-callback",o))}).call(this);