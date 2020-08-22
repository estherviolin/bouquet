let nurseries = []

export const getNurseries = () => {
    return fetch("http://localhost:8088/nurseries")
        .then(res => res.json())
        .then(parsedNurseries => {
            nurseries = parsedNurseries
        })
}

export const useNurseries = () => {
    return nurseries.slice()
}

let  NFRelationships = []

export const getNFRelationships = () => {
    return fetch("http://localhost:8088/nurseflowrel")
        .then(res => res.json())
        .then(parsedNFRelationships => {
            NFRelationships = parsedNFRelationships
        })
}

export const useNFRelationships = () => {
    return NFRelationships.slice()
}
