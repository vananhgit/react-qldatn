import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";

import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';


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


class ShowKhoa extends Component {
    state = {
        SinhVienData: {
            id: this.props.match.params.id,
            danhSachSinhVien: {
                table: {
                    header: [
                        { title: 'STT', field: 'id' },
                        { title: 'Tên Sinh viên', field: 'tenSV' },
                        { title: 'Lớp', field: 'lop' },
                        { title: 'SĐT', field: 'sdt' },//, type: 'numeric' 
                    ],
                    data: [
                        { tenSV: "Lê Đình Sinh1", lop: "15TCLC2", sdt: "0969123456" },
                        { tenSV: "Lê Đình Làng", lop: "15TCLC3", sdt: "0969123456" },
                        { tenSV: "Lê Đình Tùng", lop: "15TCLC4", sdt: "0969123456" },
                        { tenSV: "Lê Đình Núi", lop: "15TCLC2", sdt: "0969123456" },
                        { tenSV: "Lê Đình Bạn Sơn", lop: "15TCLC2", sdt: "0969123456" },
                        { tenSV: "Lê Đình Lười", lop: "15TCLC2", sdt: "0969123456" },
                    ]
                },
            },
        },
        oldData: {
            tenSV: "Vân Anh Óc Chó",
            tenKhoa: "Công nghệ thông tin",
            moTa: "Lorem ipsum dolor nuclear missile flashbang grenade m4 silence b51 say hetshot",
        },
        tenSV: "Vân Anh Óc Chó",
        tenKhoa: "Công nghệ thông tin",
        moTa: "Lorem ipsum dolor nuclear missile flashbang grenade m4 silence b51 say hetshot",
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
        const dssvTableData = this.rawDataToTable(this.state.SinhVienData.danhSachSinhVien);


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



  
        

        return (
            <GridContainer>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={ classes.cardTitleWhite }>Chi Tiết Thông Tin Sinh  Viên</h4>
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
                                label="Tên Sinh Viên"
                                style={ { margin: 8 } }
                                className={ classes.textField }
                                value={ this.state.tenSV }
                                onChange={ this.handleChange('tenSV') }
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
                                label="SĐT"
                                style={ { margin: 8 } }
                                className={ classes.textField }
                                value={ this.state.email }
                                onChange={ this.handleChange('email') }
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
                                label="Mô tả"
                                style={ { margin: 8 } }
                                value={ this.state.moTa }
                                onChange={ this.handleChange('moTa') }
                                fullWidth
                                margin="normal"
                                InputLabelProps={ {
                                    shrink: true
                                } }
                                InputProps={ {
                                    disableUnderline: !this.state.isEditing,
                                    style: { "color": "black" }
                                } }
                                
                            />
                        </form>
                        <div className={ classes.root }>
                        </div>

                    </CardBody>
                </Card>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(ShowKhoa);
