import React from "react";
import Cardlist from "./Cardlist.js";
import SearchBox from "./SearchBox.js";
import { robots } from "./robots.js";
import Scroll from "./Scroll.js";
import ErrorBoundry from "./ErrorBoundry.js"


class App extends React.Component{
    constructor () {
        super()
        this.state = { 
            robots,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})

    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        console.log(filteredRobots);
        return(
            <>
                <h1>Robo Friends</h1>
                <div className="centered"><SearchBox searchChange={this.onSearchChange}/></div>
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

export default App;