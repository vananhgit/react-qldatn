import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
// core components

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
function TabContainer(props) {
    return (
        <Typography component="div" >
            { props.children }
        </Typography>
    );
}


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


class ShowLop extends Component {
    state = {
        lopData: {
            id: this.props.match.params.id,
            danhSachSinhVien: {
                table: {
                    header: [
                        { title: 'STT', field: 'id' },
                        { title: 'MSSV', field: 'mssv' },
                        { title: 'Tên Sinh viên', field: 'tenSV' },
                        { title: 'Ngày sinh', field: 'ngaysinh' },
                        { title: 'SĐT', field: 'sdt' },//, type: 'numeric' 
                    ],
                    data: [
                        { tenSV: "Lê Đình Sinh", mssv: "102140250",ngaysinh:"6/9/1996", sdt: "0969123456" },
                        { tenSV: "Lê Đình Làng", mssv: "102140251",ngaysinh:"6/9/1996", sdt: "0969123456" },
                        { tenSV: "Lê Đình Tùng", mssv: "102140252",ngaysinh:"6/9/1996", sdt: "0969123456" },
                        { tenSV: "Lê Đình Núi", mssv: "102140253",ngaysinh:"6/9/1996", sdt: "0969123456" },
                        { tenSV: "Lê Đình Bạn Sơn", mssv: "102140254",ngaysinh:"6/9/1996", sdt: "0969123456" },
                        { tenSV: "Lê Đình Lười", mssv: "102140255",ngaysinh:"6/9/1996", sdt: "0969123456" },
                    ]
                },
            },
        },
        oldData: {
            tenLop: "14T1",
            hinhthuc: "Chính quy",
            khoa: "Công nghệ thông tin",
        },
        tenLop: "14T1",
        hinhthuc: "Chính quy",
        khoa: "Công nghệ thông tin",
        isEditing: false,


    }

    handleChange = name => event => {
        console.log(name);
        this.setState({
            [name]: event.target.value,
        });
    };

    handleEditClick = () => {
        this.setState({ isEditing: true });
    }

    handleDataChangeClick = () => {
        this.setState({ isEditing: false });
        //save data
    }

    handleDataChangeAbortClick = () => {
        this.setState({ ...this.state.oldData });
        this.setState({ isEditing: false });
        // reFetch data
    }

    rawDataToTable = (data) => {
        console.log(data);
        let rawTable = data.table;
        let tableHead = rawTable.header;
        let tableData = rawTable.data.map((row, index) => {
            return {
                id: index,
                ...row,
            }
        });
        return {
            tableHead: tableHead,
            tableData: tableData
        }
    }

