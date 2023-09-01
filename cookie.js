const cookieKnap = document.getElementById('cookie-knap');
const cookieAntal = document.getElementById('cookie-antal');

let cookies = 0;

cookieKnap.addEventListener('click', () => {
    // 1 Cookie per klik
    cookies++;
    cookieAntal.textContent = cookies;
});

// Producere 5 Cookies per 3sek automatisk
setInterval(() => {
    cookies += 5;
    cookieAntal.textContent = cookies;
}, 3000);

