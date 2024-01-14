import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ILoginResponse, IRegister } from '~/app/types/auth';
import { environment } from '~/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(acccount: ILogin): Observable<ILoginResponse> {
        return this.http.post<ILoginResponse>(
            `${environment.auth}/login`,
            acccount
        );
    }
    register(newAcccount: IRegister): Observable<any> {
        return this.http.post<string>(
            `${environment.auth}/register`,
            newAcccount
        );
    }
}
