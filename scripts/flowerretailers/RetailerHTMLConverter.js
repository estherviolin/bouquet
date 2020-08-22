export const RetailerHTMLConverter = (retailer, distributor, nurseries, relatedFlowers) => {
    return `
    <div class="retailerCard" id="${retailer.id}">
        <h3>${retailer.name}</h3>
        <div>${retailer.address}</h3>
        <div>${retailer.city}, ${retailer.state}</div>
        <div>Our distributor: ${distributor.name}</div>
        <div>Nurseries they purchase from:
        ${
            nurseries.map(nursery => {
                return `<h5>${nursery.name}</h5>
                                             
                        `
            }).join("")
        }
        </div>
        <div>Flowers this nursery carries:
                        <ul>
                        ${
                            relatedFlowers.map(flowers => {
                                return flowers.map(flower => {
                                    return  `<li>${flower.name}`
                                }).join("")
                            }).join("")
                        }
                        </ul>

    </div>

    `
}