    render() {
        const { classes } = this.props;
        const dsSVTableData = this.rawDataToTable(this.state.lopData.danhSachSinhVien);

        const dsSVTableComponent = <MaterialTable
            // title={""}
            columns={ dsSVTableData.tableHead }
            data={ dsSVTableData.tableData }
            actions=
            {
                [
                    {
                        icon: 'open_in_new',
                        tooltip: 'Chi tiết',
                        onClick: (event, rowData) => {
                            //
                        },
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Xóa',
                        onClick: (event, rowData) => {
                            alert('You clicked user ' + rowData.tenSV)
                        },
                    }
                ]
            }
            options={
                {
                    actionsColumnIndex: -1,
                    filtering: true,
                    toolbar: false,
                    search: true,
                    sorting: true,
                }
            }
            localization={ {
                pagination: {
                    labelDisplayedRows: 'Mục {from} đến {to} trong tổng số {count}', // {from}-{to} of {count}
                    labelRowsPerPage: 'Số hàng hiển thị:', // Rows per page:
                    firstAriaLabel: 'Trang đầu', // First Page
                    firstTooltip: 'Trang đầu', // First Page
                    previousAriaLabel: 'Trang trước', // Previous Page
                    previousTooltip: 'Trang trước', // Previous Page
                    nextAriaLabel: 'Trang tiếp', // Next Page
                    nextTooltip: 'Trang tiếp', // Next Page
                    lastAriaLabel: 'Trang cuối', // Last Page
                    lastTooltip: 'Trang cuối', // Last Page
                },
                toolbar: {
                    nRowsSelected: '{0} hàng được chọn', // {0} row(s) selected
                    showColumnsTitle: 'Các cột hiển thị', // Show Columns
                    showColumnsAriaLabel: 'Các cột hiển thị', // Show Columns
                    exportTitle: 'Xuất file', // Export
                    exportAriaLabel: 'Xuất file', // Export
                    exportName: 'Xuấy file CSV', // Export as CSV
                    searchTooltip: 'Tìm kiếm', // Search
                },
                header: {
                    actions: 'Hành động', // Actions
                },
                body: {
                    emptyDataSourceMessage: 'Không có dữ liệu', // No records to display
                    filterRow: {
                        filterTooltip: 'Bộ lọc', // Filter
                    },
                },
            } }
        />

        return (
            <GridContainer>
                <Grid
                    direction="row"
                >
                    <NavLink to="/quanlychung/dslop/">Danh sách lớp</NavLink> > { this.state.lopData.id }.Lớp  { this.state.tenLop }
                </Grid>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={ classes.cardTitleWhite }>Lớp { this.state.tenLop }</h4>
                        <div style={ { float: "right" } }>
                            {
                                !this.state.isEditing ? (
                                    <IconButton onClick={ this.handleEditClick }>
                                        <Icon>
                                            edit
                                        </Icon>
                                    </IconButton>
                                ) :
                                    null
                            }
                        </div>
                    </CardHeader>
                    
                    <CardBody>
                        <form className={ classes.container } noValidate autoComplete="off">
                            <TextField
                                id="standard-name"
                                label="Tên Lớp"
                                style={ { margin: 8 } }
                                className={ classes.textField }
                                value={ this.state.tenLop }
                                onChange={ this.handleChange('tenLop') }
                                margin="normal"
                                disabled={ !this.state.isEditing }
                                InputProps={ {
                                    disableUnderline: !this.state.isEditing,
                                    style: { "color": "black" }
                                } }
                                InputLabelProps={ {
                                    shrink: true
                                } }
                            />
                            <TextField
                                id="standard-name"
                                label="Khoa"
                                style={ { margin: 8 } }
                                className={ classes.textField }
                                value={ this.state.khoa }
                                onChange={ this.handleChange('khoa') }
                                margin="normal"
                                disabled={ !this.state.isEditing }
                                InputProps={ {
                                    disableUnderline: !this.state.isEditing,
                                    style: { "color": "black" }
                                } }
                                InputLabelProps={ {
                                    shrink: true
                                } }
                            />
                            <TextField
                                id="standard-full-width"
                                label="Hình thức"
                                style={ { margin: 8 } }
                                value={ this.state.hinhthuc }
                                onChange={ this.handleChange('hinhthuc') }
                                fullWidth
                                margin="normal"
                                InputLabelProps={ {
                                    shrink: true
                                } }
                                InputProps={ {
                                    disableUnderline: !this.state.isEditing,
                                    style: { "color": "black" }
                                } }
                                disabled={ !this.state.isEditing }
                            />
                            {
                                this.state.isEditing ? (
                                    <div style={{ float: "right", marginBottom:"10px"}}>
                                        <Button color="primary" key="1" onClick={ this.handleDataChangeClick }>Lưu</Button>,
                                        <Button key="2" onClick={ this.handleDataChangeAbortClick }>Hủy bỏ</Button>
                                    </div>
                                ) :
                                    null
                            }
                        </form>
                        
                        <h3>Danh sách sinh viên </h3>
                        <div className={ classes.root }>
        
                            <TabContainer>{ dsSVTableComponent }</TabContainer> }

                        </div>

                    </CardBody>
                </Card>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(ShowLop);
