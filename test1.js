function normStockA(stock) {
        if (typeof stock === "string") {
            return isProductAvailable(Number(stock.trim().replaceAll(",", "")))
        } else {
            return isProductAvailable(stock)
        }
    
}


function isProductAvailable(stock) {
    if (stock > 0) {
        return true
    } else if (stock === null || stock === undefined) {
        return false
    } else {
        return false
    }
        

}


console.log(normStockA(" "));
