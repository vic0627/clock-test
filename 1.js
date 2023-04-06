const GUY = (name) => {
  return {
    name,
    call() {
      console.log(`Hello ${this.name}`);
    },
  };
};
const mike = GUY("Mike");
mike.name;
