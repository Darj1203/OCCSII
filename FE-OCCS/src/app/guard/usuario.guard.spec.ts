import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: UsuariosService;
  let router: Router;
  let canActivate: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: UsuariosService,
          useValue: {
            isLoggedIn: () => true,
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: () => {},
          },
        },
      ],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(UsuariosService);
    router = TestBed.inject(Router);
    canActivate = guard.canActivate;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    expect(canActivate({} as any, {} as any)).toEqual(true);
  });

  it('should return false and redirect to login if user is not logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    spyOn(router, 'navigate');
    expect(canActivate({} as any, {} as any)).toEqual(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  canActivate(): boolean {
    if (this.usuariosService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
