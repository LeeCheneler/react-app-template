const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        // eslint-disable-next-line no-console
        .catch(error => console.log('ServiceWorker registration failed: ', error))
    })
  }
}

export default registerServiceWorker
