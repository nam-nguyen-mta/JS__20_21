function DSNV() {
  this.arrNV = [];
  this.arrNVfilter = [];

  this.themNV = function (nhanVien) {
    this.arrNV.push(nhanVien);
  };

  this.timNV = function (taiKhoaninput) {
    for (var i = 0; i < this.arrNV.length; i++) {
      var taiKhoan__1 = this.arrNV[i].taiKhoan;
      if (taiKhoan__1 === taiKhoaninput) {
        return i;
      }
    }
  };

  this.xoaNV = function (taiKhoan) {
    var index = this.timNV(taiKhoan);

    if (index !== -1) {
      this.arrNV.splice(index, 1);
    }
  };

  this.capNhatNV = function (nhanVien) {
    var index = this.timNV(nhanVien.taiKhoan);
    if (index !== -1) {
      this.arrNV[index] = nhanVien;
    }
  };

}