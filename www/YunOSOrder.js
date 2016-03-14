var exec = require("cordova/exec");

module.exports = {

    DEFAULT_OPTIONS: {
        prikey: 0000,
        partber: "test",
        subject_id: 123456789,
        subject: "test",
        price: 100,     //以,分為單位
        partner_notify_url: "http://www.bais.com.tw",
        partner_order_no: ""
    },

    pay: function (path, options, successCallback, errorCallback) {
        options = this.merge(this.DEFAULT_OPTIONS, options);
        exec(successCallback, errorCallback, "YunOSOrder", "pay", [path, options]);
    }
};
