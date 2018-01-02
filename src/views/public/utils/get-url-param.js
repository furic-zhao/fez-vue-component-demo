export default (name, url) => {

    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r_txt = url ? url : window.location.search;
    const r = r_txt.substr(1).match(reg);

    return (r ? decodeURIComponent(r[2]) : '');
}
