export default class Team {
  constructor() {
    this.team = [];
  }

  addCharacter(character) {
    if (Array.isArray(character)) {
      character.forEach((char) => this.team.push(char));
      return;
    }
    this.team.push(character);
  }

  [Symbol.iterator]() {
    const from = 0;
    const to = this.team.length - 1;
    let current = from;
    const data = this.team;
    return {
      next() {
        if (current > to) {
          return {
            value: undefined,
            done: true,
          };
        }
        const result = { value: data[current], done: false };
        current += 1;
        return result;
      },
    };
  }

  // [Symbol.iterator]() {
  //   const from = 0;
  //   const to = this.team.length - 1;
  //   let current = from;
  //   return {
  //     next() {
  //       if (current > to) {
  //         return {
  //           value: undefined,
  //           done: true,
  //         };
  //       }
  //       const result = { value: current, done: true };
  //       current += 1;
  //       return result;
  //     },
  //   };
  // }
}
