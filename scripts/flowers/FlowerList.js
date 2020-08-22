import {getFlowers, useFlowers} from "./FlowerDataProvider.js"
import {FlowerHTMLConverter} from "./FlowerHTMLConverter.js"

const contentTarget = document.querySelector(".flowerList")


export const FlowerList = () => {
   getFlowers()
        .then(() => {
            const flowers = useFlowers()
            render(flowers)
          })
}

const render = (arrOfFlowers) => {
   
    contentTarget.innerHTML = `
        ${
            arrOfFlowers.map(flower => {
                return FlowerHTMLConverter(flower)
            }).join("")
        }
    `
}