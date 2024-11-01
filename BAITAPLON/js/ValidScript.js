function checknull(txt){
    if(txt.value.length==0)
		return true;
	else
		return false;
}

function validform(f){
    if(checknull(f.username)){
        alert("Tên đăng nhập không được để trống");
            f.username.focus();
            return;
    }


    if(checknull(f.email)){
        alert("Email không được để trống");
            f.email.focus();
            return;
    }

    if(checknull(f.password)){
        alert("Mật khẩu không được để trống");
            f.password.focus();
            return;
    }

    if(f.password.value.length < 8){
        alert("Mật khẩu phải từ 8 kí tự");
            f.password.focus();
            return;
    }

    if(checknull(f.confirmpassword)){
        alert("Nhập lại mật khẩu không được để trống");
            f.confirmpassword.focus();
            return;
    }

    if(f.confirmpassword.value.length < 8){
        alert("Mật khẩu phải từ 8 kí tự");
            f.confirmpassword.focus();
            return;
    }

    if((f.password.value) != (f.confirmpassword.value)){
        alert("Mật khẩu không trùng khớp");
        return;
    }

    alert("Thành công!!");
}

/*
function validform(form) {
    // Lấy giá trị các trường trong form
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // Kiểm tra xem tên đăng nhập có trống không
    if (username === '') {
        alert('Vui lòng nhập tên đăng nhập.');
        return false;
    }

    // Kiểm tra xem email có hợp lệ không
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return false;
    }

    // Kiểm tra xem mật khẩu có trống không
    if (password === '') {
        alert('Vui lòng nhập mật khẩu.');
        return false;
    }

    // Kiểm tra xem mật khẩu xác nhận có trống không
    if (confirmPassword === '') {
        alert('Vui lòng nhập lại mật khẩu.');
        return false;
    }

    // Kiểm tra xem mật khẩu và mật khẩu xác nhận có khớp không
    if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        return false;
    }

    // Nếu tất cả các kiểm tra đều vượt qua, cho phép gửi form
    return true;
}
*/