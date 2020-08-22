let distributors = []

export const getDistributors = () => {
    return fetch("http://localhost:8088/distributors")
        .then(res => res.json())
        .then(parsedDistributors => {
            distributors = parsedDistributors
        })

}

export const useDistributors = () => {
    return distributors.slice()
}

let  DNRelationships = []

export const getDNRelationships = () => {
    return fetch("http://localhost:8088/distnursrel")
        .then(res => res.json())
        .then(parsedDNRelationships => {
            DNRelationships = parsedDNRelationships
        })
}

export const useDNRelationships = () => {
    return DNRelationships.slice()
}
