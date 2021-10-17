let spaceship = { name: 'victory' };

let defaultOwner = { firsName: 'martin', lastname: 'pauler' };

spaceship.owner = defaultOwner;

function getDefaultOnwer() {
  return defaultOwner;
}

function setDefaultOnwer(arg) {
  defaultOwner = arg;
}
