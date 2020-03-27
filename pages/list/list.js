import utils from '../../utils/util.js'
var app = getApp();
Page({
    data : {
        localList : [],
    },
 
    onLoad : function () {
        
    },

    onShow : function() {
        this.setData({
            localList: app.globalData.localList
        })
    },
    
    detailRoad(event) {
        utils.polyline = event.currentTarget.dataset.detail
        wx.switchTab({
            url: '/pages/index/index'
        })
    }
});