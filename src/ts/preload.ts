window.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('span.js_versionInfo')).map((element) => {
    const versionInfo = process.env.npm_package_version
    if (versionInfo !== undefined) element.textContent = versionInfo
  })
})
