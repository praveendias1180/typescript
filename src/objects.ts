let employee: {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
} = { id: 1, name: 'Kamal' , retire: (date: Date) => date}

