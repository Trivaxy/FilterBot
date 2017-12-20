const Discord = require('discord.js');

const fs = require("fs");

const client = new Discord.Client();

const trivID = "212345985576337408";

const prefix = "!";

var canSearchTreasure = true;
var diamondNearby = false;

class TreasureUser { 
    constructor(name, gold) {
        this.name = name;
        this.gold = gold;
        this.stamina = 100;
    }

    static saveAllUsers() {
        fs.writeFileSync("D:/Programming/Small Projects/node.js/Discord bots/FilterBotSaveData.json", JSON.stringify(treasureUsers));
    }
}

class PickaxeHead {
    constructor(name) {
        
    }
}

/**
 * @type { TreasureUser }
 */
var treasureUsers = [];

client.on('ready', () => { 
    treasureUsers = JSON.parse(fs.readFileSync("D:/Programming/Small Projects/node.js/Discord bots/FilterBotSaveData.json"));
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateLeaderBoard() {
    let tmp = [];
    let gold = [];
}

client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    const command = message.content.split(" ")[0].substring(prefix.length).toLowerCase();
    if(command == "s" && message.author.id == trivID) client.guilds.get("225030931008847874").channels.get("382184799407964160").send(message.content.substring(3));
    if(command == "eval" && message.author.id == trivID)
    {
        message.channel.send(eval(message.content.substring(6)));
    }

    if(command == "notreasurehunt" && message.author.id == trivID)
    {
        message.channel.send(message.channel.send("***Digging for treasure has been suspended for a while.***"));
        canSearchTreasure = false;
    }

    if(command == "treasurehunt" && message.author.id == trivID)
    {
        message.channel.send(message.channel.send("***Digging for treasure has been activated.***"));
        canSearchTreasure = true;
    }

    if(message.channel.id != "382184799407964160") return;
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

    if(command == "myfuture") {
        if(message.author.id == "361051848783953920") { message.channel.send("What more do you need than having <:daryl:381393372004483072>, Leviathan?"); }
        if(args.length != 0) { message.channel.send("This command doesn't need arguments you dingus"); }
        let professions = ["a fluffy unicorn, flying through the sky", "a purple wizard", "a fluffy duck", "a great programmer", "a funny comedian", "a red bowling ball", "a little stick of glue", "an executable program running on windows vista", "a piece of gum under a table", "a bot like me", "a homeless person with a high income", "a centipede with one leg missing", "a warning sign on the edge of the road", "a Linux-based operating system full of wonder", "a computer that houses great specs", "a fanfiction writer", "an array populated with unsensible professions", "a tumblr blogger who lives on patreon support", "a webpage that begs for attention", "a melting ice cube", "a keyboard that is furiously being broken by a german child", "a virus inside someone's body causing infection", "a white blood cell inside a pig", "a piece of dung on a farm", "a skiier", "a mouse with no hole to live in", "a flower that somehow survives after being stepped on a lot", "a shoelace"];
        let places = ["a house", "a cheeseburger", "a pickle", "a mansion", "a chinese factory dorm", "a college room", "a motel room", "a delicious strawberry cake", "a computer program", "a person", "an apartment", "an igloo", "a terrible fandom", "a piece of chewed paper", "an alien planet", "a flying saucer", "a desk that is forever locked", "a refrigerator", "Antarctica"];
        message.channel.send("Hocus pocus.. 20 years from now, I see you as **" + professions[random(0, professions.length - 1)] + "**, who makes **" + random(0, 6000) + "$** per month and lives in **" + places[random(0, places.length - 1)] + "**.");
    }

    if(command == "combat") {
        if(args.length < 2) { message.channel.send("This command needs two arguments you dingus!"); return; }
        if(args[0].toLowerCase() == "graydee" || args[1].toLowerCase() == "graydee") { message.channel.send("Ew, Graydee.. anyways:"); }
        if(args[0].toLowerCase() == "dumdum" || args[1].toLowerCase() == "dumdum") { message.channel.send("I win."); return; }
        if(args[0].toLowerCase() == "!combat" || args[1].toLowerCase() == "!combat") { message.channel.send("Very original."); return; }
        let ways = ["stabs", "amputates", "snipes", "shoots an arrow at", "sleep-murders", "intoxicates", "asphyxiates", "injects cyanide into", "bashes and causes severe head trauma to", "maules", "breaks the spine of", "snaps the neck of", "tortures and kills", "beats the life out of", "brings eternal abolishment to", "gores", "suffocates", "gives cardiac arrest to", "tears every single muscle in", "disembowels", "keeps on meme tagging", "teleports the abomination to", "decapitates", 
                    "jumps up from a prone position and does a 920 degree flip, using a lightsaber to dice up", "shines a special lazer beam upon", "uses a garrote on", "uses a massive truck to run over", "uses a mug to break the skull of", "uses a spoon to carve out the heart of", "uses telikenesis to pull the guts out off"];
        let rand = random(0, 1);
        let order = []; 
        if(rand == 0) {
            order.push(args[0]);
            order.push(args[1]);
        }
        else { order.push(args[1]); order.push(args[0]); }
        message.channel.send(order[0] + " **" + ways[random(0, ways.length - 1)] + "** " + order[1]);
    }

    if(command == "feature") {
        if(message.author.id == "186197065230057487") { message.channel.send("You are perfect in every way, Danny."); return; }
        let features = ["your idiocy", "your anger management issues. Don't beat up your counselor next time", "your diabetes. I call fat", "your toxoplasmosis", "your ebola", "your huge colony of bacteria", "your hidden stash of cocaine. I heard the gangs outside yesterday", "your feminism", "your communism", "your capitalism. You're digusting", "your slavness. You're on your way to become a gopnik", "your unholy, dark soul", "your lack of a soul", "how offensive you are. But then again I'm ten times more offensive", "how much you spam this command. Chill", "how much you hate me", "your bad grades", "your procrastination capabilities. I suggest you talk to the people who run the Guinness world records", "your special weapon", "your incredibly 'low' debt", "your huge pile of unfinished gay fanfiction that no one should know about", "your basement filled with demonic slaves that you obtained from hell", "your bankrupcy", "nothing", "your incredibly old age", "your whole folder filled with r34 content. Don't think I don't know about that huge stash of p*rn you keep", "your ability to program", "your inconsistency"];
        message.channel.send("Your special feature is **" + features[random(0, features.length - 1)] + "**.");
    }

    if(command == "trump") {
        message.channel.send("***M a k e  A m e r i c a  g r e a t   a g a i n.***")
    }

    if(command == "commands") {
        message.channel.send("There are many, but these are important: `combat`, `myfuture`, `feature`. My commands must start with `!`.");
    }

    if(command == "hahayes") {
        message.channel.send("<:hahayes:334739145161441284>");
    }
    
    if(command == "dick") {
        message.channel.send("haha funny dick");
    }

    if(command == "dig") {
        if(!canSearchTreasure) { return; }

        let exitingUser = false;
        let index = -1;
        for(let i = 0; i < treasureUsers.length; i++) {
            if(treasureUsers[i].name == message.author.username) {
                index = i;
                exitingUser = true;
                break;
            }
        }

        if(!exitingUser) {
            message.channel.send("You're not on my treasure hunter list. I'll add you now, welcome!");
            treasureUsers.push(new TreasureUser(message.author.username.toString(), 0));
            index = treasureUsers.length - 1;
        }

        let gold = 0;

        if(treasureUsers[index].stamina < 100) {
            if(treasureUsers[index].stamina == 98) {
                message.channel.send("**" + message.author.username + "** has recharged their stamina fully.");
            }
            treasureUsers[index].stamina += 2;
        }

        message.channel.send("**" + message.author.username + "**" + " digs...");
        if(Math.random() > 0.9) {
            message.channel.send("**" + message.author.username + "** just found a *common treasure chest*.");
            gold = random(20, 70);
            message.channel.send("Inside **" + message.author.username + "**'s chest is _" + gold + "_ gold.");
        }
        if(Math.random() > 0.97) {
            message.channel.send("**" + message.author.username + "** just found a *rare treasure chest*.");
            gold = random(200, 300);
            message.channel.send("Inside **" + message.author.username + "**'s chest is _" + gold + "_ gold.");
        }
        if(Math.random() > 0.99) {
            message.channel.send("**" + message.author.username + "** just found an ***EXOTIC treasure chest***.");
            gold = random(500, 1000);
            message.channel.send("Inside **" + message.author.username + "**'s chest is _" + gold + "_ gold.");
            message.channel.send("Your luck prevails, **" + message.author.username + "**...");
        }
        if(Math.random() > 0.95 && diamondNearby) {
            if (Math.random() > 0.4) {
                message.channel.send("Oh...? **" + message.author.username + "** has stepped on something shiny.");
                message.channel.send("**" + message.author.username + "** has found the diamond! Estimated worth:");
                let diamondgold = random(1000, 2000);
                message.channel.send("*" + diamondgold + "*.");
                treasureUsers[index].gold += diamondgold;
                diamondNearby = false;
                TreasureUser.saveAllUsers();
                return;
            }
            else {
                message.channel.send("**Oh no, another group of pirates have found the diamond! Better luck next time.**");
                diamondNearby = false;
                return;
            }
        } 
        
        if(Math.random() > 0.99 && !diamondNearby) {
            message.channel.send("**Rumor is spreading around, a diamond is somewhere on the map. The first one to find it gets a great amount of gold!**");
            diamondNearby = true;
        }

        if(gold == 0) {
            message.channel.send("The treasure was far beyond your reach, **" +  message.author.username + "**...");
        }
        treasureUsers[index].gold += gold;
        TreasureUser.saveAllUsers();
    }

    if(command == "powerdig") {
        let index = null;
        for(let i = 0; i < treasureUsers.length; i++) {
            if(treasureUsers[i].name == message.author.username) {
                index = i;
                break;
            }
        }

        if(treasureUsers[index].stamina < 100) { 
            message.channel.send("**" + message.author.username + "** is too tired to use brute force.");
            return;
        }
        else {
            treasureUsers[index].stamina = 0;
            let gold = 0;
            gold = random(1500, 3000);
            if(Math.random() > 0.8) {
                message.channel.send("**" + message.author.username + "'s** pickaxe resonates with the strike of something strong beneath...");
                message.channel.send("**" + message.author.username + "** has just found an ***_ANCIENT_*** treasure chest!")
                message.channel.send("Inside **" + message.author.username + "**'s chest is _" + gold + "_ gold.");
                treasureUsers[index].gold += gold;
                return;
            }
            else {
                message.channel.send("**" + message.author.username + "** tries hard to find fortune, but his strength has failed him...");
                return;
            }
        }

    }
    
    if(command == "gold") {
        for(let i = 0; i < treasureUsers.length; i++) {
            if(treasureUsers[i].name == message.author.username) {
                message.channel.send("**" + message.author.username + "** has *" + treasureUsers[i].gold + "* gold.");
                break;
            }
        }
    }

    if(command == "stamina") {
        for(let i = 0; i < treasureUsers.length; i++) {
            if(treasureUsers[i].name == message.author.username) {
                message.channel.send("**" + message.author.username + "** has *" + treasureUsers[i].stamina + "* stamina.");
                break;
            }
        }
    }

    switch(command.toLowerCase())
    {
        case "trivaxy":
        message.channel.send("I love him.");
        break;

        case "blaze":
        message.channel.send("Blaze... it?");
        break;

        case "zach":
        message.channel.send("He has been noticed.");
        break;

        case "tremor":
        message.channel.send("People say :poop:.");
        break;

        case "fabsol":
        message.channel.send("Cool person. I think. That's what trusted people say.");
        break;

        case "danny":
        message.channel.send("Trash. Trash. Trash. I'm complimenting the trash man.");
        break;

        case "jrtighe":
        message.channel.send("Better than Sargassum.");
        break;

        case "raverist":
        message.channel.send("***Oh no.***");
        break;

        case "jerry":
        message.channel.send("CRAB");
        break;

        case "sentri":
        message.channel.send("Building a sentri...");
        break;

        case "sargassum":
        message.channel.send("Better than JrTighe.");
    }
})

//Version 2.0
