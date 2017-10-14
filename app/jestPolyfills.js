// Get around requestAnimationFrame (now a hard dep for react) not being available in tests
// (split out in polyfill for actual site)
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}
