import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({providedIn : 'root'})
export class AppService {
    constructor(private httpClient: HttpClient) {

    }
    postService(api: any, data: any) {
        return this.httpClient.post(api, data);
    }

    getService(api: any, data?: any) {
        if (data) {
            return this.httpClient.get(api, data);
        }
        return this.httpClient.get(api);
    }

    deleteService(api: any, data: any) {
        return this.httpClient.delete(api, data);
    }

    ///////-----APIs call-----///////

    getAllPostData(): Observable<any> {
        return this.getService('assets/jsons/all-post.json');
    }

}