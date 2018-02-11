import IItem from "../interfaces/IItem";

class DataService {
    // Mock data
    private _itemsList: IItem[] = [
        {
            id: 1930,
            name: "Daffy Duck",
            email: "daffy@duck.net",
            message: "ALACAZAM! ALACAZAM! ALACAZAM!"
        },
        {
            id: 1937,
            name: "Elmer Fudd",
            email: "elmer@fudd.org",
            message: "Gwacious!"
        },
        {
            id: 1940,
            name: "Bugs Bunny",
            email: "bugs@bunny.com",
            message: "What`s up, doc?"
        }
    ];

    public getData(): IItem[] {
        return this._itemsList;
    }

    public saveData(item: IItem) {
        this._itemsList.push(item);
    }
}

export default new DataService();
