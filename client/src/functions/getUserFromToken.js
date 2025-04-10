export const getUserFromToken= ()=>{
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find(row => row.startsWith("token="));
    console.log(atob(tokenCookie))
    const cuttedToken = tokenCookie.split("=")[1]
    const payload = cuttedToken.split(".")[1]
    return JSON.parse(atob(payload));
}