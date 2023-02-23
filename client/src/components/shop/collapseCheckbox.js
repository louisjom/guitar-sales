import React, { useState } from 'react'

// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Icon from '@mui/material/Icon';
// import {
//     List,
//     ListItem,
//     ListItemSecondaryAction,
//     ListItemText,
//     Checkbox,
//     Collapse
// } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';


const CollapseCheckbox = (props) => {
    const [open,setOpen] = useState(props.initState);
    const [checked, setChecked] = useState([]);

    const handleCollapseOpen = () => setOpen(!open);


    const renderList = () => (
        props.list ?
            props.list.map((value)=>(
                <ListItem key={value._id}>
                    <ListItemText primary={value.name}/>
                    <ListItemSecondaryAction>
                        <Checkbox
                            color="primary"
                            onChange={ ()=> handleToggle(value._id)}
                            checked={checked.indexOf(value._id) !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            ))
        :null
    )

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if(currentIndex === -1){
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex,1)
        }

        setChecked(newChecked);
        props.handleFilters(newChecked)
    }


    return(
        <div className="collapse_items_wrapper">
            <List>
                <ListItem onClick={handleCollapseOpen}>
                    <ListItemText
                        primary={props.title}
                        className="collapse_title"
                    />
                    { open ? <Icon>arrow_drop_up_icon</Icon> :<Icon>arrow_drop_down_icon</Icon>} 
                </ListItem>
                <Collapse in={open} timeout="auto">
                    <List component="div" disablePadding>
                      {renderList()}
                    </List>
                </Collapse>
            </List>
        </div>

    )

}

export default CollapseCheckbox;