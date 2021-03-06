import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
// core components

import GridContainer from "components/Grid/GridContainer.jsx";
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


class ShowHoiDong extends Component {
    state = {
        khoaData: {
            id: this.props.match.params.id,
            danhSachSinhVien: {
                table: {
                    header: [
                        { title: 'STT', field: 'id', cellStyle: { width: '10px' } },
                        { title: 'Tên Sinh viên', field: 'tenSV' },
                        { title: 'Lớp', field: 'lop' },
                        { title: 'Đề tài', field: 'tenDeTai' },
                        { title: 'SĐT', field: 'sdt' },//, type: 'numeric' 
                    ],
                    data: [
                        { tenSV: "Lê Đình Sinh", lop: "15TCLC2", tenDeTai: "Xây dựng hệ thống foobar xử lý foobar bằng công nghệ faaboo", sdt: "0969123456" },
                        { tenSV: "Lê Đình Làng", lop: "15TCLC3", tenDeTai: "Xây dựng hệ thống foobar xử lý foobar bằng công nghệ faaboo", sdt: "0969123456" },
                        { tenSV: "Lê Đình Tùng", lop: "15TCLC4", tenDeTai: "Xây dựng hệ thống foobar xử lý foobar bằng công nghệ faaboo", sdt: "0969123456" },
                        { tenSV: "Lê Đình Núi", lop: "15TCLC2", tenDeTai: "Xây dựng hệ thống foobar xử lý foobar bằng công nghệ faaboo", sdt: "0969123456" },
                        { tenSV: "Lê Đình Bạn Sơn", lop: "15TCLC2", tenDeTai: "Xây dựng hệ thống foobar xử lý foobar bằng công nghệ faaboo", sdt: "0969123456" },
                        { tenSV: "Lê Đình Lười", lop: "15TCLC2", tenDeTai: "Xây dựng hệ thống foobar xử lý foobar bằng công nghệ faaboo", sdt: "0969123456" },
                    ]
                },
            },
            danhSachGiangVien: {
                table: {
                    header: [
                        { title: 'STT', field: 'id', cellStyle: { width: '10px' } },
                        { title: 'Học vị', field: 'hocVi', cellStyle: { width: '10px' } },
                        { title: 'Tên Giảng viên', field: 'tenGV' },
                        { title: 'SĐT', field: 'sdt' },//, type: 'numeric' 
                    ],
                    data: [
                        { hocVi: "TS.", tenGV: "Lê Đình Sinh", sdt: "0969123456" },
                        { hocVi: "TS.", tenGV: "Lê Đình Làng", sdt: "0969123456" },
                        { hocVi: "TS.", tenGV: "Lê Đình Núi", sdt: "0969123456" },
                        { hocVi: "TS.", tenGV: "Lê Đình Bạn Sơn", sdt: "0969123456" },
                        { hocVi: "TS.", tenGV: "Lê Đình", sdt: "0969123456" },
                    ]
                },
            },
        },
        oldData: {
            tenKhoa: "Công nghệ thông tin",
            thoiGian: new Date().toJSON(),
            phong: "H101",
        },
        tenKhoa: "Công nghệ thông tin",
        thoiGian: new Date().toJSON(),
        phong: "H101",

        currentTabValue: 0,
        isEditing: false,


    }

    handleTabValueChange = (event, currentTabValue) => {
        this.setState({ currentTabValue });
    };

    handleChange = name => event => {
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
        const { currentTabValue } = this.state;
        const dssvTableData = this.rawDataToTable(this.state.khoaData.danhSachSinhVien);
        const dsgvTableData = this.rawDataToTable(this.state.khoaData.danhSachGiangVien);

        const dssvTableComponent = <MaterialTable
            // title={""}
            columns={ dssvTableData.tableHead }
            data={ dssvTableData.tableData }
            actions=
            {
                [
                    {
                        icon: 'open_in_new',
                        tooltip: 'Chi tiết',
                        onClick: (event, rowData) => {
                            // this.props.history.push("/quanlychung/dskhoa/1")
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

        const dsgvTableComponent = <MaterialTable
            // title={""}
            columns={ dsgvTableData.tableHead }
            data={ dsgvTableData.tableData }
            actions=
            {
                [
                    {
                        icon: 'open_in_new',
                        tooltip: 'Chi tiết',
                        onClick: (event, rowData) => {
                            // this.props.history.push("/quanlychung/dskhoa/1")
                        },
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Xóa',
                        onClick: (event, rowData) => {
                            alert('You clicked user ' + rowData.tenGV)
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
                <Grid>
                    <NavLink to="/quanly/quanlydoan/hoidongbaove/">Danh sách hội đồng</NavLink> > Hội đồng khoa { this.state.tenKhoa }
                </Grid>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={ classes.cardTitleWhite }>Khoa { this.state.tenKhoa }</h4>
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
                                label="Tên Khoa"
                                style={ { margin: 8 } }
                                className={ classes.textField }
                                value={ this.state.tenKhoa }
                                onChange={ this.handleChange('tenKhoa') }
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
                                label="Phòng"
                                style={ { margin: 8 } }
                                className={ classes.textField }
                                value={ this.state.phong }
                                onChange={ this.handleChange('phong') }
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
                                id="thoiGian"
                                label="Thời gian"
                                style={ { margin: 8 } }
                                margin="normal"
                                InputProps={ {
                                    defaultValue: this.state.thoiGian.substr(0, 10),
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
                        </form>
                        <div className={ classes.root }>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={ currentTabValue }
                                    onChange={ this.handleTabValueChange }
                                    scrollable
                                    scrollButtons="on"
                                    indicatorColor="primary"
                                    textColor="primary"
                                >
                                    <Tab label="Danh sách sinh viên" icon={ <PhoneIcon /> } />
                                    <Tab label="Danh sách giảng viên" icon={ <FavoriteIcon /> } />
                                </Tabs>
                            </AppBar>
                            { currentTabValue === 0 && <TabContainer>{ dssvTableComponent }</TabContainer> }
                            { currentTabValue === 1 && <TabContainer>{ dsgvTableComponent }</TabContainer> }
                        </div>

                    </CardBody>
                </Card>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(ShowHoiDong);
