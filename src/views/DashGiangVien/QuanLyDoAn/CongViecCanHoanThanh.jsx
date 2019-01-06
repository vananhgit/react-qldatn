import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon"

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import AddBoxIcon from '@material-ui/icons/AddBox';

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        },
        display: "inline"
    }
};

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.subtDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
}

class BaoCaoTienDo extends Component {
    state = {
        dangKi: {
            ngayBatDau: new Date().subtDays(120).toJSON(),
            ngayKetThuc: new Date().subtDays(120).addDays(10).toJSON(),
        },
        dotBaoCao: [
            { 
                stt: 1,
                ngayBatDau: new Date().subtDays(90).toJSON(),
                ngayKetThuc: new Date().subtDays(90).addDays(10).toJSON(),
            },
            {
                stt: 2,
                ngayBatDau: new Date().subtDays(60).toJSON(),
                ngayKetThuc: new Date().subtDays(60).addDays(10).toJSON(),
            },
            {
                stt: 3,
                ngayBatDau: new Date().subtDays(30).toJSON(),
                ngayKetThuc: new Date().subtDays(30).addDays(10).toJSON(),
            },
        ],
        baoVe: {
            ngayBatDau: new Date().addDays(10).toJSON(),
            ngayKetThuc: new Date().addDays(15).toJSON(),
        },
        baocaoTienDo : [
            {
                title1:"Báo Cáo Tiến Độ Lần 1",
                mota1:"Xây dựng template cơ bản ",
                mota2:"Chưa viết báo cáo",
                ngayKetThuc: new Date().addDays(15).toJSON(),
            },
            {
                title1:"Báo Cáo Tiến Độ Lần 2",
                mota1:"Đã xong database ",
                mota2:"Chưa viết báo cáo",
                ngayKetThuc: new Date().addDays(25).toJSON(),
            },
            {
                title1:"Báo Cáo Tiến Độ Lần 3",
                mota1:"Đã hoàn thành project ",
                mota2:"Đã xong báo cáo",
                ngayKetThuc: new Date().addDays(35).toJSON(),
            },
        ],
        tenSV:"Trần Hoàng Bão",
        tenDeTai:"Ứng dụng di động",
    }

    handleDataChangeClick = () => {
        this.setState({ isEditing: false })
    }


    handleDataChangeAbortClick = () => {
        this.setState({ isEditing: false })
    }

    createDotBaoCao = () => {
        return (
            this.state.dotBaoCao.map((dot, index) => {
                return (
                    <GridContainer key={ index }>
                        <GridItem xs={ 12 } sm={ 12 } md={ 1 }>
                            <h4>Đợt { dot.stt }:</h4>
                        </GridItem>
                        <form noValidate autoComplete="off">
                            {/* <GridItem xs={ 12 } sm={ 12 } md={ 3 }> */ }
                            <TextField
                                id="standard-date-start"
                                label="Thời gian bắt đầu"
                                style={ { margin: 8 } }
                                margin="normal"
                                InputProps={ {
                                    defaultValue: dot.ngayBatDau.substr(0, 10),
                                    type: "date",
                                    disableUnderline: !this.state.isEditing,
                                    style: { "color": "black" },
                                } }
                                disabled={ !this.state.isEditing }
                                fullwidth
                                InputLabelProps={ {
                                    shrink: true
                                } }
                            />
                            <TextField
                                id="standard-date-start"
                                label="Thời gian bắt đầu"
                                style={ { margin: 8 } }
                                margin="normal"
                                InputProps={ {
                                    defaultValue: dot.ngayKetThuc.substr(0, 10),
                                    type: "date",
                                    disableUnderline: !this.state.isEditing,
                                    style: { "color": "black" },
                                } }
                                disabled={ !this.state.isEditing }
                                fullwidth
                                InputLabelProps={ {
                                    shrink: true
                                } }
                            />
                            {/* </GridItem> */ }
                        </form>
                    </GridContainer>
                );
            })
        );
    }

    addDotBaoCao = () => {
        let baoCaoState = this.state.dotBaoCao.slice();
        let len = baoCaoState.length;
        baoCaoState.push({
            stt: len + 1,
            ngayBatDau: new Date().toJSON(),
            ngayKetThuc: new Date().toJSON(),
        });
        this.setState({ dotBaoCao: baoCaoState });
    }

