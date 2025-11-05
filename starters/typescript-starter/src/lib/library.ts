const BUDGET_MAX = 1234;

interface MediaMetadata {
  budget: number;
  franchise: boolean;
  boxoffice: number;
  releaseDate: Date;
}

class Media implements MediaMetadata {
  private _budget: number;
  public name: string;
  public franchise: boolean;
  public boxoffice: number;
  public releaseDate: Date;
  constructor() { }
  get budget(): number {
    return this._budget;
  }

  set budget(value: number) {
    console.log('00000000001:set:budget');
    console.log('00000000001:set:budget:' + value);
    this._budget = value > BUDGET_MAX ? BUDGET_MAX : value;
    console.log('00000000001:set:budget:' + this._budget);
  }
}

export { Media };