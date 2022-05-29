type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0)
// optional property access operator
console.log(customer?.birthday.getFullYear())

// optional element access operator
// customers?.[0]

// optional call operator
// let log: any = null
// log?.('a')