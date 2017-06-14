var React = require("react");

var Search = require("./children/Search"),
    Results = require("./children/Results"),
    Saved = require("./children/Saved"),
    helpers = require("./utils/helpers");

var Main = React.createClass({
  getInitialState: function() {
    return {searchTerm: "", results: "", history: []};
  },
  componentDidMount: function (){
    helpers.getHistory().then(function(response){
      console.log(response);
      if(response !== this.state.history){
        console.log("History", response.data);
        this.setState({ history: response.data});
      }
    }.bind(this));
  },
  componentDidUpdate: function(){
    helpers.runQuery(this.state.searchTerm).then(function(data) {
      if(data !== this.state.results) {
        console.log("Address", data);
        this.setState({ results: data });
        helpers.postHistory(this.state.searchTerm).then(function(){
          console.log("Updated!");
          helpers.getHistory().then(function(response) {
                        console.log("Current History", response.data);
                        console.log("History", response.data);
                        this.setState({ history: response.data });
                    }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },
  setTerm: function(term){
    this.setState({ searchTerm: term});
  },
  render: function(){
    return(
            <div className="container">
                <div className="row">
                    <div className="card-panel">
                        <h2 className="center-align">Article Scrubber</h2>
                        <p className="center-align">
                            <em>Search for articles of you would like to see!</em>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Search
                            // setTerm={this.setTerm}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Results
                            // results={this.state.results}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Saved
                            // saved={this.state.saved}
                        />
                    </div>
                </div>
            </div>
        );
      }
});
module.exports = Main;
