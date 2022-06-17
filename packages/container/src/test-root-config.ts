import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

// import { registerApplication, start } from "single-spa";

// registerApplication(
//   "@react/bundle",
//   () => System.import("http://localhost:3000/static/js/bundle.js"),
//   (location) =>
//     location.pathname === "/" || location.pathname.startsWith("/original")
// );

// registerApplication({
//   name: "@test/single-spa-react",
//   app: () => System.import("@test/single-spa-react"),
//   activeWhen: ["/react"],
// });

// registerApplication({
//   name: "@test/single-spa-vue",
//   app: () => System.import("@test/single-spa-vue"),
//   activeWhen: ["/vue"],
// });

// start({
//   urlRerouteOnly: true,
// });
