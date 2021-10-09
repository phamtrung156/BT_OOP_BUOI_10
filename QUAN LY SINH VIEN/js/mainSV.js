function Dom(id) {
    return document.getElementById(id);
}

var ds = new DanhSachSinhVien();

getLocalStorage();

function getInforSV() {
    var _masv = Dom("txtMaSV").value;
    var _name = Dom("txtTenSV").value;
    var _email = Dom("txtEmail").value;
    var _pass = Dom("txtPass").value;
    var _date = Dom("txtNgaySinh").value;
    var _course = Dom("khSV").value;
    var _pointT = Dom("txtDiemToan").value;
    var _pointL = Dom("txtDiemLy").value;
    var _pointH = Dom("txtDiemHoa").value;

    var sinhVien = new SinhVien(
        _masv,
        _name,
        _email,
        _pass,
        _date,
        _course,
        _pointT,
        _pointL,
        _pointH
    );
    return sinhVien
}

// thêm sinh viên

function addInfor(event) {
    event.preventDefault()
    var sinhVien = getInforSV();
    if (sinhVien !== null) {
        sinhVien.countAverage();
        ds.addSV(sinhVien)
        taoBang(ds.arr);
        console.log(ds);
        setLocalStorage();
    }

}

// xóa sinh viên

function deleteInfor(masv) {

    ds.deleteSV(masv);
    taoBang(ds.arr)
    setLocalStorage();
}
// sửa sinh viên
function editInfor(masv) {
    var sinhVien = ds.getInfor(masv);

    Dom("btnUpdate").style.display = "inline-block"

    Dom("txtMaSV").value = sinhVien.masv

    Dom("txtMaSV").disabled = true
    Dom("txtTenSV").value = sinhVien.name
    Dom("txtEmail").value = sinhVien.email
    Dom("txtPass").value = sinhVien.pass
    Dom("txtNgaySinh").value = sinhVien.date
    Dom("khSV").value = sinhVien.course
    Dom("txtDiemToan").value = sinhVien.pointT
    Dom("txtDiemLy").value = sinhVien.pointL
    Dom("txtDiemHoa").value = sinhVien.pointH
}

Dom("btnUpdate").addEventListener("click", function (event) {
    event.preventDefault()

    var sinhVien = getInforSV();
    sinhVien.countAverage();
    ds.updateInfor(sinhVien)
    taoBang(dssv.arr)

})

// reset form
Dom("btnReset").addEventListener("click", function (event) {
    event.preventDefault()
    Dom("formSV").reset();
    Dom("btnUpdate").style.display = "none"
    Dom("txtMaSV").disabled = false
})


// tìm kiếm sinh viên 
Dom("txtSearch").addEventListener("keyup", function () {
    var keyword = Dom("txtSearch").value;
    var arraySearch = ds.search(keyword);
    taoBang(arraySearch)

})

// lưu trữ trong localStorage

function setLocalStorage() {
    var arrString = JSON.stringify(ds.arr);
    localStorage.setItem("DSSV", arrString);
}
function getLocalStorage(){
    if(localStorage.getItem("DSSV")){
        var data = localStorage.getItem("DSSV");
        ds.arr = JSON.parse(data)
        taoBang(ds.arr)
    }
}


















// ==============================
// tạo bảng
function taoBang(arr) {
    Dom("tbodySinhVien").innerHTML = "";

    for (var i = 0; i < arr.length; i++) {

        var TR = document.createElement("tr");

        var TD_MaSV = document.createElement("td");
        var TD_Name = document.createElement("td");
        var TD_Email = document.createElement("td");
        var TD_Date = document.createElement("td");
        var TD_Course = document.createElement("td");
        var TD_Average = document.createElement("td");
        var TD_Button_Delete = document.createElement("td")
        var TD_Button_Edit = document.createElement("td")

        TD_MaSV.innerHTML = arr[i].masv;
        TD_Name.innerHTML = arr[i].name;
        TD_Email.innerHTML = arr[i].email;
        TD_Date.innerHTML = arr[i].date;
        TD_Course.innerHTML = arr[i].course;
        TD_Average.innerHTML = arr[i].average;
        TD_Button_Delete.innerHTML = '<button class="btn btn-danger" onclick="deleteInfor(\'' + arr[i].id + "')\">Xóa</button>"
        TD_Button_Edit.innerHTML = '<button class="btn btn-success" onclick="editInfor(\'' + arr[i].id + "')\">Sửa</button>"

        TR.appendChild(TD_MaSV);
        TR.appendChild(TD_Name);
        TR.appendChild(TD_Email);
        TR.appendChild(TD_Date);
        TR.appendChild(TD_Course);
        TR.appendChild(TD_Average);
        TR.appendChild(TD_Button_Delete);
        TR.appendChild(TD_Button_Edit);


        Dom("tbodySinhVien").appendChild(TR)
    }
}