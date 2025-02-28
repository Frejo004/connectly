export const formatDate = (date: string) => {
    return new Date(date)
    .toLocaleDateString(
        'fr', 
        {
            year:'numeric', 
            month: 'short', 
            day:'numeric'
        })
}