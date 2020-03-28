const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return {
    date: [year, month, day].map(formatNumber).join('/'),
    time: [hour, minute, second].map(formatNumber).join(':')
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const toast = title => {
  wx.showToast({
    title: title,
    icon: 'none'
  })
}

var polyline = []

module.exports = {
  formatTime: formatTime,
  toast: toast,
  polyline
}
