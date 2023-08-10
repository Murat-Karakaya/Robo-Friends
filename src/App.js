import React from "react";
import Cardlist from "./Cardlist.js";
import SearchBox from "./SearchBox.js";
import { robots } from "./robots.js";
import Scroll from "./Scroll.js";
import ErrorBoundry from "./ErrorBoundry.js"
import { setSearchField } from "./actions.js";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component{
    constructor () {
        super()
        this.state = { 
            robots
        }
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
        return(
            <>
                <h1>Robo Friends</h1>
                <div className="centered"><SearchBox searchChange={this.props.onSearchChange}/></div>
                <hr />
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);