    tiendoBaoCao = () => {
        return (
            this.state.baocaoTienDo.map((dot, index) => {
                return (
                    <Timeline lineColor={ '#e86971' }>
                        <TimelineItem
                            key="001"
                            dateText={dot.title1}
                            style={ { color: '#e86961' } }
                        >
                            <h3>{dot.mota1}</h3>
                            <p>
                                {dot.mota2}
                            </p>
                            <p>
                                Ngày Kết Thúc {dot.ngayKetThuc.substr(0, 10)}
                            </p>
                        </TimelineItem>
                    </Timeline>
                );
            })
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <GridContainer>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={ classes.cardTitleWhite }>QUẢN LÝ TIẾN ĐỘ</h4>
                        <div style={ { float: "right" } }>
                            {/* {
                                !this.state.isEditing ? (
                                    <IconButton onClick={ () => { this.setState({ isEditing: true }) } }>
                                        <Icon>
                                            edit
                                        </Icon>
                                    </IconButton>
                                ) :
                                    null
                            } */}
                        </div>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                        <h4><strong>Tên Đề Tài: {this.state.tenDeTai}</strong></h4>
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                        <h4><strong>Thời gian đăng kí:</strong></h4>
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                                        <TextField
                                            id="ngayBatDauDK"
                                            label="Thời gian bắt đầu"
                                            style={ { margin: 8 } }
                                            margin="normal"
                                            InputProps={ {
                                                defaultValue: this.state.dangKi.ngayBatDau.substr(0, 10),
                                                type: "date",
                                                disableUnderline: !this.state.isEditing,
                                                style: { "color": "black" },
                                            } }
                                            disabled={ !this.state.isEditing }
                                            fullwidth
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                        />
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                                        <TextField
                                            id="ngayKetThucDK"
                                            label="Thời gian kết thúc"
                                            style={ { margin: 8 } }
                                            margin="normal"
                                            InputProps={ {
                                                defaultValue: this.state.dangKi.ngayKetThuc.substr(0, 10),
                                                type: "date",
                                                disableUnderline: !this.state.isEditing,
                                                style: { "color": "black" },
                                            } }
                                            disabled={ !this.state.isEditing }
                                            fullwidth
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                        />
                                    </GridItem>
                                </GridContainer>
                                <hr></hr>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                        <h4><strong>Thời gian báo cáo tiến độ:</strong></h4>
                                    </GridItem>
                                </GridContainer>
                                { this.createDotBaoCao() }
                                {
                                    this.state.isEditing ? (
                                        <GridContainer>
                                            <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                                <IconButton onClick={ this.addDotBaoCao }>
                                                    <AddBoxIcon fontSize="inherit" />
                                                    <span style={ { paddingRight: "10px", fontSize: "20px" } }>Tạo đợt báo cáo tiến độ mới</span>
                                                </IconButton>
                                            </GridItem>
                                        </GridContainer>
                                    ) : null
                                }
                                <hr></hr>
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                                        <h4><strong>Thời gian bảo vệ:</strong></h4>
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                                        <TextField
                                            id="ngayBatDauBV"
                                            label="Thời gian bắt đầu"
                                            style={ { margin: 8 } }
                                            margin="normal"
                                            InputProps={ {
                                                defaultValue: this.state.baoVe.ngayBatDau.substr(0, 10),
                                                type: "date",
                                                disableUnderline: !this.state.isEditing,
                                                style: { "color": "black" },
                                            } }
                                            disabled={ !this.state.isEditing }
                                            fullwidth
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                        />
                                    </GridItem>
                                    <GridItem xs={ 12 } sm={ 12 } md={ 3 }>
                                        <TextField
                                            id="ngayKetThucBV"
                                            label="Thời gian kết thúc"
                                            style={ { margin: 8 } }
                                            margin="normal"
                                            InputProps={ {
                                                defaultValue: this.state.baoVe.ngayKetThuc.substr(0, 10),
                                                type: "date",
                                                disableUnderline: !this.state.isEditing,
                                                style: { "color": "black" },
                                            } }
                                            disabled={ !this.state.isEditing }
                                            fullwidth
                                            InputLabelProps={ {
                                                shrink: true
                                            } }
                                        />
                                    </GridItem>
                                </GridContainer>

                                <CardFooter>
                                    {
                                        this.state.isEditing ? (
                                            <div style={ { float: "right", marginBottom: "10px" } }>
                                                <Button color="primary" key="1" onClick={ this.handleDataChangeClick }>Lưu</Button>,
                                                <Button key="2" onClick={ this.handleDataChangeAbortClick }>Hủy bỏ</Button>
                                            </div>
                                        ) :
                                            null
                                    }
                                </CardFooter>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>

                {this.tiendoBaoCao()}
                

            </GridContainer>
        );
    }
}

export default withStyles(styles)(BaoCaoTienDo);