const tabLinks = document.querySelectorAll('.js_tabNav_link')
const tabContents = document.querySelectorAll('.js_panel')

tabLinks.forEach((clickedLabel) => {
  clickedLabel.addEventListener('click', (e) => {
    //aタグのリンク遷移をキャンセルする
    e.preventDefault()

    // activeであることを示すクラスタグの定義
    const activeClassName = 'is_active'

    // タブとページコンテンツのis_activeを消す
    Array.from(tabLinks).forEach((link) => link.classList.remove(activeClassName))
    Array.from(tabContents).forEach((cont) => cont.classList.remove(activeClassName))

    // クリックされたタブとそれに対応するページコンテンツにis_activeをつける
    clickedLabel.classList.add(activeClassName)

    const dataId = clickedLabel instanceof HTMLElement ? clickedLabel.dataset.id : undefined
    if (dataId == undefined) return

    Array.from(tabContents)
      .filter((cont) => cont instanceof HTMLElement && dataId == cont.dataset.id)
      .forEach((cont) => cont.classList.add(activeClassName))
  })
})
