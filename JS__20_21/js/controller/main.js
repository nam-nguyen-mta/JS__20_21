function getElement(selector) {
  return document.querySelector(selector);
}

var dsnv = new DSNV();

layData();

function layThongtinNV() {
  var taiKhoan = getElement("#tknv").value;
  var tenNV = getElement("#name").value;
  var email = getElement("#email").value;
  var matKhau = getElement("#password").value;
  var ngayLam = getElement("#datepicker").value;
  var luongCB = +getElement("#luongCB").value;
  var chucvu = getElement("#chucvu").value;
  var gioLam = +getElement("#gioLam").value;

  var nhanVien = new NhanVien(
    taiKhoan,
    tenNV,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucvu,
    gioLam
  );

  var isValid = true;

  isValid &= kiemTraTaiKhoan(nhanVien.taiKhoan, "#tbTKNV");
  isValid &= kiemTraTenNhanVien(nhanVien.tenNV, "#tbTen");
  isValid &= kiemTraEmail(nhanVien.email, "#tbEmail");
  isValid &= kiemTraMatKhau(nhanVien.matKhau, "#tbMatKhau");
  isValid &= kiemTraNgayLam(nhanVien.ngayLam, "#tbNgay");

  return isValid ? nhanVien : undefined;
}

function hienthidsnv(arrNV = dsnv.arrNV) {
  var content = "";
  for (var i = 0; i < arrNV.length; i++) {
    var nv = arrNV[i];
    content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucvu}</td>
                <td>${nv.tinhTLuong()}</td>
                <td>${nv.xepLoai()}</td>
                <td>
                    <button class='btn btn-danger' onclick="deleteNV('${
                      nv.taiKhoan
                    }')">Xóa</button>
                </td>
            </tr>
        `;
  }

  getElement("#tableDanhSach").innerHTML = content;
}

function luutruData() {
  var data = JSON.stringify(dsnv.arrNV);
  localStorage.setItem("DSNV", data);
}

function layData() {
  var data = localStorage.getItem("DSNV");

  if (data) {
    var parseData = JSON.parse(data);
    var arr = [];

    for (var i = 0; i < parseData.length; i++) {
      var nv = parseData[i];

      var nhanVien = new NhanVien(
        nv.taiKhoan,
        nv.tenNV,
        nv.email,
        nv.matKhau,
        nv.ngayLam,
        nv.luongCB,
        nv.chucvu,
        nv.gioLam
      );

      arr.push(nhanVien);
    }

    dsnv.arrNV = arr;

    hienthidsnv();
  }
}

// xóa nhân viên theo tài khoản (mỗi người chỉ có một tài khoản)
function deleteNV(taiKhoan) {
  dsnv.xoaNV(taiKhoan);

  hienthidsnv();

  luutruData();
}

// thêm nhân viên
getElement("#btnThemNV").onclick = function () {
  var nhanVien = layThongtinNV(false);
  if (nhanVien) {
    dsnv.themNV(nhanVien);
    // console.log(dssv.arrSV);
    hienthidsnv();
    luutruData();
  }
};

// cập nhật nhân viên theo tài khoản (mỗi người chỉ có một tài khoản)
getElement("#btnCapNhat").onclick = function () {
  var nhanVien = layThongtinNV();

  dsnv.capNhatNV(nhanVien);

  hienthidsnv();

  luutruData();
};

// tìm nhân viên theo xếp loại (lọc ra những người có cùng xếp loại và hiển thị họ ra màn hình)
getElement("#searchName").addEventListener("keyup", function () {
  var rankSearch = getElement("#searchName").value.toLowerCase();
  var arrSearch = [];

  for (var i = 0; i < dsnv.arrNV.length; i++) {
    var xepLoai = dsnv.arrNV[i].xepLoai().toLowerCase();

    if (xepLoai.indexOf(rankSearch) !== -1) {
      arrSearch.push(dsnv.arrNV[i]);
    }
  }

  console.log("arrSearch", arrSearch);
  hienthidsnv(arrSearch);
});
