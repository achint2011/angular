import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,Router ,  CanActivate, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGaurd implements CanActivate , CanActivateChild{
    constructor(private authService : AuthService,
      private router : Router){}

    canActivate(route : ActivatedRouteSnapshot,state : RouterStateSnapshot) : Observable<boolean> | Promise <boolean>| boolean {
      this.authService.isAutheticated()
      .then(
        (autheticated : boolean)=>{
          if(autheticated){
            return true;
          }
          else{
            return this.router.navigate(['/']);
          }
        }

      )
      return false;
    }


    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route , state);
    }
};
