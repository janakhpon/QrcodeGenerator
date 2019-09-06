import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './index.css';



export default class GetInput extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            url :''
        }
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.handleGenerate(this.state.url);
        console.log('input'+this.state.url);
        this.setState({
            'url':''
        });
    }

    render() {
        return (
            <Paper className='root' width="100%">
                <IconButton onClick={this.onClick} className='iconButton' aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    className='input'
                    value={this.state.url}
                    onChange={e => {this.setState({'url':e.target.value})}}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>
        );
    }



}