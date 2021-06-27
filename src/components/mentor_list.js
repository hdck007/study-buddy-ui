import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function Mentor_list() {
    return (
        <div id='mentor_list'>
            <span className="heading">Mentor List</span>
            <hr />
            <List>
        <ListItem button>
          <ListItemText primary="Mentor 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Mentor 2" />
        </ListItem>
      </List>
        </div>
    )
}

