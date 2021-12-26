const utils = require("utils")

utils.httpClient.get("https://api.github.com/users/tiago123456789", {}).then(console.log)
utils.httpClient.post(
    "https://webhook.site/1672d769-11de-4304-9f1c-a6ef04f96015?",
    { message: "Hi, my friend!!!! Hi, ola, hola"}
)