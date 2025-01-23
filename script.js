document.getElementById('url-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const longUrl = document.getElementById('long-url').value;
    const resultDiv = document.getElementById('result');
    const shortUrlElement = document.getElementById('short-url');

    // Demo: Generate a fake shortened URL
    const shortUrl = `https://short.url/${Math.random().toString(36).substring(2, 8)}`;
    shortUrlElement.textContent = shortUrl;
    shortUrlElement.href = shortUrl;

    resultDiv.classList.remove('hidden');
});
