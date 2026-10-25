# ROCky: commands, levels and limits

ROCky (Roblox Online Checker) is a Telegram bot for monitoring Roblox player statuses and gaming activity. The bot @ROCky_RobloxOnlineChecker_Bot, the @RB_Check channel and rb-check.github.io belong to the same project. ROCky is independent and is not an official Roblox Corporation or Telegram service.

ROCky is completely free. All bot features are available without payment; limits and available capabilities depend on the user's level. The project is actively maintained and developed, with updates and improvements.

- Bot: https://t.me/ROCky_RobloxOnlineChecker_Bot
- Project channel: https://t.me/RB_Check
- Website: https://rb-check.github.io/en/
- Russian reference: https://rb-check.github.io/reference/ru.md

This is general product documentation. Use /profile and /level in the bot for current personal limits, used slots and privileges. This file is not connected to a user's account or the database and does not show live player statuses.

## Getting started

1. Open the bot in Telegram and press Start, or send /start.
2. Send a Roblox username, numeric player ID or profile URL. Examples: Builderman or https://www.roblox.com/users/156/profile.
3. Enable monitoring using the button on the player's card. Starting another monitor requires a free player slot.
4. Configure notifications using the card's buttons. Stop a monitor using its Stop monitoring button or the management controls in /profile.

No Roblox password, login codes or .ROBLOSECURITY cookie are required. A username, display name, numeric ID and profile URL are different identifiers; an ID or exact profile link avoids ambiguous names.

## User commands

Use these commands in your private conversation with the bot.

| Command | Purpose |
| --- | --- |
| /start | Main menu, introduction and eligibility check for the channel subscription level offer. |
| /help | Current user command list and monitoring instructions. |
| /profile | Your owner profile, level, used and available player slots, and active monitors. |
| /level | Your current level, limits, privileges and the next level's benefits. |
| /group | Add the bot to a Telegram group and configure its notifications. Send this command in your private conversation with the bot. |
| /lang | Select the Russian or English interface. |
| /place | Favourite experiences and their update notifications. |
| /places | An alias for /place. |
| /feedback | Report a problem or suggest an improvement. |

Monitoring settings and charts are opened with the bot's buttons. Do not invent commands such as /settings, /stats or /stop, or suggest administrator-only commands as user features.

To save an experience, send a Roblox game URL such as https://www.roblox.com/games/9872472334/unnamed. Use the Notifications button on its card to subscribe to game updates. This is distinct from following an individual player's activity.

## Adding the bot to a group

1. Send /group in your private conversation with ROCky.
2. Press Add to group and choose a Telegram group.
3. Allow the bot to send messages to that group.
4. Return to the private conversation, open /group again and select the monitored players whose notifications should be delivered to the group.

The bot delivers notifications to the group while the main monitoring controls remain in your private conversation. Adding the bot to a group and receiving group notifications are free.

## Levels and limits

One monitoring slot means one simultaneously tracked Roblox account. One favourite experience is a saved game with update notifications. The two limits are counted separately.

| Level | Simultaneous players | Favourite experiences | Outfit collage export |
| --- | ---: | ---: | --- |
| 0 | 1 | 2 | No |
| 1 | 3 | 5 | Yes |
| 2 | 5 | 10 | Yes |
| 3 | 10 | 20 | Yes |

Available saved outfits can be viewed at all four levels. The maximum documented level is 3. This table covers the listed limits and export feature; /level provides the complete current privilege list.

## Getting a level

### Level 0

The starting level. Monitoring one player is free within the bot's current restrictions.

### Level 1 through channel membership

1. Open the bot first so it has a private conversation with you.
2. Join the official channel at https://t.me/RB_Check.
3. Return to the bot and send /start. If eligible, you will receive a level 1 offer. The bot may also send the offer after you join the channel.
4. Accept using the button in that message. Channel membership alone does not mean that the offer has been accepted.
5. Check /profile or /level: level 1 allows 3 player slots and 5 favourite experiences.

If the offer has expired, send /start again to recheck eligibility. If membership checking fails, retry later; use /feedback if the problem persists. Leaving and rejoining the channel is not required.

Leaving the channel revokes the bonus: the level resets to 0, excess monitors are stopped and eligibility for a repeat subscription bonus is lost. Rejoining does not guarantee restoration of level 1. A user who previously declined may need to send /start again; if no offer appears, ask through /feedback.

### Levels 2 and 3

Their limits exist in the project configuration, but no public self-service upgrade route is stated here. The bot is completely free; no paid plans for these levels are offered. Ask the project owner through @RB_Check channel direct messages about higher-level availability. Regular bot usage is not a promise of an automatic upgrade. These levels are unrelated to Roblox levels or Telegram Premium.

## Maintenance, development and owner contact

ROCky is supported and continues to be developed. Project news and updates are published in the official Telegram channel at https://t.me/RB_Check.

To contact the project owner, open @RB_Check in Telegram and send a direct message to the channel itself. You do not need to find a separate personal account for the owner. The bot's /feedback command is also available for bug reports and feature suggestions.

## Limitations and troubleshooting

- History begins when monitoring starts. The bot does not reconstruct a complete activity history from before observation.
- Status, game identification and joining depend on Roblox data availability and privacy. Do not promise to identify every hidden game or join every server.
- A join button is available only when the required data is available. Monitoring does not remove Roblox access restrictions.
- Notifications and updates may be delayed. No exact polling frequency or uninterrupted availability is promised here.
- If asked to confirm activity, use the reminder's button. Long inactivity followed by unanswered reminders can stop monitoring. The current configuration starts reminders after more than 14 days without meaningful activity, followed by a 7-day reminder cycle.
- For group delivery, use /group, add the bot to the group, allow it to send messages and select players in the settings. Main controls remain in your private conversation with the bot.
- If slots are full, use /profile to stop an unneeded monitor or check level 1 eligibility. Rejoining the channel does not bypass the lost subscription bonus condition.
- If this reference differs from the bot's current response, use /help, /profile and /level as the current source. Do not invent prices, promo codes, ways to bypass privacy, self-service higher-level upgrades or promises to bypass every restriction.
