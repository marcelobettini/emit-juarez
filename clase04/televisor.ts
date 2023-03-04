class Televisor {
  protected currChannel: number;
  private currVolume: number;
  private isOn: boolean;

  public constructor() {
    this.currChannel = 1;
    this.currVolume = 0;
    this.isOn = false;
  };
  public switchOnOff() { //setter set = establecer
    this.isOn = !this.isOn;
  }
  public showGeneralInfo() { //getter get = obtener
    if (this.isOn) {

      console.log(`
      -------------
      TV Info
      -------------
      Channel: ${this.currChannel}
      Volume:  ${this.currVolume}
      `);
    }

  }
}
export default Televisor;


