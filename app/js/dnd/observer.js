let leafPosition = 0;

let observer = null;

function emitChange(){
  return observer(leafPosition);
}

export function observe(receive) {
  debugger;
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }

  observer = receive;
  return emitChange();
}

export function moveLeaf(destination) {
  leafPosition = destination;
  return emitChange();
}
