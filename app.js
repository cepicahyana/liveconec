// const { WebcastPushConnection } = require('tiktok-live-connector');
const { WebcastPushConnection, signatureProvider } = require('tiktok-live-connector');
signatureProvider.config.extraParams.apiKey = "Y2NkYWY0NjRmNmJmZTRjYzFkNDhhZDNlOTkzMGU0ZDNlMjA4ZmE5MDMzM2FiYzczMmZkMzZl";

// Username of someone who is currently live
let tiktokUsername = "najib_setiawan";

// Create a new wrapper object and pass the username
let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

// Connect to the chat (await can be used as well)
tiktokLiveConnection.connect().then(state => {
    console.info(`Connected to roomId ${state.roomId}`);
}).catch(err => {
    console.error('Failed to connect', err);
})

// Define the events that you want to handle
// In this case we listen to chat messages (comments)
tiktokLiveConnection.on('chat', data => {
    console.log(`${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`);
})

// And here we receive gifts sent to the streamer
tiktokLiveConnection.on('gift', data => {
    console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
})

// ...and more events described in the documentation below