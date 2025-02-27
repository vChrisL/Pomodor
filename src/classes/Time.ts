export class Time {
  private _hours: number = 0;
  private _minutes: number = 0;
  private _seconds: number = 0;

  constructor(hours: number, minutes: number, seconds: number) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  public get getHours(): number {
    return this._hours;
  }
  public set hours(hours: number) {
    hours = Math.floor(hours);

    if (hours > 60) {
      this._hours = 60;
      return;
    }
    else if (hours < 0) {
      this._hours = 0;
      return;
    }
    this._hours = hours;
  }

  public get getMinutes(): number {
    return this._minutes;
  }
  public set minutes(minutes: number) {
    minutes = Math.floor(minutes);

    if (minutes > 60) {
      this._minutes = 60;
      return;
    }
    else if (minutes < 0) {
      this._minutes = 0;
      return;
    }
    this._minutes = minutes;
  }

  public get getSeconds(): number {
    return this._seconds;
  }
  public set seconds(seconds: number) {
    seconds = Math.floor(seconds);

    if (seconds > 60) {
      this._seconds = 60;
      return;
    }
    else if (seconds < 0) {
      this._seconds = 0;
      return;
    }
    this._seconds = seconds;
  }
}
