export class TodoItem {
  private _isComplete: boolean = false;
  private _title: string = "";

  public get getIsComplete():boolean { return this._isComplete; }
  public set isComplete(value: boolean) { this._isComplete = value; }

  public get getTitle(): string { return this._title; }
  public set title(value: string) { this._title = value; }
}