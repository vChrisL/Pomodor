export class TodoItem {
  private _isComplete: boolean = false;
  private _title: string = "";
  private readonly _key: string = "";

  constructor(title: string) {
    this.title = title;
    this._key = `item-${title.substring(1, title.length - 1)}-${new Date().getTime()}`;
  }

  // Getter setter for isComplete state
  public get getIsComplete():boolean { return this._isComplete; }
  public set isComplete(value: boolean) { this._isComplete = value; }

  // Getter setter for title
  public get getTitle(): string { return this._title; }
  private set title(value: string) {
    this._title = value;
  }

  // Getter for unique key
  public get getKey(): string { return this._key; }

  /**
   * Sets the title of a to-do item.
   * @param title To-do item title.
   * @returns Returns a boolean value. `true` if title was set successfully, `false` otherwise.
   */
  public trySetTitle(title: string): boolean {
    if(title.trim() === "") return false;
    this.title = title.trim();
    return true;
  }
}