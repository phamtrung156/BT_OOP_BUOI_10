function NhanVien(_tk,
    _name,
    _email,
    _pass,
    _date,
    _basicSalary,
    _pos,
    _hour) {

    this.tk = _tk;
    this.name = _name;
    this.email = _email;
    this.pass = _pass;
    this.date = _date;
    this.basicSalary = _basicSalary;
    this.pos = _pos;
    this.hour = _hour;
    this.salary = 0;
    this.xepLoai = "";
}

NhanVien.prototype.countSalary = function () {
    if (this.pos == "Giám đốc") {
        this.salary = this.basicSalary * 3
    } else if (this.pos == "Trưởng phòng") {
        this.salary = this.basicSalary * 2
    } else {
        this.salary = this.basicSalary
    }

}

NhanVien.prototype.level = function () {
    if (this.hour >= 192) {
        this.xepLoai = "Xuất sắc";
    } else if (this.hour < 192 & this.hour >= 176) {
        this.xepLoai = "Giỏi";
    } else if (this.hour < 176 & this.hour >= 160) {
        this.xepLoai = "Khá";
    } else {
        this.xepLoai = "Trung bình";
    }


}