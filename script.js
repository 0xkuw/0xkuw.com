const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to set cache headers for faster redirects
app.use((req, res, next) => {
    res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    next();
});

// Redirect route with hidden link
app.get('/redirect', (req, res) => {
    const redirectUrl = 'https://kzmpt3ur0iruinw7sqj6.lite.vusercontent.net';
    res.redirect(redirectUrl);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
