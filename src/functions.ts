function calculateTax(income: number): number{
    if( income < 50_000)
        return income * 1.2

    return 1.4 * income
}