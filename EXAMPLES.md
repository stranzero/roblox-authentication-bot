## Examples

<details>
  <summary>Events format</summary>

```js
module.exports = {
    name: 'eventName',
    once: 'true', //run once true/false
    async execute( < args > ) {
        //Code
    },
}
```
---
</details>

<details>
  <summary>Slash commands format</summary>

```js
const { SlashCommandBuilder } = require('@discordjs/builders') 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commandName')
        .setDescription('command description'),
    async execute( < args > ) {
        // Code
    }
}
```
---
</details>

<details>
  <summary>Context menus format</summary>
  
```js
const { ContextMenuCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('context-menu-name')
        .setType(2), // (2): USER , (3): MESSAGE
    async execute( < args > ) {
        // Code
    },
}
```
---
</details>

<details>
  <summary>Buttons format</summary>

Adding buttons to a message:
```js
const { MessageButton, MessageActionRow } = require('discord.js') // At the top of the file.

let exampleButton = new MessageButton()
    .setLabel('Example')
    .setStyle('PRIMARY') // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
    .setCustomId('example_button')
const row = new MessageActionRow().addComponents(exampleButton)
interaction.reply({
    content: 'Example message',
    components: [row],
})
```

Button event format:
```js
module.exports = {
    name: 'example_button',
    aliases: ['aliase1_button', 'aliase2_button'],
    async execute(interaction) {
        if (interaction.customId == 'example_button') {
            // Code
        } else if (interaction.customId == 'aliase1_button') {
            // Code
        }
    }
}
```
---
</details>

<details>
  <summary>Select menu format</summary>
	
Adding select menu to a message:
```js
const { MessageSelectMenu, MessageActionRow} = require('discord.js') // At the top of the file.

let selectMenu = new MessageSelectMenu()
    .setCustomId('select_example')
    .setPlaceholder('Nothing selected')
    .setMinValues(1)
    .setMaxValues(2)
    .addOptions([{
            label: 'Option #1',
            description: 'This is a description for option #1',
            value: 'first_option',
            emoji: '1️⃣',
        },
        {
            label: 'Option #2',
            description: 'This is a description for option #2',
            value: 'second_option',
            emoji: '2️⃣',
        },
    ])
const row = new MessageActionRow().addComponents(selectMenu)
interaction.reply({
    content: 'Example message',
    components: [row],
})
```

Select menu event format:
```js
module.exports = {
	name: 'select_example',
	async execute(interaction) {
		interaction.reply({
			content: `${interaction.values[0]} option selected.`,
			ephemeral: true,
		})
	},
}
```
---
</details>

<details>
  <summary>Permissions/Cooldown format</summary>
  
```js
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('perms-cooldown-example')
        .setDescription('Permissions & Cooldown example'),
    cooldown: 5000, // Time in milliseconds.
    permissions: ['ADMINISTRATOR'],
    async execute(interaction) {
        interaction.reply({
            content: 'You have permission to run this command!',
        })
    }
}
```
---
</details>

<details>
  <summary>Legacy commands format</summary>
  
```js
module.exports = {
    name: 'commandName',
    aliases: ['aliase1', 'aliase2'],
    description: 'command description',
    async execute(message) {
        // Code
    },
}
```
</details>

