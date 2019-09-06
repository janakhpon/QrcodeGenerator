import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import QRCode from 'qrcode.react';


export default class CardView extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            value:props.value
        }
    }

    render() {

        return (
            <Paper style={{width:'100%',height:'100%'}}>
                <Grid style={{width:'100%',height:'100%'}} container spacing={2}>
                    <Grid item style={{width:'100%',height:'100%'}}>
                    <QRCode value="http://facebook.github.io/react/" />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}