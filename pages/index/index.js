import utils from '../../utils/util.js'
var app = getApp();
var point = [];
var that;
var item = {}
 
function drawline() {
    that.setData({
        polyline : [{
            points : point,
            color : '#1296db',
            width : 4,
            dottedLine : false
        }]
    });
}
 
//获取经纬度
function getlocation() {
    var lat, lng;
    wx.getLocation({
       type : 'gcj02',
        success : function (res) {
            lat = res.latitude;
            lng = res.longitude;
            point.push({latitude: lat, longitude : lng});
            console.log(point);
        }
    });
}
 
Page({
    data : {
        polyline : [],
        flag: -1
    },
 
    onLoad : function () {
        that = this;
        wx.getLocation({
           type: 'gcj02',
            success : function (res) {
              console.log(res)
                that.setData({
                    longitude : res.longitude,
                    latitude : res.latitude,
                });
            }
        });
    },

    onShow : function() {
        console.log(utils.polyline)
        point = utils.polyline
        drawline()
        console.log(this.data.polyline)
    },
 
    start : function () {
        if (this.data.flag == 1) {
            utils.toast('定位已启动！')
            return
        }
        utils.toast('定位开始启动！')
        this.setData({
            flag: 1
        })
        point = []
        item.starttime = utils.formatTime(new Date())
        this.timer = setInterval(repeat, 1000);
        function repeat() {
            console.log('re');
            getlocation();
            drawline();
        }
    },
    end : function () {
        if (this.data.flag == 0) {
            utils.toast('定位已关闭！')
            return
        }
        utils.toast('定位关闭！')
        this.setData({
            flag: 0
        })
        console.log('end');
        clearInterval(this.timer);
        item.list = point
        item.endtime = utils.formatTime(new Date())
        app.globalData.localList.push(item)

        console.log(app.globalData.localList)
    }
});