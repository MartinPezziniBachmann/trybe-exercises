class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string;
  private _connectedTo: number;

  constructor(b: string, s: number, r: string, c: string, ct: number) {
      this._brand = b;
      this._size = s;
      this._resolution = r;
      this._connections = c;
      this._connectedTo = ct;
  }

  turnOn () {
      console.log(`${this._brand} está ligada`);
  }

  get connectedTo(): number {
    return this._connectedTo;
  }

  set connectedTo(value: number) {
    if (value >= 0) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable');
    }
  }
}

const tv1 = new Tv('Samsung', 1000, '1920x1080', 'hdmi, ethernet', 1);

tv1.turnOn();