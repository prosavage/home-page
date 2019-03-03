export default class GetResponse {
    static getResponse(request, user, repo) {
        // the access token can only read so its chill if I post it to github lol.
        request.open('get', 'https://api.github.com/repos/' + user + '/' + repo + "?access_token=2c188f944d617209ae787837b31e9d2ed694ce47");
        request.send();
    }
}