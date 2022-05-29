type Employee = {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
}

let employee: Employee = { id: 1, name: 'Kamal' , retire: (date: Date) => date}

