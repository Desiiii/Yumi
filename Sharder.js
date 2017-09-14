const Dicksword = require('discord.js');
const config = require('./src/Settings/config.json');

const shard = new Dicksword.ShardingManager('./Yumi.js', {
    token: config.discordToken // Bitch you ain't stealing my token
})

shard.spawn();

shard.on('launch', shard => {
    console.log(`Shard ${shard.id} is alive`)
})

/*
Credit to Melmsie xD
*/
