const buyClay = () =>{
    const project = {}
    return project
}
const makePottery = (clayObject) =>{
    clayObject.shape = "Bowl"
    return clayObject
}
const bisqueFire = (clayObject) =>{
    clayObject.readyForGlazing = true
    return clayObject
}
const glazePottery = (clayObject) =>{
    if(clayObject.readyForGlazing === true){
        clayObject.glazing = "Midnight Blue"
        return clayObject
    }else{
        console.log("Make sure you bisque fire the pottery before you glaze it.")

    }
}
const finalFiring = (clayObject, temperature = 1100) =>{
    if(temperature > 1200){
        clayObject.cracked = true
    }else{
        clayObject.cracked = false
    }
    return clayObject
}

const makeBowl = (temperature) =>{
    const product = buyClay()
    makePottery(product)
    bisqueFire(product)
    glazePottery(product)
    finalFiring(product, temperature)

    return product
}

const newBowl = makeBowl()
console.log(newBowl)

const anotherNewBowl = makeBowl(9001)
console.log(anotherNewBowl)