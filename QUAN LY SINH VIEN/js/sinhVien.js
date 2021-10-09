function SinhVien(
    _masv,
    _name,
    _email,
    _pass,
    _date,
    _course,
    _pointT,
    _pointL,
    _pointH,
) {
    this.masv = _masv;
    this.name = _name;
    this.email = _email;
    this.pass = _pass;
    this.date = _date;
    this.course = _course;
    this.pointT = _pointT;
    this.pointL = _pointL
    this.pointH = _pointH
    this.average = 0;





    SinhVien.prototype.countAverage = function () {
        this.average = (parseFloat(this.pointT) +
            parseFloat(this.pointL) +
            parseFloat(this.pointH)) / 3

    }
}
