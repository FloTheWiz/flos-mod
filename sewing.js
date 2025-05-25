var M={};
M.parent=Game.Objects['Grandma'];
M.parent.minigame=M;
M.launch=function() {
  var M = this;
  M.name = M.parent.minigameName;
  M.init = function(div)
  {
  // Populate div with HTML and initialise values
    M.threads = {
      'red':{},
      'blue':{},
      'green':{},
    }
    str = `<style>` +
    `#start{grid-area:output;height:24px;}`+
    `.floinfo{grid-area: info;margin:20px;filter:drop-shadow(2px 2px 2px #000) drop-shadow(-2px -2px 10px #000)}`+
    `.sewingoptions{grid-area:options;display:inline-flex;margin:20px;height:24px;gap:10px;}`+
    `.sewingoptions>img{filter:drop-shadow(2px 2px 2px #000) drop-shadow(-2px -2px 10px #000)}`+
    `.sewingsidebar{grid-area:sidebar;height:200px;width:auto;}`+
    `.sewingcontainer {background: url(https://i.imgur.com/I1vpj1n.png);display:grid;grid-template-columns: 50px auto 100px;grid-template-rows: 100px 100px;grid-template-areas:"info . options sidebar"". . output sidebar";}`+
    `</style>` + 
    `<div class="sewingcontainer">`+
    `<img id="floinfo" class="floinfo" src="https://i.imgur.com/yYS2nKM.png">`+
    `<div class="sewingoptions">`+
    `<img src="https://i.imgur.com/oJmhw04.png">`+
    `<img src="https://i.imgur.com/oJmhw04.png">`+
    `<img src="https://i.imgur.com/oJmhw04.png">`+
    `</div>`+
    `<button id="start">Start</button>`+
    `</div>`
    div.innerHTML = str;
    
    // Add event listeners
    addEventListener('onmouseover', function(e) {
    Game.tooltip.wobble();
    Game.tooltip.draw(this, `<div>Tooltip</div>`);
    });
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
    }
    M.init(l('rowSpecial'+M.parent.id));
}
