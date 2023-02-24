class Televisor {
  private isOn: boolean;
  private currVolume: number;
  private currChannel: number;
  private brand: string;
  constructor(brand?: string) {
    brand ? (this.brand = brand) : (this.brand = "Generic");
    this.isOn = false;
    this.currChannel = 1;
    this.currVolume = 0;
  }

  private showVolume(): number {
    return this.currVolume;
  }
  private showChannel(): number {
    return this.currChannel;
  }

  switchOnOff(): void {
    this.isOn = !this.isOn;
    if (this.isOn)
      console.log(`${this.brand} tv is now on... turn it off and read a book`);
  }
  volumeUp(): void {
    if (this.currVolume < 10) this.currVolume++;
    console.log(this.showVolume());
  }
  volumeDown(): void {
    if (this.currVolume > 0) this.currVolume--;
    console.log(this.showVolume());
  }
  pickChannel(channel: number): void {
    if (channel >= 1 && channel < 99) this.currChannel = channel;
    console.log(`Volume: ${this.showChannel()}`);
  }
  channelUp(): void {
    if (this.currChannel < 99) this.currChannel++;
    console.log(this.showChannel());
  }
  channelDown(): void {
    if (this.currChannel > 1) this.currChannel--;
    console.log(this.showChannel());
  }
}

const tv_1 = new Televisor("Samsung");
const tv_2 = new Televisor();
const tv_3 = new Televisor("Hitachi");
tv_3.switchOnOff();
tv_2.switchOnOff();
tv_3.pickChannel(33);
