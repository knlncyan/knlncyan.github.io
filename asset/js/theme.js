/* 第一个主题 */
const oneTheme = document.querySelector('.oneTheme')
let flag_1, flag_2
let count = 0
let arr = [0,0,0,0,0,0,0]
let open = 6
// let timeWait = 4 
function createBox (key) {
  for (let i = 0; i < key; i++) {
    const box = document.createElement('div')
    //随机大小
    const r = Math.ceil(Math.random()*25)+10
    //随机颜色
    const a = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    const c = Math.floor(Math.random()*256)
    //形状生成
    box.style.width = `${r}px`
    box.style.height = `${r}px`
    box.style.borderRadius = `${r/2}px` 
    box.style.backgroundColor = `rgb(${a},${b},${c})`
    const d = Math.floor(Math.random()*101)
    const e = Math.floor(Math.random()*101)
    box.style.left = `${d}%`
    box.style.top = `${e}%`
    // box.innerHTML = `我是第${i}个box`
    oneTheme.appendChild(box)
  }  
}

function cleanBox(count) {
  for(let i = 0; i < count; i++) {
    const children = oneTheme.firstChild
      oneTheme.removeChild(children)
  }
}

flag_1 = setInterval(function() {
  count%=7
  const key = Math.floor(Math.random()*5+5)
  arr[count] = key
  // console.log(arr)
  count++
  // console.log(count)
  createBox(key)
},1000)

flag_2 = setInterval(function() {
  if (open == 0) {
    count%=7
  cleanBox(arr[count])
  // arr[count] = 0
  // console.log(arr)
  }
  else {
    open--
  }
},1000)
