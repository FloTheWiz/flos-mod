
var M={};
M.parent=Game.Objects['Alchemy lab'];
M.parent.minigame=M;
M.launch=function()
{
    var M=this;
    M.name=M.parent.minigameName;
    M.ingredients = {};
    M.loaded = false;
    M.init=function(div)
    {
        // We use plants from Garden
        //M.possible_ingredients = Game.Objects['Farm'].minigame.plants; 
        //M.ingredients = []
        M.potions = []

        // Do html stuff
        str = ""
        //str += "<style></style>";
        str += "<div>Alchemy!</div>";
        div.innerHTML = str;
    },
    M.save=function()
    {
        str = ''
        return str
    },

    M.load=function(str)
    {
        //interpret str; called after .init
        //note: not actually called in the Game's load; see "minigameSave" in main.js
        if (!str) return false;
    },
    M.reset=function(hard) {
        if (hard){};
    },
    M.addPlant = function(plantName) {
        console.log("Adding plant: " + plantName);
    }
    M.logic = function() {
    if (!M.loaded && Game.T%5==0 && Game.Objects['Farm'].minigameLoaded ) {
            console.log("Loading plants...");
            M.ingredients = JSON.parse(JSON.stringify(Game.Objects['Farm'].minigame.plants));
            let evil_inject_code = "if (Game.Objects['Alchemy lab'].minigame) {Game.Objects['Alchemy lab'].minigame.addPlant(me.name);}"+ 
            "M.harvests++;";
            eval("Game.Objects['Farm'].minigame.harvest = " + Game.Objects['Farm'].minigame.harvest.toString().replace('M.harvests++', evil_inject_code) + ";");
            M.loaded = true;
            console.log("Loaded plants: " + M.ingredients);
        }
    M.init(l('rowSpecial'+M.parent.id));
   
    }
    } 
