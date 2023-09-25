const EventEmitter = require ("events");
const Event = new EventEmitter();
Event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}` )
})
Event.emit("checkPage", 200, "ok");

