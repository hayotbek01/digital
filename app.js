function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
     mo = now.getMonth(),
     dnum = now.getDate(),
     year = now.getFullYear(),
     hou = now.getHours(),
     mi = now.getMinutes(),
     sec = now.getSeconds(),
     mis = now.getMilliseconds(),
     pe = "AM";


        if(hou == 0) {
            hou = 12;
        }
        if(hou > 12) {
            hou = hou - 12;
            pe = "PM";
        }

        Number.prototype.pad = function(digits) {
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }


     var  mounths = ["January", "February", "March", "April", "May", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var ids = ["dayName", "month", "dayNum", "year", "hour", "minutes", "seconds", "period"];
     var values = [week[dname], mounths[mo], dnum.pad(2), year, hou.pad(2), mi.pad(2), sec.pad(2), pe];
     for(var i = 0; i < ids.length; i++)
     document.getElementById(ids[i]).firstChild.nodeValue = values[i]
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1)
}