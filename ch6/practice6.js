let spaceship = { name: 'victory' };

let defaultOwner = { firsName: 'martin', lastname: 'pauler' };

spaceship.owner = getDefaultOnwer();

function getDefaultOnwer() {
  return defaultOwner;
}

function setDefaultOnwer(arg) {
  defaultOwner = arg;
}
