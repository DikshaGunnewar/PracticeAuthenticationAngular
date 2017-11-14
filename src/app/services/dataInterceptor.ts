import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from "@angular/common/http";

import { Observable} from "rxjs/Observable";

@Injectable()
export class DataInterceptor implements HttpInterceptor{

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        debugger;
        if(!req.headers.has('Content-Type')){
            req=req.clone({headers:req.headers.set('Content-Type','application/json')});

        }

        req=req.clone({headers:req.headers.set('Accept',"application/json")});
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}
