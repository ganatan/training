# Setter / Getter

  class Media {
    private _budget: number;
    constructor() {
      console.log('00000000001:Media:constructor');
    }
    set budget(value: number) {
      this._budget = value > 10 ? 50 : 78;
    }
    get budget() {
      return this._budget;
    }
  }

  let media: Media = new Media();
  media.budget = 2;
