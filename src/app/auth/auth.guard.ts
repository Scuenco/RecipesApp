import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, take, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree>
    | UrlTree {
    return this.authService.user.pipe(
      take(1), // take the latest user value and then unsubscribe
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        // otherwise, return a URl tree
        return this.router.createUrlTree(["/auth"]);
      })
      /* tap(isAuth => {
      if (!isAuth) {
        this.router.navigate(['auth']);
      }
    }) */
    );
  }
}
