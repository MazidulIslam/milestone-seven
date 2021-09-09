// Find any websites cookies using bellow codes 
document.cookie.split('; ').map(c => console.log(c.split('=')));
document.cookie.split('; ').find(c => c.includes('country'));
document.cookie.split('; ').find(c => c.includes('country')).split('=')[1];
// for value 

const getCookie = name => {
    const cookie = doucment.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(cookie => c.includes(name));
    if (findCookie) {
        'country=US'
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}