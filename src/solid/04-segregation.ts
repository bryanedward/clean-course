interface Bird {
  fly(): void;
}

interface FlyingBird {
  flySswim(): void;
}

class Tucan implements Bird, FlyingBird {
  eat() {}
  fly(): void {}
  flySswim(): void {}
}

class halcon implements Bird {
  fly(): void {}
}
