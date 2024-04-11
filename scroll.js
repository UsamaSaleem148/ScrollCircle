var data = 3

let scaleData = [9, 8, 7, 6, 5, 4, 3, 2, 1]

let widthData = [1704, 1548, 1392, 1236, 1080, 924, 768, 612, 458]

var scrollEnded = $.debounce(250, function (e) {
  for (let i = 0; i < 9; i++) {
    if (!document.getElementById(`circle${i}`).style.width) {
      document.getElementById(`circle${i}`).style.width = widthData[i] + 'px'
      document.getElementById(`circle${i}`).style.height = widthData[i] + 'px'
    }
    if (e.deltaY > 0) {
      if (scaleData[8] === 1) return
      document.getElementById(`circle${i}`).style.transition = 'all ' + 3 / (data + (0.25 + i)) + 's ease-in-out'
      if (scaleData[i] === -1) {
        scaleData[i] = 1
        document.getElementById(`circle${i}`).style.width = '458px'
        document.getElementById(`circle${i}`).style.height = '458px'
      } else if (scaleData[i] > 0) {
        scaleData[i] = scaleData[i] + 1
        document.getElementById(`circle${i}`).style.width = parseInt(document.getElementById(`circle${i}`).style.width.replace('px', '')) + 156 + 'px'
        document.getElementById(`circle${i}`).style.height = parseInt(document.getElementById(`circle${i}`).style.height.replace('px', '')) + 156 + 'px'
      } else if (scaleData[i] < -1) {
        scaleData[i] = scaleData[i] + 1
      }
    } else if (document.getElementById(`circle${i}`).style.width.replace('px', '').toString() !== '0') {
      if (scaleData[8] === -3) return
      document.getElementById(`circle${i}`).style.transition = 'all ' + 3 / (data - (0.25 - i)) + 's ease-in-out'
      if (scaleData[i] === 1) {
        scaleData[i] = -1
        document.getElementById(`circle${i}`).style.width = 0 + 'px'
        document.getElementById(`circle${i}`).style.height = 0 + 'px'
      } else {
        scaleData[i] = scaleData[i] - 1
        document.getElementById(`circle${i}`).style.width = parseInt(document.getElementById(`circle${i}`).style.width.replace('px', '')) - 156 + 'px'
        document.getElementById(`circle${i}`).style.height = parseInt(document.getElementById(`circle${i}`).style.height.replace('px', '')) - 156 + 'px'
      }
    } else if (document.getElementById(`circle${i}`).style.width.replace('px', '').toString() === '0') {
      scaleData[i] = scaleData[i] - 1
    }
  }
})

window.onload = function () {
  document.getElementById('main-circle').addEventListener('wheel', scrollEnded)
}
