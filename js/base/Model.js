window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        // 获取数据
        init: function () {
            AV.init({
                appId: "9PnlLi2a8MUxQhgn0oK9h40Y-gzGzoHsz",
                appKey: "AoZH5YXLHLKkrbqFTz8Wklzk",
                serverURL: "https://9pnlli2a.lc-cn-n1-shared.com",
            })
        },
        fetch: function () {
            const query = new AV.Query("Message");
            return query.find() // Promise 对象
        },
        // 创建数据
        save: function (object) {
            var Message = AV.Object.extend(resourceName);
            var message = new Message();
            return message.save(object)
        }
    }
}





