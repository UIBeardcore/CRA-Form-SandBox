import * as React from "react";
import IItem from "./interfaces/IItem";

interface IListProps {
    showOnlyVisible?: boolean;
}

interface IListState {
    listItems: IItem[];
}

class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);
        this.state = {
            listItems: [{
                id: 1971,
                name: "Vinny the Pooh",
                email: "vinny@disney.net",
                message: "Give me Honey!",
                isVisible: false
            }]
        };
    }

    public componentWillMount(): void {
        const { showOnlyVisible } = this.props;
        const { listItems: initialList } = this.state;
        const listItems = initialList.filter(item => !showOnlyVisible || item.isVisible);

        this.setState({
            listItems
        });
    }

    public render(): JSX.Element {
        const { listItems } = this.state;

        return (
            <ul className="list-group">
                {
                    listItems.map((item, index) => (
                        <li className="list-group-item" key={index}>{item.name} : {item.message}</li>
                    ))
                }
            </ul>
        );
    }

    public componentDidMount(): void {
    }

    public shouldComponentUpdate(nextProps: IListProps, nextState: IListState): boolean {
        return true;
    }

    public componentWillUpdate(nextProps: IListProps, nextState: IListState): void {
        // const { selectedItem, loadItemPath } = this.props;
        // const { itemPath } = nextState;
        // const currentId = selectedItem ? selectedItem.id : null;
        // const nextItem = nextProps.selectedItem;
        // const nextId = nextItem ? nextItem.id : null;
        // if (nextItem && nextItem.url) {
        //     if (nextId && (currentId !== nextId)) {
        //         loadItemPath(nextItem).then(
        //             path => {
        //                 /* istanbul ignore else */
        //                 if (!this._isUnmounted) {
        //                     this.setState({
        //                         itemPath: path,
        //                         error: undefined
        //                     });
        //                 }
        //             },
        //             error => {
        //                 /* istanbul ignore else */
        //                 if (!this._isUnmounted) {
        //                     // TODO: improve error handling
        //                     this.setState({
        //                         error: error
        //                     });
        //                 }
        //             });
        //     }
        // } else if (currentId) {
        //     const nextPath = nextItem ? [{ title: nextItem.title, url: nextItem.url } as IBreadcrumbItem] : [];
        //     if (!itemPath || (nextPath.join("") !== itemPath.join(""))) {
        //         this.setState({
        //             itemPath: nextPath
        //         });
        //     }
        // }
    }

    public componentDidUpdate(): void {
        //    this._recalculateHiddenPath();
    }

    public componentWillUnmount(): void {
        //     this._isUnmounted = true;
        //     window.removeEventListener("resize", this._recalculateHiddenPath.bind(this));
    }

}

export default List;