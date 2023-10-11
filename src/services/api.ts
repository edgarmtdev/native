export const getData = async (page:number) => {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        return await res.json()
    } catch (error) {
        return error
    }
}