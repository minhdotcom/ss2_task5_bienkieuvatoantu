let inputdiemly;
let inputdiemsinh;
let inputdiemhoa;
inputdiemly = prompt('nhap diem ly');
inputdiemsinh = prompt('nhap diem sinh');
inputdiemhoa = prompt('nhap diem hoa');
let diemly = parseInt(inputdiemly);
let diemsinh = parseInt(inputdiemsinh);
let diemhoa = parseInt(inputdiemhoa);
let tongdiem = diemly + diemsinh + diemhoa;
document.write('tong diem la '+tongdiem);
document.write('<br/>');
let diemtb = (diemly + diemsinh + diemhoa)/3;
document.write ('diem trung binh la '+diemtb);
document.write('<br/>');

let inputdoC;
inputdoC = prompt('nhap do C');
let doC = parseInt(inputdoC);
let doF = doC*9/5+32;
document.write('do F la '+doF);
document.write('<br/>');

let inputbankinh;
inputbankinh = prompt('nhap ban kinh');
let bankinh = parseInt(inputbankinh);
let chuvi = 2*math.PI*bankinh;
document.write('chu vi la '+chuvi);
document.write('<br/>');
let dientich = math.PI*bankinh*bankinh;
document.write('dien tich la '+dientich);