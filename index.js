if (typeof window === 'undefined' && typeof process !== 'undefined') {
  function now() {
    var time = process.hrtime()
    return time[0] * 1e9 + time[1]
  }
  var upTime = process.uptime() * 1e9
  var loadTime = now()
  var start = loadTime - upTime
  module.exports = function() {
    return (now() - start) / 1e6
  }
} else if (
  typeof window !== 'undefined' &&
  window.performance !== undefined &&
  window.performance.now !== undefined
) {
  module.exports = window.performance.now.bind(window.performance)
} else if (Date.now !== undefined) {
  var start = Date.now()
  module.exports = function() {
    return Date.now() - start
  }
} else {
  var start = new Date().getTime()
  module.exports = function() {
    return new Date().getTime() - start
  }
}
