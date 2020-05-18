import { __decorate } from 'tslib';
import { Injectable } from '@angular/core';
import * as i0 from '@angular/core';
var LocalStorageService = /** @class */ (function() {
  function LocalStorageService() {}
  LocalStorageService.setLocalStorage = function(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  };
  LocalStorageService.getLocalStorage = function(key) {
    return localStorage.getItem(key);
  };
  LocalStorageService.clearLocalStorage = function() {
    return localStorage.clear();
  };
  LocalStorageService.removeItem = function(key) {
    return localStorage.removeItem(key);
  };
  LocalStorageService.ɵprov = i0.ɵɵdefineInjectable({
    factory: function LocalStorageService_Factory() {
      return new LocalStorageService();
    },
    token: LocalStorageService,
    providedIn: 'root'
  });
  LocalStorageService = __decorate([Injectable({ providedIn: 'root' })], LocalStorageService);
  return LocalStorageService;
})();
export { LocalStorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvbG9jYWxTdG9yYWdlL2xvY2FsU3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQztJQUFBO0tBZ0JDO0lBZmUsbUNBQWUsR0FBN0IsVUFBOEIsR0FBVyxFQUFFLEtBQVU7UUFDbkQsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVhLG1DQUFlLEdBQTdCLFVBQThCLEdBQVc7UUFDdkMsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFYSxxQ0FBaUIsR0FBL0I7UUFDRSxPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRWEsOEJBQVUsR0FBeEIsVUFBeUIsR0FBVztRQUNsQyxPQUFPLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7SUFmVSxtQkFBbUI7UUFEL0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG1CQUFtQixDQWdCL0I7OEJBbkJEO0NBbUJDLEFBaEJELElBZ0JDO1NBaEJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcbiAgcHVibGljIHN0YXRpYyBzZXRMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiJdfQ==
