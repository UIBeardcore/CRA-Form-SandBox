import * as React from "react";
import IItem from "./interfaces/IItem";
import dataProvider from "./services/data";

interface IListProps {
    showOnlyVisible?: boolean;
    listItemsCount: number;
}

interface IListState {
    listItems: IItem[];
}

class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);
        this.state = {
            listItems: []
        };
    }

    public componentWillMount(): void {
        const { showOnlyVisible } = this.props;
        const { listItems: initialList } = this.state;
        const data = dataProvider.getData();

        const listItems = [
            ...initialList,
            ...data
        ].filter(item => !showOnlyVisible || item.isVisible);

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
                        <li
                            style={{
                                textDecoration: !item.isVisible ? "line-through" : ""
                            }}
                            className="list-group-item"
                            key={index}
                        >
                            {item.name} : {item.message}
                        </li>
                    ))
                }
            </ul>
        );
    }

    public componentDidMount(): void {
    }

    public shouldComponentUpdate(nextProps: IListProps, nextState: IListState): boolean {
        if (this.props.listItemsCount !== nextProps.listItemsCount) {
            return true;
        } else if (this.state.listItems.length !== nextState.listItems.length) {
            return true;
        }

        return false;
    }

    public componentWillUpdate(nextProps: IListProps, nextState: IListState): void {
        let listItems = dataProvider.getData();
        listItems = listItems.filter(item => !nextProps.showOnlyVisible || item.isVisible);

        this.setState({
            listItems
        });
    }

    public componentDidUpdate(): void {
    }

    public componentWillUnmount(): void {
    }

}

export default List;