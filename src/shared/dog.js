// @flow

class Dog {
  constructor(name: string) {
    this.name = name;
  }

  bark(): string {
    return `Wang Wang, I am ${this.name}`;
  }
}

export default Dog;
