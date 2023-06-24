// kiểm tra tài khoản nhân viên
function kiemTraTaiKhoan(value, selector) {
    if (value.trim().length < 4 || value.trim().length > 6) {
        getElement(selector).innerHTML = "Tài khoản phải có từ 4 đến 6 ký số"
        getElement(selector).style.display = "block";
        return false
    } else {
        getElement(selector).innerHTML = ""
        return true
    }
}

// kiểm tra tên nhân viên
function kiemTraTenNhanVien(value, selector) {
    if (value.trim().length === 0) {
        getElement(selector).innerHTML = "Vui lòng nhập tên nhân viên";
        getElement(selector).style.display = "block";
        return false;
    } else if (!isChuoiChu(value)) {
        getElement(selector).innerHTML = "Tên nhân viên phải chỉ chứa chữ cái";
        getElement(selector).style.display = "block";
        return false;
    } else if (hasNumber(value)) {
        getElement(selector).innerHTML = "Tên nhân viên không được chứa số";
        getElement(selector).style.display = "block";
        return false;
    } else {
        getElement(selector).innerHTML = "";
        return true;
    }
}

function isChuoiChu(value) {
    // Kiểm tra xem chuỗi chỉ chứa các ký tự chữ cái hay không
    // Sử dụng regex /^[a-zA-Z]+$/ để kiểm tra
    return /^[a-zA-Z]+$/.test(value);
}

function hasNumber(value) {
    // Kiểm tra xem chuỗi có chứa số hay không
    // Sử dụng regex /\d/ để kiểm tra
    return /\d/.test(value);
}

// kiểm tra email có hợp lệ ko
function kiemTraEmail(value, selector) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(value)) {
      getElement(selector).innerHTML = "Email bạn nhập không hợp lệ";
      getElement(selector).style.display = "block";
      return false;
    } else {
      getElement(selector).innerHTML = "";
      return true;
    }
  }

// kiểm tra tính hợp lệ của mật khẩu 
function kiemTraMatKhau(value, selector) {
    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,10}$/;
    if (!regex.test(value)) {
      getElement(selector).innerHTML = "Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
      getElement(selector).style.display = "block";
      return false;
    } else {
      getElement(selector).innerHTML = "";
      return true;
    }
  }

// kiểm tra ngày làm
function kiemTraNgayLam(value, selector) {
    // Kiểm tra không để trống
    if (value.trim() === '') {
      getElement(selector).innerHTML = "ngày làm không để trống"
      getElement(selector).style.display = "block";
      return false;
    }
  
    // Kiểm tra định dạng mm/dd/yyyy
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!regex.test(value)) {
      getElement(selector).innerHTML = "ngày làm không đúng định dạng";
      getElement(selector).style.display = "block";
      return false;
    }
  
    getElement(selector).innerHTML = "";
    return true;
  }

// // Kiểm tra lương cơ bản
// function kiemTraLuongCoBan(value, selector) {
//     const minLuong = 1000000;
//     const maxLuong = 20000000;
  
//     if (value.trim() === '') {
//       getElement(selector).innerHTML = "Lương không được để trống";
//       getElement(selector).style.display = "block";
//       return false;
//     }
  
//     if (value < minLuong || value > maxLuong) {
//       getElement(selector).innerHTML = "Giá trị lương không nằm trong khoảng hợp lệ từ 1 triệu đến 20 triệu vnđ";
//       getElement(selector).style.display = "block";
//       return false;
//     }
  
//     getElement(selector).innerHTML = "";
//     return true;
//   }
  
//   // Kiểm tra chức vụ
//   function kiemTraChucVu(value, selector) {
//     const chucVuHopLe = ['Sếp', 'Trưởng Phòng', 'Nhân Viên'];
  
//     if (!chucVuHopLe.includes(value)) {
//       getElement(selector).innerHTML = "Hãy chọn chức vụ của bạn";
//       getElement(selector).style.display = "block";
//       return false;
//     }
  
//     getElement(selector).innerHTML = "";
//     return true;
//   }

// // kiểm tra số giờ làm
// function kiemTraSoGioLam(value, selector, messErr) {
//     const gioLamToiThieu = 80;
//     const gioLamToiDa = 200;

//     gioLam = parseInt(value)
  
//     if (gioLam < gioLamToiThieu || gioLam > gioLamToiDa) {
//       getElement(selector).innerHTML = "giờ làm phải nằm trong khoảng 80 - 200 giờ";
//       getElement(selector).style.display = "block";
//       return false;
//     }
  
//     getElement(selector).innerHTML = "";
//     return true;
//   }