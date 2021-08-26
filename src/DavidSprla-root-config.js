import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@DavidSprla/navbar",
  app: () => System.import("@DavidSprla/navbar"),
  activeWhen: isActive.navbar,
	customProps: {
		domElement: document.getElementById('navbar')
	}
});

registerApplication({
  name: "@DavidSprla/movies",
  app: () => System.import("@DavidSprla/movies"),
  activeWhen: isActive.movies,
	customProps: {
		domElement: document.getElementById('movies')
	}
});

registerApplication({
  name: "@DavidSprla/favourite",
  app: () => System.import("@DavidSprla/favourite"),
  activeWhen: isActive.favourite,
	customProps: {
		domElement: document.getElementById('favourite')
	}
});

start({
  urlRerouteOnly: true,
});
