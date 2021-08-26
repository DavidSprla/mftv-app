export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function navbar() {
  // The nav is always active
  return true;
}

export function movies(location) {
  return prefix(location, 'movies');
}

export function favourite(location) {
  return prefix(location, 'favourite');
}