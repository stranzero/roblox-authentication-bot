![visitors](https://visitor-badge.laobi.icu/badge?page_id=DevJakey.roblox-authentication-bot)


# Roblox OAuth Bot

I have recently created a bot utilizing the Roblox OAuth, it is pretty simple and allows for the code to be modified and customised to your needs. This is a Discord bot built using the Discord.js library, which integrates Roblox OAuth for authentication and access to Roblox user data.

## Features

- Allows users to authenticate with their Roblox account using OAuth 2.0.
- Retrieves Roblox user information such as username, avatar, and profile URL.
- Provides commands to interact with the Roblox API and perform various actions.
- Customizable and extensible with additional functionality.

## Setup

There two ways to setup this bot, you can either run it directly with node.js or with docker.
If you are running it with node.js you will also need to have MongoDB installed and running.

### Running with Node.js

#### Requirements

- node.js v16.6 or higher
- a domain which uses https (use cloudflare for free ssl) or use localhost if you are just testing this out.
- Discord Bot
- [OAuth Project](https://create.roblox.com/dashboard/credentials) - Head to OAuth 2.0 Apps (give it openid and profile permissions)
- MongoDB


#### Installation

To get started with the Discord.js bot using Roblox OAuth, follow these steps:

Clone or Download this repository then get the dependencies by running:

```shell
npm install
```

Copy the `.env.example` file and rename it to `.env` then fill in the required fields.

Make sure you're using [node.js](https://nodejs.org/en/) version `v16.6.0` or higher, run `node -v` in your terminal to check.

If you have any questions or issues about finding certain things please just research it or ask me.

#### Starting the bot

To start your Discord.js bot with Roblox OAuth, follow these steps:

Ensure that you have completed the Installation Guide and all the necessary dependencies are installed.

Make sure you have obtained the required credentials:
- Your Discord bot token
- Your Roblox client ID
- Your Roblox client secret

Open a terminal or command prompt and navigate to the project directory.

Run the following command to start the bot:

```shell
node main.js
```

This command will execute the main.js file, launching your bot.

The bot will connect to Discord and log in using the provided token. You should see output in the console indicating that the bot has successfully connected to Discord and is ready to use.

Once the bot is online, you can invite it to your Discord server using the OAuth2 URL generated for your bot application. Make sure you have the necessary permissions to invite bots to your server.

Once the bot is invited to your server, you can interact with it using various commands or events you have defined in the index.js file. You can also customize and extend the bot's functionality to suit your needs.

Congratulations! Your Discord.js bot with Roblox OAuth is now running and connected to your Discord server. You can start using its commands and features.

If you encounter any issues during the startup process or while using the bot, please refer to the provided error messages or consult the documentation for the Discord.js library or the Roblox API. Additionally, feel free to reach out for further assistance if needed.

Enjoy using your Discord bot!

### Running with Docker

#### Requirements

- Docker
- Discord Bot
- [OAuth Project](https://create.roblox.com/dashboard/credentials) - Head to OAuth 2.0 Apps (give it openid and profile permissions)

#### Configuration

Copy the `.env.example` file and rename it to `.env` then fill in the required fields.

Make sure you have a recent version of [Docker](https://www.docker.com/) installed on your system.

#### Starting the bot

When you have completed the Configuration Guide and all the necessary credentials are set up, you can start the bot using Docker Compose.
For this, you need to run the following commands in the project directory:

```shell
docker compose build
docker compose up -d
```

To stop the bot, you can run the following command:

```shell
docker compose down
```
 
## Contributing 

Contributions to this project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.


## Acknowledgements

- The Discord.js community for their amazing library and support.
- The Roblox API documentation for providing the necessary resources for integrating Roblox OAuth

## Contact

If you have any questions or need further assistance, you can reach me at jake@jakey.vip
