function DanhSachSinhVien() {
    this.arr = [];
    this.addSV = function (sv) {
        this.arr.push(sv)
    }


}
// thêm sinh viên

// tìm vị trí
DanhSachSinhVien.prototype.find = function (masv) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].masv === masv) {
            index = i;
            break;
        }

    }
    return index;
}


// xóa sinh viên
DanhSachSinhVien.prototype.deleteSV = function (mssv) {
    var index = find(mssv);
    if (index !== -1) {
        this.arr.splice(index, 1);
    }
}
// lấy thông tin sinh viên
DanhSachSinhVien.prototype.getInfor = function (mssv) {
    var index = this.find(mssv);
    if (index !== -1) {
        return this.arr[index];
    }
}
// sửa thông tin sinh viên
DanhSachSinhVien.prototype.updateInfor = function (sinhVien) {
    var index = this.find(sinhVien.masv)
    if (index !== -1) {
        this.arr[index] = sinhVien;
    }

}
// tìm kiếm sinh viên
DanhSachSinhVien.prototype.search = function (keyword) {
    var arraySearch = []
    for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
            arraySearch.push(this.arr[i])
        }

    }
    return arraySearch;
}