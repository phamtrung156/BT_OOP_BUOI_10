function DanhSachNhanVien() {
    this.arr = [];

}
// thêm nhân viên
DanhSachNhanVien.prototype.addNV = function (nv) {
    this.arr.push(nv)
}
// tìm vị trí nhân viên
DanhSachNhanVien.prototype.find = function (tk) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].tk === tk) {
            index = i;
            break;
        }
    }
    return index;
}
// xóa nhân viên
DanhSachNhanVien.prototype._deleteNV = function (manv) {
    var index = this.find(manv)

    if (index !== -1) {
        this.arr.splice(index, 1)
    }
}
// lấy thông tin nhân viên cần cập nhật
DanhSachNhanVien.prototype._getInfor = function (manv) {
    var index = this.find(manv);
    if (index !== -1) {
        return this.arr[index];
    }
}
// thay đổi thong tin nhân viên
DanhSachNhanVien.prototype.updateNV = function (staff) {
    var index = this.find(staff.tk)
    if (index !== -1) {
        this.arr[index] = staff
    }
}
// tìm kiếm nhân viên 
DanhSachNhanVien.prototype.searchNV = function (keyword) {
    var arraySearch = []
    for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].xepLoai.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
            arraySearch.push(this.arr[i])
        }
    }
    return arraySearch
}