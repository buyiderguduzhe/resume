!function () {
    var model = {
        // 获取数据
        init() {
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
        save: function (name) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({  // Promise 对象
                'name': name
            })
        }
    }

    var view = View('#topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', function (x) {
                if (window.scrollY > 0) {
                    this.active()
                }
                else {
                    this.deactive()
                }
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
}.call()





