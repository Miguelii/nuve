export const getBuildId = () => {
   return !process.env.NEXT_PUBLIC_BUILD_TIMESTAMP ? '' : process.env.NEXT_PUBLIC_BUILD_TIMESTAMP
}
