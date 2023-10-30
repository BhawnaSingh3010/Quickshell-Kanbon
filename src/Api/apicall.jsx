
export const GETAPI = async (apiname) => {
    return await fetch(`https://api.quicksell.co${apiname}`)
        .then(response => {
            if (!response.ok) {
                alert('Network Error')
            }
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch(error => {
            console.error('Error:', error);
            return error;
        });
}
