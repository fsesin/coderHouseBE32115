class Color {
    color:string
    constructor(){
        const r:number = Math.round(Math.random()*255)
        const g:number = Math.round(Math.random()*255)
        const b:number = Math.round(Math.random()*255)
        this.color = `rgb(${r},${g},${b})`
    }

    getColor(){
        console.log(this.color)
    }
}

const newColor = new Color() 
newColor.getColor()
export{}