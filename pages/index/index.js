import {formatTime} from '../../utils/util.js'
var app = getApp();
var point = [];
var that;
 
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
        // markers: [{
        //   id: 0,
        //   title: '起始位置',
        //   latitude: 34.22259,
        //   longitude: 108.94878,
        //   iconPath: '../../static/tabBar/route(1).png',
        //   width: 200,
        //   height: 200
        // }]
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
 
    start : function () {
        this.timer = setInterval(repeat, 1000);
        function repeat() {
            console.log('re');
            getlocation();
            drawline();
        }
    },
    end : function () {
        console.log('end');
        clearInterval(this.timer);
        var item = {}
        item.list = point
        item.time = formatTime(new Date())
        app.globalData.localList.push(item)

        console.log(app.globalData.localList)
    }
});