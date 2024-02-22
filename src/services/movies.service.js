import HttpService from "./http.service";

export default class MovieService {
    static async getMovies() {
        return await HttpService.request({
            method: "get",
            url: "/movies",
        });
    }
}