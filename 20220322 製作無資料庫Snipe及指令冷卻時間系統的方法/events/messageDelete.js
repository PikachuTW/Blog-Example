module.exports = (client, message) => {
    client.container.snipeData.set(message.channel.id, {
        msg: message.content,
        author: message.author.id,
        time: new Date(message.createdTimestamp).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        att: message.attachments.first() ? message.attachments.first().proxyURL : null,
    });
}