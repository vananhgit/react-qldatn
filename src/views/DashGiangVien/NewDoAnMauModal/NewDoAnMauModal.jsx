import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import FormControl from '@material-ui/core/FormControl';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 145,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }, 

    dense: {
        marginTop: 10,
    },
    menu: {
        width: 200,
    },
    formControl: {
        paddingBottom: "10px",
        margin: "27px 0 0 0",
        position: "relative"
      },
}
);

class NewLopModal extends Component {
    state = {
        khoa:"CNTT",
        listkhoa: ["CNTT","Điện tử","Hóa","Điện tử- Viễn Thông", "Xây dựng"       
        ],
        Hinhthuc:"Chính quy",
        listHinhthuc: ["CNPM","Mạng Truyền Thông","Hệ Thống Nhúng"],
        listSLSV: ["1","2","3"],
        soSV:"Số lượng sinh viên"         
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.open}
                    onClose={this.props.onClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <div style={{float: "right", height: "60px"}}>
                                    <IconButton onClick={this.props.onClose}>
                                        <Icon>
                                            clear
                                        </Icon>
                                    </IconButton>
                                </div>
                                <Card>
                                    <CardHeader color="primary">
                                        <h5 style={{ padding: "0px", margin: "0px"}}>THÊM ĐỒ ÁN MẪU</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <GridContainer>
                                        
                                        <GridItem xs={ 12 } sm={ 12 } md={ 5 }>
                                        <TextField
                                            id="standard-name"
                                            label="Tên Đề tài"
                                            style={ { margin: 8 } }
                                            className={ classes.textField }
                                            margin="normal"
                                            InputProps={ {
                                                style: { "color": "black" }
                                            } }
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                            fullWidth
                                        />
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 5 }>
                                        <TextField
                                            id="standard-name"
                                            label="Mô Tả Đề Tài"
                                            style={ { margin: 8 } }
                                            className={ classes.textField }
                                            margin="normal"
                                            InputProps={ {
                                                style: { "color": "black" }
                                            } }
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                            fullWidth
                                        />
                                    </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                        <GridItem xs={ 12 } sm={ 12 } md={ 5 }>
                                        <FormControl style={ { margin: 8, minWidth: 120, } } fullwidth className={ classes.formControl }>
                                            <InputLabel fullwidth shrink>Khoa</InputLabel>
                                            <Select
                                                 value={this.state.khoa }
                                                 onChange={ this.handleChange }
                                                 inputProps={{
                                                    name: 'khoa'
                                                  }}
                                                fullwidth
                                            >
                                                {
                                                    this.state.listkhoa.map((khoa, index) => {
                                                        return (
                                                            <MenuItem value={ khoa }>{ khoa}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 5 }>
                                        <FormControl style={ { margin: 8, minWidth: 120, } } fullwidth className={ classes.formControl }>
                                            <InputLabel fullwidth shrink>Số Lượng Sinh Viên</InputLabel>
                                            <Select
                                                 value={this.state.soSV}
                                                 onChange={ this.handleChange }
                                                 inputProps={{
                                                    name: 'soSV'
                                                  }}
                                                fullwidth
                                            >
                                                {
                                                    this.state.listSLSV.map((soSV, index) => {
                                                        return (
                                                            <MenuItem value={ soSV }>{ soSV}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 5 }>
                                        <FormControl style={ { margin: 8, minWidth: 120, } } fullwidth className={ classes.formControl }>
                                            <InputLabel fullwidth shrink>Hình thức</InputLabel>
                                            <Select
                                                 value={this.state.Hinhthuc }
                                                 onChange={ this.handleChange }
                                                 inputProps={{
                                                    name: 'Hinhthuc'
                                                  }}
                                                fullwidth
                                            >
                                                {
                                                    this.state.listHinhthuc.map((ht, index) => {
                                                        return (
                                                            <MenuItem value={ ht }>{ht}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    </GridContainer>
                                    </CardBody>
                                    <CardFooter>
                                        <Button color="primary">Lưu</Button>
                                    </CardFooter>
                                </Card>
                            </GridItem>

                        </GridContainer>
                        <SimpleModalWrapped />
                    </div>

                </Modal>
            </div>
        );
    }
}


const SimpleModalWrapped = withStyles(styles)(NewLopModal);

export default SimpleModalWrapped;