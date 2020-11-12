export function getDataFromServer( apiPath, requestMethod, formBody) {
// function for service calls
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    if(!requestMethod && requestMethod!== "POST") {
        return fetch(apiPath, { method: 'GET', headers: myHeaders })
    }
    else {
        if(formBody) {
            let fetchData = {
                method: 'POST',
                body: JSON.stringify(formBody),
                headers: myHeaders
            }
            return fetch(apiPath, fetchData);
        }
    }
}

export function getDataFromServerToPost(apiPath, requestMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    if(formBody) {
        let fetchData = {
            method: 'POST',
            body: formBody,
            headers: myHeaders
        }
        return fetch(apiPath, fetchData);
    }
}

export function deleteTodoAPI(formBody) {
    console.log("Form Body" + JSON.stringify(formBody))
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return fetch('', {
        method: 'DELETE',
        body: JSON.stringify(formBody),
        headers: myHeaders
    })
        .then(res => res.json())
}
// reference to service method in sagas
