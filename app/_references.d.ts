interface Window {
  injector: Injector,
  $: JQueryStatic,
}


declare const SETTINGS_OBJ: {
  auth: {
    type: string;
    host: string;
  },
  constants: any
}

// Interface for using Angular Injector in classes that don't have DI
interface Injector {
  get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T): T;
}