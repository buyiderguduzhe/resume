const { Query, User } = AV;

AV.init({
    appId: "9PnlLi2a8MUxQhgn0oK9h40Y-gzGzoHsz",
    appKey: "AoZH5YXLHLKkrbqFTz8Wklzk",
    serverURL: "https://9pnlli2a.lc-cn-n1-shared.com",
});

const query = new AV.Query("Message");
query.find()
    .then(
        function (messages) {
            let array = messages.map((item) => item.attributes)
            array.forEach((item) => {
                let li = document.createElement('li')
                li.innerText = `${item.name}: ${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
            })
        })

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    const Message = AV.Object.extend("Message");
    const message = new Message();
    message.save({
        'name': name,
        'content': content
    }).then((message) => {
        console.log("保存成功。");
        let li = document.createElement('li')
        li.innerText = `${message.attributes.name}: ${message.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
    });
})



