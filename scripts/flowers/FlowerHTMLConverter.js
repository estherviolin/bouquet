export const FlowerHTMLConverter = (flower) => {
    return `
    <div class="flowerCard" id="${flower.id}">
        <h3>${flower.commonName}</h3>
        <div>${flower.color}</h3>
    </div>
    `

}