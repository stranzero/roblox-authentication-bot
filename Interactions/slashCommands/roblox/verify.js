const discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const config = require('../../../util/config.js')
const { MessageEmbed } = require('discord.js')
const schema = require('../../../util/schema.js')
const mongo = require('mongoose')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription('verify your roblox account'),
    cooldown: 5000,    

    async execute(interaction) {
        const user = interaction.user
        // check if user is already verified
    
        try {
            const data = await schema.find({ discordID: user.id }).exec();
          
            if (data.length === 0) {
              const newSchema = new schema({
                robloxID: null,
                discordID: user.id,
                verified: false,
                statecode: null
              });
              await newSchema.save();
                let embed = new MessageEmbed()
                    .setTitle('Verification')
                    .setDescription('Click the button below to verify your roblox account!\n Once you have completed your authentication it will log in a channel which you can see.')
                    .setColor('GREEN')
                    .setTimestamp()
                    .setFooter('Verification')
            

                await interaction.reply({ embeds: [embed], components: [], ephemeral: true })
            } else {
                if (data) {
                    const code = makeid(10)
                    data[0].statecode = code; // Assuming data is an array and accessing the first object
                    await data[0].save();


                let embed = new MessageEmbed()
                    .setTitle('Verification')
                    .setDescription('Click the button below to verify your roblox account!\n Once you have completed your authentication it will log in a channel which you can see.')
                    .setColor('GREEN')
                    .setTimestamp()
                    .setFooter('Verification')
                    
                let button = new MessageButton()
                    .setStyle('LINK')
                    .setLabel('Verify')
                    .setURL(`https://authorize.roblox.com/?client_id=${config.robloxclientID}&response_type=Code&redirect_uri=${config.baseUrl}/redirect&scope=openid+profile&state=${code}`)
                let row = new MessageActionRow()
                    .addComponents(button)

                await interaction.reply({ embeds: [embed], components: [row], ephemeral: true })

                function makeid(length) {
                    var result           = '';
                    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var charactersLength = characters.length;
                    
                    for ( var i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    
                    return result;
                }
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
}
