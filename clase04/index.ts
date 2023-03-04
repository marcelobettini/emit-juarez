import SmartTv from "./smartTv";
import Televisor from "./televisor";

const myNewTv = new SmartTv();
myNewTv.showInfo();
myNewTv.switchOnOff();
myNewTv.showGeneralInfo();
myNewTv.channelUp();
myNewTv.showGeneralInfo();

const myOldTv = new Televisor();
myOldTv.switchOnOff();