function calculateTax(income: number, taxYear: number): number{
    let x = taxYear
    if( x < 50_000)
        return income * 1.2

    return income * 1.4
}

calculateTax(10_000, 2020)