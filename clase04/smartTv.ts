import Televisor from "./televisor";

class SmartTv extends Televisor {
  private os: string;
  private is4K: boolean;
  public constructor() {
    super();
    this.os = "Android";
    this.is4K = false;
  };
  public showInfo() {
    console.log(`
    -----------------
    Smart Tv info
    -----------------
    Operating System: ${this.os}
    Resolution: ${this.is4K ? "4K" : "HD"} 
    `);
  };
  public channelUp() {
    this.currChannel++;
  };
}

export default SmartTv;