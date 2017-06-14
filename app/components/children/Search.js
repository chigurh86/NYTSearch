// Include React
var React = require("react");

// Creating the Form component
var Search = React.createClass({render: function() {
        return (
            <div className="card-panel">
                <div className="card-content">
                    <span className="panel-title text-center">Search</span>
                    {/*<form onSubmit={this.handleSubmit}>*/}
                        {/*<div className="form-group">*/}
                            {/*<h4>*/}
                                {/*<strong>Search Terms</strong>*/}
                            {/*</h4>*/}

                            {/*/!**/}
                             {/*Note how each of the form elements has an id that matches the state.*/}
                             {/*This is not necessary but it is convenient.*/}
                             {/*Also note how each has an onChange event associated with our handleChange event.*/}
                             {/**!/*/}
                            {/*<input*/}
                                {/*value={this.state.term}*/}
                                {/*type="text"*/}
                                {/*className="form-control text-center"*/}
                                {/*id="term"*/}
                                {/*onChange={this.handleChange}*/}
                                {/*required*/}
                            {/*/>*/}
                            {/*<br />*/}
                            {/*<button*/}
                                {/*className="btn btn-primary"*/}
                                {/*type="submit"*/}
                            {/*>*/}
                                {/*Submit*/}
                            {/*</button>*/}
                        {/*</div>*/}
                    {/*</form>*/}
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Search;
