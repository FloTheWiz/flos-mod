    if(flo===undefined) var flo={};
    
    // Lib
    weightedRandom = function(items) {
        const total = items.reduce((sum, item) => sum + item[1], 0);
        let threshold = Math.random() * total;
    
        for (const [item, weight] of items) {
            if (threshold < weight) return [item];
            threshold -= weight;
        }
    
        return items[0][0]; // Fallback
    }
    
    Game.registerMod('flo',{
            // ABOUT 
            // #####################################################################
            /*
                Features: Animated Icons
                4 New Achievements 
            */
            // - Flo
            // #####################################################################
                
            
    
            init:function(){
                
                flo.cdn = "https://flowiz.moe/mashwet/CC/" // my cdn for cc stuff
                flo.version = "0.1.5";
                flo.mode = 0;
    
                // Flags
                flo.wizardTowerLoaded = false;
                flo.gardenLoaded = false;
                
                flo.ABSOLUTENCID = 71620
                flo.toggleOpen = false;
                Game.Notify(`Flo's Mod Loaded`, "Hello World");
                
                // Add minigame
                this.load()
                this.modStartup(); // Initial Create
                this.applyFeatures();
                
                console.log("Finished Loading Flo's Mod");
            
            },
            save: function() {
                let str = "";
                for(let i of flo.cheevos)str+=i.won
                return str;
            },
            load: function(str) {
                for(let i in flo.cheevos) flo.cheevos[i].won=Number(str[i])
            },
            
            modStartup: function() { 
                //eval('Game.popFunc = ' + Game.popFunc.toString().replace(`var moni=mult*Math.min(Game.cookies*0.15,Game.cookiesPs*60*15)+13;//add 15% to cookies owned (+13), or 15 minutes of cookie production - whichever is lowest`,
                //           
                // 
                //                                              `var moni=mult*Math.min(Game.cookies*0.15,Game.cookiesPs*60*15)+13;if FINISH FINISH FINISH FINISH`));
                
                
                // Hey new colours!
                // Plain - Common 
        		Game.Tiers[1].color = '#C2B280'; 
        		// Berrylium - Uncommon
        		Game.Tiers[2].color = '#B46FB3';
        		// Blueberrylium - Rare
        		Game.Tiers[3].color = '#4F61A6';
        		// Chalcedhoney - Fine
        		Game.Tiers[4].color = '#D6A77A';
        		// Buttergold - Exquisite
        		Game.Tiers[5].color = '#EEC85C';
        		// Sugarmuck - Dirty
        		Game.Tiers[6].color = '#B87A5B';
        		// Jetmint - Minted
        		Game.Tiers[7].color = '#78C3A7';
        		// Cherrysilver - Lustrous
        		Game.Tiers[8].color = '#DA99A3';
        		// Hazelrald - Enchanted
        		Game.Tiers[9].color = '#3CA66B';
        		// Mooncandy - Celestial
        		Game.Tiers[10].color = '#D8D2FF';
        		// Astrofudge - Cosmic
        		Game.Tiers[11].color = '#5B3A6D';
        		// Alabascream - Pristine
        		Game.Tiers[12].color = '#F2F0ED';
        		// Iridyum - Mythical
        		Game.Tiers[13].color = '#C3C1E8';
        		// Glucosmium - Heavenly
        		Game.Tiers[14].color = '#92F0C0';
        		// Glimmeringue - Pearlescent
        		Game.Tiers[15].color = '#F9A1FF';
            },
            // ############################
            // # ACHIEVEMENTS ------------#
            // ############################
            /*
            */
            createCheevos: function() { 
                flo.cheevos = [];
                // NOormal Cheevos
                flo.cheevos.push(new Game.Achievement('Flollower',"Ran Flo\'s Mod <q>Glad to have you</q>",[0,1,flo.cdn+"spritesheet2.png"]).order=61700);
                flo.cheevos.push(new Game.Achievement('Clicker\'? I hardely know \'er','Baked 1 Quadrillion cookies <q>awa awa</q>',[1,0,flo.cdn+"spritesheet2.png"]).order=61701);
                // 'Here you go' extension
                flo.hereyougos = Game.HasAchiev('Here you go') // 0 or 1 
    
                flo.cheevos.push(new Game.Achievement('Another one','Click it again. <q>Okay, now you\'re asking a bit much.</q>',[1,1,flo.cdn+"spritesheet2.png"]).order=11001);
                flo.cheevos.push(new Game.Achievement('Begger','Clicked it for a third time. <q>Okay you can stop now</q>',[1,1,flo.cdn+"spritesheet2.png"]).order=11002);
                flo.cheevos.push(new Game.Achievement('Desperate','Clicked it 5 times. <q>PLEASE STOP</q>',[1,1,flo.cdn+"spritesheet2.png"]).order=11003);
    
    
                // Menu Shit
                var funcMenu = Game.UpdateMenu.toString();
                // Add my own stats menu
                funcMenu = funcMenu.replace(`'<br><div class="listing"><b>'+loc("Running version:")+'</b> '+Game.version+'</div>'+`,
                                              `'<br><div class="listing"><b>'+loc("Running version:")+'</b> '+Game.version+'</div>'+('</div><div class="subsection">'+'<div class="title">Flos Mod <img src="https://flowiz.moe/favicon.ico" style="margin-left:10px;"></div>'+'<div id="statsSpecial">'+ '<div class="listing"><b>Version: ' + flo.version + '</b></div></div></div>')+`);
    
                // Add my own info
                funcMenu = funcMenu.replace(`'<div class="title">'+loc("Version history")+'</div>';`,
                                            `+('</div><div class="subsection">'+
    	'<div class="title">Flos Mod</div><div>Lorum Ipsum, Checksum Spam Ham and Eggs. Test Text even, Who the hell knows anything more than this? The fitness gram pacer test is a multistage uhhh</div>')+'<div class="title">'+loc("Version history")+'</div>';`);
                // Cheeky Click here checking
                eval("Game.UpdateMenu = " + funcMenu.replace(`if (pools[i]) achievementsStr+='<div class="listing">'+pools[i]+'</div>';`,`console.log(achievements[i]);if (pools[i]) achievementsStr+='<div class="listing">'+pools[i]+'</div>';`));
                //eval("Game.Achievements['Here you go'].clickFunction = function(){if (!Game.HasAchiev('Here you go')){PlaySound('snd/tick.mp3');Game.Win('Here you go');}flo.hereyougos+=1;}")
                // (dragonStr!=''?'<div class="listing"><b>'+loc("Dragon training:")+'</b></div><div>'+dragonStr+'</div>':'')+
                // Click the version
                flo.cheevos.push(new Game.Achievement('Update pls','Click the version number.<q>Dungeons will be here one day...</q>',[1,1,flo.cdn+"spritesheet2.png"]).order=10994);
                l('versionNumber').addEventListener('click',function(){
                    if (!Game.HasAchiev('Update pls')){
                        PlaySound('snd/tick.mp3');
                        Game.Win('Update pls');
                }});
                // Milks
                flo.cheevos.push(new Game.Achievement('The best milk','Dunk the cookie in CHOCOLATE MILK',[1,1,flo.cdn+"spritesheet2.png"]).order=11050);
                flo.cheevos.push(new Game.Achievement('Not how it works','Dunk the cookie in MIDAS MILK',[1,1,flo.cdn+"spritesheet2.png"]).order=11075);
                // Scry about it 
                flo.fails = 0;
                flo.cheevos.push(new Game.Achievement('Scry about it', 'Fail Resurrect Abomination 100 times',[1,1,flo.cdn+"spritesheet2.png"]).order=61499);
                
                // Cheevo cheevos
                flo.cheevos.push(new Game.Achievement('You Ready?','Achieve <b>10</b> milestones.',[1,1,flo.cdn+"spritesheet2.png"]).order=9050);
                flo.cheevos.push(new Game.Achievement('Lets go','Achieve <b>10</b> milestones.',[1,1,flo.cdn+"spritesheet2.png"]).order=9051);
                flo.cheevos.push(new Game.Achievement('Its like this yall','Achieve <b>50</b> milestones',[1,1,flo.cdn+"spritesheet2.png"]).order=9052);
                flo.cheevos.push(new Game.Achievement('This is 10% Luck','Achieve <b>100</b> milestones',[1,1,flo.cdn+"spritesheet2.png"]).order=9053);
                flo.cheevos.push(new Game.Achievement('20% Skill','Achieve <b>200</b> milestones',[1,1,flo.cdn+"spritesheet2.png"]).order=9054);
                flo.cheevos.push(new Game.Achievement('15% Concentrated power of will','Achieve <b>300</b>',[1,1,flo.cdn+"spritesheet2.png"]).order=9055);
                flo.cheevos.push(new Game.Achievement('5% Pleasure','Achieve <b>400</b>',[1,1,flo.cdn+"spritesheet2.png"]).order=9056);
                flo.cheevos.push(new Game.Achievement('50% Pain','Achieve <b>500</b> milestones',[1,1,flo.cdn+"spritesheet2.png"]).order=9057);
    
                // Name Bakery after Grandma
                // Ascend with 0 cookies.
                // Achievements for level 15 Buildings
                // Achievements for level 20 Buildings
                // Achievement for selling 10 of each building
                
                flo.cheevos.push(new Game.Achievement('Changing of the seasons','5 Seasons changes', [1,1,flo.cdn+"spritesheet2.png"]).order=21105);
                
                
                // Minigame Cheevos
    
                // Hitscanners
                // ############
                // # !IMPOSSIBLE !
                // ############ 
                flo.cheevos.push(new Game.Achievement('Hit x5!','Reach a Hitscan combo of 5 or more.',[1,1,flo.cdn+"spritesheet2.png"]).order=54095);
                flo.cheevos.push(new Game.Achievement('Hit x10!','Reach a Hitscan combo of 10 or more.',[1,1,flo.cdn+"spritesheet2.png"]).order=54096);
                flo.cheevos.push(new Game.Achievement('Hit x25!!','Reach a Hitscan combo of 25 or more.',[1,1,flo.cdn+"spritesheet2.png"]).order=54097);
                // Brewing
                
                // Shadows
                flo.cheevos.push(new Game.Achievement('Dedicated','Clicked it 50 times. <q>No more.</q>',[2,0,flo.cdn+"spritesheet2.png"]).order=120002);
                Game.last.pool ='shadow';Game.last.clickFunction=function(){if(flo.hereyougo%3==0){Game.Notify('No more is to be gained from this.');}}
                flo.cheevos.push(new Game.Achievement('Brainrotted','Clicked the Ticker 10,000 times',[2,0,flo.cdn+"spritesheet2.png"]).order=120001);
                Game.last.pool ='shadow';
                flo.cheevos.push(new Game.Achievement('Milk connoisseur','Dunk the cookie in EVERY MILK',[1,1,flo.cdn+"spritesheet2.png"]).order=120002);
                Game.last.pool = 'shadow';
                flo.cheevos.push(new Game.Achievement('Business Elder','Name yourself after a Grandma. <q>I\'ve got it from here</q>',[1,1,flo.cdn+"spritesheet2.png"]).order=120003);
                Game.last.pool = 'shadow';
                flo.cheevos.push(new Game.Achievement('100% Reason to remember the name','Get every achievement!',[1,1,flo.cdn+"spritesheet2.png"]).order=120004);
                Game.last.pool='shadow';
                LocalizeUpgradesAndAchievs();
            },
            // CHEEVO CHECKER
            checkCheevos: function() {
                Game.Win('Flollower')
                if (Game.Objects['Wizard tower'].minigameLoaded && !flo.wizardTowerLoaded){
                    eval("Game.Objects['Wizard tower'].minigame.spells['resurrect abomination'].fail = " + Game.Objects['Wizard tower'].minigame.spells['resurrect abomination'].fail.toString().replace('return -1','flo.fails += 1;return -1'));
                    eval("Game.Objects['Wizard tower'].minigame.spells['resurrect abomination'].win = " + Game.Objects['Wizard tower'].minigame.spells['resurrect abomination'].win.toString().replace('return -1','flo.fails += 1;return -1'));
                    flo.wizardTowerLoaded=true;
                    }
                if (flo.mode==flo.ABSOLUTENCID && Game.cookies >= 1) Game.Win('Clicker\'? I hardely know \'er');
                if (Game.TickerClicks >= 10000) Game.Win('Brainrotted');
                if (flo.hereyougos >= 2) Game.Win('Another one')
                if (flo.hereyougos >= 3) Game.Win('Begger')
                if (flo.hereyougos >= 4) Game.Win('Desperate')
                if (flo.hereyougoes >= 50) Game.Win('Dedicated')
                if (flo.fails >= 100) Game.Win('Scry about it')
            },
            applyPerks: function(){
                flo.addPerkButtons = function(){
                for (var i = 1; i<20; i++){
                        var obj = Game.ObjectsById[i];
                        if (obj.amount >= 25 && Game.Has('Experiments')) { 
                            if (!l('perkButton'+i)) {continue;}
                            var productButton = l("productLevel"+i);
                            if (productButton) {
                                var perkButton = document.createElement('div');
                                perkButton.id = "perkButton" + i
                                perkButton.innerHTML = "Open " + obj.name + " Perks"; 
                                productButton.parentElement.appendChild(perkButton);
                            }}}}
                
                new Game.Upgrade('Experiments','<b>Grandma has been busy...</b>',10000000000000000,[13,33],function(){flo.addPerkButtons()}).order = 14050; // hehe yoink
                
                checkfunction = function() {
                    if (Game.elderWrath>=3){
                        Game.Unlock('Experiments')
                    }
                    flo.addPerkButtons();
                    
                }
                flo.addPerkButtons();
                Game.registerHook('check',checkfunction)
                Game.Objects['Cursor'].perkTree = [
                    {name: "Tree 1",
                     desc: "The first tree",
                     icon: "",
                     tier1: [
                         {
                             name:"T1P1",
                             desc:"The first perk the first tree",
                             icon:""
                         },
                         {
                             name:"T1P2",
                             desc:"The second perk the first tree",
                             icon:""
                         },
                         {
                             name:"T1P3",
                             desc:"The third perk the first tree",
                             icon:""
                         }
                     ]
                }];
                
            },
            togglePerk: function(what){
                
            
            },
    
            
            
        
            applyFeatures: function(){
        		if (Game.ready) this.createCheevos()
                else Game.registerHook("create", this.createCheevos)
                Game.registerHook("check",this.checkCheevos)
    
                // Vanity :) 
                const targetDiv = document.getElementById('versionNumber');
                const newDiv = document.createElement('div');
                newDiv.innerHTML = `
                    <div style="color: #f5adff;">
                        Flo's Mod: <span style="color:#cccccc;"> v.` + flo.version + `</span>
                    </div>`;
                targetDiv.appendChild(newDiv);
    
    
                
                let str = ''
    
                // PERKS
    
                this.applyPerks();
                // ########################################
                // Animated Icons
                // ########################################
        			
                pregen = function(url){
                    var preload = new Image();
                    preload.src = url;
                }
                animatedIconInject = function(url, num){
                    if (!url) return false;
                    pregen(url)
                    const style = document.createElement('style')
                    style.innerHTML = `#product${num}:hover #productIcon${num} { 
        					background-image: url(${url}) !important;
        					background-position: center !important;
        					background-size: contain !important;	
        				}`
                    document.head.appendChild(style);
                    return true
                }				
    
                str+='|==Animated icons enabled -> ';
                // Add animated Icons :D 
                var loaded = 0
                // Cursor
                var img = null;
                loaded += animatedIconInject(img, 0);
                // Grandma 
                var img = null;
                loaded += animatedIconInject(img, 1);
                // Farm
                var img = null;
                loaded += animatedIconInject(img, 2);
                // Mine 
                var img = null;
                loaded += animatedIconInject(img, 3);
                // Factory
                var img = flo.cdn + "factory.gif";
                loaded += animatedIconInject(img, 4);
                // Bank
                var img = flo.cdn + "bank.gif";
                loaded += animatedIconInject(img, 5);
                // Temple 
                var img = null;
                loaded += animatedIconInject(img, 6);			
                // Wizard Tower 
                var img = null;
                loaded += animatedIconInject(img, 7);			
                // Shipment 
                var img = flo.cdn + "shipment.gif";
                loaded += animatedIconInject(img, 8);			
                // Alchemy Lab
                var img = null;
                loaded += animatedIconInject(img, 9);
                // Portal
                var img = null;
                loaded += animatedIconInject(img, 10);
                // Time Machine
                var img = null;
                loaded += animatedIconInject(img, 11);
                // Antimatter Condenser
                var img = null;
                loaded += animatedIconInject(img, 12);			
                // Prism
                var img = null;
                loaded += animatedIconInject(img, 13);
                // Chancemaker
                var img = null;
                loaded += animatedIconInject(img, 14);
                // Fractal Engine
                var img = null;
                loaded += animatedIconInject(img, 15);
                // Javascript Console
                var img = flo.cdn + "console.gif";
                loaded += animatedIconInject(img, 16);
                // Idleverse
                var img = null;
                loaded += animatedIconInject(img, 17);
                // Cortex Baker
                var img = null;
                loaded += animatedIconInject(img, 18);
                // You
                var img = null;
                loaded += animatedIconInject(img, 19);
    
                str += `Loaded: ${loaded} / 20 Animated Icons ==`
                Game.registerHook('ticker',this.NewsTicker);
    
                
        		/// #### EXTRA CONTENT :D
                // Custom GC effects
                // 10% Building x10
                // 2%  Building x50
                 /*   
                    basic buff parameters :
        			name:'Kitten rain',
        			desc:'It\'s raining kittens!',
        			icon:[0,0],
        			time:30*Game.fps
        		other parameters :
        			visible:false - will hide the buff from the buff list
        			add:true - if this buff already exists, add the new duration to the old one
        			max:true - if this buff already exists, set the new duration to the max of either
        			onDie:function(){} - function will execute when the buff runs out
        			power:3 - used by some buffs
        			multCpS:3 - buff multiplies CpS by this amount
        			multClick:3 - buff multiplies click power by this amount
        		*/
                new Game.buffType('building boost',function(time,pow, building)
        		{
                    var obj=Game.ObjectsById[building];
        			return {
        				name:'Building Boost',
                        desc:"Woah! " + obj.name + " Cookies Per Second "+pow+"00% for " + Game.sayTime(time*Game.fps,-1) + "! <q>Test</q>",
        				icon:[obj.iconColumn,14],
        				time:time*Game.fps,
        				add:true,
        				power:pow,
        				aura:1
        			}; //Game.cookies += Game.hasBuff('Wee Woooo') ? Game.hasBuff('Wee Woooo').arg1 * x : x
        		});
                eval('Game.CalculateGains = ' + Game.CalculateGains.toString().replace("Game.cookiesPs+=me.storedTotalCps;","Game.cookiesPs += (Game.hasBuff('Building Boost')&&Game.hasBuff('Building Boost').arg2==i) ? Game.hasBuff('Building Boost').arg1 * me.storedTotalCps : me.storedTotalCps"));
                // 2% Very Lucky 5x Frenzy
                // 0.5% What Luck? 10x Frenzy
                flo.fx = [];
                          
                flo.goldenCookieBuildingBoost = [];
            
                // 
                /// CHALLENGE MODES
                // I will be taking Ascension ID 71620 - 71630.
                // Because who the fuck am I going to conflict with?
                
                flo.challenge_modes= [ 
                    {
                        modeId: flo.ABSOLUTENCID,
                        name: "Absolute Neverclick.",
                        desc: "Running in the 90s<div class=\"line\"></div>Reaching 1 Quadrillion cookies in this mode unlocks something cool!",
                        icon: [0,0,flo.cdn+"spritesheet2.png"]
                    }
                ]
    
                for (var i in flo.challenge_modes) {
                    var chal = flo.challenge_modes[i];
                    Game.ascensionModes[chal.modeId] = {name: chal.name,dname:chal.name,desc:chal.desc,icon:chal.icon}, Game.ascensionModes
                    }
                    // Injection bypass for save string saving
                	flo.reincarnateStr = Game.Reincarnate.toString();
    		        flo.reincarnateStr = flo.reincarnateStr.replace('Game.ascensionMode=Game.nextAscensionMode;','Game.ascensionMode=Game.nextAscensionMode;' + `
    				if (Game.ascensionMode == flo.ABSOLUTENCID) {Game.ascensionMode = 1; flo.mode = Game.nextAscensionMode;} else {flo.mode = 0}`)
    		        eval('Game.Reincarnate=' + flo.reincarnateStr);
                    // UpdateAscensionPrompt for custom icons
                    flo.updateAscensionPromptStr = Game.UpdateAscensionModePrompt.toString();
                    flo.updateAscensionPromptStr = flo.updateAscensionPromptStr.replace("var icon=Game.ascensionModes[Game.nextAscensionMode].icon;","var icon=Game.ascensionModes[Game.nextAscensionMode].icon;"+
                                                                                        "if (icon[2]){var bgStr = 'background-image: url(' +icon[2]+');';}else{var bgStr = ''}").replace("float:none","'+bgStr+'float:none")
                    eval('Game.UpdateAscensionModePrompt = ' + flo.updateAscensionPromptStr);
    
                    flo.PickAscensionModeStr = Game.PickAscensionMode.toString();
                    flo.PickAscensionModeStr = flo.PickAscensionModeStr.replace("var icon=Game.ascensionModes[i].icon;","var icon=Game.ascensionModes[i].icon;"+
                                                                                        "if (icon[2]){var bgStr = 'background-image: url(' +icon[2]+') !important;';}else{var bgStr = ''}").replace("float:none","'+bgStr+'float:none")
                    eval('Game.PickAscensionMode = ' + flo.PickAscensionModeStr)
    
                    // Add Achievements for Challenge modes         
                    // new Game.Achievement('Clicker\'? I hardly know \'er', 'Bake <b>$1</b> in one Absolute Neverclick ascension',loc("%1 cookie",LBeautify(1e15))),[1,0,flo.cdn+"spritesheet2.png"]).order=9000
    
                    //function createAchieves(){
                    //   new Game.Achievement('Infinite scroll',loc("Bake <b>%1</b> in one Trigger finger ascension.",loc("%1 cookie",LBeautify(1e15))),[1,0,flo.cdn+"spritesheet2.png"]).order=9001;
                    //}
                    //new Game.Achievement('Testing Testing 1 2 3 ',"Bake Exactly 1 cookie",[1,0,flo.cdn+"spritesheet2.png"]).order=9001;
                    //Game.registerHook('create',createAchieves);
                    Game.registerHook('logic',ChallengeModeLogic);
                    
                    // DEFINE 
                    
                    function mousedownBigCookie(event){
        			Game.BigCookieState=1; if (Game.prefs.cookiesound) { Game.playCookieClickSound(); } if (event) event.preventDefault();
            		}
            
            		function mouseupBigCookie(event){
            			Game.BigCookieState=2; if (event) event.preventDefault();
            		}
            
            		function mouseoutBigCookie(event){
            			Game.BigCookieState=0;
            		}
            
            		function mouseoverBigCookie(event){
            			Game.BigCookieState=2;
            		}
            
            		function touchstartBigCookie(event){
            			Game.BigCookieState=1; if (event) event.preventDefault();
            		}
            
            		function touchendBigCookie(event){
            			Game.BigCookieState=0; if (event) event.preventDefault();
            		}
                    function ChallengeModeLogic(){
                        switch (flo.mode) {
                            case 0: 
                                return;
                            case flo.ABSOLUTENCID: // Absolute Neverclick
    
                                bigCookie.removeEventListener('click',Game.ClickCookie); // remove mouse clicking
                                bigCookie.removeEventListener('touchend',Game.ClickCookie); // remove touch clicking
                                bigCookie.removeEventListener('mousedown',mousedownBigCookie); // remove mouse down
                                bigCookie.removeEventListener('mouseup',mouseupBigCookie); // remove mouse up
                                break;
                            default:
                                return;
                        }
                        return;
                    }
        		// MINIGAMS
                // Minigames
    
                // Cursors
                
                // Grandma
                this.applySewing();
    
                // Farm
                // Factory
                // Bank
                // Wizard
                // Shipment
                
                // Alchemy
                this.applyAlchemy();
        
                // Portal
                // Time Machine
                // Antimatter Condenser
                // Prism
                // Chancemaker
                // Fractal Engine
                // Javascript Console
                // Idleverse
                // Cortex Baker
                this.applyChess()
                // You
                str += '|'
                Game.LoadMinigames()
                console.log('Loaded: Flo\'s Mod')
                console.log(str)
                // Random Greeting
                let greetings = [
                    '|>+-Hello, World!-+<|',
                    '| Meowdy! (=^･ｪ･^=) |'
                    ];
                console.log(choose(greetings))
                
            },
            applySewing: function(){
        
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
                Game.Objects["Grandma"].minigame = M;
                Game.Objects["Grandma"].minigameName = "Sewing";
                Game.Objects["Grandma"].minigameUrl = "https://klattmose.github.io/CookieClicker/dummyFile.js"
            },
        
        
            // ###########################################################################
            // # ALCHEMY Minigame                                                      ###
            // # BREWING 
            // ###########################################################################
            
            applyAlchemy: function(){
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
                        M.potions = [];
                        M.ingredients = { // Named by the plant.name, because otherwise it involves above.
                            'Baker\'s wheat':{effsStr:'+1% CPS for 60s',},  // DONE
                            'Thumbcorn':{effsStr:'+1% Click Power for 60s'}, // DONE
                            'Cronerice':{effsStr:'Gain a temporary 10 Grandmas for 60s'}, // DONE
                            'Gildmillet':{effsStr:'Golden cookie effect duration +1% for 60s'}, 
                            'Ordinary clover':{effsStr:'Golden cookie frequency +1% for 60s'},
                            'Golden clover':{effsStr:'Golden cookie frequency +3% for 60s'},
                            'Shimmerlily':{effsStr:'GC chance'}, 
                            'Elderwort':{effsStr:'Wrath Duration'},
                            'Bakeberry':{effsStr:'CpS (max. %2% of bank) instantly'},
                            'Chocoroot':{effsStr:'CpS (max. %2% of bank)'},
                            'White chocoroot':{effsStr:'CpS (max. %2% of bank)'},
                            'White mildew':{effsStr:''}, // Need Mold Uses // --> GC FREQ 0.1%
                            'Brown mold':{effsStr:''}, // WC FREQ 0.1%
                            'Meddleweed':{effsStr:''}, // 
                            'Whiskerbloom':{effsStr:''},
                            'Chimerose':{effsStr:''},
                            'Nursetulip':{effsStr:''},
                            'Drowsyfern':{effsStr:''},
                            'Wardlichen':{effsStr:''},
                            'Keenmoss':{effsStr:''},
                            'Queenbeet':{effsStr:''},
                            'Juicy queenbeet':{effsStr:''},
                            'Duketater':{effsStr:''},
                            'Crumbspore':{effsStr:''},
                            'Doughshroom':{effsStr:''},
                            'Glovemorel':{effsStr:''},
                            'Cheapcap':{effsStr:''},
                            'Fool\'s bolete':{effsStr:''},
                            'Wrinklegill':{effsStr:''},
                            'Green rot':{effsStr:''},
                            'Shriekbulb':{effsStr:''},
                            'Tidygrass':{effsStr:''},
                            'Everdaisy':{effsStr:''},
                            'Ichorpuff':{effsStr:''}
                            
                        };
                        M.available = [];
                        // Selecting a plant for the potion
                        M.cauldron = [];
                        M.selected = 0;
                        
                        // Do html stuff
                        str = ""
                        //str += "<style></style>";
                        str += "<div style='height:400px;display:flex;background-image:url(https://i.imgur.com/JEEVc8j.png);background-size: 100% 100%, auto;'>Alchemy!<div id='alchemyPanel'></div></div>";
                        div.innerHTML = str;
                    },
                    M.buildPanel=function()
                        {
                            var str = "";
                            for (var i in M.available){
                                    var p=M.available[i]
                                    var icon = [4, p.icon]; // Stage 4 is 'Mature'
                                    console.log(p);
                                    str += `<div style="cursor:pointer;height:40px;width:40px;background-image: url(https://cdn.dashnet.org/cookieclicker/img/gardenPlants.png?v=2.052);background-position:${-icon[0]*48}px ${-icon[1]*48}px;"onmouseover="Game.tooltip.wobble();" class="shadowFilter"></div>`
                                }
                            l('alchemyPanel').innerHTML = str
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
                    // ########## POTION MAKING ################
                    M.addPlant = function(plant) { // Hooked into Garden
                        console.log("Adding plant: " + plant.name);
                        M.available.push(plant);
                        M.buildPanel()
                    },
                    M.newPotion = function(effs) {
                            
                    }
                    M.makePotion = function() { 
                        // Collects all potions in Cauldron into a 'potion'
                        
                        for (var i in M.cauldron){
                            var me = M.cauldron[i];
                            v
                            
                        }
                    }
                    M.init(l('rowSpecial'+M.parent.id));
                }
                evilInject = function() {
                var M = 0;
                var evil_code = "if (Game.Objects['Alchemy lab'].minigameLoaded) { Game.Objects['Alchemy lab'].minigame.addPlant(me)} M.harvests++";
                var evil_code2 = "console.log(me.name); M.harvests++"
                // Hook into Garden
                // if (Game.Objects['Alchemy lab'].minigameLoaded) {Game.Objects['Alchemy lab'].minigame.addPlant(me.name);}\n M.harvests++
                var M = Game.Objects['Farm'].minigame;
                
                eval('M.harvest = ' + M.harvest.toString().replace('M.harvests++', evil_code)); 
                    }
                // Finally, add it
                Game.Objects['Alchemy lab'].minigame = M;
                Game.Objects['Alchemy lab'].minigameName = "Potion Brewing";
                Game.Objects['Alchemy lab'].minigameUrl = "https://klattmose.github.io/CookieClicker/dummyFile.js";
                Game.registerHook('check',function(){
                    if (Game.Objects['Farm'].minigameLoaded && !flo.gardenLoaded){
                        evilInject()}});
                //M.parent.minigame=M;
                
            },
            /* 
            #########################################
            # ~~-+-+-     Cortex  Chess     -+-+-~~ #
            #########################################
            /  Pieces: Pawn, Rook, Knight, Bishop, Queen, King
            Rarities: 
    
            Pieces buff along their path
            Players may move pieces for cheaper than placing them, but again only along their path
            Pieces experience blocking, like real chess.
    
            */
        
            applyChess: function() {
                // Chess Upgrades
                var url = 'https://orteil.dashnet.org/cookieclicker/img/icons.png';
                new Game.Upgrade('Chess Upgrade 1','Doubles piece drop chance', 10000000000000000000, [0,0,url],function(){Game.Objects['Cortex baker'].minigame.drop_chance *= 2;});
                new Game.Upgrade('Chess Upgrade 2','Doubles piece drop chance', 10000000000000000000000, [0,0,url],function(){Game.Objects['Cortex baker'].minigame.drop_chance *= 2;});
                new Game.Upgrade('Chess Upgrade 3','Doubles piece drop chance', 10000000000000000000000000, [0,0,url],function(){Game.Objects['Cortex baker'].minigame.drop_chance *= 2;});
                new Game.Upgrade('Chess Upgrade 4','Doubles piece drop chance', 10000000000000000000000000, [0,0,url],function(){Game.Objects['Cortex baker'].minigame.drop_chance *= 2;});

                flo.cheevos.push(new Game.Achievement('Gary Cookieov','Find a chess piece.',[1,1,flo.cdn+"spritesheet2.png"]).order=11050);
                flo.cheevos.push(new Game.Achievement('The Full Set','Find a full chess set',[1,1,flo.cdn+"spritesheet2.png"]).order=11051);
                flo.cheevos.push(new Game.Achievement('50 Pieces','Find 50 chess pieces.',[1,1,flo.cdn+"spritesheet2.png"]).order=11052);
                LocalizeUpgradesAndAchievs
                var M={};
                M.parent=Game.Objects['Cortex baker'];
                M.parent.minigame=M;
                M.launch=function()
                    {
                    var M=this;
                    M.name=M.parent.minigameName;
                    M.tileSize = 40;
                    M.boardSize = 3; // Implement Board Size
                    M.pieces = {
                        'pawn': {
                            name: "Pawn",
                            q: "The humble foot soldier of the army",
                            column: 5,
                            moves: [[1,1],[1,-1]],
                            eff: "cps",
                            pow: 0.1,
                            weight:8
                        },
                        'rook': {
                            name: "Rook",
                            q: "",
                            column: 4,
                            moves: 'r',
                            eff: "gceff",
                            pow: 5,
                            weight: 4,
                        },
                        'knight':{
                            name: "Knight",
                            q:"",
                            column: 3,
                            moves: [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]],
                            eff: "click",
                            weight: 4,
                        },
                        'bishop':{
                            name: "Bishop",
                            q:"",
                            column: 2,
                            moves: 'b',
                            eff: "gcchan",
                            weight: 4
                        },
                        'queen':{
                            name: "Queen",
                            column: 1,
                            weight:2,
                            moves: 'q',
                            eff: "q",
                        },
                        'king':{
                            name: "King",
                            q: "",
                            column: 0,
                            weight:1
                        },
                    
                    }
                    M.rarities = [
                        [{name:"Common",row:0,pow:1,obj:Game.Tiers[1]},27.815],
                        [{name:"Uncommon",row:1,pow:1.5,obj:Game.Tiers[2]},25],
                        [{name:"Rare",row:2,pow:2,obj:Game.Tiers[3]},20],
                        [{name:"Fine",row:3,pow:3,obj:Game.Tiers[4]},10],
                        [{name:"Exquisite",row:4,pow:5,obj:Game.Tiers[5]},7.5],
                        [{name:"Dirty",row:5,pow:7,obj:Game.Tiers[6]},5],
                        [{name:"Minted",row:6,pow:10,obj:Game.Tiers[7]},2],
                        [{name:"Lustrous",row:7,pow:15,obj:Game.Tiers[8]},1],
                        [{name:"Enchanted",row:8,pow:20,obj:Game.Tiers[9]},0.75],
                        [{name:"Celestial",row:9,pow:25,obj:Game.Tiers[10]},0.5],
                        [{name:"Cosmic",row:10,pow:30,obj:Game.Tiers[11]},0.25],
                        [{name:"Pristine",row:11,pow:50,obj:Game.Tiers[12]},0.1],
                        [{name:"Mythical",row:12,pow:77,obj:Game.Tiers[13]},0.05],
                        [{name:"Heavenly",row:13,pow:88,obj:Game.Tiers[14]},0.025],
                        [{name:"Pearlescent",row:14,pow:100,obj:Game.Tiers[15]},0.01]
                                ];
                    // Definitions
    
                    
                    M.drop_chance = 0.001;
                    M.loaded = false;
                    M.init=function(div)
                    {   
                        M.inventory = [];
                        M.buildUI(div);
                        Game.registerHook('click',M.handleClick);
                    },
                    M.buildUI = function(div){
                        str = "";
                        str+='<style>'+
    		                '#chessBG{background:url('+Game.resPath+'img/shadedBorders.png),url('+Game.resPath+'img/BGgarden.jpg);background-size:100% 100%,auto;position:absolute;left:0px;right:0px;top:0px;bottom:16px;}'+
    		                '#chessContent{position:relative;box-sizing:border-box;padding:4px 24px;height:'+(6*M.tileSize+16+48+48)+'px;}'+
                            '#chessInventory{background-color:rgba(0,0,0,0.2);padding:4px;border-radius:8px;max-width:160px}'+
                            '#chessDrag{position:absolute;left:0px;top:0px;z-index:1000000000000;}'+
                            '.chessPiece{display:inline;box-shadow:0px 0px 4px rgba(255,255,255,0.2) inset,0px 2px 4px 2px rgba(0,0,0,0.5),0px 0px 0px 1px rgba(0,0,0,0.5);margin:0px 4px;}'+
                            '.chessIcon{background-image:url(https://cdn.flowiz.moe/chess.png);display:inline-block;width:24px;height:48px;}'+
                            '.chessIcon:hover{cursor:pointer;box-shadow:0px 0px 4px rgba(255,255,255,0.2) inset,0px 2px 4px 2px rgba(0,0,0,0.5),0px 0px 0px 1px rgba(0,0,0,0.5)}'+
                            '.chessBoard{}'+
                            '.chessRow{display:flex;flex-direction:row;justify-content:center;align-items:center;}'+
                            '.chessTile{height:40px;width:40px}'+
                            '.chessWhite{background-color:#eee;}'+
                            '.chessBlack{background-color:#ccc;}'+
                            '.chessDragged{box-shadow:6px 6px 6px 2px #000;z-index:1000000001;top:-1px;pointer-events:none;}'+
                            '</style>';
    
                        str+='<div id="chessBG"></div>'+
                            '<div id="chessDrag"></div>'+
                            '<div id="chessContent">';
                        // Info panel
                        str+='<div class="chessPanel">'+
                            '<div id="chessInfo">Info</div>'+
                            '<div id="chessInventory"></div>'+
                            '</div>' // close panel
                        
                        str += '<div id="chessboard"></div>';
                        str += '</div>';
                        div.innerHTML = str;
                        M.renderInventory()
                        M.drawBoard()
                    },
                    M.renderPiece = function(piece) {
                        return `<div class="chessIcon" style="background-position:` + (-piece.piece.column * 24) + `px ` + (-piece.rarity[0].row * 48) + `px;"></div>`;
                    },
                    M.renderInventory = function() {
                        var str = "";
                        for (var i in M.inventory) {
                            var piece = M.inventory[i];
                            str += `<div class="chessPiece" style="width:`+M.tileSize+`px;height:`+M.tileSize+`px;" `+
                            `onmousedown="Game.Objects['Cortex baker'].minigame.dragPiece(`+i+`);"`+
                            `id="piece`+i+`">`;
                            str += M.renderPiece(piece);
                            str += '</div>';
                        }
                        l('chessInventory').innerHTML = str;
                    },
                    M.isdragging = false;
                    M.dragPiece = function(index) { 
                        console.log(index)
                        M.dragging = M.inventory[index];
                        var div = l('piece' + index);
                        l('chessDrag').innerHTML = M.renderPiece(M.dragging);
                        
                    },
                    M.drawBoard = function() {
                        var str = "";
                        for (var i = 0; i < M.boardSize; i++) {
                            str += '<div class="chessRow">';
                            for (var j = 0; j < M.boardSize; j++) {
                                str += `<div class="chessTile`+ ((i+j)%2==0 ? ' chessWhite' : ' chessBlack')+`" id="tile`+i+`-`+j+`" `+
                                `"style="width:`+M.tileSize+`px;height:`+M.tileSize+`px;">`;
                                // Add piece if exists
                                var piece = M.getPieceAt(i, j);
                                str += piece ? M.renderPiece(piece) : '';
                                str += '</div>';
                            }
                            str += '</div>';
                        }
                        l('chessboard').innerHTML = str;
                    },
                    M.getPieceAt = function(x,y) {
                        for (var i in M.inventory) {
                            var piece = M.inventory[i];
                            // Check if piece is at the given coordinates
                            if (piece.x === x && piece.y === y) {
                                return piece;
                            }
                        }
                        return null; // No piece at this position
                    },
                    M.draw = function() {
                        if (M.dragging) {
                            var box=l('chessDrag').getBounds();
                            var x=Game.mouseX
			                var y=Game.mouseY-TopBarOffset;
                            l('chessDrag').style.transform='translate('+(x)+'px,'+(y)+'px)';
                            }
                    },
                    // Generate a random piece
                    M.generatePiece=function() {
                        // 1. Select piece type based on weights
                        const pieceEntries = Object.entries(M.pieces)
                            .map(([key, data]) => [key, data.weight]);
                        
                        const pieceKey = weightedRandom(pieceEntries);
                        const piece = M.pieces[pieceKey];
                        
                        // 2. Select rarity tier
                        const rarity = weightedRandom(M.rarities);
                        return { piece, rarity };
                    },
                    M.handleClick = function() { 
                        if (Math.random() < M.drop_chance) {
                            // Hey we got one!
                            var piece = M.generatePiece();
                            M.inventory.push(piece);
                            Game.Popup((`<span style="font-size:12px;position:absolute;top:20px;left:40%;color:`+piece.rarity[0].obj.color+`">(`+piece.rarity[0].name+`)</span>Found <span style="color:` + piece.rarity[0].obj.color + `;">` + piece.rarity[0].obj.name + " " + piece.piece.name + "!</span>"),Game.mouseX+Math.random()*50-Math.random()*50,Game.mouseY+Math.random()*50-Math.random()*50);
                            M.renderInventory();
                            Game.Win('Gary Cookieov');
                            if (M.inventory.length >= 50) Game.Win("50 Pieces");
                        }
                        return;
                    },
                    M.save=function(){},
                    M.load=function(str){},
                    M.reset=function(){},
                    M.init(l('rowSpecial'+M.parent.id));
            }
                Game.Objects["Cortex baker"].minigame = M;
                Game.Objects["Cortex baker"].minigameName = "Chess";
                Game.Objects["Cortex baker"].minigameUrl = "https://klattmose.github.io/CookieClicker/dummyFile.js";
            },
            /*
            #########################################
            # --       EXPANDED NEWS TICKER      -- #
            #########################################
            # 
            #
            #
            */
            NewsTicker: function(){
                var news=[];
                var altlist = ['an Orteil','an Opti','a Lookas','a Fleur','a Nyan','a Limes','a Hellranger','a Yeetdragon', 'an Omar',"a Finn","a Dragoon"];
                var results = ['investigation pending','results inconclusive','proof yet to be seen'];
    
                var food = ['raisin','hazlenut','chocolate chip','macademia nut','sprinkle'];
                var supplies = ['knitting','bingo','yarn'];
                var schism = ['proper milk-dunking angles.','correct chocolate to dough ratio',(''+choose(food)+'s VS '+choose(supplies)+'.')];
                
                var base = ['Breaking : Cookie jar found ' + choose(['Half full - Optimists rejoice!','Half empty - Pessimists rejoice!']),
                            'Local baker suspected of being ' + choose(altlist) + ' alt, ' + choose(results)+'.',
                            'Honey, I have no news.',
                            'Controversial study claims cookies don"t actually exist.',
                            'How many cookies is too many? Scientists investigate.'
                            ];
                if (Math.random()>0.8) news.push(choose(base));
                // EARLY
                if (Game.cookiesEarned < 10000){
                    news.push(choose([
                        'Breaking : Cookies found to be ' + Math.floor((Math.random()/2+0.5*100)) + '% more delicious when free.',
                        'News : Local baker discovers cookies are actually made of flour and sugar',
                        'Milk sales mysteriously rise in your neighborhood. Coincidence?',
                        'Local news anchor eats story about cookies. Claims it was "for research."',
                        'Oven manual: "Step 1: Believe in the cookie."',
                        'New baker claims cookies just "appear" when clicked. Authorities suspicious.',
                        'First-time baker mistakes sugar for salt - "It\'s avant-garde!"',
                        'Baker hospitalized for "cookie vision"- claims to see floating numbers.']));
                }
                //Midgame 
                if (Game.cookiesEarned > 10000 && Game.prestige < 100){
                    news.push(choose([
                        'Authorities baffled by sudden surge in home-baked snacks.',
                        'Scientists baffled by sudden rise in global cookie crumbs.',
                        'Cookie found inside cookie. Experts call it "a sign."',
                        'Cookie economy now bigger than several small countries combined.',
                        'Cookie-based stock market opens. Investors warned not to dunk portfolios in milk.']));
                }
                // Midgame FR
                if (Game.prestige > 0 && Game.prestige < 1000000) {
                    news.push(choose([
                        'World governments convene emergency cookie summit. Dessert table reportedly excellent.',
                        'Local baker now a multi-trillionaire. Still can\'t find matching socks.']));
                }
    
                // BUILDINGS 
                if (Game.Objects["Cursor"].amount > 10) {
                    news.push(choose([
                        'News : Carpel Tunnel syndrome spikes in local Bakery.',
                        'Controversy: Should cursors have "right-click" privileges?',
                        'Cursor recall after models found pointing sideways.']));
                }
                if (Game.Objects["Grandma"].amount > 10) {
                    news.push(choose([
                        'Secret recipe vault breached - investigators find only crumbs and knitting patterns.',
                        'Gray Panthers protest "unfair representation" in cookie mascot elections.',
                        'Local grandma starts baking cookies again. Neighborhood unsure if it\'s a blessing or a curse.',
                        'News : Nursing homes report spike in "suspiciously competent" bakers.',
                        'News : Knitting circles now doubling as underground cookie exchanges.',
                        'Grandma mafia corner black market on ' + choose(supplies) + ' supplies.']));
                }
                if (Game.Objects["Farm"].amount > 10) {
                    news.push(choose([
                        'Mysterious crop circles appear in wheat fields - patterns resemble giant cookie jars.',
                        'Farmers market scandal: Artisanal cookies found to contain mass-produced dough.',
                        '"Farmer grows hexagonal cookies - "They\'re more efficient!"',
                        '"Sentient' + choose(food) +' escapes cookie: "I never asked for this!"',
                        'Farmhand arrested for smuggling ' + choose(food) + 's in overalls.']));
                }
                if (Game.Objects["Mine"].amount > 10) {
                    news.push(choose([
                        'Legendary "Mother Dough" vein discovered at 20,000 feet.',
                        'Deepest mine shaft hits caramel layer - geologists thrilled.',
                        'Safety inspectors condemn "reckless" use of pickaxes in nougat deposits.',
                        'Mining magnates propose controversial "Cookie Crust Initiative" to dig deeper']));
                }
                if (Game.Objects["Factory"].amount > 10) {
                    news.push(choose([
                        'Factory owners discover new way to increase efficiency: Melted butter.',
                        'Whistleblower reveals secret ingredient: "Love (and industrial lubricant)".']));
                }
                if (Game.Objects["Bank"].amount > 10) {
                    news.push(choose([
                        'Interest rates crumble as ' + choose(food) + ' reserves reach historic highs.',
                        'Digital dough wallet hacked - thief leaves thank-you note and recipe suggestions.',
                        'Cookie Standard implemented - all currencies now exchangeable at 1:π rate.',
                        'Trade War: ' + choose(food) + ' tariffs spark international bakery tensions.']));
                }
                if (Game.Objects["Temple"].amount > 10) {
                    news.push(choose([
                        'Schism in Church of Crispiness over ' + choose(schism),
                        'Necromancy department raises questions with "Very Fresh" cookie initiative.',
                        'Sacrilege: Acolyte caught sneaking store-bought cookies.']));
                }
                if (Game.Objects["Wizard tower"].amount > 10) {
                    news.push(choose([
                        'Ethics committee reviews sentient cookie familiar program.',
                        'Weather magic accident causes localized chocolate rain.',
                        'Wizard duel ends in mutual transmutation to gingerbread.',
                        'Crazy old fool sighted taking up residence in the wizard tower.']));
                }
                if (Game.Objects["Shipment"].amount > 10) {
                    news.push(choose([
                        'Space truckers lost in cinnamon nebula - "Worth the hazard pay!"',
                        'Cookie smuggling ring busted in asteroid belt.',
                        'Zero-gravity baking disaster creates cookie meteor shower.',
                        'Crazy planet filled with ' + choose(food) + ' discovered on outer reaches of solar system']));
                }
                if (Game.Objects["Alchemy lab"].amount > 10) {
                    news.push(choose([
                        'Potion recall: "Butterfingers Elixir" causes literal symptom.',
                        'Cauldron overflow creates cookie lava in downtown district.']));
                }
                if (Game.Objects["Portal"].amount > 10) {
                    news.push(choose([
                        '"Hellmouth" portal accident releases swarm of cookie demons.',
                        'Creatures come through portal craving cake - "The cookie is a lie".']));
                }
    
                
                // RARE
                 
                if (Game.cookiesEarned > 1000000 && Math.random() > 0.8){
                    news.push(choose([
                        'Controversial "Loot Crate" cookies contain random fillings of varying quality.',
                        'News : Fellowship forms to destroy One Cookie in Mount Crumb.',
                        'News : Rockstar baker jailed after 27th chocolate overdose.',
                        'News : Rebel bakers defeat Cookie Empire with prototype Oven Star - "That\'s no moon pie!']));
                }
                return news
                }
        });
