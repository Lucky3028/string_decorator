const tabLinks = document.querySelectorAll('.js_tabNav_link')
const tabContents = document.querySelectorAll('.js_panel')

tabLinks.forEach((clickedLabel) => {
  clickedLabel.addEventListener('click', (e) => {
    //aタグのリンク遷移をキャンセルする
    e.preventDefault()

    // activeであることを示すクラスタグの定義
    const activeClassName = 'is-active'
    // hiddenであることを示すクラスタグの定義
    const hiddenClassName = 'is-hidden'

    // タブのis-activeを消す
    Array.from(tabLinks).forEach((link) => link.classList.remove(activeClassName))

    // ページコンテンツに全てis-hiddenをつける
    Array.from(tabContents).forEach((cont) => cont.classList.add(hiddenClassName))

    // クリックされたタブにis-activeをつける
    clickedLabel.classList.add(activeClassName)

    // 対応するページコンテンツからis-hiddenを消去する
    const dataId = clickedLabel instanceof HTMLElement ? clickedLabel.dataset.id : undefined
    if (dataId == undefined) return

    Array.from(tabContents)
      .filter((cont) => cont instanceof HTMLElement && dataId == cont.dataset.id)
      .forEach((cont) => cont.classList.remove(hiddenClassName))
  })
})
