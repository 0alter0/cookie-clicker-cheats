javascript:(function(){
    const cheats = {
        "Ascend": () => { Game.Ascend(1); },
        "Change Mouse Pointer": () => { Game.mousePointer = 0; },
        "Calculate Gains": () => { Game.CalculateGains(); },
        "Disable Popups": () => { Game.popups = 0; },
        "Earn Cookies": () => { 
            const amount = prompt("Enter the amount of cookies to earn:", "1000000");
            if (amount) { Game.Earn(parseInt(amount, 10)); }
        },
        "Kill Shimmers": () => { Game.killShimmers(); },
        "Load Local Storage Save": () => { Game.localStorageGet(Game.SaveTo); },
        "Load Save": () => { Game.LoadSave(); },
        "Max Specials": () => { Game.MaxSpecials(); },
        "Milk Amount": () => { 
            const amount = prompt("Enter milk amount:", "1");
            if (amount) { Game.Milk = parseInt(amount, 10); }
        },
        "Milk Progress": () => { 
            const amount = prompt("Enter milk progress amount:", "1");
            if (amount) { Game.milkProgress = parseInt(amount, 10); }
        },
        "Set All Achievements": () => { Game.SetAllAchievs(1); },
        "Set All Upgrades": () => { Game.SetAllUpgrade(1); },
        "Set Bakery Name": () => { 
            const name = prompt("Enter the new bakery name:");
            if (name) { Game.bakeryName = name; Game.bakeryNameRefresh(); }
        },
        "Set Buy Bulk Amount": () => { 
            const bulk = prompt("Enter buy bulk (1, 10, or 100):", "1");
            if (bulk) { Game.buyBulk = parseInt(bulk, 10); }
        },
        "Set Dragon Level": () => { 
            const level = prompt("Enter dragon level:", "1");
            if (level) { Game.dragonLevel = parseInt(level, 10); }
        },
        "Set Santa Level": () => { 
            const level = prompt("Enter santa level:", "1");
            if (level) { Game.santaLevel = parseInt(level, 10); }
        },
        "Set Ascend Timer": () => { 
            const time = prompt("Enter the Ascend timer value:");
            if (time) { Game.AscendTimer = parseInt(time, 10); }
        },
        "Update Particles": () => { Game.particlesUpdate(); },
        "Unlock Achievement": () => { 
            const name = prompt("Enter the achievement name:");
            if (name) { Game.Achievements[name].won = 1; }
        },
        "Win Achievement": () => { 
            const name = prompt("Enter the achievement name to win:");
            if (name) { Game.Win(name); }
        },
        "Ruin The Fun": () => { Game.RuinTheFun(1); },
        "Gold Cookie": () => { 
            var newShimmer = new Game.shimmer("golden");
            newShimmer.spawnLead = 1;
        },
        "Auto Collect Shimmers": () => { 
            Game.shimmers.forEach(shimmer => shimmer.pop()); 
        },
        "Cookie Multiplier": () => {
            const multiplier = prompt("Enter cookie multiplier amount:", "1");
            if (multiplier) {
                const originalCookies = Game.cookiesPs;
                const targetTime = Date.now() + 180000; // 3 minutes
                const interval = setInterval(() => {
                    if (Date.now() > targetTime) {
                        clearInterval(interval);
                    } else {
                        Game.cookiesPs *= multiplier;
                    }
                }, 1000);
            }
        },
        "Change Cookies Per Second": () => {
            const newCps = prompt("Enter new cookies per second amount:");
            if (newCps) {
                const originalCps = Game.cookiesPs;
                const targetTime = Date.now() + 180000; // 3 minutes
                const interval = setInterval(() => {
                    if (Date.now() > targetTime) {
                        clearInterval(interval);
                        Game.cookiesPs = originalCps; // Restore original CPS after duration
                    } else {
                        Game.cookiesPs = parseFloat(newCps);
                    }
                }, 1000);
            }
        },
        "Cookie Maker": () => {
            const amount = prompt("Enter the amount of cookies to create:", "1000");
            if (amount) {
                Game.cookies += parseInt(amount, 10);
            }
        },
        "Auto Clicker": () => {
            const duration = prompt("Enter duration in seconds:", "5");
            if (duration) {
                const clicks = setInterval(() => { Game.ClickCookie(); }, 100);
                setTimeout(() => { clearInterval(clicks); }, duration * 1000);
            }
        },
        "Set Building Amount": () => {
            const building = prompt("Enter the building name (e.g., 'Cursor', 'Grandma'):");
            const amount = prompt("Enter the number of buildings you want:");
            if (building && amount) {
                Game.Objects[building].amount = parseInt(amount, 10);
                Game.Objects[building].buyFunction = () => {};
            }
        },
        "Reset Game": () => { Game.HardReset(); },
        "Set Sugar Lumps": () => {
            const lumps = prompt("Enter the number of sugar lumps you want:", "1");
            if (lumps) { Game.lumps = parseInt(lumps, 10); }
        }
    };

    let isMenuVisible = true;
    const menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.top = '10px';
    menu.style.right = '10px';
    menu.style.width = '300px';
    menu.style.height = '500px';
    menu.style.overflowY = 'scroll';
    menu.style.backgroundColor = '#333';
    menu.style.color = '#fff';
    menu.style.padding = '15px';
    menu.style.borderRadius = '10px';
    menu.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    menu.style.zIndex = 9999;
    menu.style.fontFamily = 'Arial, sans-serif';

    const title = document.createElement('h2');
    title.innerText = 'Cookie Clicker Cheats';
    title.style.margin = '0';
    title.style.fontSize = '18px';
    title.style.color = '#fff';
    menu.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.innerText = 'Made by Lil Skittle V1.2.1';
    subtitle.style.fontSize = '12px';
    subtitle.style.marginTop = '5px';
    menu.appendChild(subtitle);

    Object.keys(cheats).sort().forEach(cheat => {
        const button = document.createElement('button');
        button.innerText = cheat;
        button.style.display = 'block';
        button.style.marginTop = '10px';
        button.style.width = '100%';
        button.style.padding = '10px';
        button.style.backgroundColor = '#444';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.onclick = () => { cheats[cheat](); };
        menu.appendChild(button);
    });

    document.body.appendChild(menu);

    const toggleMenu = () => {
        menu.style.display = isMenuVisible ? 'none' : 'block';
        isMenuVisible = !isMenuVisible;
    };

    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.key === 'e') {
            toggleMenu();
        }
    });
})();
