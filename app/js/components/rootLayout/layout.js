/**
 * Created by dinhceo on 13/04/2017.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

const facebook = <FontIcon className="fa fa-facebook"/>;
const twitter = <FontIcon className="fa fa-twitter"/>;
const github = <FontIcon className="fa fa-github"/>;

class Layout extends React.Component {
    constructor(props) {
        console.log('layout = ', props);
        super(props);
        this.state = {
            selectedIndex : 0,
        };
    }

    select(index) {
        this.setState({selectedIndex : index});
    }

    render() {
        return (
            <div className="container">
                <AppBar
                    title="Todo App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

                {this.props.children}

                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            href="https://twitter.com/PhamvandinhInh?lang=en"
                            target="_blank"
                            label="Twitter"
                            icon={twitter}
                            onTouchTap={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            href="https://www.facebook.com/dinhceo.1993"
                            target="_blank"
                            label="Facebook"
                            icon={facebook}
                            onTouchTap={() => this.select(1)}
                        />
                        <BottomNavigationItem
                            href="https://github.com/DinhCEO"
                            target="_blank"
                            label="Github"
                            icon={github}
                            onTouchTap={() => this.select(2)}
                        />
                    </BottomNavigation>
                </Paper>
            </div>
        )
    }
}

export default Layout;