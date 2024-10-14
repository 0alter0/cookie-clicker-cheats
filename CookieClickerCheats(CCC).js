javascript:(function(){
    const cheats = {
        "Ascend": () => { Game.Ascend(1); alert("You have ascended!"); },
        "Change Mouse Pointer": () => { Game.mousePointer = 0; alert("Mouse pointer changed!"); },
        "Calculate Gains": () => { Game.CalculateGains(); alert("Gains calculated!"); },
        "Disable Popups": () => { Game.popups = 0; alert("Popups disabled!"); },
        "Earn Cookies": () => { 
            const amount = prompt("Enter the amount of cookies to earn:", "1000000");
            if (amount) { Game.Earn(parseInt(amount, 10)); alert(`${amount} cookies earned!`); }
        },
        "Has Achievement": () => { 
            const name = prompt("Enter the achievement name to check:");
            if (name) { const hasAchiev = Game.Has(name); alert(`Has achievement '${name}': ${hasAchiev}`); }
        },
        "Kill Shimmers": () => { Game.killShimmers(); alert("Shimmers killed!"); },
        "Load Local Storage Save": () => { Game.localStorageGet(Game.SaveTo); alert("Local storage save loaded!"); },
        "Load Save": () => { Game.LoadSave(); alert("Save loaded!"); },
        "Max Specials": () => { Game.MaxSpecials(); alert("Max specials applied!"); },
        "Milk Amount": () => { 
            const amount = prompt("Enter milk amount:", "1");
            if (amount) { Game.Milk = parseInt(amount, 10); alert(`Milk amount set to ${amount}!`); }
        },
        "Milk Progress": () => { 
            const amount = prompt("Enter milk progress amount:", "1");
            if (amount) { Game.milkProgress = parseInt(amount, 10); alert(`Milk progress set to ${amount}!`); }
        },
        "Set All Achievements": () => { Game.SetAllAchievs(1); alert("All achievements unlocked!"); },
        "Set All Upgrades": () => { Game.SetAllUpgrade(1); alert("All upgrades unlocked!"); },
        "Set Bakery Name": () => { 
            const name = prompt("Enter the new bakery name:");
            if (name) { Game.bakeryName = name; Game.bakeryNameRefresh(); alert(`Bakery name changed to '${name}'!`); }
        },
        "Set Buy Bulk Amount": () => { 
            const bulk = prompt("Enter buy bulk (1, 10, or 100):", "1");
            if (bulk) { Game.buyBulk = parseInt(bulk, 10); alert(`Buy bulk set to ${bulk}!`); }
        },
        "Set Dragon Level": () => { 
            const level = prompt("Enter dragon level:", "1");
            if (level) { Game.dragonLevel = parseInt(level, 10); alert(`Dragon level set to ${level}!`); }
        },
        "Set Santa Level": () => { 
            const level = prompt("Enter santa level:", "1");
            if (level) { Game.santaLevel = parseInt(level, 10); alert(`Santa level set to ${level}!`); }
        },
        "Set Ascend Timer": () => { 
            const time = prompt("Enter the Ascend timer value:");
            if (time) { Game.AscendTimer = parseInt(time, 10); alert(`Ascend timer set to ${time}!`); }
        },
        "Update Particles": () => { Game.particlesUpdate(); alert("Particles updated!"); },
        "Unlock Achievement": () => { 
            const name = prompt("Enter the achievement name:");
            if (name) { Game.Achievements[name].won = 1; alert(`Achievement '${name}' unlocked!`); }
        },
        "Win Achievement": () => { 
            const name = prompt("Enter the achievement name to win:");
            if (name) { Game.Win(name); alert(`You won the achievement '${name}'!`); }
        },
        "Ruin The Fun": () => { Game.RuinTheFun(1); alert("Fun ruined!"); }
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
    subtitle.innerText = 'Made by Lil Skittle V1';
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
            event.preventDefault();
            toggleMenu();
        }
    });
})();
