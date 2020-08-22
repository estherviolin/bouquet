let retailers = []

export const getRetailers = () => {
    return fetch ("http://localhost:8088/retailers")
        .then(res => res.json())
        .then(parsedRetailers => {
            retailers = parsedRetailers

        })
}

export const useRetailers = () => {
    return retailers.slice()
}