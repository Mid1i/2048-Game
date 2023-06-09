export class Tile {
    constructor(gridElement) {
        this.tileElement = document.createElement("div");   // Create tile
        this.tileElement.classList.add("tile");
        this.setValue(Math.random() > 0.5 ? 2 : 4);         // Give random value: 2 or 4
        gridElement.append(this.tileElement);               // Add to the screen
    }

    // Setting new coordinates
    setXY(x, y) {
        this.x = x;
        this.y = y;
        this.tileElement.style.setProperty("--x", x);
        this.tileElement.style.setProperty("--y", y);
    }

    // Setting the value, color and text color of the tile
    setValue(value) {
        this.value = value;    
        this.tileElement.textContent = this.value;
        const bgLightness = 100 - Math.log2(value) * 9;     
        this.tileElement.style.setProperty("--bg-lightness", `${bgLightness < 2048 ? bgLightness : bgLightness + 100}%`);
        this.tileElement.style.setProperty("--text-lightness", `${bgLightness < 10 ? 90 : 10}%`);
    }

    removeFromDOM() {
        this.tileElement.remove();
    }

    waitForTransitionEnd() {
        return new Promise(resolve => {
            this.tileElement.addEventListener("transitionend", resolve, {once: true});
        })        
    }

    waitForAnimationEnd() {
        return new Promise(resolve => {
            this.tileElement.addEventListener("animationend", resolve, {once: true});
        })        
    }
}
