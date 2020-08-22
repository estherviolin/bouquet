import { getRetailers, useRetailers } from "./RetailerDataProvider.js"
import { RetailerHTMLConverter } from "./RetailerHTMLConverter.js"
import { useDistributors, getDistributors, getDNRelationships, useDNRelationships } from "../flowerdistributors/DistributorDataProvider.js"
import { getNurseries, useNurseries, getNFRelationships, useNFRelationships } from "../nurseries/NurseryDataProvider.js"
import { getFlowers, useFlowers } from "../flowers/FlowerDataProvider.js"

const contentTarget = document.querySelector(".retailerList")

export const RetailerList = () => {
    getRetailers()
        .then(getDistributors)
        .then(getNurseries)
        .then(getDNRelationships)
        .then(getNFRelationships)
        .then(getFlowers)
        .then(() => {
            const distributors = useDistributors()
            const nurseries = useNurseries()
            const DNRelationships = useDNRelationships()
            const retailers = useRetailers()
            const NFRelationships = useNFRelationships()
            const flowers = useFlowers()
            render(retailers, distributors, nurseries, DNRelationships, NFRelationships, flowers)
        })
}

const render = (arrOfRetailers, arrOfDistributors, nurseries, DNRelationships, NFRelationships, flowers) => {

    // loop through array of retailers and render each as HTML
    const RetailerHTMLList = arrOfRetailers.map(retailer => {

        //this is the distributor for each retailer
        const distributor = arrOfDistributors.find(distributor => distributor.id === retailer.distributorId)

        //array of nursery distributor relationship objects
        let relatedNurseries = DNRelationships.filter(rel => rel.distributorId === distributor.id)

        //get nursery objects by id
        const nurseriesPerDistributor = relatedNurseries.map(relationshipObj => {
            const foundNurseries = nurseries.find(nursery => relationshipObj.nurseryId === nursery.id)
            return foundNurseries //array of two nursery objects
        })

        //this is an array of flower nursery relationship objects
        const flowersPerNursery = nurseriesPerDistributor.map(nursery => {
            const nfRelArr = NFRelationships.filter(relationshipObj => relationshipObj.nurseryId === nursery.id)
            //relationships between nurseries and flowers
            
            const arrOfFlowerObj = nfRelArr.map(relationshipObj => {
                let flowersArray = flowers.filter(flower => relationshipObj.flowerId === flower.id)
                return flowersArray
            })
            return arrOfFlowerObj //this is an array of two flower nursery relationship objects
            
        })
        console.log(arrOfFlowerObj)
        // arrOfFlowerObj.flat()

        return RetailerHTMLConverter(retailer, distributor, nurseriesPerDistributor, arrOfFlowerObj)
    }).join("")

    contentTarget.innerHTML = RetailerHTMLList
}
