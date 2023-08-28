const getDataFromForm = () => {
    const requestObj = {
        firstName: "NourEldin",
        lastName: "Hatem",
        categories: ["nerdy"]
    };
    return requestObj;
};

const buildRequestUrl = (requestData) => {
    return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&
    lastName=${requestData.lastName}&limitTo=${requestData.categories}`
};

const requestJokes = async (url) => {
    const responce = await (fetch(url))
    const jsonResponce = await responce.json();
    const joke = jsonResponce.value;
    postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
    console.log(joke);
}


const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJokes(requestUrl);
    console.log("finished!");
}

processJokeRequest();