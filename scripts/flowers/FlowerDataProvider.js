let flowers = []

export const getFlowers = () => {
    return fetch("http://localhost:8088/flowers")
        .then(res => res.json())
        .then(parsedFlowers => {
            flowers = parsedFlowers
        })
}

export const useFlowers = () => {
    return flowers.slice()
}