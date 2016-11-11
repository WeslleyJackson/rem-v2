/**
 * Created by julia on 07.11.2016.
 */
var Command = require('../Objects/command');
var util = require("util");
/**
 * The show queue command,
 * shows the current queue
 * @extends Command
 *
 */
class Queue extends Command {
    /**
     * Create the resume command
     * @param {Function} t - the translation module
     */
    constructor(t, v) {
        super();
        this.cmd = "queue";
        this.cat = "voice";
        this.needGuild = true;
        this.t = t;
        this.v = v;
        this.accessLevel = 0;
    }

    run(msg) {
        this.v.once('error', (err) => {
            msg.channel.sendMessage(this.t(err));
        });
        this.v.once('queue', (queue) => {
            console.log('nice');
            console.log(queue);
            msg.channel.sendCode('', JSON.stringify(queue));
        });
        this.v.getQueue(msg);
    }
}
module.exports = Queue;