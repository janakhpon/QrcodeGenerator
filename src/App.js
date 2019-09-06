import React, { Fragment } from 'react';
import { Grid, Card } from "@material-ui/core";
import GetInput from './Components/Input';
import Option from './Components/Options';
import QRCode from 'qrcode.react';



export default class App extends React.Component {

  state = {
    url: '',
    size: 256,
    fgColor: '#000000',
    bgColor: '#ffffff',
    level: 'L',
    renderAs: 'canvas',
    includeMargin: false,
  }




  handleClick = (data) => {
    this.setState({ url: data })
    console.log('data' + this.state.url);
  }


  render() {

    return (
      <Fragment>
        <Grid container justify="center" style={{ marginTop: '10rem' }}>
          <Grid item>
            <Card>
              <GetInput handleGenerate={this.handleClick} />
            </Card>
            <Card className='qrcode'>
              <QRCode
                value={this.state.url}
                size={this.state.size}
                fgColor={this.state.fgColor}
                bgColor={this.state.bgColor}
                level={this.state.level}
                renderAs={this.state.renderAs}
                includeMargin={this.state.includeMargin} />
            </Card>
          </Grid>

        </Grid>

      </Fragment>
    );
  }

}