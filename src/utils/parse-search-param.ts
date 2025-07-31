export const parseSearchParam = (searchParam: string | null | undefined): string | null => {
   return searchParam != null && searchParam !== '' ? searchParam : null
}
