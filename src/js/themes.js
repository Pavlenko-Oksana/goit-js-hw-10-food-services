const bodyClass = document.querySelector("body");
const themeSwitchControl = document.querySelector("#theme-switch-toggle")
themeSwitchControl.addEventListener("change", onChangeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export function onChangeTheme(evt) {
    evt.preventDefault();
    addClassTheme(evt);
    
};

export function addClassTheme(evt) {
    if (evt.target.checked) {
        bodyClass.classList.add(Theme.DARK);
        bodyClass.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', 'dark')
    }
    else {
        bodyClass.classList.add(Theme.LIGHT);
        bodyClass.classList.remove(Theme.DARK);
        localStorage.setItem('theme', 'light')
    }
}

document.addEventListener('DOMContentLoaded', checkedTheme);

export function checkedTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        bodyClass.classList.add(Theme.DARK);
        themeSwitchControl.checked = true;
    }
    else {
         bodyClass.classList.add(Theme.LIGHT);
        themeSwitchControl.checked = false;
    }
}