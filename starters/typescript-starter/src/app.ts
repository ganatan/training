class Title {
  name: string;
  constructor(name?: string) {
    if (name === undefined) { this.name = 'defaultName'; } else {
      this.name = name;
    }
  }
}

function getTitles(): Title[] {
  let titles: Title[] = [];
  titles.push(new Title('Aliens'));
  titles.push(new Title());
  titles.push(new Title('Exodus'));
  titles.push(new Title('Legend'));
  return titles;
}


console.log('00000000001:' + JSON.stringify(getTitles()));