function checkForName(inputUrl) {
    console.log("::: Running checkForName :::", inputUrl);
    const httpRegex = /^http:\/\/(?!\/)/i;

    if(!httpRegex.test(inputUrl)) {
        alert("Only accept http url (not https)!");
        return false;
    }

    return true;
}

export { checkForName };
