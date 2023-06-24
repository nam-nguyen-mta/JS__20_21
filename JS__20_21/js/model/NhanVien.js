function NhanVien(
    _taiKhoan,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucvu,
    _gioLam
){
    (this.taiKhoan = _taiKhoan),
    (this.tenNV = _tenNV),
    (this.email = _email),
    (this.matKhau = _matKhau),
    (this.ngayLam = _ngayLam),
    (this.luongCB = _luongCB),
    (this.chucvu = _chucvu),
    (this.gioLam = _gioLam),
    (this.tinhTLuong = function () {
        if( this.chucvu === "Sếp") {
            return (this.luongCB * 3)
        }
        else if (this.chucvu === "Trưởng phòng"){
            return (this.luongCB * 2)
        }
        else{
            return this.luongCB
        }
    })
    (this.xepLoai = function () {
        if(this.gioLam < 160){
            return "trung bình"
        }
        else if(this.gioLam >= 160 && this.gioLam < 176){
            return "khá"
        }
        else if(this.gioLam >= 176 && this.gioLam < 192){
            return "giỏi"
        }
        else if(this.gioLam > 192){
            return "xuất sắc"
        }
    })

}