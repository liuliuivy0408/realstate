import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from '../common/js/easyResponsiveTabs.js';
import { agentContact } from '../actions/agent';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
import AgentBox from "./AgentBox";
const images = require.context('../common/images', true);

class Agent extends Component {
	render() {
		const { agents } = this.props;
		return (
				<div className="col-md-3">
					<div className="blog_list2">
						<h3>Our Agents</h3>
						{([1, 2, 3]).map(ind => {
							return (<AgentBox {...agents[ind - 1]} />)
						})
							/*agents.map((agent) =>(
							<li >
							<AgentBox {...agent}/>
							</li>))
						*/}

					</div>
				</div>
		)
	}
	componentDidMount() {
		$.get("http://fierce-ravine-69937.herokuapp.com/agents", ({ agents }) => {
            agents.forEach(agent => {
                this.props.agentContact({ ...agent });
            })
        });
	}
}

const mapStateToProps = state => ({
	agents: state.agents,
})
const mapDispatchToProps = dispatch => ({
    agentContact: agent => {
        dispatch(agentContact(agent));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Agent);


