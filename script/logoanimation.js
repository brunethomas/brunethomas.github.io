/* var animation = bodymovin.loadAnimation({
    container: document.getElementById('logoanimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../data.json',
}) */

var animData = {
    container: document.getElementById('bm'),
    renderer: 'html',
    loop: true,
    autoplay: true,
    path: 'data.json'
};

var logoanimation = lottie.loadAnimation(animData);