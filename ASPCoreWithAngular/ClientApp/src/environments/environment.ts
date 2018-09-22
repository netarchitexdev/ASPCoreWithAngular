// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  appInsights: {
    instrumentationKey: "f86c756e-7046-4663-8d84-b6011569cb5f"
  },
  appInfo: {
    appId: "ASPCoreWithAngular",
    appVersion: "1.0.0"
  }
};
