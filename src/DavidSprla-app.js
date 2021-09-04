import { registerApplication, start } from "single-spa";
import * as location from "./locations";

registerApplication({
  name: "@DavidSprla/navbar",
  app: () => System.import("@DavidSprla/navbar"),
  activeWhen: location.navbar,
	customProps: {
		domElement: document.getElementById('navbar')
	}
});

registerApplication({
  name: "@DavidSprla/movies",
  app: () => System.import("@DavidSprla/movies"),
  activeWhen: location.movies,
	customProps: {
		domElement: document.getElementById('movies')
	}
});

registerApplication({
  name: "@DavidSprla/favourite",
  app: () => System.import("@DavidSprla/favourite"),
  activeWhen: location.favourite,
	customProps: {
		domElement: document.getElementById('favourite')
	}
});

start({
  urlRerouteOnly: true,
});
