const asciiToggle = document.querySelectorAll('.js_toggle')

asciiToggle.forEach((clickedToggle) => {
  clickedToggle.addEventListener('click', (e) => {
    e.preventDefault()

    // activeであるクラスタグの定義
    const activeClassName = ['is-info', 'is-selected']

    // 現在activeなものをdeactivateする
    Array.from(asciiToggle).forEach((toggle) => toggle.classList.remove(...activeClassName))
    // クリックされたものをactivateする
    clickedToggle.classList.add(...activeClassName)
  })
})
