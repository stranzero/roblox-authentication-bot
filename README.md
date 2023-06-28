![visitors](https://visitor-badge.laobi.icu/badge?page_id=DevJakey.roblox-authentication-bot)


# Roblox OAuth Bot

I have recently created a bot utilizing the Roblox OAuth, it is pretty simple and allows for the code to be modified and customised to your needs. This is a Discord bot built using the Discord.js library, which integrates Roblox OAuth for authentication and access to Roblox user data.








## Features
- Allows users to authenticate with their Roblox account using OAuth 2.0.
- Retrieves Roblox user information such as username, avatar, and profile URL.
- Provides commands to interact with the Roblox API and perform various actions.
- Customizable and extensible with additional functionality.


## Requirements

- node.js v16.6 or higher
- a domain which uses https (use cloudflare for free ssl) or use localhost if you are just testing this out.
- Discord Bot
- [OAuth Project](https://create.roblox.com/dashboard/credentials) - Head to OAuth 2.0 Apps



## Installation

To get started with the Discord.js bot using Roblox OAuth, follow these steps:

Clone or Download this repository then get the dependencies by running:

```sh-session
  npm install
```

After that go to your`.env` and `config.json` files and change these configurations:

```
BOT_TOKEN, prefix, guildID, clientID, OAuth Token + ClientID, 
```

Make sure you're using [node.js](https://nodejs.org/en/) version `v16.6.0` or higher, run `node -v` in your terminal to check.

If you have any questions or issues about finding certain things please just research it or ask me.

## Starting the bot

To start your Discord.js bot with Roblox OAuth, follow these steps:

Ensure that you have completed the Installation Guide and all the necessary dependencies are installed.

Make sure you have obtained the required credentials:
- Your Discord bot token
- Your Roblox client ID
- Your Roblox client secret

Open a terminal or command prompt and navigate to the project directory.

Run the following command to start the bot:

    node .

This command will execute the index.js file, launching your bot.

The bot will connect to Discord and log in using the provided token. You should see output in the console indicating that the bot has successfully connected to Discord and is ready to use.

Once the bot is online, you can invite it to your Discord server using the OAuth2 URL generated for your bot application. Make sure you have the necessary permissions to invite bots to your server.

Once the bot is invited to your server, you can interact with it using various commands or events you have defined in the index.js file. You can also customize and extend the bot's functionality to suit your needs.

Congratulations! Your Discord.js bot with Roblox OAuth is now running and connected to your Discord server. You can start using its commands and features.

If you encounter any issues during the startup process or while using the bot, please refer to the provided error messages or consult the documentation for the Discord.js library or the Roblox API. Additionally, feel free to reach out for further assistance if needed.

Enjoy using your Discord bot!
    
## Contributing

Contributions to this project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.


## Acknowledgements

- The Discord.js community for their amazing library and support.
- The Roblox API documentation for providing the necessary resources for integrating Roblox OAuth


## Contact

If you have any questions or need further assistance, you can reach me at jake@jakey.vip