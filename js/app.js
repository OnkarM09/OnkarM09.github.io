if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(reg=>console.log('SW is registered!',reg))
    .catch(err=>console.log('Error occured!',err))
}