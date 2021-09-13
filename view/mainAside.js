const mainAside = document.getElementById('mainAside')

const asideObj = {
    menuState : true,
    navHead : {
        appLogo: 'i-H5-Aside-logo',
        appName: 'Reminders'
    },
    navItems : [
        { icon: 'i-H5-prayer',      title: 'Prayer',     route: '#prayer',     active: true},
        { icon: 'i-H5-dashboard',   title: 'Dashboard',  route: '#dashboard',  active: false},
        { icon: 'i-H5-task',        title: 'Tasks',      route: '#tasks',      active: false},
        { icon: 'i-H5-reminders',   title: 'Reminders',  route: '#reminders',  active: false},
        { icon: 'i-H5-myPocket',    title: 'My Pocket',  route: '#pocket',     active: false},
        { icon: 'i-H5-categories',  title: 'Categories', route: '#categories', active: false},
        { icon: 'i-H5-archive',     title: 'Archive',    route: '#archive',    active: false}
    ],

    user : {
        userImage : 'i-H5-userPic',
        userName : 'User Name'
    }
}


/* active state stays on for the route in hash */
function readyRouter(){
    let hash = window.location.hash
    for(let [index,item] of asideObj.navItems.entries()){
        item.route == hash ? toggleActive(index) : false
    }
}

function router(index){
    let route = asideObj.navItems[index].route
    window.location.hash = route
}

function toggleActive(index){
    for (let item of asideObj.navItems){
        item.active = false
    }
    asideObj.navItems[index].active = true
    componentRender()
}



function openCloseMenu(e){
    let openCloseWidth = ["462px", "80px"];
    let menuState = asideObj.menuState;
    switch(menuState) {
        case true:
          mainAside.style.width = openCloseWidth[1];
          asideObj.menuState = false;
          componentRender();
          break;
        case false:
            mainAside.style.width = openCloseWidth[0];
            asideObj.menuState = true;
            /* componentRender(); */
            
            setTimeout(function(){
                componentRender()
            },200)
          break;
      }
}






function mainAsideTemp() {
    let template = `
    <section class="f-H5-Arial f-H5-29 overflow-hidden d-flex flex-column h-100">
        <header class="H5-Aside-header c-H5-bg-c2 d-flex align-items-center mb-4 c-H5-c1">
            <i class="${asideObj.navHead.appLogo} ${asideObj.menuState? "d-inline-block" : "d-none"} i-H5-size-a uM0-image-contain mx-4"></i>
              ${asideObj.menuState? asideObj.navHead.appName : ""} 
            <i onclick="openCloseMenu(event)" class="i-H5-menu-icon ml-auto i-H5-size-a uM0-image-contain mx-4"></i>
        </header>
        <ul class="p-0">
        `
    for (let [index, item] of asideObj.navItems.entries()) {
        template += `<li onclick="toggleActive(${index}); router(${index})" id="aside-item" class= "${item.active ? 'c-H5-bg-c3' : false} H5-Aside-items d-flex align-items-center c-H5-c2">
            <i class="${item.icon} d-inline-block i-H5-size-a uM0-image-contain mx-4"></i>
            ${asideObj.menuState? item.title : ""}
        </li>
        `
        }
        
    template += `</ul>
                <div class="H5-Aside-userPanel c-H5-bg-c4 d-flex align-items-center f-H5-32 c-H5-c2 mt-auto">
                    <i class="${asideObj.user.userImage} i-H5-size-b uM0-image-contain u-H5-userPic-border u-H5-radius-50 d-inline-block mx-4"></i>
                    ${asideObj.menuState? asideObj.user.userName : ""}
                    <i class="i-H5-userLogOut ${asideObj.menuState? "d-inline-block" : "d-none"} i-H5-size-a uM0-image-contain mx-4 ml-auto"></i>
                </div>
    </section>
    `
    return template
}


function componentRender(){
    mainAside.innerHTML = mainAsideTemp()
}

function domReady(){
    readyRouter()
}


componentRender()
domReady()