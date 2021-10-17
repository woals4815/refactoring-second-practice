let spaceship = { name: 'victory' };

let defaultOwnerData = { firsName: 'martin', lastname: 'pauler' };

spaceship.owner = defaultOnwer();

function defaultOnwer() {
  return defaultOwner;
}

function setDefaultOnwer(arg) {
  defaultOwnerData = arg;
}
