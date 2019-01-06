import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import MaterialTable from 'material-table';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import NewDoAnMauModal from 'views/DashGiangVien/NewDoAnMauModal/NewDoAnMauModal.jsx';
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
    }
  }
};

class DanhSachDoAn extends Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
    this.state = {
      cardTable: {
        cardHeader: "Danh sách đồ án mẫu cho sinh viên lựa chọn",
        cardHeaderSub: "Mục này dùng để quản lý danh sách đồ án mẫu",
        dsKhoaTable: {
          table: {
            header: [
              { title: 'STT', field: 'id' },
              { title: 'Tên Đề Tài', field: 'tenDeTai' },
              { title: 'Mô Tả Đề Tài', field: 'moTa', },
              { title: 'Số sinh viên tối đa', field: 'soSV', },
            ],
            data: [
              { tenDeTai: "Xây dựng website PHP", moTa: "Đồ án xây dựng web bán hàng",soSV:"1" },
              { tenDeTai: "Xây dựng website Java", moTa: "Đồ án xây dựng hệ thống thư viện",soSV:"2" },
              { tenDeTai: "Xây dựng website JS", moTa: "Đồ án xây dựng hệ thống thanh toán qua QRCODE",soSV:"2" },
              { tenDeTai: "Xây dựng website PHP", moTa: "Đồ án xây dựng web bán hàng",soSV:"1" },
            ]
          },
        },
      },
      modalNewKhoaOpen: false,
    }
  }

  toggleModalNewKhoaOpen = () => {
    this.setState((prevState) => {
      return { modalNewKhoaOpen: !prevState.modalNewKhoaOpen }
    })
    console.log(this.state.modalNewKhoaOpen);
  }

  rawDataToTable = () => {
    let rawTable = this.state.cardTable.dsKhoaTable.table;
    let tableHead = rawTable.header;
    let tableData = rawTable.data.map((row, index) => {
      return {
        id: index,
        ...row,
      }
    });
    // console.log(tableData);
    return (
      <Card>
        <CardHeader color="primary">
          <div style={ { float: "left" } }>
            <h4 className={ this.classes.cardTitleWhite }>{ this.state.cardTable.cardHeader }</h4>
            <p className={ this.classes.cardCategoryWhite }>
              { this.state.cardTable.cardHeaderSub }
            </p>
          </div>
          <IconButton style={ { float: "right" } } className={ this.classes.cardTitleWhite } onClick={ this.toggleModalNewKhoaOpen }>
            <span style={ { paddingRight: "10px", fontSize: "20px" } }>Tạo thêm đề tài mẫu</span>
            <AddBoxIcon fontSize="inherit" />
          </IconButton>
        </CardHeader>
        <CardBody>
          <MaterialTable
            // title={""}
            columns={ tableHead }
            data={ tableData }
            actions=
            {
              [
                {
                  icon: 'open_in_new',
                  tooltip: 'Chi tiết',
                  onClick: (event, rowData) => {
                    this.props.history.push("/giangvien/tiendo/1")
                  },
                },
                {
                  icon: 'delete',
                  tooltip: 'Xóa',
                  onClick: (event, rowData) => {
                    alert('You clicked user ' + rowData.tenKhoa)
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
        </CardBody>
      </Card>
    );
  }

  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={ 11 } sm={ 11 } md={ 11 }>
          { this.rawDataToTable() }
        </GridItem>
        { <NewDoAnMauModal open={ this.state.modalNewKhoaOpen } onClose={ this.toggleModalNewKhoaOpen } /> }
      </GridContainer>
    );
  }
}

export default withStyles(styles)(DanhSachDoAn);
