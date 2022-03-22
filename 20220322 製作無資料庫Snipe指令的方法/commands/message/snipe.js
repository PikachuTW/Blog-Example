const { MessageEmbed } = require('discord.js');

exports.run = async (client, message) => {

    const data = client.container.snipeData.get(message.channel.id);

    if (!data) return message.reply('沒有可Snipe的訊息');

    const msg = data.msg;
    const senderatt = data.att;

    if (!msg && !senderatt) return message.reply('沒有可Snipe的訊息');

    const embed = new MessageEmbed()
        .setAuthor({ name: client.users.cache.get(data.author).tag })
        .setDescription(`${msg}\n${senderatt}`)
        .setFooter({ text: data.time })
        .setColor('F8DA07');
    if (senderatt == null) embed.setDescription(msg);
    if (senderatt) embed.setImage(senderatt);
    message.reply({ embeds: [embed] });
};

exports.conf = {
    aliases: ['s'],
    permLevel: 'User',
};

exports.help = {
    name: 'snipe',
    description: 'Snipe訊息',
    usage: 'snipe',
};