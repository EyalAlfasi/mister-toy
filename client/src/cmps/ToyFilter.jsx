import { Component } from 'react';

export class ToyFilter extends Component {

    state = {
        filterBy: {
            type: 'All',
            freeText: ''
        },
    };

    getToyTypes = () => {
        const { toys } = this.props;
        const types = toys.reduce((accumulator, toy) => {
            if (accumulator.indexOf(toy.type) < 0) accumulator.unshift(toy.type)
            return accumulator;
        }, [])
        types.unshift('All')
        return types;
    }

    componentDidMount() {
        const { filterBy } = this.props
        this.setState({ filterBy });
    }

    handleChange = (ev) => {
        const filterBy = { ...this.state.filterBy }
        filterBy[ev.target.name] = ev.target.value;
        this.setState({ filterBy }, () => {
            const filterCopy = { ...this.state.filterBy }
            this.props.onSetFilter(filterCopy);
            // console.log(this.state.filterBy);
        });
    };

    render() {
        const { filterBy } = this.state
        return <section>
            <div className="filter-sort-search">
                <select name="type" onChange={this.handleChange}>
                    {this.getToyTypes().map((type, idx) => {
                        return <option key={idx}>{type}</option>
                    })}
                </select>
                <i className="fa fa-search"></i>
                <input type="text" name="freeText"
                    value={filterBy.freeText}
                    placeholder="Search..."
                    autoComplete="off"
                    onChange={this.handleChange} />
            </div>
        </section>
    }
}